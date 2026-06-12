const API_KEY = "98a895c36f944c0ff64b0b62c914bac3";

async function getWeather() {
  try {
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Coimbatore,IN&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    console.log("Temperature:", data.main.temp);
    console.log("Humidity:", data.main.humidity);
    console.log("Wind Speed:", data.wind.speed);
  } catch (error) {
    console.error(error.message);
  }
}

getWeather();
