# Price Watch Home Assistant App

This App runs the Price Watch service inside Home Assistant and stores its SQLite database under the App's persistent `/data` directory.

## Configuration

- **API token** — required. Create a long, random secret. The Home Assistant integration uses this same value to authenticate to the service.
- **Port** — defaults to `8787`. Change it only if the port is already in use on your Home Assistant host.
- **Log level** — defaults to `info`. Use `debug` temporarily while diagnosing a connection or check failure; return it to `info` afterward.
- **Lorna Jane contract shadow reporting** — disabled by default. Enable it only for a controlled evidence-gathering period. It compares the existing Lorna Jane result with a candidate contract and writes only safe match/mismatch outcome codes and totals to App logs; legacy monitoring remains authoritative. Disable it again after the review.
- **Elite Eleven shadow proof** — disabled by default and not general Elite
  Eleven monitoring. An explicitly approved one-shot proof remains
  shadow-only and can return bounded non-success HTTP diagnostics; legacy
  monitoring remains authoritative. Disable it again after review and restart
  the App through the normal operator process.

The token is not displayed after you save the App configuration. Keep a copy in your password manager.

## Connect the integration

1. Start the App and wait until its log shows that the service is listening.
2. In **Settings → Devices & services → Price Watch**, use the Home Assistant host/IP and the configured port, for example `http://homeassistant.local:8787`.
3. Enter the same API token configured for this App.

The integration validates the authenticated `/v1/health` endpoint during setup.

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

## Logs

The App writes readable, timestamped text logs to the Home Assistant App log
viewer. Log levels use standard ANSI colours when the viewer supports them:
info is green, warnings are yellow, and errors are red. Authorization headers
remain redacted.

For an external log collector that requires structured output, set
`PRICE_WATCH_LOG_FORMAT=json` in that deployment environment. The Home
Assistant App defaults to readable coloured text.

When enabled for an approved proof, Elite Eleven diagnostics remain bounded
and shadow-only. The option is disabled by default; disable it again after
review and restart the App through the normal operator process.

## Data and backup

Price Watch data is stored at `/data/price-watch.sqlite` inside the App's persistent storage. Include Home Assistant App data in your regular Home Assistant backup routine.

Do not delete the App data directory during an upgrade unless you deliberately want to erase the watchlist and price history.
