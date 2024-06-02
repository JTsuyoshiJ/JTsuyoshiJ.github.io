document.addEventListener('DOMContentLoaded', function() {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const resetThemeBtn = document.getElementById('reset-theme-btn');
    const htmlElement = document.documentElement;

    lightThemeBtn.addEventListener('click', function() {
        htmlElement.setAttribute('data-theme', 'light');
    });

    darkThemeBtn.addEventListener('click', function() {
        htmlElement.setAttribute('data-theme', 'dark');
    });

    resetThemeBtn.addEventListener('click', function() {
        htmlElement.removeAttribute('data-theme');
    });
});
