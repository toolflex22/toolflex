// 1. المتغير العام للغة
let currentLanguage = 'ar';

// 2. وظيفة عداد الكلمات والحروف
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

// 3. وظيفة مولد الوسوم الذكي (تم نقلها للأعلى لضمان التعريف)
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
    const tags = [
        `#${cleanKeyword}`, 
        `#${cleanKeyword}2026`, 
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

// 5. وظائف النوافذ المنبثقة
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "block";
}

// 6. وظيفة إغلاق النوافذ المنبثقة
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// 7. وظيفة تبديل اللغة الشاملة
function switchLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-btn');
    
    if (!html || !langBtn) return;

    if (currentLanguage === 'ar') {
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        langBtn.innerText = 'العربية';
        
        document.getElementById('hero-title').innerText = "Free Tools to Boost Your Productivity";
        document.getElementById('hero-desc').innerText = "All the tools you need in one place, fast and without registration.";
        document.getElementById('tool1-title').innerText = "📊 Word & Character Counter";
        document.getElementById('tool1-desc').innerText = "Count the number of words and characters in your text instantly.";
        document.getElementById('text-input').placeholder = "Type or paste your text here...";
        document.getElementById('label-words').innerText = "Words:";
        document.getElementById('label-chars').innerText = "Characters:";
        
        document.getElementById('tool2-title').innerText = "📱 Social Media Hashtag Generator";
        document.getElementById('tool2-desc').innerText = "Generate viral and semantic tags for your posts to increase engagement.";
        document.getElementById('hashtag-keyword').placeholder = "Enter keyword (e.g., fitness)...";
        document.getElementById('hashtag-btn').innerText = "Generate";
        document.getElementById('copy-tags-btn').innerText = "Copy All";
        if(document.getElementById('hashtag-output').innerText === "الوسوم المرتجعة ستظهر هنا...") {
            document.getElementById('hashtag-output').innerText = "Generated tags will appear here...";
        }
        
        document.getElementById('link-privacy').innerText = "Privacy Policy";
        document.getElementById('link-terms').innerText = "Terms of Service";
        document.getElementById('privacy-text').innerHTML = `<h2>Privacy Policy</h2><p>At ToolFlex, the privacy of our visitors is of extreme importance to us. We do not collect, store, or share any data or text entered by the user. All operations are processed 100% locally inside your browser.</p><p>Third-party ad networks may use cookies to serve ads based on your prior visits to our website or other sites.</p>`;
        document.getElementById('terms-text').innerHTML = `<h2>Terms of Service</h2><p>By using ToolFlex, you agree to comply with the following terms:</p><ul><li>Tools are provided "as is" without warranties. We are not liable for any errors resulting from their use.</li><li>You are free to use these tools for personal or legal commercial purposes.</li><li>Any attempt to misuse the site or flood it with fake requests to harm the service is strictly prohibited.</li></ul>`;
        document.getElementById('tool3-title').innerText = "🧹 Smart Text Cleaner";
        document.getElementById('tool3-desc').innerText = "Remove extra spaces and empty lines to clean your texts and articles instantly.";
        document.getElementById('cleaner-input').placeholder = "Enter or paste text to clean here...";
        document.getElementById('clean-spaces-btn').innerText = "Remove Spaces";
        document.getElementById('clean-lines-btn').innerText = "Remove Empty Lines";
        document.getElementById('copy-clean-btn').innerText = "Copy Text";
        if(document.getElementById('cleaner-output').innerText === "النص المنظف سيظهر هنا...") {
            document.getElementById('cleaner-output').innerText = "Cleaned text will appear here...";
        }
        document.getElementById('tool4-title').innerText = "🔒 Secure Password Generator";
        document.getElementById('tool4-desc').innerText = "Create random and unguessable passwords to protect your accounts instantly.";
        document.getElementById('label-pass-length').innerText = "Password Length:";
        document.getElementById('label-pass-num').innerText = "Include Numbers (0-9)";
        document.getElementById('label-pass-sym').innerText = "Include Symbols (!@#$)";
        document.getElementById('label-pass-upper').innerText = "Include Uppercase (A-Z)";
        document.getElementById('generate-pass-btn').innerText = "Generate Password";
        document.getElementById('copy-pass-btn').innerText = "Copy Password";
        if(document.getElementById('password-output').innerText === "كلمة المرور ستظهر هنا...") {
            document.getElementById('password-output').innerText = "Password will appear here...";
        }
        document.getElementById('tool5-title').innerText = "🔠 English Case Converter";
        document.getElementById('tool5-desc').innerText = "Convert English text to UPPERCASE, lowercase, or Title Case instantly.";
        document.getElementById('case-input').placeholder = "Enter your English text here...";
        document.getElementById('case-upper-btn').innerText = "UPPERCASE";
        document.getElementById('case-lower-btn').innerText = "lowercase";
        document.getElementById('case-cap-btn').innerText = "Title Case";
        document.getElementById('copy-case-btn').innerText = "Copy Result";
        if(document.getElementById('case-output').innerText === "النتيجة ستظهر هنا...") {
            document.getElementById('case-output').innerText = "Result will appear here...";
        }
        document.getElementById('tool6-title').innerText = "🔢 Smart Numbers Extractor";
        document.getElementById('tool6-desc').innerText = "Extract all numbers from any huge text and separate them with a single click.";
        document.getElementById('extract-input').placeholder = "Enter or paste mixed text here (e.g., John is 25 and earns 1500)...";
        document.getElementById('extract-space-btn').innerText = "Separate by Space";
        document.getElementById('extract-comma-btn').innerText = "Separate by Comma";
        document.getElementById('copy-extract-btn').innerText = "Copy Numbers";
        if(document.getElementById('extract-output').innerText === "الأرقام المستخرجة ستظهر هنا...") {
            document.getElementById('extract-output').innerText = "Extracted numbers will appear here...";
        }
        document.getElementById('tool7-title').innerText = "🟢 Direct WhatsApp Link Generator";
        document.getElementById('tool7-desc').innerText = "Convert your phone number into a direct link with a pre-filled message for your clients.";
        document.getElementById('wa-phone').placeholder = "Phone number with country code (e.g., 1234567890)...";
        document.getElementById('wa-message').placeholder = "Optional automatic message...";
        document.getElementById('wa-btn').innerText = "Generate Direct Link";
        document.getElementById('copy-wa-btn').innerText = "Copy Link";
        if(document.getElementById('wa-output').innerText === "الرابط السحري سيظهر هنا...") {
            document.getElementById('wa-output').innerText = "The magic link will appear here...";
        }
        document.getElementById('tool8-title').innerText = "📱 QR Code Generator";
        document.getElementById('tool8-desc').innerText = "Convert any link or text into a unique QR code in a flash to share and print.";
        document.getElementById('qr-input').placeholder = "Enter link or text here (e.g., https://...)...";
        document.getElementById('qr-btn').innerText = "Generate";
        document.getElementById('download-qr-btn').innerText = "Download QR Image";
        if(document.getElementById('qr-output').innerText === "الكود المولد سيظهر هنا...") {
            document.getElementById('qr-output').innerText = "Generated QR code will appear here...";
        }
        document.getElementById('tool9-title').innerText = "🖼️ Image Compressor Tool";
        document.getElementById('tool9-desc').innerText = "Reduce your images size smartly and ultra-fast without compromising the original quality.";
        document.getElementById('label-compress-quality').innerText = "Compression Quality:";
        document.getElementById('compress-btn').innerText = "Compress Image Now";
        document.getElementById('download-img-btn').innerText = "Download Compressed Image ✓";
        if(document.getElementById('compress-output').innerText === "الصورة المضغوطة ستظهر هنا...") {
            document.getElementById('compress-output').innerText = "Compressed image will appear here...";
        }
    } else {
        currentLanguage = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        langBtn.innerText = 'English';
        
        document.getElementById('hero-title').innerText = "أدوات مجانية لزيادة إنتاجيتك";
        document.getElementById('hero-desc').innerText = "كل ما تحتاجه لتطوير محتواك في مكان واحد، بسرعة وبدون تسجيل.";
        document.getElementById('tool1-title').innerText = "📊 عداد الكلمات والحروف";
        document.getElementById('tool1-desc').innerText = "احسب عدد الكلمات والحروف في نصك فوراً.";
        document.getElementById('text-input').placeholder = "اكتب أو الصق نصك هنا...";
        document.getElementById('label-words').innerText = "الكلمات:";
        document.getElementById('label-chars').innerText = "الحروف:";
        
        document.getElementById('tool2-title').innerText = "📱 مولد وسوم (Hashtags) السوشيال ميديا";
        document.getElementById('tool2-desc').innerText = "ولّد وسومًا دلالية وقوية لمنشوراتك بضغطة زر لزيادة التفاعل.";
        document.getElementById('hashtag-keyword').placeholder = "أدخل الكلمة المفتاحية (مثال: fitness)...";
        document.getElementById('hashtag-btn').innerText = "توليد";
        document.getElementById('copy-tags-btn').innerText = "نسخ الكل";
        if(document.getElementById('hashtag-output').innerText === "Generated tags will appear here...") {
            document.getElementById('hashtag-output').innerText = "الوسوم المرتجعة ستظهر هنا...";
        }
        
        document.getElementById('link-privacy').innerText = "سياسة الخصوصية";
        document.getElementById('link-terms').innerText = "شروط الاستخدام";
        document.getElementById('privacy-text').innerHTML = `<h2>سياسة الخصوصية</h2><p>في ToolFlex، خصوصية زوارنا لها أهمية بالغة بالنسبة لنا. نحن لا نجمع، ولا نخزن، ولا نشارك أي بيانات أو نصوص يقوم المستخدم بكتابتها أو معالجتها داخل الأدوات. جميع العمليات تتم محلياً بالكامل داخل متصفحك.</p><p>قد تستخدم شبكات الإعلانات الطرف الثالث ملفات تعريف الارتباط (Cookies) لعرض الإعلانات بناءً على زياراتك السابقة لموقعنا أو لمواقع أخرى.</p>`;
        document.getElementById('terms-text').innerHTML = `<h2>شروط الاستخدام</h2><p>باستخدامك لموقع ToolFlex، فإنك توافق على الالتزام بالشروط التالية:</p><ul><li>يتم تقديم الأدوات "كما هي" بدون أي ضمانات، ونحن غير مسؤولين عن أي خطأ ناتج عن استخدامها.</li><li>يُسمح باستخدام الأدوات بشكل مجاني بالكامل ولأغراض شخصية أو تجارية قانونية.</li><li>يُمنع محاولة إساءة استخدام الموقع أو محاولة إغراقه بطلبات وهمية تضر بالخادم أو بالخدمة.</li></ul>`;
        document.getElementById('tool3-title').innerText = "🧹 منظف النصوص الذكي";
        document.getElementById('tool3-desc').innerText = "قم بإزالة الفراغات الزائدة والأسطر الفارغة لتنظيف نصوصك ومقالاتك فوراً.";
        document.getElementById('cleaner-input').placeholder = "أدخل أو الصق النص المراد تنظيفه هنا...";
        document.getElementById('clean-spaces-btn').innerText = "إزالة الفراغات";
        document.getElementById('clean-lines-btn').innerText = "إزالة الأسطر الفارغة";
        document.getElementById('copy-clean-btn').innerText = "نسخ النص";
        if(document.getElementById('cleaner-output').innerText === "Cleaned text will appear here...") {
            document.getElementById('cleaner-output').innerText = "النص المنظف سيظهر هنا...";
        }
        document.getElementById('tool4-title').innerText = "🔒 مولد كلمات المرور القوية";
        document.getElementById('tool4-desc').innerText = "أنشئ كلمات مرور عشوائية ومستحيلة التخمين لحماية حساباتك فوراً.";
        document.getElementById('label-pass-length').innerText = "طول كلمة المرور:";
        document.getElementById('label-pass-num').innerText = "تضمين أرقام (0-9)";
        document.getElementById('label-pass-sym').innerText = "تضمين رموز (!@#$)";
        document.getElementById('label-pass-upper').innerText = "تضمين حروف كبيرة (A-Z)";
        document.getElementById('generate-pass-btn').innerText = "توليد كلمة المرور";
        document.getElementById('copy-pass-btn').innerText = "نسخ الباسورد";
        if(document.getElementById('password-output').innerText === "Password will appear here...") {
            document.getElementById('password-output').innerText = "كلمة المرور ستظهر هنا...";
        }
        document.getElementById('tool5-title').innerText = "🔠 محول حالة الأحرف الإنجليزية";
        document.getElementById('tool5-desc').innerText = "حوّل النصوص الإنجليزية إلى حروف كبيرة، صغيرة، أو عناوين بضغطة زر.";
        document.getElementById('case-input').placeholder = "Enter your English text here / أدخل النص الإنجليزي هنا...";
        document.getElementById('case-upper-btn').innerText = "كبيرة UPPER";
        document.getElementById('case-lower-btn').innerText = "صغيرة lower";
        document.getElementById('case-cap-btn').innerText = "عنوان Title";
        document.getElementById('copy-case-btn').innerText = "نسخ النتيجة";
        if(document.getElementById('case-output').innerText === "Result will appear here...") {
            document.getElementById('case-output').innerText = "النتيجة ستظهر هنا...";
        }
        document.getElementById('tool6-title').innerText = "🔢 مستخرج الأرقام الذكي";
        document.getElementById('tool6-desc').innerText = "استخرج جميع الأرقام المتواجدة داخل أي نص ضخم وافصل بينها بضغطة زر واحدة.";
        document.getElementById('extract-input').placeholder = "أدخل أو الصق النص المختلط هنا (مثال: أحمد 25 سنة وراتبه 1500)...";
        document.getElementById('extract-space-btn').innerText = "فصل بمسافة";
        document.getElementById('extract-comma-btn').innerText = "فصل بفاصلة (،)";
        document.getElementById('copy-extract-btn').innerText = "نسخ الأرقام";
        if(document.getElementById('extract-output').innerText === "Extracted numbers will appear here...") {
            document.getElementById('extract-output').innerText = "الأرقام المستخرجة ستظهر هنا...";
        }
        document.getElementById('tool7-title').innerText = "🟢 مولد روابط واتساب المباشرة";
        document.getElementById('tool7-desc').innerText = "حوّل رقم هاتفك إلى رابط مباشر مع رسالة مجهزة مسبقاً لعملائك بضغطة زر.";
        document.getElementById('wa-phone').placeholder = "رقم الهاتف مع رمز الدولة (مثال: 966500000000)...";
        document.getElementById('wa-message').placeholder = "الرسالة التلقائية الاختيارية (مثال: أهلاً، أريد الاستفسار عن خدماتكم)...";
        document.getElementById('wa-btn').innerText = "توليد الرابط المباشر";
        document.getElementById('copy-wa-btn').innerText = "نسخ الرابط";
        if(document.getElementById('wa-output').innerText === "The magic link will appear here...") {
            document.getElementById('wa-output').innerText = "الرابط السحري سيظهر هنا...";
        }
        document.getElementById('tool8-title').innerText = "📱 منشئ أكواد الاستجابة السريعة (QR)";
        document.getElementById('tool8-desc').innerText = "حوّل أي رابط أو نص إلى كود QR فريد بلمحة بصر لمشاركته وطباعته.";
        document.getElementById('qr-input').placeholder = "أدخل الرابط أو النص هنا (مثال: https://...)...";
        document.getElementById('qr-btn').innerText = "توليد";
        document.getElementById('download-qr-btn').innerText = "تحميل الكود كصورة";
        if(document.getElementById('qr-output').innerText === "Generated QR code will appear here...") {
            document.getElementById('qr-output').innerText = "الكود المولد سيظهر هنا...";
        }
        document.getElementById('tool9-title').innerText = "🖼️ أداة ضغط وتقليل حجم الصور";
        document.getElementById('tool9-desc').innerText = "قم بتخفيض حجم صورك بذكاء وبسرعة فائقة دون المساس بجودتها الأصلية.";
        document.getElementById('label-compress-quality').innerText = "جودة الضغط (70% ممتع):";
        document.getElementById('compress-btn').innerText = "اضغط الصورة الآن";
        document.getElementById('download-img-btn').innerText = "تحميل الصورة المضغوطة ✓";
        if(document.getElementById('compress-output').innerText === "Compressed image will appear here...") {
            document.getElementById('compress-output').innerText = "الصورة المضغوطة ستظهر هنا...";
        }
    }
}
// وظيفة منظف النصوص الذكي
// وظيفة منظف النصوص الذكي - النسخة المستقرة والمحسنة 100%
function cleanText(actionType) {
    const inputElement = document.getElementById('cleaner-input');
    const outputElement = document.getElementById('cleaner-output');
    const copyBtn = document.getElementById('copy-clean-btn');
    
    if (!inputElement || !outputElement) {
        console.error("عذراً، لم يتم العثور على عناصر منظف النصوص في الـ HTML!");
        return;
    }
    
    let text = inputElement.value;
    
    // فحص ما إذا كانت الخانة فارغة تماماً
    if (!text || text.trim() === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال نص أولاً لتنظيفه!" : "Please enter some text first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    if (actionType === 'spaces') {
        // تنظيف الفراغات المتكررة والزائدة في كامل النص وجعلها فراغاً واحداً فقط
        text = text.replace(/[ \t]+/g, ' ').trim();
    } else if (actionType === 'lines') {
        // تنظيف الأسطر الفارغة تماماً وإزالة الأسطر الوهمية المتكررة
        text = text.split('\n').filter(line => line.trim() !== "").join('\n');
    }
    
    // استخدام textContent لضمان حقن النص الصافي مباشرة بدون تداخل مع تنسيقات الـ CSS
    outputElement.textContent = text;
    
    // إظهار زر النسخ فوراً
    if (copyBtn) {
        copyBtn.style.display = "inline-block";
    }
}

// وظيفة نسخ النص المنظف
function copyCleanedText() {
    const outputElement = document.getElementById('cleaner-output');
    if (!outputElement) return;

    const textToCopy = outputElement.innerText;
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
// وظيفة مولد كلمات المرور القوية
function generatePassword() {
    const lengthInput = document.getElementById('pass-length');
    const includeNumbers = document.getElementById('pass-numbers').checked;
    const includeSymbols = document.getElementById('pass-symbols').checked;
    const includeUppercase = document.getElementById('pass-uppercase').checked;
    const outputElement = document.getElementById('password-output');
    const copyBtn = document.getElementById('copy-pass-btn');

    if (!lengthInput || !outputElement) return;

    let length = parseInt(lengthInput.value);
    
    // الأمان وضبط الحدود
    if (isNaN(length) || length < 6) length = 6;
    if (length > 32) length = 32;
    lengthInput.value = length;

    // مجموعات الأحرف الأساسية
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let availableChars = lowercaseChars; // الحروف الصغيرة إجبارية دائماً
    if (includeUppercase) availableChars += uppercaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        generatedPassword += availableChars[randomIndex];
    }

    outputElement.textContent = generatedPassword;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// وظيفة نسخ كلمة المرور المحدثة
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
// وظيفة محول حالة الأحرف الإنجليزية
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
        // تحويل الحرف الأول من كل كلمة إلى حرف كبير
        resultText = text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }
    
    outputElement.textContent = resultText;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// وظيفة نسخ نتيجة محول الحالات
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
// وظيفة مستخرج الأرقام من النصوص
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
    
    // استخدام الريجكس للبحث عن كل الأرقام المتتالية في النص
    const numbersArray = text.match(/\d+/g);
    
    // إذا لم يتم العثور على أي رقم في النص
    if (!numbersArray) {
        outputElement.textContent = currentLanguage === 'ar' ? "لم يتم العثور على أي أرقام في النص المدخل!" : "No numbers found in the entered text!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }
    
    // دمج الأرقام بناءً على نوع الفاصلة المختار
    let resultText = "";
    if (separatorType === 'space') {
        resultText = numbersArray.join(' ');
    } else if (separatorType === 'comma') {
        resultText = numbersArray.join(currentLanguage === 'ar' ? ' ، ' : ', ');
    }
    
    outputElement.textContent = resultText;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// وظيفة نسخ الأرقام المستخرجة
function copyExtractedNumbers() {
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
// وظيفة مولد روابط واتساب
function generateWhatsAppLink() {
    const phoneInput = document.getElementById('wa-phone');
    const msgInput = document.getElementById('wa-message');
    const outputElement = document.getElementById('wa-output');
    const copyBtn = document.getElementById('copy-wa-btn');

    if (!phoneInput || !outputElement) return;

    // تنظيف رقم الهاتف من أي مسافات أو إشارات زرقاء مثل +
    let phone = phoneInput.value.trim().replace(/[\s+]/g, '');
    const message = msgInput ? msgInput.value.trim() : "";

    if (phone === "") {
        outputElement.textContent = currentLanguage === 'ar' ? "الرجاء إدخال رقم الهاتف أولاً!" : "Please enter the phone number first!";
        if (copyBtn) copyBtn.style.display = "none";
        return;
    }

    // بناء الرابط القياسي لواتساب
    let baseUrl = `https://wa.me/${phone}`;
    if (message !== "") {
        baseUrl += `?text=${encodeURIComponent(message)}`;
    }

    outputElement.innerHTML = `<a href="${baseUrl}" target="_blank" style="color: #22c55e; text-decoration: underline;">${baseUrl}</a>`;
    if (copyBtn) copyBtn.style.display = "inline-block";
}

// وظيفة نسخ رابط واتساب
function copyWhatsAppLink() {
    const outputElement = document.getElementById('wa-output');
    if (!outputElement) return;

    // جلب الرابط من داخل الوسم a
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
// وظيفة منشئ أكواد QR Code
function generateQRCode() {
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
    
    // استخدام خدمة ميكروسوفت/جوجل المفتوحة والمستقرة لتوليد رمز الاستجابة الفوري بحجم متناسق 150x150
    const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    
    // حقن الصورة داخل حاوية النتائج بشكل أنيق
    outputElement.innerHTML = `<img src="${qrImageUrl}" alt="QR Code" style="border: 4px solid #ffffff; border-radius: 8px; margin: 5px 0; max-width: 150px; display: block;">`;
    
    // تفعيل وتجهيز زر التحميل التلقائي
    if (downloadBtn) {
        downloadBtn.href = qrImageUrl;
        downloadBtn.style.display = "inline-block";
    }
}
// وظيفة أداة ضغط وتقليل حجم الصور الذكية
function compressImage() {
    const fileInput = document.getElementById('image-input');
    const qualityInput = document.getElementById('image-quality');
    const outputElement = document.getElementById('compress-output');
    const downloadBtn = document.getElementById('download-img-btn');

    if (!fileInput || !outputElement || !qualityInput) return;

    const file = fileInput.files[0];

    // في حال لم يقم المستخدم باختيار أي صورة
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
            // إنشاء الـ Canvas البرمجي لإعادة بناء الصورة محلياً
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // الحفاظ على أبعاد الصورة الأصلية
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;

            // رسم الصورة بالكامل داخل الكانفاس
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

            // جلب قيمة الجودة وتحويلها إلى كسر عشري (مثلاً 70 تصبح 0.7)
            const quality = parseInt(qualityInput.value) / 100;

            // استخراج رابط الصورة المضغوطة بصيغة JPEG الخفيفة وبناءً على الجودة المحددة
            const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);

            // عرض رسالة نجاح المعاينة
            outputElement.textContent = currentLanguage === 'ar' ? "تم ضغط الصورة بنجاح مذهل!" : "Image compressed successfully!";
            
            // تفعيل وإظهار زر التحميل الأخضر ومزامنة الرابط
            if (downloadBtn) {
                downloadBtn.href = compressedDataUrl;
                downloadBtn.style.display = "inline-block";
            }
        };
    };
}