const API_KEY = "https://api.openweathermap.org/data/2.5/weather?q=Coimbatore&appid=YOUR_API_KEY&units=metric";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const weatherCard = document.getElementById("weatherCard");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");

async function fetchWeather(city) {

    try {
        error.textContent = "";
        weatherCard.classList.add("hidden");
        loading.classList.remove("hidden");

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (err) {
        error.textContent = err.message;
    } finally {
        loading.classList.add("hidden");
    }
}

function displayWeather(data) {

    /*
      Nested JSON Example:

      data.main.temp
      data.main.humidity
      data.wind.speed
      data.weather[0].description
    */

    cityName.textContent = data.name;

    temperature.textContent = data.main.temp;

    humidity.textContent = data.main.humidity;

    wind.textContent = data.wind.speed;

    condition.textContent =
        data.weather[0].description;

    weatherCard.classList.remove("hidden");
}

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (!city) {
        error.textContent = "Please enter a city name.";
        return;
    }

    fetchWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
