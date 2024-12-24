const apiKey = 'yVx7iKgBpMRdV6NUDtxfIDZgcjHblflO1tezTiIV';

//Apod
const apodApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

const apodImage = document.getElementById('apodImage');
const apodDescription = document.getElementById('apodDescription');
const apodTitle = document.getElementById('apodTitle');
const apodDate = document.getElementById('apodDate');

fetch(apodApiUrl)
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