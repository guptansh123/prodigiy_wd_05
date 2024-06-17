// Replace with your OpenWeatherMap API key
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';

function getWeather() {
    const locationInput = document.getElementById('location-input').value;
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            updateWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching weather data');
        });
}

function updateWeather(data) {
    document.getElementById('location').textContent = data.name;
    document.getElementById('weather').textContent = data.weather[0].main;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent = data.weather[0].description;
}
