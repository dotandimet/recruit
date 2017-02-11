<template>
<div>
<h1><editable v-bind:value="character.name"></editable></h1>
<h2>Investigative Abilities</h2>
<scores v-bind:value="character.abilities.investigative"
v-on:increase="increase_ability($event)"
v-on:decrease="decrease_ability($event)"
></scores>
<h2>General Abilities</h2>
<scores v-bind:value="character.abilities.general"
v-on:increase="increase_ability($event)"
v-on:decrease="decrease_ability($event)"
></scores>
<div><b>Budget</b> Investigative: {{ character.budget.investigative }}, General: {{ character.budget.general }}
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
   props: ['character'],
   computed: {
        is_done() { 
            return this.character.budget.general === 0 
                && this.character.budget.investigative === 0
        }
   },
   methods: {
    log (foo) {
        console.log("Just A log: ");
        console.log(foo);
    },
    increase_ability(ability) {
        character.set_ability(this.character, ability, 1);
    },
    decrease_ability(ability) {
        character.set_ability(this.character, ability, -1);
    }
   }
};
</script>
<style scoped>
h2 {
    color: blue;
}
</style>
