import { getWeatherData } from "./fetch-weather-data";

function init_search() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-icon");

  searchButton.addEventListener("click", () => {
    getWeatherData(searchInput.value).then((data) => {
      console.log(data);
      updateDom(data);
    });
  });
}

function updateDom(data) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";

  const sectionHeader = createHeaderSection(data);
  const sectionWeather = createWeatherSection(data);

  mainContainer.appendChild(sectionHeader);
  mainContainer.appendChild(sectionWeather);
}

function createWeatherSection(data) {
  const sectionWeather = createDiv("section-weather");

  const weatherMain = createDiv("weather-main");
  const weatherMainTop = createDiv("weather-main-top");
  const weatherMainBottom = createDiv("weather-main-bottom");
  const iconWeather = createSpan("icon-weather", data.current.condition.text);
  const tempWeather = createSpan("temp-weather", data.current.temp_c);
  const sky_condition = createSpan(
    "sky-condition",
    data.current.condition.text
  );
  const feelsLike = createSpan(
    "feelslike",
    `Feels like ${data.current.feelslike_c}`
  );

  weatherMainTop.append(iconWeather, tempWeather);
  weatherMainBottom.append(sky_condition, feelsLike);
  weatherMain.append(weatherMainTop, weatherMainBottom);

  const weatherDetails = createDiv("weather-details");

  const windDiv = createDiv("details");
  const windParaHeader = createPara("Wind");
  const windParaContent = createPara(`${data.current.wind_kph}m/s`);
  windDiv.append(windParaHeader, windParaContent);

  const humidityDiv = createDiv("details");
  const humidityParaHeader = createPara("Humidity");
  const humidityParaContent = createPara(`${data.current.humidity}%`);
  humidityDiv.append(humidityParaHeader, humidityParaContent);

  const uvDiv = createDiv("details");
  const uvParaHeader = createPara("UV index");
  const uvParaContent = createPara(`${data.current.uv}`);
  uvDiv.append(uvParaHeader, uvParaContent);

  const visDiv = createDiv("details");
  const visParaHeader = createPara("Visibility");
  const visParaContent = createPara(`${data.current.vis_km}`);
  visDiv.append(visParaHeader, visParaContent);

  const cloudDiv = createDiv("details");
  const cloudParaHeader = createPara("Cloudiness");
  const cloudParaContent = createPara(`${data.current.cloud}%`);
  cloudDiv.append(cloudParaHeader, cloudParaContent);

  const rainChanceDiv = createDiv("details");
  const rainChanceParaHeader = createPara("Chance of rain");
  const rainChanceParaContent = createPara(`${data.current.chance_of_rain}%`);
  rainChanceDiv.append(rainChanceParaHeader, rainChanceParaContent);

  const sunriseDiv = createDiv("details");
  const sunriseParaHeader = createPara("Sunrise");
  const sunriseParaContent = createPara(`${data.current.sunrise}`);
  sunriseDiv.append(sunriseParaHeader, sunriseParaContent);

  const sunsetDiv = createDiv("details");
  const sunsetParaHeader = createPara("Sunset");
  const sunsetParaContent = createPara(`${data.current.sunset}`);
  sunsetDiv.append(sunsetParaHeader, sunsetParaContent);

  weatherDetails.append(
    windDiv,
    humidityDiv,
    uvDiv,
    visDiv,
    cloudDiv,
    rainChanceDiv,
    sunriseDiv,
    sunsetDiv
  );
  sectionWeather.append(weatherMain, weatherDetails);

  return sectionWeather;
}

function createHeaderSection(data) {
  const sectionHeader = createDiv("section-header");

  const locationHeader = document.createElement("h1");
  locationHeader.textContent = `${data.location.name}, ${data.location.country}`;

  const dateHeader = document.createElement("h2");
  dateHeader.textContent = `${data.location.localtime}`;

  sectionHeader.appendChild(locationHeader);
  sectionHeader.appendChild(dateHeader);

  return sectionHeader;
}

function createPara(text) {
  const para = document.createElement("p");
  para.textContent = text;

  return para;
}

function createSpan(className, text) {
  const span = document.createElement("span");
  span.classList.add(className);
  span.textContent = text;

  return span;
}

function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);

  return div;
}

export { init_search };
