const navbar = document.querySelector('nav');

window.onscroll = ()=> {
    if(window.scrollY > 20) {
        navbar.classList.remove('border-top');
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.add('border-top');
        navbar.classList.remove('shadow-sm');
    }
}