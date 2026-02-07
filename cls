[1mdiff --git a/source/index.html b/source/index.html[m
[1mindex 6fa94e4..0438318 100644[m
[1m--- a/source/index.html[m
[1m+++ b/source/index.html[m
[36m@@ -58,5 +58,6 @@[m
     </div>[m
 [m
     <script src="source_scripts/main.js" type="module"></script>[m
[32m+[m[32m    <script src="source_scripts/pokemon_database_infomations.js" type="module"></script>[m
 </body>[m
 </html>[m
\ No newline at end of file[m
[1mdiff --git a/source/source_scripts/main.js b/source/source_scripts/main.js[m
[1mindex 5186bda..f562bdd 100644[m
[1m--- a/source/source_scripts/main.js[m
[1m+++ b/source/source_scripts/main.js[m
[36m@@ -1,10 +1,20 @@[m
[31m-import { ALL_POKEMON } from "./pokemon_types.js";[m
[32m+[m[32mexport let ALL_POKEMON = [];[m
[32m+[m[32mfetch(`https://pokeapi.co/api/v2/pokemon/?limit=2000`)[m
[32m+[m[32m    .then(pokemon_response => pokemon_response.json())[m
[32m+[m[32m    .then(pokemon_data => {[m
[32m+[m[32m        // console.log(pokemon_data);[m
[32m+[m[32m            pokemon_data.results.forEach(pokemon => {[m
[32m+[m[32m                fetch(pokemon.url)[m
[32m+[m[32m                .then(pokemon_url => pokemon_url.json())[m
[32m+[m[32m                .then(pokemon_data => {[m
[32m+[m[32m                        ALL_POKEMON.push(pokemon_data);[m
[32m+[m[32m                    })[m
[32m+[m[32m            })[m
[32m+[m[32m    })[m
[32m+[m[32m    .catch(pokemon_error => console.error(`🙀 ${pokemon_error}`));[m
 [m
[31m-import { pokemonTypes_Effects } from "./pokemon_types.js";[m
[31m-import { pokemonTypes_Names } from "./pokemon_types.js";[m
[31m-[m
[31m-import { show_DoubleType_Effects } from "./pokemon_types_effects.js";[m
[31m-import { show_UniqueType_Effects } from "./pokemon_types_effects.js";[m
[32m+[m[32mexport const pokemonTypes_container = document.getElementById("pokemon-types_container-id");[m
[32m+[m[32mexport const pokemonTypes_buttons = document.querySelectorAll(".pokemon-types_container button");[m
 [m
 export const pokemonSprites_container = document.getElementById("pokemon-sprites_container-id");[m
     export const pokemonSprites_spritesContainer = document.getElementById("pokemon-sprites_spriteContainer-id");[m
[1mdiff --git a/source/source_scripts/pokemon_database_infomations.js b/source/source_scripts/pokemon_database_infomations.js[m
[1mindex d6abbbf..a343e92 100644[m
[1m--- a/source/source_scripts/pokemon_database_infomations.js[m
[1m+++ b/source/source_scripts/pokemon_database_infomations.js[m
[36m@@ -1,7 +1,31 @@[m
[31m-import { ALL_POKEMON } from "./pokemon_types.js";[m
[32m+[m[32mimport { ALL_POKEMON } from "./main.js";[m
[32m+[m
[32m+[m[32mimport { pokemonTypes_container} from "./main.js";[m
[32m+[m[32mimport { pokemonTypes_buttons } from "./main.js";[m
[32m+[m
[32m+[m[32mimport { pokemonTypes_Effects } from "./pokemon_types.js";[m
[32m+[m[32mimport { pokemonTypes_Names } from "./pokemon_types.js";[m
[32m+[m
[32m+[m
[32m+[m[32mimport { show_DoubleType_Effects } from "./pokemon_types_effects.js";[m
[32m+[m[32mimport { show_UniqueType_Effects } from "./pokemon_types_effects.js";[m
[32m+[m
[32m+[m[32mimport { pokemonSprites_container } from "./main.js";[m
[32m+[m[32m    import { pokemonSprites_spritesContainer } from "./main.js";[m
[32m+[m[32m    import { selectedPokemon_spritesContainer } from "./main.js";[m
[32m+[m[32m        import { selectedPokemon_spritesContainer_img } from "./main.js";[m
[32m+[m[32m        import { selectedPokemon_spritesContainer_h2 } from "./main.js";[m
[32m+[m
[32m+[m[32mimport { pokemonTypesEffects_container } from "./main.js";[m
[32m+[m[32mimport { pokemonTypesEffects_buttons } from "./main.js";[m
[32m+[m[32mimport { pokemonTypesEffects_H1 } from "./main.js";[m
[32m+[m[32m    import { pokemonTypes_TakeSuperEffective_container } from "./main.js";[m
[32m+[m[32m    import { pokemonTypes_TakeNormalEffect_container } from "./main.js";[m
[32m+[m[32m    import { pokemonTypes_TakeNotVeryEffective_container } from "./main.js";[m
[32m+[m[32m    import { pokemonTypes_TakeNoEffect_container } from "./main.js";[m
[32m+[m
[32m+[m
 [m
[31m-export const pokemonTypes_container = document.getElementById("pokemon-types_container-id");[m
[31m-export const pokemonTypes_buttons = document.querySelectorAll(".pokemon-types_container button");[m
 [m
 [m
 let clickCount_selected_types = 0;[m
[1mdiff --git a/source/source_scripts/pokemon_types.js b/source/source_scripts/pokemon_types.js[m
[1mindex a4f7735..b00731b 100644[m
[1m--- a/source/source_scripts/pokemon_types.js[m
[1m+++ b/source/source_scripts/pokemon_types.js[m
[36m@@ -1,18 +1,3 @@[m
[31m-export let ALL_POKEMON = [];[m
[31m-fetch(`https://pokeapi.co/api/v2/pokemon/?limit=2000`)[m
[31m-    .then(pokemon_response => pokemon_response.json())[m
[31m-    .then(pokemon_data => {[m
[31m-        // console.log(pokemon_data);[m
[31m-            pokemon_data.results.forEach(pokemon => {[m
[31m-                fetch(pokemon.url)[m
[31m-                .then(pokemon_url => pokemon_url.json())[m
[31m-                .then(pokemon_data => {[m
[31m-                        ALL_POKEMON.push(pokemon_data);[m
[31m-                    })[m
[31m-            })[m
[31m-    })[m
[31m-    .catch(pokemon_error => console.error(`🙀 ${pokemon_error}`));[m
[31m-[m
 export const typeNormal_Effects = [     /* NORMAL */[m
     1/*Normal*/, 1/*Fire*/, 1/*Water*/, [m
     1/*Electric*/, 1/*Grass*/, 1/*Ice*/, [m
[1mdiff --git a/source/source_scripts/pokemon_types_effects.js b/source/source_scripts/pokemon_types_effects.js[m
[1mindex aa1aad4..b647082 100644[m
[1m--- a/source/source_scripts/pokemon_types_effects.js[m
[1m+++ b/source/source_scripts/pokemon_types_effects.js[m
[36m@@ -5,8 +5,8 @@[m [mimport { pokemonTypesEffects_buttons } from "./main.js";[m
     import { pokemonTypes_TakeNotVeryEffective_container } from "./main.js";[m
     import { pokemonTypes_TakeNoEffect_container } from "./main.js";[m
 [m
[31m-import { pokemonTypes_container } from "./pokemon_database_infomations.js";[m
[31m-    import { pokemonTypes_buttons } from "./pokemon_database_infomations.js";[m
[32m+[m[32mimport { pokemonTypes_container } from "./main.js";[m
[32m+[m[32m    import { pokemonTypes_buttons } from "./main.js";[m
 [m
 import { pokemonTypes_Effects } from "./pokemon_types.js"[m
 import { pokemonTypes_Names } from "./pokemon_types.js";[m
