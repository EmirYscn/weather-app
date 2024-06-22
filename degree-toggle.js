import { updateDomWithCurrentData } from "./src/dom-manip";
import { getWeatherData } from "./src/fetch-weather-data";

const degrees = {
  current: "c",
};

function handleToggleButton() {
  const toggleBtn = document.querySelector("#degree-toggle");

  toggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("fahrenheit", toggleBtn.checked);
    if (toggleBtn.checked) {
      degrees.current = "f";
      console.log("Switched to: ", degrees.current);
    } else {
      degrees.current = "c";
      console.log("Switched to: ", degrees.current);
    }
    updateDomWithCurrentData();
  });
}

export { handleToggleButton, degrees };
