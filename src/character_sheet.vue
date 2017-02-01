<template>
<div>
<h1>{{ name }}</h1>
<h2>Investigative Abilities</h2>
<table>
<thead>
<tr><th>Ability</th><th>Value</th></tr>
</thead>
<tbody>
<tr v-for="name in abilities.investigative.keys">
    <td>{{ name }}</td>
    <td>{{ abilities.investigative[name] }}</td>
</tr>
</tbody>
</table>
<h2>General Abilities</h2>
<table>
<thead>
<tr><th>Ability</th><th>Value</th></tr>
</thead>
<tbody>
<tr v-for="name in abilities.general.keys">
    <td>{{ name }}</td>
    <td>{{ abilities.general[name] }}</td>
</tr>
</tbody>
</table>
</div>
</template>
<script>
import character from './character';
export default {
   data() {
      let c = new character();
      console.log(c);
      return c;
   } 
};
</script>
