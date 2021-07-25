<template>
  <div class="parent">
      <div class = "left">
        <div class="name">
            {{inform.name}}
        </div>
        <div class="job">
            {{inform.job}}
        </div>
        <div class="introduction">
            {{inform.introduction}}
        </div>
      </div>
    <textarea name="name" placeholder="이름" v-model="inform.name">
    </textarea>
    <textarea name="job" placeholder="직업" v-model="inform.job">
    </textarea>
    <textarea name="intro" placeholder="이름" v-model="inform.introduction">
    </textarea>
  </div>
  
</template>

<script>
export default {
  name: 'Inputinformation',
  data(){
      return {
          inform:{
              name:"이름",
              job:"직업",
              introduction:"소개",
          }
      }
  },
  mounted(){

  },
  props: {

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name{
    color:white;
    font-size:20pt
}
.job{
    color:white;
    font-size:20pt
}
.introduction{
    color:white;
    font-size:20pt
}
.left{
    flex:1;
}
.right{
    flex:1;
}
.parent{
    display:absolute;
}
</style>
