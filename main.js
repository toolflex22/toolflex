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