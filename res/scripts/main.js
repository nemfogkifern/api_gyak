
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
var nav = document.querySelector('nav');
var hamburger = document.querySelector('.hamburger');

var topBar = document.querySelector('.bar-top');
var middleBar = document.querySelector('.bar-middle');
var bottomBar = document.querySelector('.bar-bottom');

hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');

    topBar.classList.toggle('bar-active-top');
    middleBar.classList.toggle('bar-active-middle');
    bottomBar.classList.toggle('bar-active-bottom');

    topBar.classList.toggle('bar-active-top-reverse');
    middleBar.classList.toggle('bar-active-middle-reverse');
    bottomBar.classList.toggle('bar-active-bottom-reverse');

});