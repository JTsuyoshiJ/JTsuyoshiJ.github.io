document.addEventListener('DOMContentLoaded', function() {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    const htmlElement = document.documentElement;

    const saveTheme = (theme) => {
        localStorage.setItem('theme', theme);
    };

    const loadTheme = () => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            htmlElement.setAttribute('data-theme', theme);
        }
    };

    lightThemeBtn.addEventListener('click', function() {
        htmlElement.setAttribute('data-theme', 'light');
        saveTheme('light');
    });

    darkThemeBtn.addEventListener('click', function() {
        htmlElement.setAttribute('data-theme', 'dark');
        saveTheme('dark');
    });

    // Загрузка выбранной темы
    loadTheme();
    });
