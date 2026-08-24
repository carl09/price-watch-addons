## 0.1.16

- Elite Eleven’s default-disabled, shadow-only one-shot diagnostic proof now returns bounded non-success HTTP diagnostics. Legacy monitoring remains authoritative.

## 0.1.15

- Preserve bounded Elite Eleven shadow-proof acquisition diagnostics. The one-shot proof remains disabled by default and shadow-only; legacy monitoring remains authoritative.

## 0.1.14

- Add a default-disabled, authenticated operator-only Elite Eleven one-shot
  shadow-proof endpoint for a controlled legacy-versus-contract comparison.
- The proof is non-persistent and diagnostic-only: it creates no watch,
  observation, event, notification, image cache, scheduler entry, retailer
  registration, or Home Assistant entity; legacy results remain authoritative.

## 0.1.13

- Add the opt-in Elite Eleven shadow-reporting App option, disabled by default.
- Elite Eleven shadow reporting is diagnostic-only; legacy monitoring remains authoritative.

## 0.1.12

- Add safe per-check `check_run_id` shadow-log correlation for diagnostics.

## 0.1.11

- Correct the Home Assistant schema type for the opt-in Lorna Jane shadow-reporting option so repository refresh and App updates validate successfully.

## 0.1.10

- Add an opt-in Lorna Jane contract shadow-reporting App option, disabled by default.
- Shadow reporting logs only safe match/mismatch outcome codes and in-memory totals; legacy monitoring remains authoritative.

## 0.1.9

- Fix monitor-health failure counting so Home Assistant can show a failed check
  and then recover after a later successful check.

## 0.1.8

- Add a SQLite-native operator backup command that takes a consistent snapshot.
- Add isolated restore verification for watches, latest valid observations, and
  event deduplication evidence.
- Reject unsafe or malformed backup/restore command arguments before database
  activity. This release does not add automatic backup scheduling or a
  production restore command.

## 0.1.7

- Preserve the integration request ID in App lifecycle logs for correlated diagnostics.

## 0.1.6

- Preserve valid Home Assistant integration request IDs in App lifecycle logs,
  making cross-component diagnostics directly traceable.

## 0.1.5

- Add safe, configurable App log levels for temporary diagnostics.
- Publish the observability service image with request-ID correlation.

## 0.1.4

- Fix App image metadata so Home Assistant Supervisor resolves the versioned image correctly.

## 0.1.3

- Add local API-backed cached product images required by Price Watch integration 0.0.7.
- Add clearer per-watch Home Assistant Device labels.

## 0.1.2

- Render Home Assistant App logs as human-readable text with ANSI log-level
  colours instead of default JSON output.
- Retain JSON logging as an explicit `PRICE_WATCH_LOG_FORMAT=json` opt-in for
  external log collectors and diagnostics.

# Changelog

## 0.1.1

- Emit structured startup, request, and error logs to Home Assistant App logs.
- Redact HTTP Authorization headers from logs.

## 0.1.0

- First Home Assistant App package for the Price Watch service.
