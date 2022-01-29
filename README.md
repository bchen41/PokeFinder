# PokéFinder

![badge](https://img.shields.io/badge/license-MIT-blue)

## Description

For users that want to catch all their favorite Pokémons, this website lets them search for any Pokémon they desire. After clicking search, a card of the Pokémon and a list of locations the user can encounter the Pokémon will be displayed. The Pokémon will automatically be saved on the website in case the user wants to go back and look at the information again.

## Technologies and APIs Used

The design and styling of the website was created with HTML, CSS, and [Foundation Framework](https://get.foundation/sites/docs/) to create grids, cells and cards throughout the site.

Javascript was used to fetch two Pokémon APIs from [PokeAPI](https://pokeapi.co/docs/v2) and [PokemonTCG](https://docs.pokemontcg.io/). PokemonTCG is used to search for a Pokémon card given a search query while PokeAPI uses the Pokémon search to display the location areas where that Pokémon can be found. If a user searches for a Pokémon that doesnt exist or is misspelled, a function in Javascript displays a message to re-enter a valid name that lasts for 3 seconds. LocalStorage in Javascript saves the users previous searches, making it appear under "Search History" and the user is able to return to any Pokémon they have searched by clicking on the button.

[PokéFinder](https://bchen41.github.io/PokeFinder/)

## Screenshots

↓Main Screen↓
![](https://github.com/bchen41/PokeFinder/blob/ff265f696624cbc764592ea909ee21386e38a7bf/assets/images/StartingScreen.png)

↓Results for searched Pokémon↓
![](https://github.com/bchen41/PokeFinder/blob/ff265f696624cbc764592ea909ee21386e38a7bf/assets/images/ResultsSS.png)

## License

Click [here](https://github.com/bchen41/PokeFinder/blob/main/LICENSE) for MIT license.

## Contributing

All are welcomed to contribute as long as the standard industry guidelines are being followed.
Click [here](https://www.contributor-covenant.org/) for industry standard guidelines.

## Authors

[Betty Chen](https://github.com/bchen41) aka bchen41  
[Nicole Wrzosek](https://github.com/NicoleWrz) aka NicoleWrz  
[Joe Maneira](https://github.com/Maneira3232) aka Maneira3232  
[Christopher Wishart](https://github.com/Cwishart203) aka Cwishart203
