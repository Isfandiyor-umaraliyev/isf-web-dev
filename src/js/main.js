import "../css/main.css";
import requst from "./request";
import "./mode";
import { creaateCoutries } from "./updateUi";
import "./filter";

const API = "https://restcountries.com/v3.1/all";
requst(API)
  .then((data) => {
    creaateCoutries(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
