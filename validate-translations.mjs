/* global console */

import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const configPath = join(root, "price_watch/config.yaml");
const translationPath = join(root, "price_watch/translations/en.yaml");

function optionNames(config) {
  const optionsStart = config.indexOf("options:\n");
  const schemaStart = config.indexOf("schema:\n", optionsStart);
  if (optionsStart < 0 || schemaStart < 0)
    throw new Error("config.yaml must contain options and schema sections.");
  return new Set(
    config
      .slice(optionsStart + "options:\n".length, schemaStart)
      .split("\n")
      .flatMap((line) => {
        const match = /^ {2}([A-Za-z0-9_]+):/.exec(line);
        return match ? [match[1]] : [];
      }),
  );
}

function translationEntries(text) {
  if (!/^configuration:\s*$/m.test(text))
    throw new Error("translations/en.yaml must contain configuration.");
  const entries = new Map();
  const lines = text.split("\n");
  let option;
  for (const line of lines) {
    if (line === "configuration:") continue;
    const optionMatch = /^ {2}([A-Za-z0-9_]+):\s*$/.exec(line);
    if (optionMatch) {
      option = optionMatch[1];
      entries.set(option, {});
      continue;
    }
    const fieldMatch = /^ {4}(name|description):\s*(.*)$/.exec(line);
    if (fieldMatch && option) {
      if (!fieldMatch[2].trim())
        throw new Error(`${option}.${fieldMatch[1]} must not be empty.`);
      entries.get(option)[fieldMatch[1]] = fieldMatch[2].trim();
      continue;
    }
    if (line.trim() && !/^ {4}(name|description):/.test(line))
      throw new Error(`Unexpected translations/en.yaml line: ${line}`);
  }
  return entries;
}

export async function validateTranslations() {
  const [config, translations] = await Promise.all([
    readFile(configPath, "utf8"),
    readFile(translationPath, "utf8"),
  ]);
  const options = optionNames(config);
  const entries = translationEntries(translations);
  if (entries.size !== options.size)
    throw new Error("English translations must cover exactly every App option.");
  for (const option of options) {
    const entry = entries.get(option);
    if (!entry || !entry.name || !entry.description)
      throw new Error(`English translation is incomplete for ${option}.`);
  }
  if (![...entries.values()].every((entry) =>
    Object.keys(entry).length === 2
  ))
    throw new Error("English translations may contain only name and description.");

  const concreteCidr = /\b(?:\d{1,3}\.){3}\d{1,3}\/\d{1,3}\b/;
  const concreteOrigin = /https?:\/\/(?!<)[^\s<>'"]+/i;
  for (const [option, entry] of entries) {
    const text = `${entry.name} ${entry.description}`;
    if (concreteCidr.test(text) || concreteOrigin.test(text))
      throw new Error(`Translation for ${option} contains a concrete trust value.`);
  }
  return { options: options.size };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await validateTranslations();
  console.log(`English App translations are valid for ${result.options} options.`);
}
