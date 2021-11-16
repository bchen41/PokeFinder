








































// / Chris Original Code

// var nameInputEl = document.querySelector('#poke-name');
// var locationContainerEl = document.querySelector('#poke-container')



//   var formSubmitHandler = function (event) {
//     event.preventDefault();
  
//     var pokeName = nameInputEl.value.trim();
  
//     if (pokeName) {
//       getPokeLoc(pokeName);
  
//       locationContainerEl.textContent = 'Test';
//       nameInputEl.value = '';
//     } else {
//       alert('Please enter a Pokemon name');
//     }
//     console.log(pokeName)
//   };



// var getPokeLoc = function (pokeName) {
//     var apiUrl = 'https://pokeapi.co/api/v2/pokemon' + pokeName + '/encounters';
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           console.log(response);
//           response.json().then(function (data) {
//             console.log(data);
//             displayRepos(data, user);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to find');
//       });
//   };

//   userFormEl.addEventListener('submit', formSubmitHandler);








































//Refactored Joe Code

// fetch('GET https://pokeapi.co/api/v2/pokemon/<id>/encounters', {
//   method: 'GET',
//   credentials: 'same-origin',
//   redirect: 'follow',
// });
//   pokemon.card.find('')
//   .then(card => {
//       console.log(card.name)
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     console.log(data.results[0].location);
//     console.log(data.results[0].location[0] + " " ,data.results[0].location[1] + ' ' + data.results[0].location[2]);
//   });
//   var resultsEl = document.getElementById('cardname');
//   var div1 = document.createElement('div');




// Test Joe Code

//   fetch('https://api.pokemontcg.io/v2/cards/<id>', {
//     method: 'GET',
//     credentials: 'same-origin',
//     redirect: 'follow',
//   });
//     pokemon.card.find('')
//     .then(card => {
//         console.log(card.name)
//     })
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       console.log(data.results[0].location);
//       console.log(data.results[0].location[0] + " " ,data.results[0].location[1] + ' ' + data.results[0].location[2]);
//     });
//     var resultsEl = document.getElementById('poke-name');
//     var div1 = document.createElement('div');















// Original Joe Code

  // fetch('GET https://api.pokemontcg.io/v2/cards/<id>', {
  //   method: 'GET',
  //   credentials: 'same-origin',
  //   redirect: 'follow',
  // });
  //   pokemon.card.find('')
  //   .then(card => {
  //       console.log(card.name)
  //   })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     console.log(data.results[0].location);
  //     console.log(data.results[0].location[0] + " " ,data.results[0].location[1] + ' ' + data.results[0].location[2]);
  //   });
  //   var resultsEl = document.getElementById('cardname');
  //   var div1 = document.createElement('div');