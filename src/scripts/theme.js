/* Desenvolva sua lógica aqui ... */

const html = document.querySelector('html');
const themeButton = document.querySelector('.header__btn');
let darkMode = false;

const themeChange = () => {
    darkMode= !darkMode;
    html.classList.toggle('dark-mode');
    themeButton.classList.toggle('header__btn--dark-mode');
    localStorage.setItem('theme', JSON.stringify(darkMode));
}

themeButton.addEventListener('click', themeChange);

const themeAnalysis = () => {
    darkMode = JSON.parse(localStorage.getItem('theme'));
    if(darkMode){
        html.classList.add('dark-mode');
        themeButton.classList.add('header__btn--dark-mode');
    }
}

themeAnalysis();