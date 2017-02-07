<template>
<span>
<input v-if="edit_mode" v-on:input="update" v-on:keyup.enter="unedit" v-on:blur="unedit" :value="val" />
<span v-if="!edit_mode" v-on:dblclick="edit">{{ val }}</span>
</span>
</template>
<script>
export default {
    props: {
        value: {
            type: String
        }
    },
    data() {
        return {
          edit_mode: false,
          current_text: ''
        }
    },
    computed: {
        val: function() {
            return this.current_text || this.value;
        }
    },
    methods: {
       edit() {
            this.edit_mode = true;
        },
       update(e) {
           this.current_text = e.target.value;
       },
       unedit() {
          this.edit_mode = false;
       }
    }
}
</script>
