# Farm-Guard Deployment Notes

**Server:** Ubuntu 24.04 VPS — 5.78.239.113 (4 vCPU / 8 GB RAM / 160 GB Disk)
**Domain:** farm-guard.org
**Stack:** Next.js 16.2.4 · pnpm · PM2 · Mailcow Nginx · Supabase · Resend · Stripe

---

## What's Running on the Server

| Service | Details |
|---|---|
| Next.js app | PM2 fork mode, port 3000, auto-restarts on crash and reboot |
| Nginx (reverse proxy) | Mailcow's built-in Nginx — proxies farm-guard.org → localhost:3000 |
| Mailcow | Email stack (Docker Compose) — handles mail.bloomingoodfarm.com |
| SSL | Let's Encrypt via Mailcow ACME container — covers farm-guard.org + www |
| Firewall | UFW — ports 22, 80, 443 open publicly; port 3000 open to Docker network only |

---

## Deployment Steps Taken

### 1. Removed Vercel Analytics
- Removed `@vercel/analytics` import and `<Analytics />` component from `app/layout.tsx`
- Removed `"@vercel/analytics"` from `package.json`

### 2. Cloned and Built on VPS
```bash
git clone https://github.com/servicer01/Farm-Guard.git /var/www/farm-guard
cd /var/www/farm-guard
pnpm approve-builds    # required for sharp
pnpm install
pnpm build
```

### 3. Created .env.local on Server
`/var/www/farm-guard/.env.local` contains:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
RESEND_API_KEY=
```

### 4. Resolved Port Conflict with Mailcow
- Mailcow Docker stack owns ports 80 and 443
- Stopped and disabled system Nginx to prevent conflict:
```bash
sudo systemctl stop nginx
sudo systemctl disable nginx
```

### 5. Configured Mailcow Nginx to Proxy farm-guard.org
Created `/opt/mailcow-dockerized/data/conf/nginx/farm-guard.conf`:
```nginx
server {
    listen 80;
    listen 443 ssl;
    server_name farm-guard.org www.farm-guard.org;
    ssl_certificate /etc/ssl/mail/cert.pem;
    ssl_certificate_key /etc/ssl/mail/key.pem;
    location / {
        proxy_pass http://172.22.1.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```
Note: `172.22.1.1` is the Docker bridge gateway — the host IP as seen from inside Mailcow containers.

### 6. Added farm-guard.org to Mailcow SSL Cert
Edited `/opt/mailcow-dockerized/mailcow.conf`:
```
ADDITIONAL_SAN=farm-guard.org,www.farm-guard.org
```
Then forced cert renewal:
```bash
cd /opt/mailcow-dockerized
sudo docker compose up -d
```
ACME container automatically issued and deployed the cert covering both domains.

### 7. Fixed UFW Firewall for Docker Networking
Port 3000 was blocked — Docker containers couldn't reach the host:
```bash
sudo ufw allow from 172.22.0.0/16 to any port 3000
sudo ufw reload
```

### 8. Fixed PM2 Startup (script path)
PM2 was failing because `node_modules/.bin/next` is a bash wrapper, not a Node.js file.
Fixed `ecosystem.config.js`:
```js
script: 'node_modules/next/dist/bin/next',  // actual JS entry point
args: 'start',
instances: 1,
exec_mode: 'fork',
```

### 9. Started PM2 and Enabled Auto-Start on Reboot
```bash
pm2 start /var/www/farm-guard/ecosystem.config.js
pm2 save
pm2 startup
# copy and run the sudo env PATH=... command printed by pm2 startup
```

### 10. Fixed Admin Notification Email
Updated `app/api/waitlist/route.ts`:
```js
const ADMIN_EMAIL = "info@farm-guard.org"  // was bloomingoodfarm@gmail.com
```

---

## Manual Deploy Process

When pushing a code update, SSH into the server and run:

```bash
cd /var/www/farm-guard
git pull origin main
pnpm build
pm2 restart farm-guard
```

---

## Useful Server Commands

```bash
pm2 status                          # check app status
pm2 logs farm-guard --lines 50      # view recent logs
pm2 restart farm-guard              # restart app

sudo docker ps                      # check Mailcow containers
cd /opt/mailcow-dockerized
sudo docker compose down && sudo docker compose up -d   # full Mailcow restart

sudo ufw status                     # check firewall rules
```

---

## DNS Records (farm-guard.org)

| Type | Name | Value |
|---|---|---|
| A | @ | 5.78.239.113 |
| A | www | 5.78.239.113 |

---

## Key File Paths on Server

| File | Purpose |
|---|---|
| `/var/www/farm-guard/` | App root |
| `/var/www/farm-guard/.env.local` | Environment variables |
| `/var/www/farm-guard/ecosystem.config.js` | PM2 config |
| `/opt/mailcow-dockerized/data/conf/nginx/farm-guard.conf` | Nginx proxy config |
| `/opt/mailcow-dockerized/data/assets/ssl/cert.pem` | SSL certificate |
| `/opt/mailcow-dockerized/mailcow.conf` | Mailcow config (ADDITIONAL_SAN) |
