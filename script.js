// create hamburger menu
// create cariable for hamburger button
const toggleHam = document.getElementsByClassName('toggleHamburger')[0];
const menu = document.getElementsByClassName('menuLinks')[0];
console.log(toggleHam)
console.log(menu)

// write add event listener 
toggleHam.addEventListener('click', function(){
    menu.classList.toggle('menuLinks')
})

// *************************************************
// Code for dark mode toggle button
// 1) create toggle button with light and dark options and pin it to end of navbar.  
// 2) create a click addEventListener for the button
// 3) target the section elements to change the background color 
// 3b) target to change body font color

