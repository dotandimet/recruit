<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="ability_box">
    <h2>Investigative Abilities</h2>
    <ul>
      <li v-for="ability in abilities.investigative_abilities">{{ ability }}</li>
    </ul>
    </div>
    <div class="ability_box">
     <h2>General Abilities</h2>
    <ul>
      <li v-for="ability in abilities.general_abilities" v-on:click="selected(ability)">{{ ability }}</li>
    </ul>
    </div>
    <div class="ability_box">
    <character-sheet></character-sheet>
    </div>
 </div>
</template>

<script>
import abilities from './abilities';
import character from './character';
import characterSheet from './character_sheet.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Select Your Abilities',
      abilities: abilities,
    }
  },
  components: {
    'character-sheet': characterSheet
  },
  methods: {
  selected (ability) {
    this.$emit('add_ability', ability);
    alert(ability);
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

.ability_box {
  float: left;
  width: 280px;
  margin-right: 20px;
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
