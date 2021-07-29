<template>
  <div class="about">
    <input-information v-if="userId" :userId="userId"></input-information>
  </div>
</template>

<script>
import InputInformation from '../components/Inputinformation.vue';

export default {
  data(){
    return {
      userId: ''
    }
  },
  mounted(){
    this.userId = this.$route.params.userId;
  },
  components:{
    InputInformation,
  }
}
</script>

<style scoped>
.about{
  padding-top:7.5vh;
  background-color: #222222;
}
</style>
