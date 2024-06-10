import { config } from "./config";
import "./styles.css";

const weather_api = `https://api.weatherapi.com/v1/current.json?key=${config.apiKey}&q=istanbul`;
console.log(weather_api);
