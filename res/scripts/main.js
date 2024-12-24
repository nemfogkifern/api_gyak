
const apiKey = 'cSVNaRX7SQkPWhn0joajpLmB1hBVpbIPnDXTfehc';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;


const apodImage = document.getElementById('apodImage');
const apodDescription = document.getElementById('apodDescription');
const apodTitle = document.getElementById('apodTitle');
const apodDate = document.getElementById('apodDate');

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    
    apodImage.src = data.url;
    apodImage.alt = data.title; 
    apodTitle.textContent = data.title;
    apodDate.textContent = data.date;
    apodDescription.textContent = data.explanation; 
  })
  .catch(error => {
    console.error('Error::', error);
  });





// Burger Menu
var menu = document.querySelector('.menu');
var hamburger = document.querySelector('.hamburger');

var topBar = document.querySelector('.bar-top');
var middleBar = document.querySelector('.bar-middle');
var bottomBar = document.querySelector('.bar-bottom');


hamburger.addEventListener('click', function() {
    if (menu.classList.contains('active') && menu.classList.contains('active-reverse')) {
        menu.classList.remove('active-reverse');
    }

    else if (menu.classList.contains('active')) {
        menu.classList.add('active-reverse');
    }
    else {
        menu.classList.add('active');

    }

    if (topBar.classList.contains('bar-active-top-reverse') && topBar.classList.contains('bar-active-top')) { 

      topBar.classList.remove('bar-active-top-reverse');
      middleBar.classList.remove('bar-active-middle-reverse');
      bottomBar.classList.remove('bar-active-bottom-reverse');
    }
    else if (topBar.classList.contains('bar-active-top')) {
        topBar.classList.add('bar-active-top-reverse');
        middleBar.classList.add('bar-active-middle-reverse');
        bottomBar.classList.add('bar-active-bottom-reverse');



    }

    else {
        topBar.classList.add('bar-active-top');
        middleBar.classList.add('bar-active-middle');
        bottomBar.classList.add('bar-active-bottom');

    }
})



// Close Menu
// document.addEventListener('click', function(event) {
//     if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
//         menu.classList.remove('active');

//         topBar.classList.remove('bar-active-top');
//         middleBar.classList.remove('bar-active-middle');
//         bottomBar.classList.remove('bar-active-bottom');

//         topBar.classList.remove('bar-active-top-reverse');
//         middleBar.classList.remove('bar-active-middle-reverse');
//         bottomBar.classList.remove('bar-active-bottom-reverse');
//     }
// });

