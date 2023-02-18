// Pseudocode for hamburger menu
//1) make variables out of elements I will use
    // this includes nav, ul, li

    const navElement = document.getElementsByClassName('navBar');
    const ulElement = document.querySelector('.menu');
    const liElement = document.querySelectorAll('.menuItem');
    // make a variable for my button
    const menuButton = document.getElementsByClassName('hamburgerButton')[0];
    console.log(ulElement)

    // create a variable for media query
    const mediaQuery = window.matchMedia('(max-width:750px)')
//2) add click event listener to button element that will open up the menu when user clicks it
    // clickHandler function
    clickHandler = function(){
        if (ulElement.style.display === 'flex' && mediaQuery.matches){
            ulElement.style.display = 'none';
        } else {
            ulElement.style.display = 'flex';
            
        }
    }

    // event listener itself
    menuButton.addEventListener('click', clickHandler)
    
