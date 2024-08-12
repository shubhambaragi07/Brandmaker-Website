function fetchWeather() {
    const city = 'Bengaluru';
    const apiKey = '5337550c5f7a11af523c799517472e6e'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weather-description').textContent = description.charAt(0).toUpperCase() + description.slice(1);
            document.getElementById('temperature').textContent = `${temp}°C`;
            document.getElementById('weather-details').textContent = `Humidity: ${humidity}% | Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-description').textContent = 'Unable to fetch weather data.';
            document.getElementById('temperature').textContent = '';
            document.getElementById('weather-details').textContent = '';
        });
}

// Fetch weather data on page load
fetchWeather();
