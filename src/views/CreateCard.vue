<template>
    <div>
        <input-form @shownav="shownav" v-if="userId" :userId="userId"></input-form>
    </div>
</template>
<script>

import InputForm from '../components/InputForm.vue';
import Login from '../components/Login.vue';

export default {
  components: {
    InputForm, Login
  },
  data(){
    return {
      userId: '',
    }
  },
  mounted(){
    this.userId = this.$route.params.userId;
  },
    methods: {
        shownav(){
            this.$emit('shownav');
            console.log("Here");
        }
    },
}
</script>
<style>
    
</style>