var nameInputEl = document.querySelector('#pokename');
var locationContainerEl = document.querySelector('#location-container')



  var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var pokeName = nameInputEl.value.trim();
  
    if (pokeName) {
      getPokeLoc(pokeName);
  
      locationContainerEl.textContent = '';
      nameInputEl.value = '';
    } else {
      alert('Please enter a Pokemon name');
    }
  };



var getPokeLoc = function (pokeName) {
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon' + pokeName + '/encounters';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayRepos(data, user);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to find');
      });
  };



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