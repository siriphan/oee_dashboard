# OEE Performance Dashboard - BCC Final

## สิ่งที่ปรับตามคำขอ
- ลบข้อความหัวเดิมทั้งหมด
- ลบ Created By
- ลบ Cloudflare Fix footnote
- Header บนสุดใช้พื้นหลัง `KV New Slogan LinkedIn.jpg`
- ใส่ Logo BCC ซ้ายบน
- เมนูบนสุดแสดง `OEE Performance Dashboard` ตัวหนา ตรงกลาง สีขาว
- Font หลัก: `TH Sarabun New`
- Import ได้ทั้ง `.csv`, `.xlsx`, `.xls`
- ปรับกราฟแท่งเป็นสี Gradient ให้สวยขึ้น
- คง Login: User `BCC`, Password `BCC@2026`
- คง Machine Checkbox Multi-select

## Cloudflare Pages Settings
- Framework preset: None
- Build command: เว้นว่าง
- Deploy command: เว้นว่าง
- Build output directory: `/`
- Root directory: `/`

## หมายเหตุ Excel Import
Excel import ใช้ SheetJS CDN จากหน้า browser หาก network block CDN ให้ใช้ CSV หรือดาวน์โหลด SheetJS มาใส่ local เพิ่มได้
