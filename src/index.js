import { config } from "./config";
import searchSvg from "./images/search-svg.svg";
import "./styles.css";

// const searchBtn = document.querySelector(".search-button");
// const svgImg = document.createElement("img");
// svgImg.src = searchSvg;
// searchBtn.appendChild(svgImg);
async function fetchWeatherData(dataType = "current", location = "istanbul") {
  try {
    const weather_api = `https://api.weatherapi.com/v1/${dataType}.json?key=${
      config.apiKey
    }&q=${location.toLowerCase()}&days=3`;

    const response = await fetch(weather_api);
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function processData(data) {
  const weatherData = {
    name: data.location.name,
    country: data.location.country,
    temp_c: data.current.temp_c,
    temp_f: data.current.temp_f,
    feelslike_c: data.current.feelslike_c,
    feelslike_f: data.current.feelslike_f,
    day: data.current.is_day,
    condition: { ...data.current.condition },
    humidity: data.current.humidity,
    cloud: data.current.cloud,
  };
  return weatherData;
}

function getWeatherData(dataType, location = "istanbul") {
  fetchWeatherData(dataType, location).then((data) => {
    const weatherData = processData(data);
    console.log(weatherData);
  });
}

getWeatherData("forecast");
