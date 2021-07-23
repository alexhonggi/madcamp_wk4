<template>
<body>
  <div class="home">
    <Slider/>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Slider from '@/components/Slider.vue'

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
    HelloWorld,
    Slider
  }
}
</script>

<style scoped>
body{
  overflow: hidden;
}
.home{
  background: black;
  width:100vw;
  height: 100vh;
}
</style>