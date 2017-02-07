<template>
<div class="abilities">
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
 </div>
</template>

<script>
import abilities from './abilities';

export default {
  data () {
    return {
      msg: 'Select Your Abilities',
      abilities: abilities,
    }
  },
 methods: {
  selected (ability) {
    this.$emit('addAbility', ability);
    alert(ability);
  }
 }
}
</script>

<style>
.ability_box {
  float: left;
  width: 280px;
  margin-right: 20px;
}
</style>
