import { getWeatherData } from "./fetch-weather-data";
import { getDateAsDay, getDateAsHour, getFormattedDate } from "./date-manip";

const degrees = {
  current: "c", // TODO switch to c or f
};

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item).default || r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const imagesAnimated = importAll(
  require.context("./images/animated", false, /\.(png|jpe?g|svg)$/)
);

const imagesUV = importAll(
  require.context("./images/UV", false, /\.(png|jpe?g|svg)$/)
);

const uvImages = {
  1: imagesUV["UV_1.svg"],
  2: imagesUV["UV_2.svg"],
  3: imagesUV["UV_3.svg"],
  4: imagesUV["UV_4.svg"],
  5: imagesUV["UV_5.svg"],
  6: imagesUV["UV_6.svg"],
  7: imagesUV["UV_7.svg"],
  8: imagesUV["UV_8.svg"],
  9: imagesUV["UV_9.svg"],
  10: imagesUV["UV_10.svg"],
};

const weatherImages = {
  app_logo: images["app_logo.svg"],
  sunrise: images["sunrise.svg"],
  sunset: images["sunset.svg"],
  day: imagesAnimated["day.svg"],
  night: imagesAnimated["night.svg"],
  partly_cloudy: imagesAnimated["cloudy-day-2.svg"],
  cloudy: imagesAnimated["cloudy.svg"],
  sunny_rainy: imagesAnimated["rainy-1.svg"],
  rainy: imagesAnimated["rainy-6.svg"],
  sunny_snowy: imagesAnimated["snowy-1.svg"],
  snowy: imagesAnimated["snowy-5.svg"],
  thunder: imagesAnimated["thunder.svg"],
  uv: images["uv.svg"],
  wind: images["wind.svg"],
  humidity: images["humidity.svg"],
  chance_of_rain: images["chance-of-rain.svg"],
  visibility: images["visibility.svg"],
  cloud_percentage: images["cloud_percentage.svg"],
};
const weatherCodes = {
  1000: weatherImages.day,
  1003: weatherImages.partly_cloudy,
  1006: weatherImages.cloudy,
  1066: weatherImages.sunny_snowy,
  1014: weatherImages.snowy,
  1180: weatherImages.sunny_rainy,
  1195: weatherImages.rainy,
  1273: weatherImages.thunder,
};
function getWeatherIcon(weatherCode) {
  let code = weatherCode;
  // cloudy
  if (
    code === 1009 ||
    code === 1030 ||
    code === 1009 ||
    code === 1135 ||
    code === 1147
  ) {
    code = 1006;
    return weatherCodes[code];
  }
  // rainy
  if (
    code === 1063 ||
    code === 1030 ||
    code === 1009 ||
    code === 1069 ||
    code === 1072 ||
    code === 1150 ||
    code === 1153 ||
    (code >= 1168 && code <= 1207) ||
    (code >= 1240 && code <= 1252)
  ) {
    code = 1195;
    return weatherCodes[code];
  }

  // snowy
  if (
    code === 1066 ||
    code === 1114 ||
    code === 1117 ||
    (code >= 1210 && code <= 1225) ||
    code === 1237 ||
    (code >= 1255 && code <= 1264)
  ) {
    code = 1014;
    return weatherCodes[code];
  }

  //thunder
  if (code === 1087 || (code >= 1273 && code <= 1282)) {
    code = 1273;
    return weatherCodes[code];
  }

  return weatherCodes[code];
}

function initializeSearchHandlers() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-icon");

  searchButton.addEventListener("click", () => {
    getWeatherData(searchInput.value).then((data) => {
      console.log(data);
      updateDom(data);
    });
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      getWeatherData(searchInput.value).then((data) => {
        console.log(data);
        updateDom(data);
      });
    }
  });
}

