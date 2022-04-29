const API_KEY = "d65480ee2e36c89e5e5949279c0b3fa4";
const DEFAULT_VALUE = "--";
const searchInput = document.querySelector("#search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const winSpeed = document.querySelector(".win-speed");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${API_KEY}&units=metric&lang=vi`
  ).then(async (response) => {
    const data = await response.json();

    cityName.innerHTML = data.name || DEFAULT_VALUE;
    weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
    temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;
    weatherIcon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    humidity.innerHTML = data.main.humidity || DEFAULT_VALUE;
    winSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
    sunrise.innerHTML =
      moment.unix(data.sys.sunrise).format("H:mm") || DEFAULT_VALUE;
    sunset.innerHTML =
      moment.unix(data.sys.sunset).format("H:mm") || DEFAULT_VALUE;
  });
});
