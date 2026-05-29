// متغير لتتبع اللغة الحالية
let currentLanguage = 'ar';

// 1. وظيفة عداد الكلمات والحروف
function countText() {
    const text = document.getElementById('text-input').value;
    
    // حساب الحروف
    const charCount = text.length;
    
    // حساب الكلمات (بشرط إزالة المسافات الزائدة)
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    
    // عرض النتائج على الشاشة
    document.getElementById('char-count').innerText = charCount;
    document.getElementById('word-count').innerText = wordCount;
}

// 2. وظيفة تبديل اللغة
function switchLanguage() {
    const html = document.documentElement;
    const langBtn = document.getElementById('lang-btn');
    
    if (currentLanguage === 'ar') {
        // التحويل إلى الإنجليزية
        currentLanguage = 'en';
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr'); // تغيير الاتجاه من اليسار لليمين
        langBtn.innerText = 'العربية';
        
        // تغيير النصوص
        document.getElementById('hero-title').innerText = "Free Tools to Boost Your Productivity";
        document.getElementById('hero-desc').innerText = "All the tools you need in one place, fast and without registration.";
        document.getElementById('tool1-title').innerText = "📊 Word & Character Counter";
        document.getElementById('tool1-desc').innerText = "Count the number of words and characters in your text instantly.";
        document.getElementById('text-input').placeholder = "Type or paste your text here...";
        document.getElementById('label-words').innerText = "Words:";
        document.getElementById('label-chars').innerText = "Characters:";
    } else {
        // العودة للعربية
        currentLanguage = 'ar';
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl'); // تغيير الاتجاه من اليمين لليسار
        langBtn.innerText = 'English';
        
        // إعادة النصوص العربية
        document.getElementById('hero-title').innerText = "أدوات مجانية لزيادة إنتاجيتك";
        document.getElementById('hero-desc').innerText = "كل ما تحتاجه لتطوير محتواك في مكان واحد، بسرعة وبدون تسجيل.";
        document.getElementById('tool1-title').innerText = "📊 عداد الكلمات والحروف";
        document.getElementById('tool1-desc').innerText = "احسب عدد الكلمات والحروف في نصك فوراً.";
        document.getElementById('text-input').placeholder = "اكتب أو الصق نصك هنا...";
        document.getElementById('label-words').innerText = "الكلمات:";
        document.getElementById('label-chars').innerText = "الحروف:";
    }
}