import { pokerogue_pokemonEggMoves_Kanto } from "./pokemon_Kanto_eggMoves.js";
import { pokerogue_pokemonEggMoves_Johto } from "./pokemon_Johto_eggMoves.js";
import { pokerogue_pokemonEggMoves_Hoenn } from "./pokemon_Hoenn_eggMoves.js";
import { pokerogue_pokemonEggMoves_Sinnoh } from "./pokemon_Sinnoh_eggMoves.js";
import { pokerogue_pokemonEggMoves_Unova } from "./pokemon_Unova_eggMoves.js";
import { pokerogue_pokemonEggMoves_Kalos } from "./pokemon_Kalos_eggMoves.js";
import { pokerogue_pokemonEggMoves_Alola } from "./pokemon_Alola_eggMoves.js";
import { pokerogue_pokemonEggMoves_Galar } from "./pokemon_Galar_eggMoves.js";
import { pokerogue_pokemonEggMoves_Paldea } from "./pokemon_Paldea_eggMoves.js";

export const pokerogue_pokemonEggMoves_All = {
    ...pokerogue_pokemonEggMoves_Kanto,
    ...pokerogue_pokemonEggMoves_Johto,
    ...pokerogue_pokemonEggMoves_Hoenn,
    ...pokerogue_pokemonEggMoves_Sinnoh,
    ...pokerogue_pokemonEggMoves_Unova,
    ...pokerogue_pokemonEggMoves_Kalos,
    ...pokerogue_pokemonEggMoves_Alola,
    ...pokerogue_pokemonEggMoves_Galar,
    ...pokerogue_pokemonEggMoves_Paldea
};