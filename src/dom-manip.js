import { getWeatherData } from "./fetch-weather-data";

function init_search() {
  const searchInput = document.querySelector(".search-input");
  const searchButton = document.querySelector(".search-icon");

  searchButton.addEventListener("click", () => {
    getWeatherData(searchInput.value).then((data) => {
      updateDom(data);
    });
  });
}

function updateDom(data) {
  console.log(data);
}

export { init_search };
