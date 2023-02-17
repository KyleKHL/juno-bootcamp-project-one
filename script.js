// Pseudocode for hamburger menu
//1) make variables out of elements I will use
    // this includes nav, ul, li

    const navElement = document.getElementsByClassName('navBar');
    const ulElement = document.getElementsByClassName('menu');
    const liElement = document.getElementsByClassName('menuItem');

//2) Create button element and append to end of the nav bar
    const menuButton = document.createElement('button');
    
    ulElement.appendChild(menuButton);

    // customize CSS for the button
    menuButton.style.width = '100px';
    menuButton.style.height = '100px';
//3) add click event listener to button element that will open up the menu when user clicks it
    // clickHandler function
    clickHandler = function(event){
        console.log(event)
    }
    menuButton.addEventListener('click', clickHandler)

