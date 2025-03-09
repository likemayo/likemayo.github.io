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

    // 添加汉堡菜单的点击事件处理
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        // 切换汉堡菜单的激活状态
        hamburger.classList.toggle('active');
        // 切换导航菜单的显示状态
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭菜单
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 添加平滑滚动处理
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // 获取导航栏的高度
            const navHeight = document.querySelector('.header').offsetHeight;
            
            // 计算目标位置，考虑导航栏的高度
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            // 使用 smooth scroll 效果
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}); 