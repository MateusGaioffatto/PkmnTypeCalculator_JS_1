import { ALL_POKEMON } from "./pokemon_types.js";

import { pokemonTypes_Effects } from "./pokemon_types.js";
import { pokemonTypes_Names } from "./pokemon_types.js";

import { show_DoubleType_Effects } from "./pokemon_types_effects.js";
import { show_UniqueType_Effects } from "./pokemon_types_effects.js";

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