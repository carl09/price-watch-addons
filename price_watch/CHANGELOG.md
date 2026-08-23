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
