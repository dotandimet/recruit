<template>
<span>
<input v-if="edit_mode" v-on:input="update" v-on:keyup.enter="unedit" v-on:blur="unedit" />
<span v-if="!edit_mode" v-on:click="edit">{{ text }}</span>
</span>
</template>
<script>
export default {
    props: {
        text: ''
    },
    data() {
        return {
          text: 'hello',
          edit_mode: false
        }
    },
    methods: {
       edit() {
            this.edit_mode = true;
        },
       update(e) {
           this.text = e.target.value;
       },
       unedit() {
          this.edit_mode = false;
       }
    }
}
</script>
