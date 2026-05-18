# Executive OEE Performance Dashboard - Cloudflare Pages Static Fix

สร้างใหม่สำหรับ Cloudflare Pages แบบ Static โดยไม่มี `package.json`, ไม่มี `wrangler.toml`, และไม่มี standalone `worker.js` เพื่อป้องกัน error `npx wrangler deploy`.

## Login
- User: `BCC`
- Password: `BCC@2026`

## Features
- Import CSV รายเดือน: Replace / Append
- Machine checkbox multi-select
- IndexedDB storage
- Dashboard ใช้ข้อมูลเริ่มต้น `data/01_2024.csv`
- Optional Cloudflare Pages Function: `functions/api/health.js`

## Correct Cloudflare Pages Settings
- Framework preset: None
- Build command: เว้นว่าง
- Deploy command: เว้นว่าง
- Build output directory: `/`
- Root directory: `/`

ห้ามใช้ `npx wrangler deploy` สำหรับโปรเจกต์ Pages นี้
