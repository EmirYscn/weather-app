import { config } from "./config";

async function fetchWeatherData(location = "istanbul") {
  try {
    const weather_api = `https://api.weatherapi.com/v1/forecast.json?key=${
      config.apiKey
    }&q=${location.toLowerCase()}&days=4`;

    const response = await fetch(weather_api);
    const weatherData = await response.json();
    console.log(weather_api);
    console.log(weatherData);
    return weatherData;
  } catch (err) {
    console.log(err);
  }
}

function processData(data) {
  const weatherData = {
    forecast: {
      forecastday: [
        {
          date: data.forecast.forecastday[1].date,
          astro: {
            sunset: data.forecast.forecastday[1].astro.sunset,
            sunrise: data.forecast.forecastday[1].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[1].day.condition },
            maxtemp_c: data.forecast.forecastday[1].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[1].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[1].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[1].day.mintemp_f,
          },
          hour: [...data.forecast.forecastday[1].hour],
        },
        {
          date: data.forecast.forecastday[2].date,
          astro: {
            sunset: data.forecast.forecastday[2].astro.sunset,
            sunrise: data.forecast.forecastday[2].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[2].day.condition },
            maxtemp_c: data.forecast.forecastday[2].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[2].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[2].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[2].day.mintemp_f,
          },
          hour: [...data.forecast.forecastday[2].hour],
        },
        {
          date: data.forecast.forecastday[3].date,
          astro: {
            sunset: data.forecast.forecastday[3].astro.sunset,
            sunrise: data.forecast.forecastday[3].astro.sunrise,
          },
          day: {
            condition: { ...data.forecast.forecastday[3].day.condition },
            maxtemp_c: data.forecast.forecastday[3].day.maxtemp_c,
            maxtemp_f: data.forecast.forecastday[3].day.maxtemp_f,
            mintemp_c: data.forecast.forecastday[3].day.mintemp_c,
            mintemp_f: data.forecast.forecastday[3].day.mintemp_f,
          },
          hour: [...data.forecast.forecastday[3].hour],
        },
      ],
    },
    current: {
      temp_c: data.current.temp_c,
      temp_f: data.current.temp_f,
      feelslike_c: data.current.feelslike_c,
      feelslike_f: data.current.feelslike_f,
      day: data.current.is_day,
      condition: { ...data.current.condition },
      humidity: data.current.humidity,
      cloud: data.current.cloud,
      wind_kph: data.current.wind_kph,
      uv: data.current.uv,
      vis_km: data.current.vis_km,
      chance_of_rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      sunset: data.forecast.forecastday[0].astro.sunset,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
    },
    location: {
      localtime: data.location.localtime,
      name: data.location.name,
      country: data.location.country,
    },
  };
  return weatherData;
}

async function getWeatherData(location = "istanbul") {
  const data = await fetchWeatherData(location);
  const weatherData = processData(data);
  return weatherData;
}

export { getWeatherData };
