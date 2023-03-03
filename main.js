const navbar = document.querySelector('nav');

window.onscroll = ()=> {
    if(window.scrollY > 20) {
        navbar.classList.remove('border-top');
    } else {
        navbar.classList.add('border-top');
    }
}