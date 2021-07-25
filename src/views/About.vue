<template>
<body>
  <div class="home">
    <Inputinformation/>
  </div>
</body>
</template>

<script>
// @ is an alias to /src
import Inputinformation from '../components/Inputinformation.vue'
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
    Inputinformation
  }
}
</script>

<style scoped>
</style>