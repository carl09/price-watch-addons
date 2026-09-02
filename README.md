# Price Watch Apps for Home Assistant

Home Assistant App (formerly add-on) repository for the self-hosted **Price Watch** service.

> [!WARNING]
> **Candidate metadata only:** `0.1.26` is an unreleased ingress/WebUI
> preparation candidate. Do not install it until the matching private service
> artifact is published, its immutable image digest is recorded, and the
> disposable Home Assistant ingress proof passes. This repository does not
> publish or imply release readiness.

## Install

1. In Home Assistant, open **Settings → Apps**.
2. Select the **App Store**, then the three-dot menu in the upper right.
3. Select **Repositories** and add:

   ```text
   https://github.com/carl09/price-watch-addons
   ```

4. Refresh the App Store, select **Price Watch**, configure a long random API token, and start it. The `0.1.26` metadata in this checkout is a candidate and is not an installable release.
5. Add the [Price Watch HACS integration](https://github.com/carl09/price-watch-integration), then configure it with the same API token and the Home Assistant host/IP on port `8787` for the retained legacy `/v1` API contract. Existing integrations do not use the embedded WebUI ingress session.

## Candidate ingress/WebUI metadata

The candidate App metadata enables the Home Assistant Supervisor ingress path
for the embedded WebUI and declares `8787` as the ingress port. No `webui` URL
is declared: the official interaction between that field and Supervisor
ingress has not been verified, so launch-link semantics are deliberately
deferred rather than risking a URL that bypasses ingress. The WebUI is intended
to be opened from the Home Assistant App page through ingress; direct App-port
static/UI access is not a supported production path.

Port `8787` is fixed in this candidate: the configurable port option has been
removed so it cannot diverge from `ingress_port` or the retained legacy API
mapping. The declared port remains available for legacy bearer-authenticated
`/v1` clients, so this metadata does not remove or migrate existing
integration/card consumers.

This handoff is schema-shaped metadata, not runtime evidence. The actual
Supervisor source CIDRs, rewrite, `X-Ingress-Path`, canonical external origin,
CSRF behavior, direct-port denial, and restart/session behavior must be proved
on a disposable supported Home Assistant installation. No image digest is
claimed here.

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
