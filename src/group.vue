<template>
  <div>
    <abilities-list v-on:add="addAbility($event)"></abilities-list>
    <character-sheet v-bind:character="char"></character-sheet>
</div>
</template>

<script>
import character from './character';
import characterSheet from './character_sheet.vue';
import abilitiesList from './abilities_list.vue';

export default {
  components: {
    characterSheet,
    abilitiesList
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
</style>

