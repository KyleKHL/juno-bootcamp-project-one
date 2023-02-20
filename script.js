// Pseudocode for hamburger menu
//1) make variables out of elements I will use
    // this includes nav, ul, li

    const navElement = document.getElementsByClassName('navBar');
    const ulElement = document.querySelector('.menu');
    const liElement = document.querySelectorAll('.menuItem');
    // make a variable for my button
    const menuButton = document.getElementsByClassName('hamburgerButton')[0];

//2) add click event listener to button element that will open up the menu when user clicks it
    // clickHandler function
    clickHandler = function(){
        if (ulElement.style.display === 'flex'){
            ulElement.style.display = 'none';
        } else {
            ulElement.style.display = 'flex';
            
        }
    }

    // event listener
    menuButton.addEventListener('click', clickHandler)
    
// *************************************************
// Pseudocode for image carasol
// 1) link variables to elements that will be used

    // variable for section that holds gallery
    const gallerySection = document.querySelector('.plantGallery')
    // variable for the wrapper that is direct parent to gallery
    const galleryWrapper = document.getElementById('plantGalleryWrapper')
    // variable the gallery itself a ul element
    const gallery = document.querySelector('.galleryList');
    gallery.style.justifyContent = 'space-evenly'
    // variable for the images in the gallery
    const image = document.querySelectorAll('.galleryImg');
        //* in order to change NODELIST into ARRAY
    const imgArray = Array.from(image);

// create a carousel div to contain the selected element

    const carousel = document.createElement('div');

    carousel.style.width = '60%';
    carousel.style.display = 'block';
    carousel.style.listStyle = 'none';
// append this carousel div to the end of ul element
    galleryWrapper.insertAdjacentElement('afterbegin',carousel);
    galleryWrapper.style.display = 'flex';
    galleryWrapper.style.flexDirection = 'column';
    galleryWrapper.style.alignItems = 'center';

// 2) create a left and right button
    const leftButton = document.createElement('button');
    const rightButton = document.createElement('button');
    // create arrow icons
    leftButton.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
    rightButton.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';

    // also a div to contain the buttons
    const buttonDiv = document.createElement('div');

// 2b) and append buttons to the end of plant gallery section so that it will sit under the images
    // create icon elements for button with 
    galleryWrapper.append(buttonDiv);
    buttonDiv.appendChild(leftButton);
    buttonDiv.appendChild(rightButton);

// connect images to be displayed on carousel div
    // create a function to acheive this and connect image index starting poitn of zero to the carousel itself
    // setting image index as zero
    let imageIndex = 0;

    carousel.src = imgArray[imageIndex];
    imgArray[imageIndex].style.textDecoration = 'none';

    // append the image to the carousel container
    carousel.append(imgArray[0]);
// 3) Create a event listener for left button to cycle through the images
    leftButtonClickHandler = function(event){
        // to loop through the image index
        imageIndex--;
        // use conditional statement
        if (imageIndex < 0){
            imageIndex = 2
        }
        
        carousel.append(imgArray[imageIndex]);
        // used multiple conditional statements 
        if(imageIndex === 2){
        gallery.appendChild(imgArray[0]);
        } else if(imageIndex === 1){
        gallery.appendChild(imgArray[2])
        } else if(imageIndex === 0){
        gallery.appendChild(imgArray[1])
        }
    }

    leftButton.addEventListener('click', leftButtonClickHandler)

// RIGHT Button event listener
    rightButtonClickHandler = function (event) {
        
        imageIndex++;
        if (imageIndex > 2) {
            imageIndex = 0
        }

        carousel.append(imgArray[imageIndex]);

        if (imageIndex === 1) {
            gallery.appendChild(imgArray[0]);
        } else if (imageIndex === 2) {
            gallery.appendChild(imgArray[1])
        } else if (imageIndex === 0) {
            gallery.appendChild(imgArray[2])
        }


    }

    rightButton.addEventListener('click', rightButtonClickHandler)

// *************************************************
// Code for dark mode toggle button
// 1) create toggle button and pin it to end of navbar 
// 2) create a click addEventListener for the button
// 3) target the section elements to change the background color 
// 3b) target to change body font color



