import abilities from './abilities';

const free_abilities = {
            general: [
                { name: 'Cover', value: 10 },
                { name: 'Network', value: 15 },
                { name: 'Health', value: 4 },
                { name: 'Stability', value: 4 }
            ],
            investigative: [
                { name: 'Streetwise', value: 1 },
                { name: 'Tradecraft', value: 1 }
            ]
        };

 function character (name, budget, my_abilities) {
        let c = {};
        c.name = name || 'John Doe';
        c.abilities = my_abilities || free_abilities; 
        c.budget = budget || { investigative: 20, general: 70 };
        return c;
};

function set_ability (character, name, value) {
    let type = (abilities.is_general(name))         ? 'general'
               : (abilities.is_investigative(name)) ? 'investigative'
                                                    : 'unknown';

        if (character.budget[type] - value >= 0) {
            let ability = character.abilities[type].find((i) => i.name === name);
            if (!ability) {
                ability = {
                  name: name,
                  value: 0
                };
                character.abilities[type].push( ability );
            }
            let cur_val = ability.value || 0;
            ability.value = cur_val + value;
            // if we hit an ability score of 0, remove the ability from the list
            if (ability.value === 0) {
                character.abilities[type] = character.abilities[type].filter((i) => i.name != ability.name);
            }
            character.budget[type] = character.budget[type] - value;
        }
};


function apply_background (character, background) {
    background.abilities.map( (a) => set_ability(character, a) )
}
export default { character, set_ability };