function updateDom(data) {
  const mainContainer = document.querySelector(".main-container");
  mainContainer.innerHTML = "";

  const sectionHeader = createHeaderSection(data);
  const sectionWeather = createWeatherSection(data);
  const sectionForecast = createForecastSection(data); // TODO

  mainContainer.appendChild(sectionHeader);
  mainContainer.appendChild(sectionWeather);
  mainContainer.appendChild(sectionForecast); // TODO
}

function createWeatherSection(data) {
  // create main weather section div
  const sectionWeather = createDiv("section-weather");

  //create weather main and its child container divs
  const weatherMain = createDiv("weather-main");
  const weatherMainTop = createDiv("weather-main-top");
  const weatherMainBottom = createDiv("weather-main-bottom");

  // create weather data divs for weather main div
  const iconWeather = createImg(
    "icon-weather",
    getWeatherIcon(data.current.condition.code),
    data.current.condition.text
  );

  const tempWeather = createSpan(
    `temp-weather-${degrees.current}`,
    data.current[`temp_${degrees.current}`]
  );
  const sky_condition = createSpan(
    "sky-condition",
    data.current.condition.text
  );

  const feelsLike = createSpan(
    `feelslike-${degrees.current}`,
    `Feels like ${data.current[`feelslike_${degrees.current}`]}`
  );

  // append data divs to weather main div
  weatherMainTop.append(iconWeather, tempWeather);
  weatherMainBottom.append(sky_condition, feelsLike);
  weatherMain.append(weatherMainTop, weatherMainBottom);

  // create div for weather details
  const weatherDetails = createDiv("weather-details");

  // wind div
  const windDiv = createDiv("details");
  const windParaHeader = createImg(
    "weather-img",
    weatherImages.wind,
    "wind speed"
  );
  const windParaContent = createPara(`${data.current.wind_kph}m/s`);
  windDiv.append(windParaHeader, windParaContent);

  //humidity div
  const humidityDiv = createDiv("details");
  const humidityParaHeader = createImg(
    "weather-img",
    weatherImages.humidity,
    "humidity"
  );
  const humidityParaContent = createPara(`${data.current.humidity}%`);
  humidityDiv.append(humidityParaHeader, humidityParaContent);

  // uv index div
  const uvDiv = createDiv("details");
  const uvParaHeader = createImg("weather-img", weatherImages.uv, "UV index");
  const uvParaContent = createImg(
    "uv-img",
    uvImages[`${data.current.uv}`],
    `UV index: ${data.current.uv}`
  );
  uvDiv.append(uvParaHeader, uvParaContent);

  // visibility div
  const visDiv = createDiv("details");
  const visParaHeader = createImg(
    "weather-img",
    weatherImages.visibility,
    "visibility"
  );
  const visParaContent = createPara(`${data.current.vis_km}`);
  visDiv.append(visParaHeader, visParaContent);

  // cloudiness div
  const cloudDiv = createDiv("details");
  const cloudParaHeader = createImg(
    "weather-img",
    weatherImages.cloud_percentage,
    "cloudiness"
  );
  const cloudParaContent = createPara(`${data.current.cloud}%`);
  cloudDiv.append(cloudParaHeader, cloudParaContent);

  //chance of rain div
  const rainChanceDiv = createDiv("details");
  const rainChanceParaHeader = createImg(
    "weather-img",
    weatherImages.chance_of_rain,
    "chance of rain"
  );
  const rainChanceParaContent = createPara(`${data.current.chance_of_rain}%`);
  rainChanceDiv.append(rainChanceParaHeader, rainChanceParaContent);

  // sunrise div
  const sunriseDiv = createDiv("details");
  // const sunriseParaHeader = createPara("Sunrise");
  const sunriseImg = createImg("weather-img", weatherImages.sunrise, "sunrise");
  const sunriseParaContent = createPara(`${data.current.sunrise}`);
  sunriseDiv.append(sunriseImg, sunriseParaContent);

  // sunset div
  const sunsetDiv = createDiv("details");
  // const sunsetParaHeader = createPara("Sunset");
  const sunsetImg = createImg("weather-img", weatherImages.sunset, "sunset");
  const sunsetParaContent = createPara(`${data.current.sunset}`);
  sunsetDiv.append(sunsetImg, sunsetParaContent);

  // append all divs to main weather details div
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

  // append weather main and weather details divs to main section
  sectionWeather.append(weatherMain, weatherDetails);

  return sectionWeather;
}

