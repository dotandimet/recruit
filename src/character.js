import abilities from './abilities';

class character {
    constructor(name, budget) {
        this.name = name || '';
        this.abilities = { general: {}, investigative: {} };
        this.budget = budget || { investigative: 20, general: 70 };
    }
};

export default character;
