<template>
  <div class="home" >
    <div class="element"></div>
    <Maincard @updateBackground="changeColor" v-if="userId" :userId="userId" class="scroll"/>
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
      userId: '',
      bgcolor:"#111111"
    }
  },
  methods:{
    changeColor(color){
      this.bgcolor=color
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
  background-color: #161A31;
  width: 100%;
  min-height: 92.5vh;
  max-height: max-content;
  margin-top:7.5vh;
}
/* .element {
  width: 100vw;
  height: 100vh;
  background: 
    radial-gradient(
      farthest-side at bottom left,
      #0B5CE2, 
      transparent
    ),
    radial-gradient(
      farthest-side at bottom right,
      #f5b338, 
      transparent 
    );
} */
</style>