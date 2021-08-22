// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err));
}


// menutoggle
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('lock-scroll');
    document.querySelector('header').classList.toggle('active');
};

function toggleMenu() {
    menuToggle.classList.remove('active');
    navigation.classList.remove('active');
    body.classList.remove('lock-scroll');
    document.querySelector('header').classList.remove('active');
}

// delay action 
function delay(URL) {
    setTimeout(function () { window.location = URL }, 500);
}

// sticky navbar
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// theme switch
// getting the selected theme from the local storage
let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light-mode');
}
else {
    document.querySelector('#toggle').className = theme;
    setTheme(theme);
}

// switching themes
const toggle = document.querySelector('#toggle');
toggle.onclick = function () {
    if (toggle.className === 'light-mode') {
        toggle.className = 'dark-mode';
    }
    else {
        toggle.className = 'light-mode';
    }

    let mode = toggle.className;
    setTheme(mode);
    setTimeout(function () {
        toggleMenu();
    }, 0.4 * 1000);
}

function setTheme(mode) {
    if (mode === 'light-mode') {
        document.querySelector('#theme-style').href = '/css/style.css';
    }
    if (mode === 'dark-mode') {
        document.querySelector('#theme-style').href = '/css/dark.css';
    }
    localStorage.setItem('theme', mode);
}