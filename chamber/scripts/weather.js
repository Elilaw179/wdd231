// // select HTML elements in the document
// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');\


// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data); // testing only
//         // displayResults(data); // uncomment when ready
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
//   apiFetch();
  
//   function displayResults(data) {
//     currentTemp.innerHTML = `${data._____}&deg;F`;
//     const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
//     let desc = data.weather[0].______;
//     weatherIcon.setAttribute('___', _____);
//     weatherIcon.setAttribute('___', _____);
//     captionDesc.textContent = `${desc}`;
//   }




const apiKey = '9de95ed1bd2503d8b9413e95f740b076';
const city = 'Timbuktu'; // Replace with the chamber's location
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;





async function fetchWeather() {
  const weatherContainer = document.querySelector('.c-weather-p');
  const forecastContainer = document.querySelector('.f-weather');

  try {
    // Show loading state
    weatherContainer.innerHTML = '<p>Loading weather data...</p>';
    forecastContainer.innerHTML = '<p>Loading forecast data...</p>';

    const response = await fetch(weatherApiUrl);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const weatherData = await response.json();

    // Process current weather
    const current = weatherData.list[0];
    weatherContainer.innerHTML = `
      <p>${Math.round(current.main.temp)}°F</p>
      <p>${current.weather.map(w => capitalize(w.description)).join(', ')}</p>
      <p>High: ${Math.round(current.main.temp_max)}°F</p>
      <p>Low: ${Math.round(current.main.temp_min)}°F</p>
      <p>Humidity: ${current.main.humidity}%</p>
      <p>Sunrise: ${formatTime(weatherData.city.sunrise)}</p>
      <p>Sunset: ${formatTime(weatherData.city.sunset)}</p>
    `;

    // Process 3-day forecast
    forecastContainer.innerHTML = '<h4>Weather Forecast</h4>';
    for (let i = 1; i <= 3; i++) {
      const forecast = weatherData.list[i * 8]; // Approx. 24-hour intervals
      const day = new Date(forecast.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
      forecastContainer.innerHTML += `
        <p>${day}: ${Math.round(forecast.main.temp)}°F</p>
      `;
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    weatherContainer.innerHTML = '<p>Unable to load weather data. Please try again later.</p>';
    forecastContainer.innerHTML = '';
  }
}



// Utility functions
function capitalize(text) {
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
}

// Call the fetchWeather function
fetchWeather();
