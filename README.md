##💬 Chat Pro

یک سیستم چت آنلاین مدرن و Real-Time با استفاده از React، Node.js، MongoDB و Socket.IO

---

🚀 معرفی پروژه

Chat Pro یک پلتفرم گفتگوی آنلاین است که امکان ارتباط لحظه‌ای بین کاربران را فراهم می‌کند. این پروژه با معماری Full-Stack طراحی شده و شامل احراز هویت کاربران، مدیریت اتاق‌های گفتگو، ارسال فایل و تصاویر، نمایش کاربران آنلاین و ذخیره‌سازی پیام‌ها در پایگاه داده است.

---

✨ امکانات

👤 مدیریت کاربران

- ثبت‌نام کاربران
- ورود و خروج امن
- احراز هویت با JWT
- مدیریت پروفایل

💬 سیستم گفتگو

- ارسال پیام به صورت لحظه‌ای (Real-Time)
- ذخیره تاریخچه پیام‌ها
- پیام خصوصی بین کاربران
- نمایش وضعیت تایپ (Typing Indicator)

🏠 اتاق‌های گفتگو

- ایجاد اتاق جدید
- عضویت در اتاق‌ها
- گفتگوهای گروهی
- مدیریت اعضای اتاق

📎 ارسال فایل

- ارسال تصاویر
- ارسال فایل‌های مختلف
- نمایش پیش‌نمایش تصاویر
- دانلود فایل‌های ارسال شده

🟢 کاربران آنلاین

- نمایش کاربران متصل
- بروزرسانی وضعیت آنلاین به صورت لحظه‌ای

---

🛠 تکنولوژی‌های استفاده شده

```
Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT
- Bcrypt
- Multer

Frontend

- React
- React Router
- Axios
- Socket.IO Client
- Tailwind CSS
```

---

📁 ساختار پروژه

```
project-root/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

⚙️ نصب و راه‌اندازی

1. کلون پروژه

```
git clone https://github.com/khodemadi/chat-pro.git
cd chat-pro
```

2. نصب وابستگی‌های Backend

```
cd backend
npm install
```

3. نصب وابستگی‌های Frontend
```
cd ../frontend
npm install
```
4. تنظیم فایل محیطی

در پوشه Backend فایل ".env" ایجاد کنید:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatpro
JWT_SECRET=your-secret-key
```
5. اجرای سرور Backend
```
npm run dev
```
6. اجرای Frontend
```
npm run dev
```
---

🔐 امنیت

- رمزنگاری رمزهای عبور با Bcrypt
- احراز هویت مبتنی بر JWT
- اعتبارسنجی ورودی‌ها
- محافظت از مسیرهای خصوصی

---

📈 قابلیت‌های آینده

- تماس صوتی
- تماس تصویری
- اعلان‌های Push
- ارسال پیام صوتی
- پشتیبانی از چند زبان
- حالت تاریک (Dark Mode)
- رمزنگاری End-to-End

---

🤝 مشارکت

از مشارکت شما در توسعه پروژه استقبال می‌شود. برای ارسال پیشنهاد یا گزارش باگ، لطفاً Issue یا Pull Request ایجاد کنید.

---

👨‍💻 توسعه‌دهنده

ساخته شده با ❤️ برای یادگیری و توسعه نرم‌افزارهای Real-Time.
