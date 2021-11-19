# PokéFinder

This website lets a user search for any Pokémon they are interested in. After clicking search, a card of the Pokémon and a list of locations the user can encounter the Pokémon will be displayed. The Pokémon will automatically be saved on the website in case the user wants to go back and look at the information again.

The design and styling of the website was created with HTML, CSS, and [Foundation Framework](https://get.foundation/sites/docs/) to create grids, cells and cards throughout the site.

Javascript was used to fetch two Pokémon APIs from [PokiAPI](https://pokeapi.co/docs/v2) and [PokemonTCG](https://docs.pokemontcg.io/). PokemonTCG is used to search for a Pokémon card given a search query while PokiAPI uses the Pokémon search to display the location areas where that Pokémon can be found. If a user searches for a Pokémon that doesnt exist or is misspelled, a function in Javascript displays a message to re-enter a valid name that lasts for 3 seconds. LocalStorage in Javascript saves the users previous searches, making it appear under "Search History" and the user is able to return to any Pokémon they have searched by clicking on the button.


[PokéFinder](https://bchen41.github.io/PokeFinder/)

↓Main Screen↓
![]()

↓Results for searched Pokémon↓
![](#)
