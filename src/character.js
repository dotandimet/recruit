import abilities from './abilities';

function character (name, budget) {
        let c = {};
        c.name = name || '';
        c.abilities = { general: [], investigative: [] };
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

export default { character, set_ability };
