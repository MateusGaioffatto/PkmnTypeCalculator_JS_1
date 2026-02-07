export let ALL_POKEMON = [];
fetch(`https://pokeapi.co/api/v2/pokemon/?limit=2000`)
    .then(pokemon_response => pokemon_response.json())
    .then(pokemon_data => {
        // console.log(pokemon_data);
            pokemon_data.results.forEach(pokemon => {
                fetch(pokemon.url)
                .then(pokemon_url => pokemon_url.json())
                .then(pokemon_data => {
                        ALL_POKEMON.push(pokemon_data);
                    })
            })
    })
    .catch(pokemon_error => console.error(`🙀 ${pokemon_error}`));

export const pokemonTypes_container = document.getElementById("pokemon-types_container-id");
export const pokemonTypes_buttons = document.querySelectorAll(".pokemon-types_container button");

export const pokemonSprites_container = document.getElementById("pokemon-sprites_container-id");
    export const pokemonSprites_spritesContainer = document.getElementById("pokemon-sprites_spriteContainer-id");
    export const selectedPokemon_spritesContainer = document.getElementById("pokemon-selectedPokemon_spriteContainer-id");
        export const selectedPokemon_spritesContainer_img = document.querySelector("#pokemon-selectedPokemon_spriteContainer-id img");
        export const selectedPokemon_spritesContainer_h2 = document.querySelector("#pokemon-selectedPokemon_spriteContainer-id h2");

export const pokemonTypesEffects_container = document.getElementById("pokemon-typesEffects_container-id");
export const pokemonTypesEffects_buttons = document.querySelectorAll(".pokemon-typesEffects_container button");
export const pokemonTypesEffects_H1 = document.querySelector(".pokemon-typesEffects_container h1");
    export const pokemonTypes_TakeSuperEffective_container = document.getElementById("pokemon-typesTakeSuperEffective-id");
    export const pokemonTypes_TakeNormalEffect_container = document.getElementById("pokemon-typesTakeNormalEffect-id");
    export const pokemonTypes_TakeNotVeryEffective_container = document.getElementById("pokemon-typesTakeNotVeryEffective-id");
    export const pokemonTypes_TakeNoEffect_container = document.getElementById("pokemon-typesTakeNoEffect-id");