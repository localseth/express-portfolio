const toggleBtn = document.getElementById('dark-theme');
const themeStyleSheet = document.getElementById('theme');

const setTheme = () => {
    if (localStorage.theme) {
        themeStyleSheet.href = `/static/css/${localStorage.theme}-mode.css`;
    } else {
        themeStyleSheet.href = '/static/css/light-mode.css';
    }
}

window.addEventListener('load', setTheme)

toggleBtn.addEventListener('change', () => {
    if (toggleBtn.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});