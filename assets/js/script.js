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

      // for (var i = 0; i < cards.data.length; i++) {
      // creat image elements
      //set attributes and assign the small image url from the Data array
      // append to a DOM element to display on the web page
      // }
    });
};

// fetch("https://api.pokemontcg.io/v2/cards?q=name:" + pokeNameEl, {
//   method: "GET",
//   credentials: "same-origin",
//   redirect: "follow",
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (cards) {
//     console.log(cards);
//     console.log(cards.count);
//     console.log(cards.data[1]);
//     console.log(cards.data[1].id);
//     console.log(cards.data[1].images.small);

//     for (var i = 0; i < cards.data.length; i++) {
//       // creat image elements
//       //set attributes and assign the small image url from the Data array
//       // append to a DOM element to display on the web page
//     }
//   });

// // fetch('https://pokeapi.co/api/v2/pokemon/name/')

// .then(function (response) {
//   return response.json();
// })
// .then(function (cards) {
//   console.log(cards);

// });

pokeFormEl.addEventListener("submit", formSubmitHandler);
