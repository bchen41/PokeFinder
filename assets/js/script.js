$(document).foundation();
var pokeLocation = document.getElementById("location");
var resultsEl = document.getElementById("cardname");
var div1 = document.createElement("div");
var pokeFormEl = document.querySelector("#pokemon-form");

var pokeNameEl = document.getElementById("poke-name");
var pokeNameContainer = document.getElementById("poke-container");
var pokeSearchTerm = document.getElementById("pokemon-search-term");

var formSubmitHandler = function (event) {
  event.preventDefault();
  var pokeName = pokeNameEl.value.trim();

  if (pokeName) {
    getPokeCard(pokeName);
    getPokeLocation(pokeName);

    pokeNameContainer.textContent = "";
    pokeNameEl.value = "";
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
      var showPokeSearch = pokeSearchTerm;
      showPokeSearch.textContent =
        pokeName.charAt(0).toUpperCase() + pokeName.slice(1);

      var pokeImgSrc = cards.data[0].images.small;
      var cardImgEl = document.createElement("img");
      cardImgEl.setAttribute("src", pokeImgSrc);

      pokeNameContainer.append(cardImgEl);
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
        for (var i = 0; i < location.encounters.location_areas.length; i++)
        console.log(location)


        var pTagLocationEl = document.createElement("p")
        var locationName = location[i]

        pTagLocationEl.textContent = locationName

        pokeNameContainer.append(pTagLocationEl)
    
    })
    
}

pokeFormEl.addEventListener("submit", formSubmitHandler);
