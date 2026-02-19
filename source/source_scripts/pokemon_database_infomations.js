import { ALL_POKEMON } from "./main.js";
import { pokerogue_pokemonEggMoves_All } from "./pokerogue_pokemonEggMoves/pokemon_All_eggMoves.js";
import { pokerogue_pokemonPassives_All } from "./pokerogue_pokemonPassives/pokemon_All_passives.js";

import { pokemonTypes_container} from "./main.js";
import { pokemonTypes_buttons } from "./main.js";

import { pokemonTypes_Effects } from "./pokemon_types.js";
import { pokemonTypes_Names } from "./pokemon_types.js";


import { show_DoubleType_Effects } from "./pokemon_types_effects.js";
import { show_UniqueType_Effects } from "./pokemon_types_effects.js";

import { pokemonSprites_container } from "./main.js";
    import { pokemonSprites_spritesContainer } from "./main.js";
    import { selectedPokemon_spritesContainer } from "./main.js";
        import { selectedPokemon_spritesContainer_img } from "./main.js";

        import { selectedPokemon_spriteContainer_pokemonName_container } from "./main.js";
            import { selectedPokemon_spritesContainer_pokemonName } from "./main.js";
            import { selectedPokemon_spritesContainer_pokemonPassive } from "./main.js";

        import { selectedPokemon_spriteContainer_pokemonPassives_pokemonEggMoves_container } from "./main.js";
            import { selectedPokemon_spritesContainer_pokemonEggMoves } from "./main.js";

import { pokemonTypesEffects_container } from "./main.js";
import { pokemonTypesEffects_buttons } from "./main.js";
import { pokemonTypesEffects_H1 } from "./main.js";
    import { pokemonTypes_TakeSuperEffective_container } from "./main.js";
    import { pokemonTypes_TakeNormalEffect_container } from "./main.js";
    import { pokemonTypes_TakeNotVeryEffective_container } from "./main.js";
    import { pokemonTypes_TakeNoEffect_container } from "./main.js";










let clickCount_selected_types = 0;
let chossen_types= [];
let choosen_types_names = [];

pokemonTypes_buttons.forEach((type_button, type_button_selected) => {
    type_button.addEventListener('click', () => {
        pokemonTypesEffects_container.style.display = "initial";
        pokemonSprites_spritesContainer.style.display = "initial";
        pokemonSprites_container.style.display = "flex";

        clickCount_selected_types++;
        if (clickCount_selected_types === 1) {
            chossen_types[0] = type_button_selected;
            choosen_types_names[0] = type_button.textContent;
            create_PokemonSprites_Images(choosen_types_names[0], false);
            
            pokemonTypesEffects_H1.textContent = choosen_types_names[0];

            show_UniqueType_Effects(type_button_selected, choosen_types_names[0]);
        }
        else if (clickCount_selected_types === 2) {
            selectedPokemon_spritesContainer.style.display = "none";

            chossen_types[1] = type_button_selected;
            choosen_types_names[1] = type_button.textContent;
            create_PokemonSprites_Images(choosen_types_names[0], choosen_types_names[1]);

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
            pokemonSprites_spritesContainer.style.display = "none";
                selectedPokemon_spritesContainer.style.display = "none";
                    selectedPokemon_spriteContainer_pokemonPassives_pokemonEggMoves_container.innerHTML = "";

            clickCount_selected_types = 0;     
            chossen_types = [];
            choosen_types_names = [];
        }
    });
});



