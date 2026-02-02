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

export const typeNormal_Effects = [     /* NORMAL */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/, 
    2/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    1/*Rock*/, 0/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeFire_Effects = [     /* FIRE */
    1/*Normal*/, 0.5/*Fire*/, 2/*Water*/, 
    1/*Electric*/, 0.5/*Grass*/, 0.5/*Ice*/, 
    1/*Fighting*/, 1/*Poison*/, 2/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 0.5/*Bug*/, 
    2/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 0.5/*Steel*/, 0.5/*Fairy*/
];

export const typeWater_Effects = [     /* WATER */
    1/*Normal*/, 0.5/*Fire*/, 0.5/*Water*/, 
    2/*Electric*/, 2/*Grass*/, 0.5/*Ice*/,
    1/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 0.5/*Steel*/, 1/*Fairy*/
];

export const typeElectric_Effects = [     /* ELECTRIC */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    0.5/*Electric*/, 1/*Grass*/, 1/*Ice*/,
    1/*Fighting*/, 1/*Poison*/, 2/*Ground*/,
    0.5/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 0.5/*Steel*/, 1/*Fairy*/
];

export const typeGrass_Effects = [     /* GRASS */
    1/*Normal*/, 2/*Fire*/, 0.5/*Water*/, 
    0.5/*Electric*/, 0.5/*Grass*/, 2/*Ice*/,
    1/*Fighting*/, 2/*Poison*/, 0.5/*Ground*/,
    2/*Flying*/, 1/*Psychic*/, 2/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeIce_Effects = [     /* ICE */
    1/*Normal*/, 2/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 0.5/*Ice*/,
    2/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    2/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 2/*Steel*/, 1/*Fairy*/
];

export const typeFighting_Effects = [     /* FIGHTING */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/, 
    1/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    2/*Flying*/, 2/*Psychic*/, 0.5/*Bug*/, 
    0.5/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    0.5/*Dark*/, 1/*Steel*/, 2/*Fairy*/
];

export const typePoison_Effects = [     /* POISON */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 0.5/*Grass*/, 1/*Ice*/, 
    0.5/*Fighting*/, 0.5/*Poison*/, 2/*Ground*/, 
    1/*Flying*/, 2/*Psychic*/, 0.5/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 0.5/*Fairy*/
];

export const typeGround_Effects = [     /* GROUND */
    1/*Normal*/, 1/*Fire*/, 2/*Water*/, 
    0/*Electric*/, 2/*Grass*/, 2/*Ice*/,
    1/*Fighting*/, 0.5/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    0.5/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeFlying_Effects = [     /* FLYING */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    2/*Electric*/, 0.5/*Grass*/, 2/*Ice*/,
    0.5/*Fighting*/, 1/*Poison*/, 0/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 0.5/*Bug*/, 
    2/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typePsychic_Effects = [     /* PSYCHIC */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/,
    0.5/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 0.5/*Psychic*/, 2/*Bug*/, 
    1/*Rock*/, 2/*Ghost*/, 1/*Dragon*/, 
    2/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeBug_Effects = [     /* BUG */
    1/*Normal*/, 2/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 0.5/*Grass*/, 1/*Ice*/,
    0.5/*Fighting*/, 1/*Poison*/, 0.5/*Ground*/, 
    2/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    2/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeRock_Effects = [     /* ROCK */
    0.5/*Normal*/, 0.5/*Fire*/, 2/*Water*/, 
    1/*Electric*/, 2/*Grass*/, 1/*Ice*/,
    2/*Fighting*/, 0.5/*Poison*/, 2/*Ground*/, 
    0.5/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 1/*Dragon*/, 
    1/*Dark*/, 2/*Steel*/, 1/*Fairy*/
];

export const typeGhost_Effects = [     /* GHOST */
    0/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/, 
    0/*Fighting*/, 0.5/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 0.5/*Bug*/, 
    1/*Rock*/, 2/*Ghost*/, 1/*Dragon*/, 
    2/*Dark*/, 1/*Steel*/, 1/*Fairy*/
];

export const typeDragon_Effects = [     /* DRAGON */
    1/*Normal*/, 0.5/*Fire*/, 0.5/*Water*/, 
    0.5/*Electric*/, 0.5/*Grass*/, 2/*Ice*/,
    1/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 1/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 2/*Dragon*/, 
    1/*Dark*/, 1/*Steel*/, 2/*Fairy*/
];

export const typeDark_Effects = [     /* DARK */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/,
    2/*Fighting*/, 1/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 0/*Psychic*/, 2/*Bug*/, 
    1/*Rock*/, 0.5/*Ghost*/, 1/*Dragon*/, 
    0.5/*Dark*/, 1/*Steel*/, 2/*Fairy*/
];

export const typeSteel_Effects = [     /* STEEL */
    0.5/*Normal*/, 2/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 0.5/*Grass*/, 0.5/*Ice*/,
    2/*Fighting*/, 0/*Poison*/, 2/*Ground*/, 
    0.5/*Flying*/, 0.5/*Psychic*/, 0.5/*Bug*/, 
    0.5/*Rock*/, 1/*Ghost*/, 0.5/*Dragon*/, 
    1/*Dark*/, 0.5/*Steel*/, 0.5/*Fairy*/
];

export const typeFairy_Effects = [     /* FAIRY */
    1/*Normal*/, 1/*Fire*/, 1/*Water*/, 
    1/*Electric*/, 1/*Grass*/, 1/*Ice*/,
    0.5/*Fighting*/, 2/*Poison*/, 1/*Ground*/, 
    1/*Flying*/, 1/*Psychic*/, 0.5/*Bug*/, 
    1/*Rock*/, 1/*Ghost*/, 0/*Dragon*/, 
    0.5/*Dark*/, 2/*Steel*/, 1/*Fairy*/
];

export const pokemonTypes_Effects = [
    typeNormal_Effects, typeFire_Effects, typeWater_Effects,
    typeElectric_Effects, typeGrass_Effects, typeIce_Effects,
    typeFighting_Effects, typePoison_Effects, typeGround_Effects,
    typeFlying_Effects, typePsychic_Effects, typeBug_Effects,
    typeRock_Effects, typeGhost_Effects, typeDragon_Effects,
    typeDark_Effects, typeSteel_Effects, typeFairy_Effects
]
export const pokemonTypes_Names = [
    "Normal", "Fire", "Water", "Electric", "Grass", "Ice",
    "Fighting", "Poison", "Ground", "Flying",
    "Psychic", "Bug", "Rock", "Ghost",
    "Dragon", "Dark", "Steel", "Fairy"
];