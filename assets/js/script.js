fetch('GET https://api.pokemontcg.io/v2/cards/<id>', {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  });
    pokemon.card.find('')
    .then(card => {
        console.log(card.name)

    })
fetch('Get https://pokeapi.co/api/v2/pokemon/name/')

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.results[0].location);
      console.log(data.results[0].location[0] + " " ,data.results[0].location[1] + ' ' + data.results[0].location[2]);
    });
  
    
    var pokeLocation = document.getElementById('location');
    var resultsEl = document.getElementById('cardname');
    var div1 = document.createElement('div'); 