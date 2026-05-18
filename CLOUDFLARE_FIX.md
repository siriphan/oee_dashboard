# Fix: Missing entry-point to Worker script or assets directory

Error เกิดจาก Cloudflare Pages กำลังรัน `npx wrangler deploy` ซึ่งเป็นคำสั่งของ standalone Worker ไม่ใช่ Static Pages

ให้ตั้งค่า Cloudflare Pages ดังนี้:

- Framework preset: None
- Build command: blank
- Deploy command: blank
- Build output directory: /
- Root directory: /

จากนั้น Redeploy
