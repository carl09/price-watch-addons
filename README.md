# Price Watch Apps for Home Assistant

Home Assistant App (formerly add-on) repository for the self-hosted **Price Watch** service.

> [!WARNING]
> Early release: this App requires the matching public GitHub Container Registry image. Install only after a published release is available.

## Install

1. In Home Assistant, open **Settings → Apps**.
2. Select the **App Store**, then the three-dot menu in the upper right.
3. Select **Repositories** and add:

   ```text
   https://github.com/carl09/price-watch-addons
   ```

4. Refresh the App Store, select **Price Watch**, configure a long random API token, and start it.
5. Add the [Price Watch HACS integration](https://github.com/carl09/price-watch-integration), then configure it with the same API token and the Home Assistant host/IP on port `8787`.

## Public package, private runtime

This public repository contains only Home Assistant App metadata and safe
user-facing documentation. It does not contain the Price Watch service source,
retailer adapters or fixtures, test data, your watch data, API token, or private
deployment configuration.

The App runs the released service image locally in Home Assistant and stores its
data in Home Assistant-managed App storage. Installing this repository does not
make your service or watchlist public. Install the separate public HACS package
from [`carl09/price-watch-integration`](https://github.com/carl09/price-watch-integration)
to expose the App's state and actions in Home Assistant.

## Privacy and support

The released App image runs locally and stores your watch data in Home Assistant
App storage. Use the [issue tracker](https://github.com/carl09/price-watch-addons/issues) for public bugs and feature requests. Never include an API token, private service URL, product URL, or watch data in an issue.

## Licence

MIT. See [LICENSE](LICENSE).
