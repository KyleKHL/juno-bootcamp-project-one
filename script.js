// hamburger menu
const burgerMenu = {};

burgerMenu.toggleHam = document.querySelector('#hamburgerButton');
burgerMenu.menu = document.querySelector('#menuContainer');
burgerMenu.burgerIcon = document.querySelector('#hamburgerIcon');
burgerMenu.navLinks = document.querySelectorAll('.navLink');

burgerMenu.toggleHam.addEventListener('click', function(event){
    event.preventDefault();
    burgerMenu.menu.classList.toggle('menuContainer');
    burgerMenu.burgerIcon.classList.toggle('fa-bars');
    burgerMenu.burgerIcon.classList.toggle('fa-xmark');
})

burgerMenu.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.menu.classList.toggle('menuContainer');
    })
});