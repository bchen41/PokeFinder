$(document).foundation();
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
    loadingSpinner.classList.remove("hide");
    Promise.all([getPokeCard(pokeName), getPokeLocation(pokeName)]).then(
      function (fetchResults) {
        const [imgSrcs, pokeLocations] = fetchResults;
        storeSearches(pokeName, imgSrcs, pokeLocations);
        pokeNameEl.value = "";
      }
    );
  } else {
    displayInvalid();
    return;
  }
};

var getPokeCard = function (pokeName) {
  return fetch("https://api.pokemontcg.io/v2/cards?q=name:" + pokeName, {
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
        modalButton.classList.add("hide");
        removeAllChildNodes(locationAreaContainer);
        displayInvalid();
        return;
      }

      var pokeImgSrc = cards.data[0].images.small;
      var cardImgEl = document.createElement("img");
      cardImgEl.setAttribute("src", pokeImgSrc);

      pokeNameContainer.append(cardImgEl);
      var pokeImgSrcLg = cards.data[0].images.large;
      var modalImgEl = document.querySelector(".reveal img");
      modalImgEl.setAttribute("src", pokeImgSrcLg);
      modalImgEl.setAttribute("alt", "Enlarged card of " + pokeName);
      modalButton.classList.remove("hide");
      return [pokeImgSrc, pokeImgSrcLg];
    });
};

function displayInvalid() {
  displayInvalidText.classList.remove("hide");
  setTimeout(function () {
    displayInvalidText.classList.add("hide");
  }, 3000);
}

var getPokeLocation = function (pokeName) {
  return fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokeName + "/encounters",
    {
      method: "GET",
      credentials: "same-origin",
      redirect: "follow",
    }
  )
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

      return location.map(function (loc) {
        return loc.location_area.name;
      });
    });
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

pokeFormEl.addEventListener("submit", formSubmitHandler);

// NEW SEARCH HISTORY CODE //

var searchInput = document.querySelector("#poke-name");
var searchForm = document.querySelector("#pokemon-form");
var searchList = document.querySelector("#search-history");

var searchHistory = [];

function storeSearches(pokeName, imgSrcs, pokeLocations) {
  const storedSearch = localStorage.getItem("searched");
  if (storedSearch === null) {
    const searchData = {
      searchTerm: pokeName,
      imgSrcs,
      locations: pokeLocations,
    };
    localStorage.setItem("searched", JSON.stringify([searchData]));
  } else {
    const storedSearchArr = JSON.parse(storedSearch);
    storedSearchArr.push({
      searchTerm: pokeName,
      imgSrcs,
      locations: pokeLocations,
    });
    localStorage.setItem("searched", JSON.stringify(storedSearchArr));
  }
  renderSearchHistory(pokeName);
}

function renderSearchHistory(pokeName) {
  var searchList = document.querySelector("#search-history");
  if (pokeName) {
    var li = document.createElement("li");
    var searchBtnEl = document.createElement("button");
    searchBtnEl.classList.add("search-history-btn");

    searchBtnEl.textContent = pokeName;
    li.appendChild(searchBtnEl);
    searchList.appendChild(li);
    storeFetchedData();
  }
}

function init() {
  const storedSearch = localStorage.getItem("searched");
  console.log(storedSearch);
  const storedSearchArr = JSON.parse(storedSearch);

  var searchList = document.querySelector("#search-history");

  for (var i = 0; i < storedSearchArr.length; i++) {
    if (storedSearchArr.length === null) {
      return;
    }
    var li = document.createElement("li");
    var searchBtnEl = document.createElement("button");
    searchBtnEl.classList.add("search-history-btn");

    searchBtnEl.textContent = storedSearchArr[i].searchTerm;
    li.appendChild(searchBtnEl);
    searchList.appendChild(li);
  }
}

function storeFetchedData() {}

init();
