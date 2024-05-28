function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    
    const apiKey = 'e4bd98457e0f64ea6313738196ff46d2'; // Replace 'YOUR_API_KEY' with your actual API key
    let apiUrl = null;
    let method = null;
    if (!isNaN(lat) && !isNaN(lon)) {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        method = `latitude and longitude`;
    } else {
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        method = `city`;
    }

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<h2>Weather in ${data.name} by ${method}</h2>
                            <p>Temperature: ${data.main.temp} &#8451;</p>
                            <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      })
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
