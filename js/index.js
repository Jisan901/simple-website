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




          //let style = "padding:5%;font-size:2em; position:fixed;top:90%;z-index:10000000;"; let div = document.createElement('div'); div.innerHTML='<button style="'+style+'left:40%;" id="increase_layout" >+</button><button style="'+style+'left:60%;" id="decrease_layout">-</button>'; document.body.appendChild(div); let $viewport=document.querySelector('meta[name="viewport"]'); let i=1.0; const $decrease_layout=()=>{$viewport.setAttribute('content','width=device-width, initial-scale='+String(i));i=i-0.1; }; const $increase_layout=()=>{$viewport.setAttribute('content','width=device-width, initial-scale='+String(i));i=i+0.1;}; document.getElementById('decrease_layout').addEventListener('click',$decrease_layout);document.getElementById('increase_layout').addEventListener('click',$increase_layout);
