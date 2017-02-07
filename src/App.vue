<template>
  <div id="app">
    <abilities-list></abilities-list>
    <character-sheet></character-sheet>
    <div>
        <h2>An editable field?</h2>
        <ul>
        <li><editable value="what is up?"></editable></li>
        <li><editable value="I am a text field, not a free man!"></editable></li>
        </ul>
 </div>
</template>

<script>
import abilities from './abilities';
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
  methods: {
    selected (ability) {
      this.$emit('add_ability', ability);
      alert(ability);
    }
  },
  mounted() {
    this.$on('addAbility', (ability) => console.log("Hello from app: " + ability));
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
