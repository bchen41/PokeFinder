$(document).foundation();
var pokeLocation = document.getElementById("location");
var resultsEl = document.getElementById("cardname");
var div1 = document.createElement("div");
var pokeFormEl = document.querySelector("#pokemon-form");

var pokeNameEl = document.getElementById("poke-name");
var pokeNameContainer = document.getElementById("poke-container");
var pokeSearchTerm = document.getElementById("pokemon-search-term");
var modalButton = document.querySelector("#modalbutton");
var loadingSpinner = document.querySelector(".overlay");


var formSubmitHandler = function (event) {
  event.preventDefault();
  var pokeName = pokeNameEl.value.trim();

  if (pokeName) {
    getPokeCard(pokeName);
    getPokeLocation(pokeName);

    pokeNameContainer.textContent = "";
    pokeNameEl.value = "";
    // turn display on for a loading spinner
    loadingSpinner.classList.remove("hide");

    localStorage.setItem("searched", pokeName);
  } else {
    alert("Please enter a pokemon name");
  }
};

var getPokeCard = function (pokeName) {
  fetch("https://api.pokemontcg.io/v2/cards?q=name:" + pokeName, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (cards) {
      console.log(cards);
      // added hide class back to hide loading spinner
      loadingSpinner.classList.add("hide");
      if (cards.count === 0) {
        var showPokeSearch = pokeSearchTerm;
        showPokeSearch.textContent = "";
        alert("Enter valid Pokemon name");
        return;
      }

      var showPokeSearch = pokeSearchTerm;
      showPokeSearch.textContent =
        pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

      var pokeImgSrc = cards.data[0].images.small;
      var cardImgEl = document.createElement("img");
      cardImgEl.setAttribute("src", pokeImgSrc);

      pokeNameContainer.append(cardImgEl);

      var modalImgEl = document.querySelector(".reveal img");
      modalImgEl.setAttribute("src", cards.data[0].images.large);
      modalImgEl.setAttribute("alt", "Enlarged card of " + pokeName);
      modalButton.classList.remove("hide");
      pokeNameContainer.prepend(cardImgEl);
    });
};

var getPokeLocation = function (pokeName) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokeName + "/encounters", {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })

    .then(function (location) {
      console.log(location);
      for (var i = 0; i < location.length; i++) {
        var pTagLocationEl = document.createElement("p");
        var locationName = location[i].location_area.name;

        pTagLocationEl.textContent = locationName;

        pokeNameContainer.append(pTagLocationEl);
      }
    });
};

pokeFormEl.addEventListener("submit", formSubmitHandler);

var lastSearchedSpan = document.querySelector("last-searched");

function renderLastSearched() {
  var lastSearched = localStorage.getItem("searched");

  if (!lastSearched) {
    return;
  }
  lastSearchedSpan.textContent = lastSearched;
}


