// 设置默认语言
let currentLang = 'zh';

// 语言切换函数
function switchLanguage(lang) {
    currentLang = lang;
    
    // 隐藏所有语言元素
    document.querySelectorAll('[data-lang]').forEach(elem => {
        elem.style.display = 'none';
    });
    
    // 显示当前语言的元素
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(elem => {
        elem.style.display = 'inline';
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLang);
}); 