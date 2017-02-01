import abilities from './abilities';

class character {
    constructor(name, budget) {
        this.name = name || '';
        this.abilities = { general: {}, investigative: {} };
        this.budget = budget || { investigative: 20, general: 70 };
    }
    is_general(name) { return abilities.general_abilities.indexOf(name) > -1 }
    is_investigative(name){ return abilities.investigative_abilities.indexOf(name) > -1 }
    is_done(){ return this.budget.general === 0 && this.budget.investigative === 0 }
    set_ability (name, value) {
    let type = (this.is_general(name))         ? 'general'
               : (this.is_investigative(name)) ? 'investigative'
                                               : 'unknown';

        if (budget[type] - value < 0) {
            value = budget[type];
        }
        if (value > 0) {
            let cur_val = this.abilities[type].name || 0;
            this.abilities[type].name = cur_val + value;
            this.budget[type] = this.budget[type] - value;
        }
  }
  increase_ability (name) {
    set_ability(name, 1);
  }
  reduce_ability (name ) {
    set_ability(name, -1);
  }
};

export default character;
