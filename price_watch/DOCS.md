# Price Watch Home Assistant App

This App runs the Price Watch service inside Home Assistant and stores its SQLite database under the App's persistent `/data` directory.

## Configuration

- **API token** — required. Create a long, random secret. The Home Assistant integration uses this same value to authenticate to the service.
- **Port** — defaults to `8787`. Change it only if the port is already in use on your Home Assistant host.

The token is not displayed after you save the App configuration. Keep a copy in your password manager.

## Connect the integration

1. Start the App and wait until its log shows that the service is listening.
2. In **Settings → Devices & services → Price Watch**, use the Home Assistant host/IP and the configured port, for example `http://homeassistant.local:8787`.
3. Enter the same API token configured for this App.

The integration validates the authenticated `/v1/health` endpoint during setup.

## Data and backup

Price Watch data is stored at `/data/price-watch.sqlite` inside the App's persistent storage. Include Home Assistant App data in your regular Home Assistant backup routine.

Do not delete the App data directory during an upgrade unless you deliberately want to erase the watchlist and price history.
