const API_KEY = "29171b1f93552b9c86bb447217b270e7";

async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.cod !== 200) {
      document.getElementById("result").innerHTML = "City not found!";
      return;
    }

    document.getElementById("result").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>☁ Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;

  } catch (error) {
    document.getElementById("result").innerHTML = "Error loading data";
  }

}