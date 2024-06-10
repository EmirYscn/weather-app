import { config } from "./config";
import "./styles.css";

async function fetchWeatherData(location = "istanbul") {
  try {
    const weather_api = `https://api.weatherapi.com/v1/current.json?key=${
      config.apiKey
    }&q=${location.toLowerCase()}`;

    const response = await fetch(weather_api);
    const weatherData = await response.json();

    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function clearData(data) {
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

fetchWeatherData().then((data) => {
  const weatherData = clearData(data);
  console.log(weatherData);
});
