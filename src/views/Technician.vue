<template>
<body>
  <div class="home">
    <Verticalscroll/>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Maincard from '@/components/Maincard.vue'
import Verticalscroll from '@/components/Verticalscroll.vue'
export default {
  name: 'Technician',
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
body {
  background-color: #0b5ce2;
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  margin-top:0;
}
</style>