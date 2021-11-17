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
var locationAreaContainer = document.querySelector(".location-container");
var displayInvalidText = document.querySelector("#display-invalid");


var formSubmitHandler = function (event) {
  event.preventDefault();
  var pokeName = pokeNameEl.value.toLowerCase().trim();

  if (pokeName) {
    getPokeCard(pokeName);
    getPokeLocation(pokeName);

    pokeNameContainer.textContent = "";
    pokeNameEl.value = "";
    // turn display on for a loading spinner
    loadingSpinner.classList.remove("hide");

    // Sets Local Storage to name typed in
    localStorage.setItem("searched", pokeName);
   // OLD SEARCH HISTORY CODE //
    // renderLastSearched();
  } else {
    displayInvalid();
    return;
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
        displayInvalid();
        return;
      }

      var pokeImgSrc = cards.data[0].images.small;
      var cardImgEl = document.createElement("img");
      cardImgEl.setAttribute("src", pokeImgSrc);

      pokeNameContainer.append(cardImgEl);

      var modalImgEl = document.querySelector(".reveal img");
      modalImgEl.setAttribute("src", cards.data[0].images.large);
      modalImgEl.setAttribute("alt", "Enlarged card of " + pokeName);
      modalButton.classList.remove("hide");
    });
};

function displayInvalid() {
  displayInvalidText.classList.remove("hide");
  setTimeout(function () {
    displayInvalidText.classList.add("hide");
  }, 3000);
}

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
      var locationAreaContainer = document.querySelector(".location-container");
      removeAllChildNodes(locationAreaContainer);
      for (var i = 0; i < location.length; i++) {
        var h4TagLocationEl = document.createElement("h4");
        var locationName = location[i].location_area.name;

        h4TagLocationEl.textContent = locationName;

        locationAreaContainer.append(h4TagLocationEl);
      }
    });
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

pokeFormEl.addEventListener("submit", formSubmitHandler);



// NEW SEARCH HISTORY CODE //

var searchInput = document.querySelector("#poke-name")
var searchForm = document.querySelector("#pokemon-form")
var searchList = document.querySelector("#search-history")

// var searchHistoryUl = document.querySelector("#last-searched");
var searchHistory = [];

function renderSearchHistory() {
  searchList.innerHTML = "";
  // searchHistoryUl.textContent = searchHistory.length;

  for (var i = 0; i < searchHistory.length; i++) {
    var search = searchHistory

    var li = document.createElement("li");
    li.textContent = search;
    li.setAttribute("data-index", i);

    searchList.appendChild(li);
  }
}

function init() {
  var storedSearch = localStorage.getItem("searched");
  console.log(storedSearch)
  if (storedSearch !== null) {
    // storedSearch = JSON.parse(storedSearch);
    searchHistory = storedSearch;
  }
  renderSearchHistory();
}

function storeSearches() {
  localStorage.setItem("searched", JSON.stringify(searchHistory))
}

searchForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var searchText = searchInput.value.trim();

  if (searchText === "") {
    return;
  }

  searchHistory.push(searchText);
  searchInput.value = "";

  storeSearches();
  renderSearchHistory();
});

init();

// OLD SEARCH HISTORY CODE //

// var lastSearchedUl = document.querySelector("#last-searched");

// function renderLastSearched() {
//   var lastSearched = localStorage.getItem("searched");

//   if (!lastSearched) {
//     return;
//   }
//   lastSearchedUl.textContent = lastSearched;
// }


