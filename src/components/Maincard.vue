<template>
  <div id="demo">
    <transition name="fade">
      <p @click="show = !show" class = "front1" v-bind:key="show" v-if="!show">333</p>
    </transition>
    <transition name="fade3">
      <p class = "back1" v-bind:key="show" v-if="!show">555</p>
    </transition>
    <transition name="fade2">
      <p @click="show = !show" class = "box2" v-bind:key="show" v-if="show">555</p>
    </transition>
  </div>
</template>

<script>
 export default {
  name: 'Home',
  data(){
    return{
      show:true
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.fade-enter-active, .fade-leave-active{
  transition: all 0.5s ease;
}
.fade-leave-to, .fade-enter-from{
  transform: rotateY(180deg) translateX(320px);
}

.fade3-enter-active, .fade3-leave-active{
  transition: all 0.5s ease;
}
.fade3-leave-from , .fade3-enter-to{
  transform:rotateY(180deg);
}
.fade3-leave-to, .fade3-enter-from{
  transform: translateX(320px) rotateY(0);
}

.fade2-enter-active {
  transition-delay: 0.5s;
}
.fade2-leave-active {
  display: none;
}
.fade2-leave-to, .fade2-enter-from{
  opacity: 0;
}

.front1{
  color:aquamarine;
  font-size:30pt;
  width:300px;
  height:500px;
  left:0px;
  position: absolute;
  background: olive;
  z-index: 2;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
}
.back1{
  color:aquamarine;
  font-size:30pt;
  width:300px;
  height:500px;
  left:0px;
  position: absolute;
  background: white;
  z-index: 1;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
}
.box2{
  color:aquamarine;
  font-size:30pt;
  background: white;
  width:300px;
  height:500px;
  margin-left:300px;
  position: absolute;
}
</style>
