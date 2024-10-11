const express = require('express');  // استيراد مكتبة Express.js
const app = express();

// تحديد المنفذ من المتغير PORT أو تعيينه كـ 3000 إذا لم يكن موجودًا
const PORT = process.env.PORT || 3000;

// صفحة بسيطة عند الوصول إلى الرابط الأساسي
app.get('/', (req, res) => {
    res.send('Bot is running!');
});

// تشغيل السيرفر على المنفذ المحدد
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
