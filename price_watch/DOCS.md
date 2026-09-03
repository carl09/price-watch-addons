# Price Watch Home Assistant App

> **Candidate metadata notice:** App metadata version `0.1.29` is an unreleased
> ingress/WebUI preparation candidate. This document is not an installation or
> production-readiness approval. Wait for the matching immutable image and
> completed ingress evidence.

This App runs the Price Watch service inside Home Assistant and stores its SQLite database under the App's persistent `/data` directory. The candidate metadata enables Supervisor ingress for the embedded WebUI on fixed port `8787` while retaining that port for legacy API clients. No `webui` URL is declared because the official field/ingress launch semantics have not been verified; launch-link behavior is deferred rather than risking an ingress bypass.

## Configuration

- **Supervisor ingress/WebUI** — the App declares ingress on port `8787`. Open
  the embedded WebUI from the Home Assistant App page; direct App-port static/UI
  access is not a supported production path. The WebUI uses the Supervisor/App
  ingress session and does not request, store, or expose the API token.
- **API token** — required for retained legacy bearer-authenticated `/v1`
  clients. Create a long, random secret. The Home Assistant integration uses
  this same value to authenticate to the service. Existing integration/card
  clients continue using the App host/IP and fixed port `8787`; this candidate
  does not remove that compatibility path.
- **Port** — fixed at `8787` in this candidate so the legacy API mapping cannot
  diverge from `ingress_port`. The configurable port option is intentionally
  unavailable.
- **Log level** — defaults to `info`. Use `debug` temporarily while diagnosing a connection or check failure; return it to `info` afterward.
- **Lorna Jane contract shadow reporting** — disabled by default. Enable it only for a controlled evidence-gathering period. It compares the existing Lorna Jane result with a candidate contract and writes only safe match/mismatch outcome codes and totals to App logs; legacy monitoring remains authoritative. Disable it again after the review.
- **Ingress CIDRs** — optional, target-specific comma-separated CIDR allowlist
  for the immediate Home Assistant ingress proxy peer. Do not guess this value;
  verify it on the target Supervisor/App network.
- **Canonical origin** — optional, target-specific HTTP(S) origin trusted for
  CSRF protection. Configure it together with `ingress_cidrs`; the private
  runtime rejects a one-sided configuration and supplies no guessed default.

The token is not displayed after you save the App configuration. Keep a copy in your password manager.

## Connect the integration

1. Start the App and wait until its log shows that the service is listening.
2. For retained legacy API clients, use the Home Assistant host/IP and fixed
   port `8787`, for example `http://homeassistant.local:8787`.
3. Enter the same API token configured for this App. The embedded WebUI is not
   documented as a direct host/port URL; use Supervisor ingress only after the
   runtime ingress proof and official launch semantics are verified.

For a local Home Assistant API endpoint, `http://homeassistant.local:8787` is
allowed. The approved DNS names for HTTP are `homeassistant.local`, `localhost`, and
the test fixture name `price-watch.test`; IP-literal HTTP destinations remain
rejected. Hostnames are normalized case-insensitively and with a trailing dot removed;
arbitrary `.local` names remain rejected. Public/non-local HTTP URLs remain
rejected; production/non-local
service deployments must use HTTPS, and retailer product/action URLs are always
HTTPS.

The integration validates the authenticated `/v1/health` endpoint during setup.

The candidate metadata does not claim that ingress source CIDRs, path rewrite,
`X-Ingress-Path`, canonical origin/CSRF handling, direct-port UI denial, or
Supervisor/App restart behavior have been verified. Those facts require a
separate disposable Home Assistant ingress proof before any release. The
options remain unset until the target installation supplies its measured CIDR
and trusted CSRF origin.

## Schedule a daily check

After the integration is connected, create a Home Assistant automation to call
`price_watch.check_all`. For a daily 8:00am check:

```yaml
id: price_watch_daily_check
alias: Price Watch — daily check
description: Runs all Price Watch checks every day at 8:00am.
mode: single
triggers:
  - trigger: time
    at: "08:00:00"
conditions: []
actions:
  - action: price_watch.check_all
```

The automation uses the integration's stored config-entry token; do not put an
API token in automation YAML.

The integration also exposes per-watch `Enabled` switches, a `Target price
control` NumberEntity, `price_watch.set_target_price`, and the local-only
`price_watch.reload_image` action. Target-price and enablement changes update
configuration only; they do not run checks or create observations, events, or
alerts. Image reload invalidates only the selected watch's HA image cache.

## Logs

The App writes readable, timestamped text logs to the Home Assistant App log
viewer. Log levels use standard ANSI colours when the viewer supports them:
info is green, warnings are yellow, and errors are red. Authorization headers
remain redacted.

For an external log collector that requires structured output, set
`PRICE_WATCH_LOG_FORMAT=json` in that deployment environment. The Home
Assistant App defaults to readable coloured text.

## Data and backup

Price Watch data is stored at `/data/price-watch.sqlite` inside the App's persistent storage. Include Home Assistant App data in your regular Home Assistant backup routine.

Do not delete the App data directory during an upgrade unless you deliberately want to erase the watchlist and price history.
