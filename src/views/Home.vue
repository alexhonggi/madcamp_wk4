<template>
  <div class="home">
    <Maincard :userId="userId" class="scroll"/>
  </div>
</template>

<script>
// @ is an alias to /srcsnts/Slider.vue'
import Maincard from '@/components/Maincard.vue'
import Verticalscroll from '@/components/Verticalscroll.vue'
export default {
  name: 'Home',
  data(){
    return{
      items:['하나','둘','셋'],
      number:0,
      userId: ''
    }
  },
  mounted(){
    this.userId = this.$route.params.userId;
  },
  components: {
    Maincard,
    Verticalscroll
  }
}
</script>

<style scoped>
.home {
  background-color: #f53844;
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  margin-top:0;
}
.scroll{
  top:10vh;
}
</style>