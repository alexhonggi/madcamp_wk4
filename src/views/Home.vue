<template>
  <div class="home">
    <div class="element"></div>
    <Maincard class="scroll"/>
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
      number:0
    }
  },
  methods:{

  },
  components: {
    Maincard,
    Verticalscroll
  }
}
</script>

<style scoped>
.home {
  background: #F5B339;
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  margin-top:0;
}
.scroll{
  top:10vh;
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