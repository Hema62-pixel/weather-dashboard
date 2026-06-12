const API_KEY = "ed1283c5152ec2d6cc5d98a4d4653d11";

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Coimbatore,IN&appid=${ed1283c5152ec2d6cc5d98a4d4653d11}&units=metric`
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
