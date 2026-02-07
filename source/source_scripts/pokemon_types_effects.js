import { pokemonTypesEffects_container } from "./main.js";
import { pokemonTypesEffects_buttons } from "./main.js";
    import { pokemonTypes_TakeSuperEffective_container } from "./main.js";
    import { pokemonTypes_TakeNormalEffect_container } from "./main.js";
    import { pokemonTypes_TakeNotVeryEffective_container } from "./main.js";
    import { pokemonTypes_TakeNoEffect_container } from "./main.js";

import { pokemonTypes_container } from "./pokemon_database_infomations.js";
    import { pokemonTypes_buttons } from "./pokemon_database_infomations.js";

import { pokemonTypes_Effects } from "./pokemon_types.js"
import { pokemonTypes_Names } from "./pokemon_types.js";




    
export function show_UniqueType_Effects(unique_type) { //type_name
    pokemonTypes_TakeSuperEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNormalEffect_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNotVeryEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNoEffect_container.querySelectorAll('button').forEach(button => {button.remove();})


    for (let i = 0; i < 18; i++) {
        // console.log(`${pokemonTypes_Names[i]}: [${pokemonTypes_Effects[unique_type][i]}]`);
        create_TypesEffects_Buttons(pokemonTypes_Names[i], pokemonTypes_Effects[unique_type][i]);
    }
}

export function show_DoubleType_Effects(first_type, second_type) { //types_names    
    pokemonTypes_TakeSuperEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNormalEffect_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNotVeryEffective_container.querySelectorAll('button').forEach(button => {button.remove();})
    pokemonTypes_TakeNoEffect_container.querySelectorAll('button').forEach(button => {button.remove();})


    for (let i = 0; i < 18; i++) {
        // console.log(`${pokemonTypes_Names[i]}: [${pokemonTypes_Effects[first_type][i] * pokemonTypes_Effects[second_type][i]}]`);
        const pokemonDoubleType_Weaknesses = pokemonTypes_Effects[first_type][i] * pokemonTypes_Effects[second_type][i];
        create_TypesEffects_Buttons(pokemonTypes_Names[i], pokemonDoubleType_Weaknesses);
    }
}





function create_TypesEffects_Buttons(types_names, types_weaknesses_values) {    
    // console.log(types_names + ": " + types_weaknesses_values);
    
    if (types_weaknesses_values > 1) {
        const types_weaknesses = document.createElement('button');
    
        types_weaknesses.classList.add(`pokemon-type_${types_names}`);
        types_weaknesses.textContent = `${types_weaknesses_values}x ${types_names}`;
        
        const types_moreInformations_href = document.createElement('a');
        types_moreInformations_href.href = `https://pokemondb.net/type/${types_names}`;
        types_moreInformations_href.target = "blank";
        types_moreInformations_href.appendChild(types_weaknesses);

        pokemonTypes_TakeSuperEffective_container.appendChild(types_moreInformations_href);            
    }
    else if (types_weaknesses_values === 1) {
        const types_weaknesses = document.createElement('button');
        
        types_weaknesses.classList.add(`pokemon-type_${types_names}`);
        types_weaknesses.textContent = `${types_weaknesses_values}x ${types_names}`;
        
        const types_moreInformations_href = document.createElement('a');
        types_moreInformations_href.href = `https://pokemondb.net/type/${types_names}`;
        types_moreInformations_href.target = "blank";
        types_moreInformations_href.appendChild(types_weaknesses);

        pokemonTypes_TakeNormalEffect_container.appendChild(types_moreInformations_href);
    }
    else if (types_weaknesses_values === 0.5 || types_weaknesses_values === 0.25) {
        const types_weaknesses = document.createElement('button');
        
        types_weaknesses.classList.add(`pokemon-type_${types_names}`);
        types_weaknesses.textContent = `${types_weaknesses_values}x ${types_names}`;
        
        const types_moreInformations_href = document.createElement('a');
        types_moreInformations_href.href = `https://pokemondb.net/type/${types_names}`;
        types_moreInformations_href.target = "blank";
        types_moreInformations_href.appendChild(types_weaknesses);

        pokemonTypes_TakeNotVeryEffective_container.appendChild(types_moreInformations_href);
    }
    else if (types_weaknesses_values === 0) {
        const types_weaknesses = document.createElement('button');
        
        types_weaknesses.classList.add(`pokemon-type_${types_names}`);
        types_weaknesses.textContent = `${types_weaknesses_values}x ${types_names}`;
        
        const types_moreInformations_href = document.createElement('a');
        types_moreInformations_href.href = `https://pokemondb.net/type/${types_names}`;
        types_moreInformations_href.target = "blank";
        types_moreInformations_href.appendChild(types_weaknesses);

        pokemonTypes_TakeNoEffect_container.appendChild(types_moreInformations_href);
    }
}