function createForecastSection(data) {
  const sectionForecast = createDiv("section-forecast");

  data.forecast.forecastday.forEach((day) => {
    sectionForecast.appendChild(createForecastDays(day));
  });
  return sectionForecast;
}

function createForecastDays(data) {
  const dayDiv = createDiv("day");
  const topDiv = createDiv("day-top-div");
  const bottomDiv = createDiv("day-bottom-div");
  const leftBottomDiv = createDiv("day-left-bottom-div");
  const rightBottomDiv = createDiv("day-right-bottom-div");
  const hourlyDiv = createHourly(data);

  const dayDate = createSpan("day-date", getDateAsDay(data.date));

  const condition = createImg(
    "day-condition",
    getWeatherIcon(data.day.condition.code),
    data.day.condition.text
  );
  const mintemp = createSpan(
    `min-temp-${degrees.current}`,
    `${data.day[`mintemp_${degrees.current}`]}`
  );
  const maxtemp = createSpan(
    `max-temp-${degrees.current}`,
    data.day[`maxtemp_${degrees.current}`]
  );

  leftBottomDiv.append(condition);
  rightBottomDiv.append(mintemp, maxtemp);

  topDiv.appendChild(dayDate);
  bottomDiv.append(leftBottomDiv, rightBottomDiv, hourlyDiv);
  dayDiv.append(topDiv, bottomDiv);

  dayDiv.addEventListener("click", () => {
    const hourlyDivs = document.querySelectorAll(".hourly-div");
    const isHidden = hourlyDiv.classList.contains("hidden");

    hourlyDivs.forEach((element) => {
      element.classList.add("hidden");
      element.classList.remove("visible");
    });

    if (isHidden) {
      hourlyDiv.classList.remove("hidden");
      hourlyDiv.classList.add("visible");
    } else {
      hourlyDiv.classList.add("hidden");
      hourlyDiv.classList.remove("visible");
    }
  });
  return dayDiv;
}

function createHourly(data) {
  const hourlyDiv = createDiv("hourly-div");
  hourlyDiv.classList.add("hidden");
  data.hour.forEach((hour) => {
    const div = createDiv("hour");
    const time = createSpan("hour-time", getDateAsHour(hour.time));
    const condition = createImg(
      "icon-weather-hourly",
      getWeatherIcon(hour.condition.code),
      hour.condition.text
    );
    const temp = createSpan(
      `temp-weather-${degrees.current}`,
      hour[`temp_${degrees.current}`]
    );
    div.append(time, condition, temp);
    hourlyDiv.appendChild(div);
  });
  return hourlyDiv;
}

function createHeaderSection(data) {
  const sectionHeader = createDiv("section-header");

  const locationHeader = document.createElement("h1");
  locationHeader.textContent = `${data.location.name}, ${data.location.country}`;

  const dateHeader = document.createElement("h2");
  dateHeader.textContent = getFormattedDate(data.location.localtime);

  sectionHeader.appendChild(locationHeader);
  sectionHeader.appendChild(dateHeader);

  return sectionHeader;
}

function createImg(className, imgData, imgAlt) {
  const img = document.createElement("img");
  img.classList.add(className);
  img.src = imgData;
  img.title = imgAlt;

  return img;
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
  // className.forEach((element) => {
  //   div.classList.add(element);
  // });
  div.classList.add(className);
  console.log();

  return div;
}

export { initializeSearchHandlers };
