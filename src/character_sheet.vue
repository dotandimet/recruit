<template>
<div>
<h1><editable v-bind:value="name"></editable></h1>
<h2>Investigative Abilities</h2>
<scores v-bind:value="abilities.investigative"
v-on:increase="increase_ability($event)"
v-on:decrease="decrease_ability($event)"
></scores>
<h2>General Abilities</h2>
<scores v-bind:value="abilities.general"
v-on:increase="increase_ability($event)"
v-on:decrease="decrease_ability($event)"
></scores>
<div><b>Budget</b> Investigative: {{ budget.investigative }}, General: {{ budget.general }}
<span v-show="is_done" style="color: red">DONE</span></div>
</div>
</template>
<script>
import abilities from './abilities';
import character from './character';
import editable from './editable.vue';
import scores from './scores.vue';
export default {
   components: {
       editable,
       scores
   },
   data() {
        return {
            name: 'Bob',
            abilities: {
                investigative: [ { name: "Criminology", value: 2 },{ name: "Research", value: 3 } ],
                general: [ {name: "Driving", value: 5}, {name: "Cover", value: 4} ]
            },
            budget: { investigative: 20, general: 70 }
        };
   },
   computed: {
        is_done() { 
            return this.budget.general === 0 
                && this.budget.investigative === 0
        }
   },
   methods: {
    log (foo) {
        console.log("Just A log: ");
        console.log(foo);
    },
    set_ability (name, value) {
    let type = (abilities.is_general(name))         ? 'general'
               : (abilities.is_investigative(name)) ? 'investigative'
                                                    : 'unknown';

        if (this.budget[type] - value >= 0) {
            let ability = this.abilities[type].find((i) => i.name === name);
            if (!ability) {
                ability = {
                  name: name,
                  value: 0
                };
                this.abilities[type].push( ability );
            }
            let cur_val = ability.value || 0;
            ability.value = cur_val + value;
            // if we hit an ability score of 0, remove the ability from the list
            if (ability.value === 0) {
                this.abilities[type] = this.abilities[type].filter((i) => i.name != ability.name);
            }
            this.budget[type] = this.budget[type] - value;
        }
  },
  increase_ability (name) {
    this.set_ability(name, 1);
    this.log(this.abilities);
  },
  decrease_ability (name ) {
    this.set_ability(name, -1);
  }

  }
};
</script>
<style scoped>
h2 {
    color: blue;
}
</style>
