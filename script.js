// Pseudocode for hamburger menu
//1) make variables out of elements I will use
    // this includes nav, ul, li

    const navElement = document.getElementsByClassName('navBar');
    const ulElement = document.getElementsByClassName('menu');
    const liElement = document.getElementsByClassName('menuItem');
    // make a variable for my button
    const menuButton = document.getElementsByClassName('hamburgerButton')[0];

//3) add click event listener to button element that will open up the menu when user clicks it
    // clickHandler function
    clickHandler = function(event){
        
    }
    menuButton.addEventListener('click', clickHandler)
    
