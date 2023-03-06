import "../css/main.css";
import "./mode";
import requst from "./request";
import { createCountryInfo } from "./updateUi";

const querySting = window.location.search;
const urlParams = new URLSearchParams(querySting);
const country = urlParams.get("country");
import loaderToggle from "./loader";

console.log(country);
const countryAPI = `https://restcountries.com/v3.1/${country}`;
fetch(countryAPI)
  .then((data) => data.json())
  .then((data) => {
    createCountryInfo(data[0]);
  });
