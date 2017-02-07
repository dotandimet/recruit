<template>
    <table>
<thead v-on:click="show">
<tr><th>Ability</th><th>Value</th></tr>
</thead>
<tbody>
<tr v-for="val in value">
    <td>{{ val.name }}</td>
    <td>{{ val.value }}</td>
    <td><button v-on:click="inc(val.name)"> + </button></td>
    <td><button v-on:click="dec(val.name)"> - </button></td>
</tr>
</tbody>
</table>
</template>
<script>
export default {
    props: {
        value: {
            type: Array,
            default: function() {
                return [{ 'name': "Network", "value" : 3 }]
            }
        }
    },
    methods: {
       show: function(){
           console.log(this.value);
       },
       inc: function(name) {
           this.$emit('increase', name);
       },
       dec: function(name) {
           this.$emit('decrease', name);
       }
    }
}
</script>