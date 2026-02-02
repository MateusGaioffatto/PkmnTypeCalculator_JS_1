import { ALL_POKEMON } from "./pokemon_types.js";

import { pokemonTypes_Effects } from "./pokemon_types.js";
import { pokemonTypes_Names } from "./pokemon_types.js";

import { show_DoubleType_Effects } from "./pokemon_types_effects.js";
import { show_UniqueType_Effects } from "./pokemon_types_effects.js";

export const pokemonTypes_container = document.getElementById("pokemon-types_container-id");
export const pokemonTypes_buttons = document.querySelectorAll(".pokemon-types_container button");

export const pokemonSprites_container = document.getElementById("pokemon-sprites_container-id");
    export const pokemonSprites_spritesContainer = document.getElementById("pokemon-sprites_spriteContainer-id");

export const pokemonTypesEffects_container = document.getElementById("pokemon-typesEffects_container-id");
export const pokemonTypesEffects_buttons = document.querySelectorAll(".pokemon-typesEffects_container button");
export const pokemonTypesEffects_H1 = document.querySelector(".pokemon-typesEffects_container h1");
    export const pokemonTypes_TakeSuperEffective_container = document.getElementById("pokemon-typesTakeSuperEffective-id");
    export const pokemonTypes_TakeNormalEffect_container = document.getElementById("pokemon-typesTakeNormalEffect-id");
    export const pokemonTypes_TakeNotVeryEffective_container = document.getElementById("pokemon-typesTakeNotVeryEffective-id");
    export const pokemonTypes_TakeNoEffect_container = document.getElementById("pokemon-typesTakeNoEffect-id");



let clickCount_selected_types = 0;
let chossen_types= [];
let choosen_types_names = [];




pokemonTypes_buttons.forEach((type_button, type_button_selected) => {
    type_button.addEventListener('click', () => {
        pokemonTypesEffects_container.style.display = "unset";
        pokemonSprites_container.style.display = "unset";

        clickCount_selected_types++;
        if (clickCount_selected_types === 1) {
            chossen_types[0] = type_button_selected;
            choosen_types_names[0] = type_button.textContent;
            foo3(choosen_types_names[0], false);
            
            pokemonTypesEffects_H1.textContent = choosen_types_names[0];

            show_UniqueType_Effects(type_button_selected, choosen_types_names[0]);
        }
        else if (clickCount_selected_types === 2) {
            chossen_types[1] = type_button_selected;
            choosen_types_names[1] = type_button.textContent;
            foo3(choosen_types_names[0], choosen_types_names[1]);

            if (chossen_types[0] !== chossen_types[1]) {
                pokemonTypesEffects_H1.textContent = `${choosen_types_names[0]} + ${choosen_types_names[1]}`;

                show_DoubleType_Effects(chossen_types[0], chossen_types[1], choosen_types_names);
            }
            else {
                clickCount_selected_types++;
            }
        }
        if (clickCount_selected_types === 3) {
            pokemonTypes_TakeSuperEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
            pokemonTypes_TakeNormalEffect_container.querySelectorAll('button').forEach(button => {button.remove();})
            pokemonTypes_TakeNotVeryEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
            pokemonTypes_TakeNoEffect_container.querySelectorAll('button').forEach(button => {button.remove();})

            pokemonSprites_spritesContainer.innerHTML = "";

            pokemonTypesEffects_H1.textContent = "";

            pokemonTypesEffects_container.style.display = "none";
            pokemonSprites_container.style.display = "none";

            clickCount_selected_types = 0;     
            chossen_types = [];
            choosen_types_names = [];
        }
    });
});



function foo3(first_type_selected, second_type_selected) {
    if (second_type_selected === false) {
        ALL_POKEMON.forEach(POKEMON => {
            if (POKEMON.types.length === 1 && POKEMON.types[0].type.name === first_type_selected.toLowerCase().trim()) {
                const pokemon_moreInformation_href = document.createElement('a');
                pokemon_moreInformation_href.href = `https://pokemondb.net/pokedex/${POKEMON.name}`;
                pokemon_moreInformation_href.target = "blank";

                const pokemon_spritesImages = document.createElement('img');
                pokemon_spritesImages.src = POKEMON.sprites.front_default;

                pokemon_moreInformation_href.appendChild(pokemon_spritesImages);
                
                pokemonSprites_spritesContainer.appendChild(pokemon_moreInformation_href);
            }
        })
    }
    else {
        let pokemon_doubleTypeExists = false;
        pokemonSprites_spritesContainer.innerHTML = "";
        ALL_POKEMON.forEach(POKEMON => {
            if (
                POKEMON.types.length === 2 &&
                ((POKEMON.types[0].type.name === first_type_selected.toLowerCase().trim() && POKEMON.types[1].type.name === second_type_selected.toLowerCase().trim()) ||
                (POKEMON.types[1].type.name === first_type_selected.toLowerCase().trim() && POKEMON.types[0].type.name === second_type_selected.toLowerCase().trim()))
                ) 
            {
                pokemon_doubleTypeExists = true;
                const pokemon_truncetedName = POKEMON.name.indexOf('-') !== -1 ? POKEMON.name.substring(0, POKEMON.name.indexOf('-')) : POKEMON.name;

                const pokemon_moreInformation_href = document.createElement('a');
                pokemon_moreInformation_href.href = `https://pokemondb.net/pokedex/${pokemon_truncetedName}`;
                pokemon_moreInformation_href.target = "blank";

                const pokemon_spritesImages = document.createElement('img');
                pokemon_spritesImages.src = POKEMON.sprites.front_default;
                
                pokemon_moreInformation_href.appendChild(pokemon_spritesImages);
                
                pokemonSprites_spritesContainer.appendChild(pokemon_moreInformation_href);
            }
        })
        if (!pokemon_doubleTypeExists) {
            const pokemon_noPokemonFounded_h2 = document.createElement('h2');
            pokemon_noPokemonFounded_h2.textContent = "No Pokemon Founded!";

            pokemonSprites_spritesContainer.appendChild(pokemon_noPokemonFounded_h2);
        }        
    }
}