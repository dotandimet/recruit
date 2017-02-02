<template>
<div>
<h1>{{ character.name }}</h1>
<h2>Investigative Abilities</h2>
<table>
<thead>
<tr><th>Ability</th><th>Value</th></tr>
</thead>
<tbody>
<tr v-for="name in character.abilities.investigative.keys">
    <td>{{ name }}</td>
    <td>{{ character.abilities.investigative[name] }}</td>
</tr>
</tbody>
</table>
<h2>General Abilities</h2>
<table>
<thead>
<tr><th>Ability</th><th>Value</th></tr>
</thead>
<tbody>
<tr v-for="name in character.abilities.general.keys">
    <td>{{ name }}</td>
    <td>{{ character.abilities.general[name] }}</td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
import character from './character';
export default {
   data() {
        return {
            character: new character()
        };
   },
   mounted() {
    this.$on('add_ability', function(ability){
            console.log("add_ability called " + ability);
            this.character.set_ability(ability, 1);
            });
    console.log('character sheet is mounted');
   },
   methods: {
  }
};
</script>
<style scoped>
h2 {
    color: blue;
}
</style>
