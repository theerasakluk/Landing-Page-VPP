# Deploy V Power Plus Catalog to VPS

The catalog is designed to run beside the existing employee Web App without
changing the Web App container or its Traefik configuration.

## Target layout

| Service | URL | Container | VPS path |
| --- | --- | --- | --- |
| Product Catalog | `https://vpowerplus.tech` | `vpp-catalog` | `/opt/vpp-catalog` |
| Employee Web App | `https://app.vpowerplus.tech` | existing deployment | `/opt/delivery-note-search` |

The catalog is connected to the existing `n8n_default` Traefik network, but it
has its own router and container. It does not publish a host port or share the
employee app's Compose project.

## First deployment

From Windows PowerShell:

```powershell
cd "C:\Users\Theerasak\Landing Page"
powershell -ExecutionPolicy Bypass -File scripts\deploy-vps.ps1
```

The script uploads the catalog source to a temporary VPS path, extracts it
only into `/opt/vpp-catalog`, and starts only the `vpp-catalog` Docker Compose
service.

## Verify on the VPS

```bash
cd /opt/vpp-catalog
docker compose ps
docker compose logs --tail=100 catalog
curl -I -H "Host: vpowerplus.tech" http://127.0.0.1
```

## Update later

Run the same PowerShell deployment script again. It rebuilds and replaces only
the `vpp-catalog` container.

## DNS and HTTPS

Before deployment, add an `A` record for `app.vpowerplus.tech` that points to
the same VPS IP as `vpowerplus.tech`. Traefik will request and serve HTTPS
certificates for the catalog root domain and employee-app subdomain.
