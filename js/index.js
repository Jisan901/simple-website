var navOpen = document.getElementById('nav-toggle-open');
var navClose = document.getElementById('nav-toggle-close');
var overlay = document.getElementById('overlay');
function navTog() {
    var navLinks = document.getElementById('nav-links');
    navLinks.style.transform = 'translateX(0)';
    overlay.style.display = 'flex';
    navLinks.style.opacity=1;
}
function navTogCl() {
    var navLinks = document.getElementById('nav-links');
    navLinks.style.transform = 'translateX(-350px)';
    overlay.style.display = 'none';
    navLinks.style.opacity=0;
}
navOpen.onclick = navTog;
navClose.onclick = navTogCl;
overlay.onclick = navTogCl;