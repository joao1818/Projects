


const toggleBtn = document.getElementById('nav__toggle');
const closeBtn = document.getElementById('nav__close');
const navMenu = document.getElementById('header-menu');
const navButtons = document.getElementsByClassName('btn-nav');
const navLink = document.querySelectorAll('.header-links');

/* Hide and Apear Hamburger Button */
    if(toggleBtn){
        toggleBtn.addEventListener("click", ()=>{
            toggleBtn.classList.add('btn-hidden');
            closeBtn.classList.remove('btn-hidden');
            navMenu.classList.add('show-menu')
        })
    }
    
    if(closeBtn){
        closeBtn.addEventListener("click", ()=>{
            toggleBtn.classList.toggle('btn-hidden');
            closeBtn.classList.toggle('btn-hidden');
            navMenu.classList.remove('show-menu')
        })
    }

/* Remove the nav menu when the button is clicked */
navLink.forEach(e => e.addEventListener("click", ()=>{
    navMenu.classList.remove('show-menu');
}))

