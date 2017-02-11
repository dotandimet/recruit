<template>
  <div id="app">
    <abilities-list v-on:add="addAbility($event)"></abilities-list>
    <character-sheet v-bind:character="char"></character-sheet>
    <div>
        <h2>An editable field?</h2>
        <ul>
        <li><editable value="what is up?"></editable></li>
        <li><editable value="I am a text field, not a free man!"></editable></li>
        </ul>
 </div>
</template>

<script>
import character from './character';
import characterSheet from './character_sheet.vue';
import abilitiesList from './abilities_list.vue';
import editable from './editable.vue';

export default {
  name: 'app',
  components: {
    characterSheet,
    abilitiesList,
    editable
  },
  data() {
    return { char: character.character('Jerry') };
  },
  methods: {
    addAbility(ability) {
      character.set_ability(this.char, ability, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
/*  text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  overflow: scroll;
}

li {
  /* display: inline-block; */
  margin: 0 10px;
  border: solid red 1px;
}

a {
  color: #42b983;
}
</style>
