# OEE Performance Dashboard - KV Background Fixed

## แก้ไขสำคัญ
- พื้นหลังเมนูบนสุดเปลี่ยนมาใช้ `<img>` แบบ absolute แทน CSS background เพื่อแก้ปัญหารูปไม่แสดงจาก path/cache
- เปลี่ยนชื่อไฟล์รูปเป็น `assets/kv.jpg` เพื่อลดปัญหาเว้นวรรคในชื่อไฟล์
- ใส่ cache busting `?v=20260518` ให้ CSS/JS/Image
- `_headers` ตั้ง `assets/*` เป็น `Cache-Control: no-cache`
- OEE Trend แสดงตัวเลขเปอร์เซ็นต์ด้านบนแท่งกราฟ

## Login
- User: `BCC`
- Password: `BCC@2026`

## Cloudflare Pages Settings
- Framework preset: None
- Build command: เว้นว่าง
- Deploy command: เว้นว่าง
- Build output directory: `/`
- Root directory: `/`
