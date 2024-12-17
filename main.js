
const apiKey = 'cSVNaRX7SQkPWhn0joajpLmB1hBVpbIPnDXTfehc'; // Cseréld ki a saját API kulcsodra
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
    console.error('Hiba történt:', error);
    apodDescription.textContent = 'Hiba történt az adat betöltése közben.';
  });
