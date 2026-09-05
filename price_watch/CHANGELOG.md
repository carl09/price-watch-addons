## 0.1.41

- Improve Shopify product URL handling and alternate contract selection across supported retailers.
- Enhance watch creation, preview validation, image handling, and WebUI controls with expanded regression coverage.

## 0.1.40

- Add watch preview and from-URL creation flows with API validation, idempotency handling, and expanded WebUI regression coverage.
- Replace the obsolete OpenAPI route inventory with the current `/v1` API contract references.

## 0.1.39

- Harden embedded WebUI response decoding and pagination handling, with expanded client, routing, and App image packaging regression coverage.

## 0.1.38

- Improve shopping list mutation idempotency handling, including durable coordination, legacy-response compatibility, and migration/test coverage.
- Document implementation status and validation details for the release.

## 0.1.37

- Add a service-owned shopping list with persistent storage, CRUD API endpoints, and an embedded WebUI.

## 0.1.35

- Add regression coverage for image-retry availability based on source and capability-token inputs.

## 0.1.30 (candidate — not released)

- Add English Home Assistant App option names and descriptions for all
  configuration fields, including visibly non-operational placeholders for
  target-specific ingress trust values.
- Keep ingress trust options unset by default; no concrete CIDR or origin is
  supplied by metadata or translations.

## 0.1.29 (candidate — not released)

- Add explicit target-specific `ingress_cidrs` and `canonical_origin` App
  options for the private runtime's fail-closed ingress and CSRF trust
  configuration. No CIDR or origin defaults are supplied.
- Retain Supervisor ingress on fixed port `8787`; no unverified `webui` field
  or launch URL is declared.
- No immutable image digest, publication, deployment, or production-readiness
  claim is included; target ingress, rewrite, CSRF, direct-port, and restart
  behavior remain subject to disposable-installation proof.

## 0.1.26 (candidate — not released)

- Prepare schema-shaped Home Assistant Supervisor ingress metadata for the
  embedded WebUI on fixed port `8787`; the unverified `webui` launch URL field
  is intentionally omitted to avoid bypassing ingress.
- Remove the configurable port option so `ingress_port` and the retained legacy
  bearer-authenticated `/v1` port mapping cannot diverge.
- Retain port `8787` and the existing API-token configuration for legacy
  bearer-authenticated `/v1` integration/card clients.
- No immutable image digest, publication, deployment, or production-readiness
  claim is included; ingress source, rewrite, prefix, CSRF, direct-port, and
  restart behavior remain subject to disposable-installation proof.

## 0.1.25

- Add Home Assistant actions for individual watch checks and safe product-image
  retries, with resilient image-cache handling.
- Existing App configuration remains unchanged.

## 0.1.24

- Harden Home Assistant-facing image API validation and response handling for safer,
  more reliable frontend image updates.
- Existing App configuration remains unchanged.

## 0.1.23

- Complete the Home Assistant-facing service contract for durable watch state,
  retailer operations, and deterministic current-status responses.
- Existing App configuration remains unchanged; Home Assistant integration and
  dashboard updates are released separately.

## 0.1.22

- Fix deterministic retailer-onboarding replay validation so every declared fixture
  expectation must pass before a static handoff can be marked ready.
- Existing Home Assistant configuration and monitoring behaviour remain unchanged.

## 0.1.21

- Add authenticated, read-only price-movement reporting for observed price drops
  and rises over rolling day and week windows.
- Keep existing Home Assistant configuration, checks, target events, and
  notifications unchanged.

## 0.1.20

- Add the authenticated retailer operational API for bounded retailer state,
  diagnostics, and recovery operations.
- Keep Home Assistant configuration and existing monitoring behaviour unchanged.

## 0.1.19

- Register deterministic Shopify Product JSON adapters for the approved Elite
  Eleven and Alo Yoga product URLs. Checks use exact host, path, and
  variant-contract validation with bounded HTTPS acquisition; no browser, LLM,
  operator-proof endpoint, or new Home Assistant controls are added.
- Existing Lorna Jane monitoring and its disabled-by-default shadow reporting
  remain unchanged.

## 0.1.18

- Remove the obsolete Elite Eleven shadow-proof App option, schema, and
  operator documentation after the private source moved Elite Eleven to a
  contract-only implementation. Lorna Jane shadow reporting remains available
  and disabled by default.

## 0.1.17

- Add safe structured acquisition exception diagnostics only. These bounded,
  shadow-only logs do not change monitoring behaviour, watches, observations,
  events, notifications, scheduling, retailer registration, or Home Assistant
  entities; legacy monitoring remains authoritative.

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
