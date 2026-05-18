# OEE Performance Dashboard - Bangkok Cable Template Update

## ปรับปรุงตามคำขอ
- เพิ่มปุ่ม Reset Machines สำหรับรีเซ็ตการเลือกเครื่องจักร
- เพิ่มปุ่มแสดงผลปี 2024, 2025, 2026
- ลบ Logo ออกจาก Dashboard และ Login
- ปรับสไตล์เป็น Bangkok Cable Template ตาม `Internal_BCC PowerPoint Template 2026.pptx` โดยใช้โทน Dark Blue / Neon Cable / Red Accent
- ลบข้อความ `Bangkok Cable CI Tone`
- ปรับข้อความและ UI ให้ใหญ่ขึ้น
- รองรับ Import `.csv`, `.xlsx`, `.xls`

## Login
- User: `BCC`
- Password: `BCC@2026`

## Cloudflare Pages Settings
- Framework preset: None
- Build command: เว้นว่าง
- Deploy command: เว้นว่าง
- Build output directory: `/`
- Root directory: `/`

## หมายเหตุ Excel Import
Excel import ใช้ SheetJS CDN หาก network block CDN ให้ใช้ CSV หรือเพิ่ม SheetJS local ได้
