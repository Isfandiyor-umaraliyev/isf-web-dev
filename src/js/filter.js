const searchFormEl = document.querySelector(".search");

searchFormEl.search.addEventListener("input", () => {
  const searchValue = searchFormEl.search.value.toLowerCase();

  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});
const searchSelectSpan = document.querySelector(".search__select span");
const searchSelect = document.querySelectorAll(".search__select-list li");
import { creaateCoutries } from "./updateUi";
import requst from "./request";
searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterApi;
    if (li.textContent == "All") {
      filterApi = "https://restcountries.com/v3.1/all";
    } else {
      filterApi = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }
    requst(filterApi)
      .then((data) => {
        creaateCoutries(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });
});
