<template>
  <div id="demo">
    <transition name="fade">
      <p @click="show = !show ; pass = true ; pass2 = false ; index++" class = "front1" v-bind:key="show" v-if="!show">{{elements[index].intro}}</p>
    </transition>
    <transition name="fade3">
      <p class = "back1" v-bind:key="show" v-if="!show">{{elements[index].name}}</p>
    </transition>
    <transition name="fade">
      <p @click="show = !show ; pass2 = !pass2 ; pass = false ; index++" class = "front1" v-bind:key="show" v-if="show">{{elements[index].intro}}</p>
    </transition>
    <transition name="fade3">
      <p class = "back1" v-bind:key="show" v-if="show">{{elements[index].name}}</p>
    </transition>
    <transition name="fade2">
      <p @click="pass = false" class = "box2" v-bind:key="show" v-if="pass">{{elements[index-1].name}}</p>
    </transition>
    <transition name="fade2">
      <p @click="pass2 = false" class = "box2" v-bind:key="show" v-if="pass2">{{elements[index-1].name}}</p>
    </transition>
  </div>
</template>

<script>
 export default {
  name: 'Home',
  props:{
    userId: String
  },
  data(){
    return{
      show:false,
      pass:false,
      pass2:false,
      elements:[],
      index:0,
    }
  },
  beforeMount(){
    for(let i=0;i<30;i++){
      this.elements.push({name:i+'입니다', intro:'안녕하세요'+i+'입니다'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.fade-enter-active, .fade-leave-active{
  transition: all 0.5s ease;
}
.fade-leave-to{
  transform: rotateY(180deg) translateX(59vh);
}
.fade-enter-from{
  opacity: 0;
}

.fade3-enter-active, .fade3-leave-active{
  transition: all 0.5s ease;
}
.fade3-enter-active{
  transition-delay: .5s;
}
.fade3-leave-from , .fade3-enter-to{
  transform:rotateY(180deg);
}
.fade3-leave-to {
  transform: translateX(59vh) rotateY(0);
}
.fade3-enter-from{
  opacity: 0;
}

.fade2-enter-active {
  transition-delay: 0.5s
}
.fade2-leave-active {
  transition: all 0.5s ease;
}
.fade2-leave-to, .fade2-enter-from{
  opacity: 0;
  transform: translateX(100px);
}

.front1{
  color:aquamarine;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:10vh;
  background: olive;
  z-index: 2;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
}
.back1{
  color:aquamarine;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:10vh;
  background: white;
  z-index: 1;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
}
.box2{
  color:aquamarine;
  font-size:30pt;
  background: white;
  width:50vh;
  top:10vh;
  height:75vh;
  left:99vh;
  position: absolute;
}
</style>