$(document).foundation();
var pokeLocation = document.getElementById("location");
var resultsEl = document.getElementById("cardname");
var div1 = document.createElement("div");

fetch("https://api.pokemontcg.io/v2/cards/", {
  method: "GET",
  credentials: "same-origin",
  redirect: "follow",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (cards) {
    console.log(cards);
    console.log(cards.count);
    console.log(cards.data[1]);
    console.log(cards.data[1].id);
    console.log(cards.data[1].images.small);

    for (var i = 0; i < cards.data.length; i++) {
      // creat image elements
      //set attributes and assign the small image url from the Data array
      // append to a DOM element to display on the web page
    }
  });

// // fetch('https://pokeapi.co/api/v2/pokemon/name/')

// .then(function (response) {
//   return response.json();
// })
// .then(function (cards) {
//   console.log(cards);

// });
