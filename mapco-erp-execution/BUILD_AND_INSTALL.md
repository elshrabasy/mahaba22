# Mahabat Alfan ERP - Build Guide

## تشغيل محلي للتجربة
```bash
npm install
npm run dev
```

وفي نافذة ثانية:
```bash
npm run electron:dev
```

## إنشاء EXE على GitHub Actions
1. ارفع المشروع على GitHub كما هو داخل مجلد `mapco-erp-execution`.
2. افتح Actions.
3. شغّل Workflow باسم `Build Mahabat Alfan ERP EXE`.
4. حمّل Artifact باسم `Mahabat-Alfan-ERP-EXE`.

## بيانات الدخول التجريبية
- admin / 123456
- employee / 123456

## ملاحظات مهمة
- تم ضبط Branding باسم Mahabat Alfan ERP.
- شاشة بيضاء بعد البناء تم علاجها عبر `base: './'` في Vite و `app.getAppPath()` في Electron.
- قاعدة البيانات Realm محفوظة في userData الخاص بالبرنامج.
- النسخ الاحتياطي والاستيراد موجودان في صفحة الإعدادات.
