// ==========================================================================
// 1. المتغيرات العامة وإعدادات البيئة
// ==========================================================================
let currentLanguage = 'ar';

// ==========================================================================
// 2. وظيفة عداد الكلمات والحروف (الأداة 1)
// ==========================================================================
function countText() {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');

    if (textInput && charCount && wordCount) {
        const text = textInput.value;
        charCount.innerText = text.length;
        wordCount.innerText = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    }
}

// ==========================================================================
// 3. وظيفة مولد الوسوم الذكي (الأداة 2)
// ==========================================================================
function generateTags() {
    const inputElement = document.getElementById('hashtag-keyword');
    const outputElement = document.getElementById('hashtag-output');
    const copyBtn = document.getElementById('copy-tags-btn');
    
    if (!inputElement || !outputElement) return;

    const keyword = inputElement.value.trim().toLowerCase();
    
    if (keyword === "") {
        outputElement.innerText = currentLanguage === 'ar' ? "الرجاء إدخال كلمة مفتاحية أولاً!" : "Please enter a keyword first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    const cleanKeyword = keyword.replace(/\s+/g, '_');
    const currentYear = new Date().getFullYear(); // توليد العام ديناميكياً لحماية مستقبل الموقع
    
    const tags = [
        `#${cleanKeyword}`, 
        `#${cleanKeyword}${currentYear}`, 
        `#viral_${cleanKeyword}`, 
        `#trending_${cleanKeyword}`, 
        `#explore`, 
        `#foryou`, 
        `#instagram`, 
        `#tiktok`
    ];
    
    outputElement.innerText = tags.join(' ');
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// 4. وظيفة نسخ الوسوم
function copyTags() {
    const outputElement = document.getElementById('hashtag-output');
    if (!outputElement) return;

    const textToCopy = outputElement.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-tags-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 5. وظائف النوافذ المنبثقة (Modals)
// ==========================================================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// ==========================================================================
// 6. دالة المساعدة الآمنة لتحديث النصوص وتجنب توقف السكريبت (Safe DOM Update)
// ==========================================================================
function updateText(id, text, property = 'innerText') {
    const element = document.getElementById(id);
    if (element) {
        element[property] = text;
    }
}

// ==========================================================================
// 7. وظيفة تبديل اللغة الشاملة
// ==========================================================================
function switchLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-btn');
    
    if (!html || !langBtn) return;

    if (currentLanguage === 'ar') {
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.innerText = 'العربية';
        
        // الهيدر والهيرو
        updateText('hero-title', "Free Tools to Boost Your Productivity");
        updateText('hero-desc', "All the tools you need in one place, fast and without registration.");
        
        // الأداة 1: العداد
        updateText('tool1-title', "📊 Word & Character Counter");
        updateText('tool1-desc', "Count the number of words and characters in your text instantly.");
        const textInput = document.getElementById('text-input');
        if(textInput) textInput.placeholder = "Type or paste your text here...";
        updateText('label-words', "Words:");
        updateText('label-chars', "Characters:");
        
        // الأداة 2: الهاشتاغات
        updateText('tool2-title', "📱 Social Media Hashtag Generator");
        updateText('tool2-desc', "Generate viral and semantic tags for your posts to increase engagement.");
        const hashInput = document.getElementById('hashtag-keyword');
        if(hashInput) hashInput.placeholder = "Enter keyword (e.g., fitness)...";
        updateText('hashtag-btn', "Generate");
        updateText('copy-tags-btn', "Copy All");
        const hashOut = document.getElementById('hashtag-output');
        if (hashOut && hashOut.innerText === "الوسوم المرتجعة ستظهر هنا...") {
            hashOut.innerText = "Generated tags will appear here...";
        }
        
        // الصفحات القانونية (Modals)
        updateText('link-privacy', "Privacy Policy");
        updateText('link-terms', "Terms of Service");
        updateText('privacy-text', `<h2>Privacy Policy</h2><p>At ToolFlex, the privacy of our visitors is of extreme importance to us. We do not collect, store, or share any data or text entered by the user. All operations are processed 100% locally inside your browser.</p><p>Third-party ad networks may use cookies to serve ads based on your prior visits to our website or other sites.</p>`, 'innerHTML');
        updateText('terms-text', `<h2>Terms of Service</h2><p>By using ToolFlex, you agree to comply with the following terms:</p><ul><li>Tools are provided "as is" without warranties. We are not liable for any errors resulting from their use.</li><li>You are free to use these tools for personal or legal commercial purposes.</li><li>Any attempt to misuse the site or flood it with fake requests to harm the service is strictly prohibited.</li></ul>`, 'innerHTML');
        
        // الأداة 3: منظف النصوص
        updateText('tool3-title', "🧹 Smart Text Cleaner");
        updateText('tool3-desc', "Remove extra spaces and empty lines to clean your texts and articles instantly.");
        const cleanInput = document.getElementById('cleaner-input');
        if(cleanInput) cleanInput.placeholder = "Enter or paste text to clean here...";
        updateText('clean-spaces-btn', "Remove Spaces");
        updateText('clean-lines-btn', "Remove Empty Lines");
        updateText('copy-clean-btn', "Copy Text");
        const cleanOut = document.getElementById('cleaner-output');
        if (cleanOut && cleanOut.innerText === "النص المنظف سيظهر هنا...") {
            cleanOut.innerText = "Cleaned text will appear here...";
        }
        
        // الأداة 4: مولد كلمات المرور
        updateText('tool4-title', "🔒 Secure Password Generator");
        updateText('tool4-desc', "Create random and unguessable passwords to protect your accounts instantly.");
        updateText('label-pass-length', "Password Length:");
        updateText('label-pass-num', "Include Numbers (0-9)");
        updateText('label-pass-sym', "Include Symbols (!@#$)");
        updateText('label-pass-upper', "Include Uppercase (A-Z)");
        updateText('generate-pass-btn', "Generate Password");
        updateText('copy-pass-btn', "Copy Password");
        const passOut = document.getElementById('password-output');
        if (passOut && passOut.innerText === "كلمة المرور ستظهر هنا...") {
            passOut.innerText = "Password will appear here...";
        }
        
        // الأداة 5: محول حالة الأحرف
        updateText('tool5-title', "🔠 English Case Converter");
        updateText('tool5-desc', "Convert English text to UPPERCASE, lowercase, or Title Case instantly.");
        const caseIn = document.getElementById('case-input');
        if(caseIn) caseIn.placeholder = "Enter your English text here...";
        updateText('case-upper-btn', "UPPERCASE");
        updateText('case-lower-btn', "lowercase");
        updateText('case-cap-btn', "Title Case");
        updateText('copy-case-btn', "Copy Result");
        const caseOut = document.getElementById('case-output');
        if (caseOut && caseOut.innerText === "النتيجة ستظهر هنا...") {
            caseOut.innerText = "Result will appear here...";
        }
        
        // الأداة 6: مستخرج الأرقام
        updateText('tool6-title', "🔢 Smart Numbers Extractor");
        updateText('tool6-desc', "Extract all numbers from any huge text and separate them with a single click.");
        const extIn = document.getElementById('extract-input');
        if(extIn) extIn.placeholder = "Enter or paste mixed text here (e.g., John is 25 and earns 1500)...";
        updateText('extract-space-btn', "Separate by Space");
        updateText('extract-comma-btn', "Separate by Comma");
        updateText('copy-extract-btn', "Copy Numbers");
        const extOut = document.getElementById('extract-output');
        if (extOut && extOut.innerText === "الأرقام المستخرجة ستظهر هنا...") {
            extOut.innerText = "Extracted numbers will appear here...";
        }
        
        // الأداة 7: الواتساب
        updateText('tool7-title', "🟢 Direct WhatsApp Link Generator");
        updateText('tool7-desc', "Convert your phone number into a direct link with a pre-filled message for your clients.");
        const waPhone = document.getElementById('wa-phone');
        if(waPhone) waPhone.placeholder = "Phone number with country code (e.g., 1234567890)...";
        const waMsg = document.getElementById('wa-message');
        if(waMsg) waMsg.placeholder = "Optional automatic message...";
        updateText('wa-btn', "Generate Direct Link");
        updateText('copy-wa-btn', "Copy Link");
        const waOut = document.getElementById('wa-output');
        if (waOut && waOut.innerText === "الرابط السحري سيظهر هنا...") {
            waOut.innerText = "The magic link will appear here...";
        }
        
        // الأداة 8: الـ QR Code
        updateText('tool8-title', "📱 QR Code Generator");
        updateText('tool8-desc', "Convert any link or text into a unique QR code in a flash to share and print.");
        const qrIn = document.getElementById('qr-input');
        if(qrIn) qrIn.placeholder = "Enter link or text here (e.g., https://...)...";
        updateText('qr-btn', "Generate");
        updateText('download-qr-btn', "Download QR Image");
        const qrOut = document.getElementById('qr-output');
        if (qrOut && qrOut.innerText === "الكود المولد سيظهر هنا...") {
            qrOut.innerText = "Generated QR code will appear here...";
        }
        
        // الأداة 9: ضغط الصور
        updateText('tool9-title', "🖼️ Image Compressor Tool");
        updateText('tool9-desc', "Reduce your images size smartly and ultra-fast without compromising the original quality.");
        updateText('label-compress-quality', "Compression Quality:");
        updateText('compress-btn', "Compress Image Now");
        updateText('download-img-btn', "Download Compressed Image ✓");
        const compOut = document.getElementById('compress-output');
        if (compOut && compOut.innerText === "الصورة المضغوطة ستظهر هنا...") {
            compOut.innerText = "Compressed image will appear here...";
        }
        
        // الأداة 10: محول العملات
        updateText('tool10-title', "💱 Live Currency & Crypto Converter");
        updateText('tool10-desc', "Track live exchange rates and convert between world currencies and crypto instantly.");
        updateText('convert-currency-btn', "Calculate Live Rate");
        const curOut = document.getElementById('currency-output');
        if (curOut && curOut.innerText === "النتيجة الحية ستظهر هنا...") {
            curOut.innerText = "Live result will appear here...";
        }
        
        // الأداة 11: المترجم
        updateText('tool11-title', "🌐 Quick Text Translator");
        updateText('tool11-desc', "Translate your texts instantly between multiple global languages with high speed.");
        const transIn = document.getElementById('translate-input');
        if(transIn) transIn.placeholder = "Enter text to translate here...";
        updateText('label-translate-to', "Translate To:");
        updateText('translate-btn', "Translate Now");
        updateText('copy-translate-btn', "Copy Translation");
        
        const transLang = document.getElementById('translate-lang');
        if (transLang && transLang.options.length > 0) {
            const langOptions = transLang.options;
            langOptions[0].text = "English"; langOptions[1].text = "Arabic"; langOptions[2].text = "French";
            langOptions[3].text = "Russian"; langOptions[4].text = "German"; langOptions[5].text = "Italian";
            langOptions[6].text = "Spanish"; langOptions[7].text = "Persian"; langOptions[8].text = "Kurdish";
        }
        const transOut = document.getElementById('translate-output');
        if (transOut && transOut.innerText === "النص المترجم سيظهر هنا...") {
            transOut.innerText = "Translated text will appear here...";
        }
        
        // الأداة 12: منشئ السيرة الذاتية (المطور)
        updateText('tool12-title', "📄 Professional CV Builder");
        updateText('tool12-desc', "Create a European-style professional resume ready to print and download as PDF instantly.");
        updateText('cv-lang-label', "CV Language:");
        const cvName = document.getElementById('cv-name'); if(cvName) cvName.placeholder = "Full Name...";
        const cvTitle = document.getElementById('cv-title'); if(cvTitle) cvTitle.placeholder = "Job Title (e.g., Web Developer)...";
        const cvEmail = document.getElementById('cv-email'); if(cvEmail) cvEmail.placeholder = "Email Address...";
        const cvPhone = document.getElementById('cv-phone'); if(cvPhone) cvPhone.placeholder = "Phone Number...";
        const cvSkills = document.getElementById('cv-skills'); if(cvSkills) cvSkills.placeholder = "Skills (separate with commas)...";
        const cvExp = document.getElementById('cv-experience'); if(cvExp) cvExp.placeholder = "Work Experience & Education...";
        updateText('cv-btn', "Generate & Download CV as PDF");
        
        const themeBtn = document.getElementById('theme-btn');
        if(themeBtn) {
            themeBtn.innerText = document.body.classList.contains('light-theme') ? "🌙 Dark Mode" : "☀️ Light Mode";
        }
    } else {
        currentLanguage = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.innerText = 'English';
        
        // الهيدر والهيرو
        updateText('hero-title', "أدوات مجانية لزيادة إنتاجيتك");
        updateText('hero-desc', "كل ما تحتاجه لتطوير محتواك في مكان واحد، بسرعة وبدون تسجيل.");
        
        // الأداة 1: العداد
        updateText('tool1-title', "📊 عداد الكلمات والحروف");
        updateText('tool1-desc', "احسب عدد الكلمات والحروف في نصك فوراً.");
        const textInput = document.getElementById('text-input');
        if(textInput) textInput.placeholder = "اكتب أو الصق نصك هنا...";
        updateText('label-words', "الكلمات:");
        updateText('label-chars', "الحروف:");
        
        // الأداة 2: الهاشتاغات
        updateText('tool2-title', "📱 مولد وسوم (Hashtags) السوشيال ميديا");
        updateText('tool2-desc', "ولّد وسومًا دلالية وقوية لمنشوراتك بضغطة زر لزيادة التفاعل.");
        const hashInput = document.getElementById('hashtag-keyword');
        if(hashInput) hashInput.placeholder = "أدخل الكلمة المفتاحية (مثال: fitness)...";
        updateText('hashtag-btn', "توليد");
        updateText('copy-tags-btn', "نسخ الكل");
        const hashOut = document.getElementById('hashtag-output');
        if (hashOut && hashOut.innerText === "Generated tags will appear here...") {
            hashOut.innerText = "الوسوم المرتجعة ستظهر هنا...";
        }
        
        // الصفحات القانونية (Modals)
        updateText('link-privacy', "سياسة الخصوصية");
        updateText('link-terms', "شروط الاستخدام");
        updateText('privacy-text', `<h2>سياسة الخصوصية</h2><p>في ToolFlex, خصوصية زوارنا لها أهمية بالغة بالنسبة لنا. نحن لا نجمع، ولا نخزن، ولا نشارك أي بيانات أو نصوص يقوم المستخدم بكتابتها أو معالجتها داخل الأدوات. جميع العمليات تتم محلياً بالكامل داخل متصفحك.</p><p>قد تستخدم شبكات الإعلانات الطرف الثالث ملفات تعريف الارتباط (Cookies) لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى.</p>`, 'innerHTML');
        updateText('terms-text', `<h2>شروط الاستخدام</h2><p>باستخدامك لموقع ToolFlex، فإنك توافق على الالتزام بالشروط التالية:</p><ul><li>يتم تقديم الأدوات "كما هي" بدون أي ضمانات، ونحن غير مسؤولين عن أي خطأ ناتج عن استخدامها.</li><li>يُسمح باستخدام الأدوات بشكل مجاني بالكامل ولأغراض شخصية أو تجارية قانونية.</li><li>يُمنع محاولة إساءة استخدام الموقع أو محاولة إغراقه بطلبات وهمية تضر بالخادم أو بالخدمة.</li></ul>`, 'innerHTML');
        
        // الأداة 3: منظف النصوص
        updateText('tool3-title', "🧹 منظف النصوص الذكي");
        updateText('tool3-desc', "قم بإزالة الفراغات الزائدة والأسطر الفارغة لتنظيف نصوصك ومقالاتك فوراً.");
        const cleanInput = document.getElementById('cleaner-input');
        if(cleanInput) cleanInput.placeholder = "أدخل أو الصق النص المراد تنظيفه هنا...";
        updateText('clean-spaces-btn', "إزالة الفراغات");
        updateText('clean-lines-btn', "إزالة الأسطر الفارغة");
        updateText('copy-clean-btn', "نسخ النص");
        const cleanOut = document.getElementById('cleaner-output');
        if (cleanOut && cleanOut.innerText === "Cleaned text will appear here...") {
            cleanOut.innerText = "النص المنظف سيظهر هنا...";
        }
        
        // الأداة 4: مولد كلمات المرور
        updateText('tool4-title', "🔒 مولد كلمات المرور القوية");
        updateText('tool4-desc', "أنشئ كلمات مرور عشوائية ومستحيلة التخمين لحماية حساباتك فوراً.");
        updateText('label-pass-length', "طول كلمة المرور:");
        updateText('label-pass-num', "تضمين أرقام (0-9)");
        updateText('label-pass-sym', "تضمين رموز (!@#$)");
        updateText('label-pass-upper', "تضمين حروف كبيرة (A-Z)");
        updateText('generate-pass-btn', "توليد كلمة المرور");
        updateText('copy-pass-btn', "نسخ الباسورد");
        const passOut = document.getElementById('password-output');
        if (passOut && passOut.innerText === "Password will appear here...") {
            passOut.innerText = "كلمة المرور ستظهر هنا...";
        }
        
        // الأداة 5: محول حالة الأحرف
        updateText('tool5-title', "🔠 محول حالة الأحرف الإنجليزية");
        updateText('tool5-desc', "حوّل النصوص الإنجليزية إلى حروف كبيرة، صغيرة، أو عناوين بضغطة زر.");
        const caseIn = document.getElementById('case-input');
        if(caseIn) caseIn.placeholder = "Enter your English text here / أدخل النص الإنجليزي هنا...";
        updateText('case-upper-btn', "كبيرة UPPER");
        updateText('case-lower-btn', "صغيرة lower");
        updateText('case-cap-btn', "عنوان Title");
        updateText('copy-case-btn', "نسخ النتيجة");
        const caseOut = document.getElementById('case-output');
        if (caseOut && caseOut.innerText === "Result will appear here...") {
            caseOut.innerText = "النتيجة ستظهر هنا...";
        }
        
        // الأداة 6: مستخرج الأرقام
        updateText('tool6-title', "🔢 مستخرج الأرقام الذكي");
        updateText('tool6-desc', "استخرج جميع الأرقام المتواجدة داخل أي نص ضخم وافصل بينها بضغطة زر واحدة.");
        const extIn = document.getElementById('extract-input');
        if(extIn) extIn.placeholder = "أدخل أو الصق النص المختلط هنا (مثال: أحمد 25 سنة وراتبه 1500)...";
        updateText('extract-space-btn', "فصل بمسافة");
        updateText('extract-comma-btn', "فصل بفاصلة (،)");
        updateText('copy-extract-btn', "نسخ الأرقام");
        const extOut = document.getElementById('extract-output');
        if (extOut && extOut.innerText === "Extracted numbers will appear here...") {
            extOut.innerText = "الأرقام المستخرجة ستظهر هنا...";
        }
        
        // الأداة 7: الواتساب
        updateText('tool7-title', "🟢 مولد روابط واتساب المباشرة");
        updateText('tool7-desc', "حوّل رقم هاتفك إلى رابط مباشر مع رسالة مجهزة مسبقاً لعملائك بضغطة زر.");
        const waPhone = document.getElementById('wa-phone');
        if(waPhone) waPhone.placeholder = "رقم الهاتف مع رمز الدولة (مثال: 966500000000)...";
        const waMsg = document.getElementById('wa-message');
        if(waMsg) waMsg.placeholder = "الرسالة التلقائية الاختيارية (مثال: أهلاً، أريد الاستفسار عن خدماتكم)...";
        updateText('wa-btn', "توليد الرابط المباشر");
        updateText('copy-wa-btn', "نسخ الرابط");
        const waOut = document.getElementById('wa-output');
        if (waOut && waOut.innerText === "The magic link will appear here...") {
            waOut.innerText = "الرابط السحري سيظهر هنا...";
        }
        
        // الأداة 8: الـ QR Code
        updateText('tool8-title', "📱 منشئ أكواد الاستجابة السريعة (QR)");
        updateText('tool8-desc', "حوّل أي رابط أو نص إلى كود QR فريد بلمحة بصر لمشاركته وطباعته.");
        const qrIn = document.getElementById('qr-input');
        if(qrIn) qrIn.placeholder = "أدخل الرابط أو النص هنا (مثال: https://...)...";
        updateText('qr-btn', "توليد");
        updateText('download-qr-btn', "تحميل الكود كصورة");
        const qrOut = document.getElementById('qr-output');
        if (qrOut && qrOut.innerText === "Generated QR code will appear here...") {
            qrOut.innerText = "الكود المولد سيظهر هنا...";
        }
        
        // الأداة 9: ضغط الصور
        updateText('tool9-title', "🖼️ أداة ضغط وتقليل حجم الصور");
        updateText('tool9-desc', "قم بتخفيض حجم صورك بذكاء وبسرعة فائقة دون المساس بجودتها الأصلية.");
        updateText('label-compress-quality', "جودة الضغط (70% ممتع):");
        updateText('compress-btn', "اضغط الصورة الآن");
        updateText('download-img-btn', "تحميل الصورة المضغوطة ✓");
        const compOut = document.getElementById('compress-output');
        if (compOut && compOut.innerText === "Compressed image will appear here...") {
            compOut.innerText = "الصورة المضغوطة ستظهر هنا...";
        }
        
        // الأداة 10: محول العملات
        updateText('tool10-title', "💱 محول العملات والعملات الرقمية الفوري");
        updateText('tool10-desc', "تابع أسعار الصرف الحية وحوّل بين العملات العالمية والرقيمة فوراً.");
        updateText('convert-currency-btn', "احسب السعر الحي الآن");
        const curOut = document.getElementById('currency-output');
        if (curOut && curOut.innerText === "Live result will appear here...") {
            curOut.innerText = "النتيجة الحية ستظهر هنا...";
        }
        
        // الأداة 11: المترجم
        updateText('tool11-title', "🌐 مترجم النصوص الفوري السريع");
        updateText('tool11-desc', "ترجم نصوصك فوراً بين اللغتين العربية والإنجليزية بدقة وسرعة فائقة.");
        const transIn = document.getElementById('translate-input');
        if(transIn) transIn.placeholder = "أدخل النص المراد ترجمته هنا...";
        updateText('label-translate-to', "الترجمة إلى:");
        updateText('translate-btn', "ترجم النص الآن");
        updateText('copy-translate-btn', "نسخ الترجمة");
        
        const transLang = document.getElementById('translate-lang');
        if (transLang && transLang.options.length > 0) {
            const langOptionsAr = transLang.options;
            langOptionsAr[0].text = "English (الإنجليزية)"; langOptionsAr[1].text = "العربية (Arabic)"; langOptionsAr[2].text = "Français (الفرنسية)";
            langOptionsAr[3].text = "Русский (الروسية)"; langOptionsAr[4].text = "Deutsch (الألمانية)"; langOptionsAr[5].text = "Italiano (الإيطالية)";
            langOptionsAr[6].text = "Español (الإسبانية)"; langOptionsAr[7].text = "فارسی (الفارسية/الإيرانية)"; langOptionsAr[8].text = "Kurdî (الكردية)";
        }
        const transOut = document.getElementById('translate-output');
        if (transOut && transOut.innerText === "Translated text will appear here...") {
            transOut.innerText = "النص المترجم سيظهر هنا...";
        }
        
        // الأداة 12: منشئ السيرة الذاتية (المطور)
        updateText('tool12-title', "📄 منشئ السيرة الذاتية السريع (CV)");
        updateText('tool12-desc', "أنشئ سيرة ذاتية احترافية ومبسطة جاهزة للطباعة والتحميل كملف PDF فوراً.");
        updateText('cv-lang-label', "لغة الـ CV:");
        const cvName = document.getElementById('cv-name'); if(cvName) cvName.placeholder = "الاسم الكامل...";
        const cvTitle = document.getElementById('cv-title'); if(cvTitle) cvTitle.placeholder = "المسمى الوظيفي (مثال: مطور ويب)...";
        const cvEmail = document.getElementById('cv-email'); if(cvEmail) cvEmail.placeholder = "البريد الإلكتروني...";
        const cvPhone = document.getElementById('cv-phone'); if(cvPhone) cvPhone.placeholder = "رقم الهاتف...";
        const cvSkills = document.getElementById('cv-skills'); if(cvSkills) cvSkills.placeholder = "المهارات (افصل بينها بفاصلة)...";
        const cvExp = document.getElementById('cv-experience'); if(cvExp) cvExp.placeholder = "الخبرات المهنية والتعليم...";
        updateText('cv-btn', "توليد وتحميل الـ CV كـ PDF");
        
        const themeBtnAr = document.getElementById('theme-btn');
        if(themeBtnAr) {
            themeBtnAr.innerText = document.body.classList.contains('light-theme') ? "🌙 الوضع الداكن" : "☀️ الوضع الفاتح";
        }
    }
}
// ==========================================================================
// 8. وظيفة منظف النصوص الذكي (الأداة 3)
// ==========================================================================
function cleanText(actionType) {
    const inputElement = document.getElementById('cleaner-input');
    const outputElement = document.getElementById('cleaner-output');
    const copyBtn = document.getElementById('copy-clean-btn');
    
    if (!inputElement || !outputElement) {
        console.error("عذراً، لم يتم العثور على عناصر منظف النصوص في الـ HTML!");
        return;
    }
    
    let text = inputElement.value;
    
    if (!text || text.trim() === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال نص أولاً لتنظيفه!" : "Please enter some text first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    if (actionType === 'spaces') {
        text = text.replace(/[ \t]+/g, ' ').trim();
    } else if (actionType === 'lines') {
        text = text.split('\n').filter(line => line.trim() !== "").join('\n');
    }
    
    outputElement.textContent = text;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

function copyCleanedText() {
    const outputElement = document.getElementById('cleaner-output');
    if (!outputElement) return;

    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-clean-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 9. وظيفة مولد كلمات المرور الآمنة والمشفرة (الأداة 4)
// ==========================================================================
function generatePassword() {
    const lengthInput = document.getElementById('pass-length');
    const includeNumbers = document.getElementById('pass-numbers').checked;
    const includeSymbols = document.getElementById('pass-symbols').checked;
    const includeUppercase = document.getElementById('pass-uppercase').checked;
    const outputElement = document.getElementById('password-output');
    const copyBtn = document.getElementById('copy-pass-btn');

    if (!lengthInput || !outputElement) return;

    let length = parseInt(lengthInput.value);
    
    if (isNaN(length) || length < 6) length = 6;
    if (length > 32) length = 32;
    lengthInput.value = length;

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let availableChars = lowercaseChars; 
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    let generatedPassword = "";
    
    // استخدام الخوارزمية الآمنة Crypto API بدلاً من Math.random العشوائية التقليدية
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length; i++) {
        const randomIndex = array[i] % availableChars.length;
        generatedPassword += availableChars[randomIndex];
    }

    outputElement.textContent = generatedPassword;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

function copyPassword() {
    const outputElement = document.getElementById('password-output');
    if (!outputElement) return;

    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-pass-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 10. وظيفة محول حالة الأحرف الإنجليزية (الأداة 5)
// ==========================================================================
function convertCase(type) {
    const inputElement = document.getElementById('case-input');
    const outputElement = document.getElementById('case-output');
    const copyBtn = document.getElementById('copy-case-btn');
    
    if (!inputElement || !outputElement) return;
    
    const text = inputElement.value;
    
    if (text.trim() === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال نص إنجليزي أولاً!" : "Please enter some English text first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    let resultText = "";
    
    if (type === 'upper') {
        resultText = text.toUpperCase();
    } else if (type === 'lower') {
        resultText = text.toLowerCase();
    } else if (type === 'capitalize') {
        // تحسين الريجكس ليدعم الكابيتال حتى مع وجود أسطر متعددة
        resultText = text.toLowerCase().replace(/(^\w|\s\w)/g, char => char.toUpperCase());
    }
    
    outputElement.textContent = resultText;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

function copyCaseText() {
    const outputElement = document.getElementById('case-output');
    if (!outputElement) return;

    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-case-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 11. وظيفة مستخرج الأرقام من النصوص (الأداة 6)
// ==========================================================================
function extractNumbers(separatorType) {
    const inputElement = document.getElementById('extract-input');
    const outputElement = document.getElementById('extract-output');
    const copyBtn = document.getElementById('copy-extract-btn');
    
    if (!inputElement || !outputElement) return;
    
    const text = inputElement.value;
    
    if (text.trim() === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال نص يحتوي على أرقام أولاً!" : "Please enter some text containing numbers first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    const numbersArray = text.match(/\d+/g);
    
    if (!numbersArray) {
        outputElement.textContent = currentLanguage === 'ar' ? "لم يتم العثور على أي أرقام في النص المدخل!" : "No numbers found in the entered text!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    let resultText = "";
    if (separatorType === 'space') {
        resultText = numbersArray.join(' ');
    } else if (separatorType === 'comma') {
        resultText = numbersArray.join(currentLanguage === 'ar' ? '، ' : ', ');
    }
    
    outputElement.textContent = resultText;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// دالة نسخ الأرقام المستخرجة (تمت إضافتها لضمان اكتمال منطق الأداة)
function copyExtractText() {
    const outputElement = document.getElementById('extract-output');
    if (!outputElement) return;

    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-extract-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 12. وظائف أدوات الاتصال: روابط واتساب (الأداة 7)
// ==========================================================================
function generateWhatsAppLink() {
    const phoneInput = document.getElementById('wa-phone');
    const msgInput = document.getElementById('wa-message');
    const outputElement = document.getElementById('wa-output');
    const copyBtn = document.getElementById('copy-wa-btn');

    if (!phoneInput || !outputElement) return;

    let phone = phoneInput.value.trim().replace(/[\s+]/g, '');
    const message = msgInput ? msgInput.value.trim() : "";

    if (phone === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال رقم الهاتف أولاً!" : "Please enter the phone number first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }

    let baseUrl = `https://wa.me/${phone}`;
    if (message !== "") {
        baseUrl += `?text=${encodeURIComponent(message)}`;
    }

    // بناء الرابط بشكل آمن وتنسيقه بوضوح
    outputElement.innerHTML = '';
    const linkAnchor = document.createElement('a');
    linkAnchor.href = baseUrl;
    linkAnchor.target = "_blank";
    linkAnchor.rel = "noopener noreferrer";
    linkAnchor.style.color = "#22c55e";
    linkAnchor.style.textDecoration = "underline";
    linkAnchor.style.wordBreak = "break-all";
    linkAnchor.textContent = baseUrl;
    
    outputElement.appendChild(linkAnchor);
    if (copyBtn) copyBtn.style.display = "inline-block";
}

function copyWhatsAppLink() {
    const outputElement = document.getElementById('wa-output');
    if (!outputElement) return;

    const linkElement = outputElement.querySelector('a');
    const textToCopy = linkElement ? linkElement.href : outputElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-wa-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 13. وظيفة منشئ أكواد QR Code مع ميزة التحميل الحقيقي الفوري (الأداة 8)
// ==========================================================================
async function generateQRCode() {
    const inputElement = document.getElementById('qr-input');
    const outputElement = document.getElementById('qr-output');
    const downloadBtn = document.getElementById('download-qr-btn');
    
    if (!inputElement || !outputElement) return;
    
    const text = inputElement.value.trim();
    
    if (text === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال رابط أو نص أولاً!" : "Please enter a link or text first!";
        if (downloadBtn) downloadBtn.style.display = "none";
        return;
    }
    
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    
    outputElement.innerHTML = `<img src="${qrImageUrl}" alt="QR Code" style="border: 4px solid #ffffff; border-radius: 8px; margin: 5px auto; max-width: 150px; display: block;">`;
    
    // حل مشكلة فتح الصورة في نافذة جديدة: جلب الصورة كـ Blob لجعل التحميل محلياً ومباشراً
    if (downloadBtn) {
        try {
            downloadBtn.style.display = "none"; // إخفاء مؤقت لحين معالجة الرابط
            const response = await fetch(qrImageUrl);
            const blob = await response.blob();
            const localBlobUrl = URL.createObjectURL(blob);
            
            downloadBtn.href = localBlobUrl;
            downloadBtn.download = "toolflex-qrcode.png"; // إجبار المتصفح على التحميل الفوري باسم محدد
            downloadBtn.style.display = "inline-block";
        } catch (error) {
            console.error("فشل إعداد رابط تحميل الـ QR المعالج:", error);
            // حماية تراجعية في حال حدوث خطأ شبكة مفاجئ
            downloadBtn.href = qrImageUrl;
            downloadBtn.target = "_blank";
            downloadBtn.style.display = "inline-block";
        }
    }
}

// ==========================================================================
// 14. وظيفة أداة ضغط وتقليل حجم الصور الذكية (الأداة 9)
// ==========================================================================
function compressImage() {
    const fileInput = document.getElementById('image-input');
    const qualityInput = document.getElementById('image-quality');
    const outputElement = document.getElementById('compress-output');
    const downloadBtn = document.getElementById('download-img-btn');

    if (!fileInput || !outputElement || !qualityInput) return;

    const file = fileInput.files[0];

    if (!file) {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء اختيار صورة أولاً من جهازك!" : "Please select an image first!";
        if (downloadBtn) downloadBtn.style.display = "none";
        return;
    }

    outputElement.textContent = currentLanguage === 'ar' ? "جاري معالجة وضغط الصورة..." : "Processing and compressing image...";

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
        const imgElement = new Image();
        imgElement.src = event.target.result;
        
        imgElement.onload = function () {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = imgElement.width;
            canvas.height = imgElement.height;

            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

            const quality = parseInt(qualityInput.value) / 100;
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

            outputElement.textContent = currentLanguage === 'ar' ? "تم ضغط الصورة بنجاح مذهل!" : "Image compressed successfully!";
            
            if (downloadBtn) {
                downloadBtn.href = compressedDataUrl;
                downloadBtn.download = "toolflex-compressed.jpg"; // تحديد اسم تحميل منسق واحترافي للصورة
                downloadBtn.style.display = "inline-block";
            }
        };
    };
}

// ==========================================================================
// 15. وظيفة محول العملات الفوري (الأداة 10)
// ==========================================================================
async function convertCurrency() {
    const amountInput = document.getElementById('currency-amount');
    const fromSelect = document.getElementById('currency-from');
    const toSelect = document.getElementById('currency-to');
    const outputElement = document.getElementById('currency-output');

    if (!amountInput || !fromSelect || !toSelect || !outputElement) return;

    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (isNaN(amount) || amount <= 0) {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال مبلغ صحيح!" : "Please enter a valid amount!";
        return;
    }

    outputElement.textContent = currentLanguage === 'ar' ? "جاري جلب الأسعار الحية..." : "Fetching live rates...";

    try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${from}`);
        const data = await response.json();

        if (data && data.rates && data.rates[to]) {
            const rate = data.rates[to];
            const result = (amount * rate).toFixed(4);
            outputElement.textContent = `${amount} ${from} = ${result} ${to}`;
        } else {
            throw new Error("Rate not found");
        }
    } catch (error) {
        console.error("Error fetching currency:", error);
        outputElement.textContent = currentLanguage === 'ar' ? "عذراً، فشل الاتصال بالسيرفر وجلب السعر الحالي!" : "Error fetching live rates!";
    }
}

// ==========================================================================
// 16. وظيفة مترجم النصوص الفوري السريع (الأداة 11)
// ==========================================================================
async function translateText() {
    const inputElement = document.getElementById('translate-input');
    const langSelect = document.getElementById('translate-lang');
    const outputElement = document.getElementById('translate-output');
    const copyBtn = document.getElementById('copy-translate-btn');

    if (!inputElement || !langSelect || !outputElement) return;

    const text = inputElement.value.trim();
    const targetLang = langSelect.value;

    if (text === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال نص أولاً للترجمة!" : "Please enter some text first to translate!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }

    outputElement.textContent = currentLanguage === 'ar' ? "جاري الترجمة الفورية..." : "Translating...";

    try {
        const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`);
        const data = await response.json();

        if (data && data[0]) {
            let translatedResult = "";
            data[0].forEach(part => {
                if (part[0]) translatedResult += part[0];
            });
            
            // ضبط استايل الحاوية برمجياً لضمان عدم تداخل الأسطر المترجمة الطويلة والحفاظ على التنسيق
            outputElement.style.whiteSpace = "pre-wrap";
            outputElement.textContent = translatedResult;
            if (copyBtn) copyBtn.style.display = "inline-block";
        } else {
            throw new Error("Translation failed");
        }
    } catch (error) {
        console.error("Error translating text:", error);
        outputElement.textContent = currentLanguage === 'ar' ? "عذراً، فشل الاتصال بمحرك الترجمة!" : "Error connecting to translation engine!";
        if (copyBtn) copyBtn.style.display = "none";
    }
}

// دالة نسخ النص المترجم الفورية
function copyTranslationText() {
    const outputElement = document.getElementById('translate-output');
    if (!outputElement) return;

    const textToCopy = outputElement.textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyBtn = document.getElementById('copy-translate-btn');
        if (!copyBtn) return;

        const originalText = copyBtn.innerText;
        copyBtn.innerText = currentLanguage === 'ar' ? "تم النسخ! ✓" : "Copied! ✓";
        copyBtn.style.backgroundColor = "#22c55e";
        
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "#475569";
        }, 2000);
    });
}

// ==========================================================================
// 17. وظيفة منشئ السيرة الذاتية الاحترافية بصيغة PDF (الأداة 12)
// ==========================================================================
function generateCV() {
    const name = document.getElementById('cv-name').value.trim();
    const jobTitle = document.getElementById('cv-title').value.trim();
    const email = document.getElementById('cv-email').value.trim();
    const phone = document.getElementById('cv-phone').value.trim();
    const skills = document.getElementById('cv-skills').value.trim();
    const exp = document.getElementById('cv-experience').value.trim();
    const cvLang = document.getElementById('cv-output-lang').value;

    if (name === "" || email === "") {
        alert(currentLanguage === 'ar' ? "الرجاء إدخال الاسم والبريد الإلكتروني!" : "Please enter your name and email!");
        return;
    }

    const dict = {
        ar: { contact: "معلومات الاتصال", skills: "المهارات المهنية", exp: "الخبرة العمليّة والتعليم", noExp: "لا توجد خبرات مضافة." },
        en: { contact: "Contact Information", skills: "Professional Skills", exp: "Work Experience & Education", noExp: "No experience provided." },
        de: { contact: "Kontaktinformationen", skills: "Berufliche Fähigkeiten", exp: "Berufserfahrung & Ausbildung", noExp: "Keine Berufserfahrung angegeben." },
        fr: { contact: "Coordonnées", skills: "Compétences Professionnelles", exp: "Expérience Professionnelle & Éducation", noExp: "Aucune expérience fournie." },
        ru: { contact: "Контактная информация", skills: "Профессиональные навыки", exp: "Опыт работы и образование", noExp: "Опыт работы не указан." },
        it: { contact: "Informazioni di contatto", skills: "Competenze Professionali", exp: "Esperienza Lavorativa e Istruzione", noExp: "Nessuna experiencia fornita." },
        es: { contact: "Información de contacto", skills: "Habilidades Profesionales", exp: "Experiencia Laboral y Educación", noExp: "No se proporcionó experiencia." },
        fa: { contact: "اطلاعات تماس", skills: "مهارت های حرفه ای", exp: "سابقه کار و تحصیلات", noExp: "هیچ سابقة ای ثبت نشده است." },
        ku: { contact: "Agahiyên Têkiliyê", skills: "Kêmasiyên Profesyonel", exp: "Ezmûna Kar & Perwerdehiyê", noExp: "Tu ezmûn nehatiye peyda kirin." }
    };

    const direction = (cvLang === 'ar' || cvLang === 'fa') ? 'rtl' : 'ltr';
    const cvWindow = window.open('', '_blank');
    
    if (!cvWindow) {
        alert(currentLanguage === 'ar' ? "الرجاء السماح للنوافذ المنبثقة بالظهور لتوليد الـ CV!" : "Please allow pop-ups to generate your CV!");
        return;
    }

    cvWindow.document.write(`
        <html lang="${cvLang}" dir="${direction}">
        <head>
            <meta charset="UTF-8">
            <title>CV - ${name}</title>
            <style>
                body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 50px; color: #1e293b; background: #fff; line-height: 1.6; }
                .cv-container { max-width: 800px; margin: 0 auto; }
                .header { border-bottom: 2px solid #0f172a; padding-bottom: 15px; margin-bottom: 25px; }
                .header h1 { margin: 0; color: #0f172a; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; }
                .header h2 { margin: 5px 0 0 0; color: #475569; font-size: 18px; font-weight: 400; }
                .info-grid { display: flex; gap: 20px; margin-top: 10px; font-size: 14px; color: #64748b; }
                .section { display: flex; margin-bottom: 30px; gap: 15px; }
                .section-side { width: 25%; font-size: 14px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; border-top: 1px solid #e2e8f0; padding-top: 8px; }
                .section-body { width: 75%; border-top: 1px solid #e2e8f0; padding-top: 8px; }
                .content { font-size: 14px; color: #334155; white-space: pre-wrap; }
                .skills-tags { display: flex; gap: 8px; flex-wrap: wrap; list-style: none; padding: 0; margin: 0; }
                .skills-tags li { 
                    background: #f8fafc; 
                    padding: 4px 10px; 
                    border-radius: 4px; 
                    font-size: 13px; 
                    border: 1px solid #e2e8f0; 
                    color: #334155; 
                    font-weight: 500;
                    -webkit-print-color-adjust: exact; 
                    print-color-adjust: exact; 
                }
                @media print { body { padding: 20px; } .cv-container { max-width: 100%; } }
            </style>
        </head>
        <body>
            <div class="cv-container">
                <div class="header">
                    <h1>${name}</h1>
                    ${jobTitle !== "" ? `<h2>${jobTitle}</h2>` : ''}
                    <div class="info-grid">
                        <div>✉ ${email}</div>
                        ${phone !== "" ? `<div>📞 ${phone}</div>` : ''}
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-side">${dict[cvLang].exp}</div>
                    <div class="section-body">
                        <div class="content">${exp !== "" ? exp : dict[cvLang].noExp}</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-side">${dict[cvLang].skills}</div>
                    <div class="section-body">
                        <ul class="skills-tags">
                            ${skills !== "" ? skills.split(',').map(s => s.trim()).filter(s => s !== "").map(s => `<li>${s}</li>`).join('') : `<li>CV Tool</li>`}
                        </ul>
                    </div>
                </div>
            </div>
            <script>
                // تضمن تشغيل الطباعة فور استقرار المستند تماماً داخل النافذة الجديدة
                setTimeout(function() {
                    window.print();
                }, 300);
            </script>
        </body>
        </html>
    `);
    cvWindow.document.close();
}

// ==========================================================================
// 18. وظيفة تبديل الوضع الداكن والفاتح مع الحفظ في الذاكرة
// ==========================================================================
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
        themeBtn.innerText = currentLanguage === 'ar' ? "🌙 الوضع الداكن" : "🌙 Dark Mode";
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.innerText = currentLanguage === 'ar' ? "☀️ الوضع الفاتح" : "☀️ Light Mode";
    }
}

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('theme-btn');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeBtn) {
            themeBtn.innerText = currentLanguage === 'ar' ? "🌙 الوضع الداكن" : "🌙 Dark Mode";
        }
    }
}

// ==========================================================================
// 19. منطقة ربط مستمعي الأحداث والتشغيل التلقائي (Event Listeners initialization)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    // تشغيل فحص الثيم المحفوظ أولاً
    checkSavedTheme();

    // ربط أزرار أداة منظف النصوص (الأداة 3)
    const cleanSpacesBtn = document.getElementById('clean-spaces-btn');
    if (cleanSpacesBtn) cleanSpacesBtn.addEventListener('click', () => cleanText('spaces'));

    const cleanLinesBtn = document.getElementById('clean-lines-btn');
    if (cleanLinesBtn) cleanLinesBtn.addEventListener('click', () => cleanText('lines'));

    const copyCleanBtn = document.getElementById('copy-clean-btn');
    if (copyCleanBtn) copyCleanBtn.addEventListener('click', copyCleanedText);

    // ربط أزرار أداة مولد كلمات المرور (الأداة 4)
    const genPassBtn = document.getElementById('generate-pass-btn');
    if (genPassBtn) genPassBtn.addEventListener('click', generatePassword);

    const copyPassBtn = document.getElementById('copy-pass-btn');
    if (copyPassBtn) copyPassBtn.addEventListener('click', copyPassword);

    // ربط أزرار أداة محول حالة الأحرف (الأداة 5)
    const upperCaseBtn = document.getElementById('case-upper-btn');
    if (upperCaseBtn) upperCaseBtn.addEventListener('click', () => convertCase('upper'));

    const lowerCaseBtn = document.getElementById('case-lower-btn');
    if (lowerCaseBtn) lowerCaseBtn.addEventListener('click', () => convertCase('lower'));

    const capitalizeBtn = document.getElementById('case-cap-btn');
    if (capitalizeBtn) capitalizeBtn.addEventListener('click', () => convertCase('capitalize'));

    const copyCaseBtn = document.getElementById('copy-case-btn');
    if (copyCaseBtn) copyCaseBtn.addEventListener('click', copyCaseText);

    // ربط أزرار أداة مستخرج الأرقام (الأداة 6)
    const extractSpaceBtn = document.getElementById('extract-space-btn');
    if (extractSpaceBtn) extractSpaceBtn.addEventListener('click', () => extractNumbers('space'));

    const extractCommaBtn = document.getElementById('extract-comma-btn');
    if (extractCommaBtn) extractCommaBtn.addEventListener('click', () => extractNumbers('comma'));

    const copyExtractBtn = document.getElementById('copy-extract-btn');
    if (copyExtractBtn) copyExtractBtn.addEventListener('click', copyExtractText);

    // ربط أزرار أداة روابط واتساب (الأداة 7)
    const genWaBtn = document.getElementById('generate-wa-btn');
    if (genWaBtn) genWaBtn.addEventListener('click', generateWhatsAppLink);

    const copyWaBtn = document.getElementById('copy-wa-btn');
    if (copyWaBtn) copyWaBtn.addEventListener('click', copyWhatsAppLink);

    // ربط أزرار أداة منشئ الـ QR Code (الأداة 8)
    const genQrBtn = document.getElementById('generate-qr-btn');
    if (genQrBtn) genQrBtn.addEventListener('click', generateQRCode);

    // ربط أزرار أداة ضغط الصور (الأداة 9)
    const compressBtn = document.getElementById('compress-btn');
    if (compressBtn) compressBtn.addEventListener('click', compressImage);

    // ربط عناصر أداة محول العملات (الأداة 10)
    const convertCurrBtn = document.getElementById('convert-currency-btn');
    if (convertCurrBtn) convertCurrBtn.addEventListener('click', convertCurrency);

    // ربط أزرار أداة المترجم الفوري (الأداة 11)
    const translateBtn = document.getElementById('translate-btn');
    if (translateBtn) translateBtn.addEventListener('click', translateText);

    const copyTranslateBtn = document.getElementById('copy-translate-btn');
    if (copyTranslateBtn) copyTranslateBtn.addEventListener('click', copyTranslationText);

    // ربط أزرار أداة منشئ السيرة الذاتية وثيم الموقع (الأداة 12)
    const genCvBtn = document.getElementById('generate-cv-btn');
    if (genCvBtn) genCvBtn.addEventListener('click', generateCV);

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
});