function create_PokemonSprites_Images(first_type_selected, second_type_selected) {
    if (second_type_selected === false) {
        ALL_POKEMON.forEach(POKEMON => {
            let isEspecialPokemon = false;
            if (POKEMON.name.indexOf('-') !== -1){
                const contentAfterHyphen = POKEMON.name.split('-');
                if (
                    contentAfterHyphen[1] === "mega" || contentAfterHyphen[1] === "gmax" || 
                    contentAfterHyphen[2] === "totem" || contentAfterHyphen[1] === "totem" ||
                    contentAfterHyphen[0] === "pikachu" || contentAfterHyphen[0] === "terapagos" || 
                    contentAfterHyphen[0] === "eevee"
                ) 
                {
                    isEspecialPokemon = true;
                }
            }

            if (POKEMON.types.length === 1 && !isEspecialPokemon && POKEMON.types[0].type.name === first_type_selected.toLowerCase().trim()) {
                const pokemon_truncetedName = POKEMON.name.indexOf('-') !== -1 ? POKEMON.name.substring(0, POKEMON.name.indexOf('-')) : POKEMON.name;

                const pokemon_moreInformation_href = document.createElement('a');
                // pokemon_moreInformation_href.href = `https://pokemondb.net/pokedex/${pokemon_truncetedName}`;
                // pokemon_moreInformation_href.target = "blank";
                
                const pokemon_spritesImages = document.createElement('img');
                pokemon_spritesImages.src = POKEMON.sprites.front_default;
                
                pokemon_moreInformation_href.appendChild(pokemon_spritesImages);
                
                pokemonSprites_spritesContainer.appendChild(pokemon_moreInformation_href);
                
                pokemon_moreInformation_href.addEventListener('click', function() {
                    create_SelectedPokemon_MoreInformation(POKEMON.name, POKEMON.sprites.front_default);
                })
                selectedPokemon_spritesContainer_img.addEventListener('click', function() {
                    hide_SelectedPokemon_MoreInformation();
                })
            }
        })
    }
    else {
        let pokemon_doubleTypeExists = false;
        
        pokemonSprites_spritesContainer.innerHTML = "";
        ALL_POKEMON.forEach(POKEMON => {
            let isEspecialPokemon = false;
            if (POKEMON.name.indexOf('-') !== -1){
                const contentAfterHyphen = POKEMON.name.split('-');
                if (
                    /*contentAfterHyphen[1] === "mega" ||*/ /*contentAfterHyphen[1] === "gmax" ||*/ 
                    contentAfterHyphen[2] === "totem" || contentAfterHyphen[1] === "totem" || 
                    contentAfterHyphen[0] === "pikachu" || contentAfterHyphen[0] === "terapagos" || 
                    contentAfterHyphen[0] === "eevee"
                ) 
                {
                    isEspecialPokemon = true;
                }
            }
            
            if (
                POKEMON.types.length === 2 && !isEspecialPokemon &&
                ((POKEMON.types[0].type.name === first_type_selected.toLowerCase().trim() && POKEMON.types[1].type.name === second_type_selected.toLowerCase().trim()) ||
                (POKEMON.types[1].type.name === first_type_selected.toLowerCase().trim() && POKEMON.types[0].type.name === second_type_selected.toLowerCase().trim()))
            ) 
            {
                pokemon_doubleTypeExists = true;
                const pokemon_truncetedName = POKEMON.name.indexOf('-') !== -1 ? POKEMON.name.substring(0, POKEMON.name.indexOf('-')) : POKEMON.name;

                const pokemon_moreInformation_href = document.createElement('a');
                // pokemon_moreInformation_href.href = `https://pokemondb.net/pokedex/${pokemon_truncetedName}`;
                // pokemon_moreInformation_href.target = "blank";
                
                const pokemon_spritesImages = document.createElement('img');
                pokemon_spritesImages.src = POKEMON.sprites.front_default;
                
                pokemon_moreInformation_href.appendChild(pokemon_spritesImages);
                
                pokemonSprites_spritesContainer.appendChild(pokemon_moreInformation_href);
                
                pokemon_moreInformation_href.addEventListener('click', function() {
                    create_SelectedPokemon_MoreInformation(POKEMON.name, POKEMON.sprites.front_default);
                })
                selectedPokemon_spritesContainer_img.addEventListener('click', function() {
                    hide_SelectedPokemon_MoreInformation();
                })
        }
        })
        if (!pokemon_doubleTypeExists) {
            const pokemon_noPokemonFounded_h2 = document.createElement('h2');
            pokemon_noPokemonFounded_h2.textContent = "No Pokemon Founded!";
            
            pokemonSprites_spritesContainer.appendChild(pokemon_noPokemonFounded_h2);
        }        
    }
}










function create_SelectedPokemon_MoreInformation(pokemon_name, pokemon_sprite_front_default) {
    selectedPokemon_spritesContainer_pokemonName.textContent = pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1);
    selectedPokemon_spritesContainer_pokemonPassive.textContent = pokerogue_pokemonPassives_All[pokemon_name.replaceAll("-", "_")];
    for (let i = 0; i < 4; i++) { 
        const selectedPokemon_spritesContainer_pokemonEggMoves_h2 = document.createElement('h2');
        selectedPokemon_spritesContainer_pokemonEggMoves_h2.textContent = pokerogue_pokemonEggMoves_All[pokemon_name.replaceAll("-", "_")][i];
        selectedPokemon_spriteContainer_pokemonPassives_pokemonEggMoves_container.appendChild(selectedPokemon_spritesContainer_pokemonEggMoves_h2);
    }
    selectedPokemon_spritesContainer.style.display = "flex";
    selectedPokemon_spritesContainer_img.src = pokemon_sprite_front_default;
    pokemonSprites_spritesContainer.style.display = "none";
}
function hide_SelectedPokemon_MoreInformation() {
    selectedPokemon_spriteContainer_pokemonPassives_pokemonEggMoves_container.innerHTML = "";
    selectedPokemon_spritesContainer.style.display = "none";
    pokemonSprites_spritesContainer.style.display = "initial";
}