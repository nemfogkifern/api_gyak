//Asteroids
const apiKey = 'yVx7iKgBpMRdV6NUDtxfIDZgcjHblflO1tezTiIV';

var pageNum = 0;




const previousButton = document.getElementById('asteroidPrevious');
const nextButton = document.getElementById('asteroidNext');

previousButton.addEventListener('click', function() {
    if (pageNum === 0) {

        return;
    }
    pageNum -= 1;

    var tbody = document.getElementById('asteroidTable');
    tbody.innerHTML = '';

    updateAsteroids();
    updatePageNumber();
});

nextButton.addEventListener('click', function() {
    pageNum += 1;

    var tbody = document.getElementById('asteroidTable');
    tbody.innerHTML = '';

    updateAsteroids();
    updatePageNumber();
});

updateAsteroids();
updatePageNumber();

function updateAsteroids() {
    var asteroidsApiUrl = `http://api.nasa.gov/neo/rest/v1/neo/browse?page=${pageNum}&size=20&api_key=${apiKey}`;

    fetch(asteroidsApiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
)
.then(data => {
    var asteroids = new Array();

    var nearEarthObjects = data.near_earth_objects;

    var tbody = document.getElementById('asteroidTable');

    for (let i = 0; i < nearEarthObjects.length; i++) {
        const asteroidName = nearEarthObjects[i].name;

        const asteroidDiameterMax = parseFloat(nearEarthObjects[i].estimated_diameter.kilometers.estimated_diameter_max).toFixed(2);

        const orbitalPeriod = parseFloat(nearEarthObjects[i].orbital_data.orbital_period).toFixed(2);

        const firstObservationDate = (nearEarthObjects[i].orbital_data.first_observation_date);

        const isPotentiallyHazardous = nearEarthObjects[i].is_potentially_hazardous_asteroid;

        const moreInfo = nearEarthObjects[i].nasa_jpl_url;


        asteroids.push({
            name: asteroidName,
            diameter: asteroidDiameterMax,
            orbitalPeriod: orbitalPeriod,
            firstObservationDate: firstObservationDate,
            isPotentiallyHazardous: isPotentiallyHazardous,
            moreInfo: moreInfo
        });

        var tr = document.createElement('tr');
        tr.innerHTML = `<td>${asteroidName}</td>
                        <td>${asteroidDiameterMax}</td>
                        <td>${orbitalPeriod}</td>
                        <td>${firstObservationDate}</td>
                        <td>${isPotentiallyHazardous}</td>
                        <td class="asteroid-more-info"><a href="${moreInfo}" target="_blank">More info</a></td>`;
        tbody.appendChild(tr);
    }
})
}

function updatePageNumber() {
    var pageNumber = document.getElementById('pageNumber');
    pageNumber.innerHTML = `Page ${pageNum + 1}`;
}