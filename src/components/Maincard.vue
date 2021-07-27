<template>
  <div id="demo">
    <transition name="fade">
      <p @click="show = !show ; pass = true ; pass2 = false ; index++" class = "nextFront" v-bind:key="show" v-if="!show">{{elements[index].intro}}<div class="quote">SPARK<br> THE<br> POWER OF<br> LEARNING<br> TOGETHER</div></p>
    </transition>
    <transition name="fade3">
      <p class = "nextBack" v-bind:key="show" v-if="!show">{{elements[index].name}}</p>
    </transition>
    <transition name="fade">
      <p @click="show = !show ; pass2 = !pass2 ; pass = false ; index++" class = "nextFront" v-bind:key="show" v-if="show" :style="{ color:[]}">{{elements[index].intro}}<div class="quote">SPARK<br> THE<br> POWER OF<br> LEARNING<br> TOGETHER</div></p>
    </transition>
    <transition name="fade3">
      <p class = "nextBack" v-bind:key="show" v-if="show">{{elements[index].name}}</p>
    </transition>
    <transition name="fade2">
      <p @click="pass = false" class = "beforeBack" v-bind:key="show" v-if="pass">{{elements[index-1].name}}<div class="quote">HONGGI LEE<br><br><br>FRONTEND<br>DESIGNER</div></p>
    </transition>
    <transition name="fade2">
      <p @click="pass2 = false" class = "beforeBack" v-bind:key="show" v-if="pass2">{{elements[index-1].name}}<div class="quote">HONGGI LEE<br><br><br>FRONTEND<br>DESIGNER</div></p>
    </transition>
    
  </div>
</template>

<script>
 export default {
  name: 'Home',
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
      this.elements.push({ name:i+'입니다', intro:'안녕하세요'+i+'입니다'})
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
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

.designer {
  color:black;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:10vh;
  background: #FB4F72;
  z-index: 2;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: -3px -3px 1px 3.0px inset #742131;
  
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5rem;
  text-shadow: 3px 3px #dd4f6b;
}


.nextFront{
  color:black;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:10vh; /* margin-top: 10vh */
  background: #FB4F72;
  z-index: 2;
  border-radius: 3vh;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: -3px -3px 1px 3.0px inset #742131;
  
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5rem;
  text-shadow: 3px 3px #dd4f6b;
}
.nextBack{
  color:black;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:10vh;
  background: #FB4F72;
  z-index: 1;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 20px;
  margin-top: 30px;
  box-shadow: -3px -3px 0px 2.0px inset #4d4d4d;
    font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5rem;
  text-shadow: 3px 3px #726769;
}
.beforeBack{
  color:black;
  font-size:30pt;
  background: #0B5CE2;
  width:50vh;
  border-radius: 3vh;
  height:75vh;
  left:99vh;
  position: absolute;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: -3px -3px 1px 3.0px inset #052050;
    font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5rem;
  text-shadow: 3px 3px #0b4fb6;
}

.quote {
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 5rem;
  text-shadow: 3px 3px #dd4f6b;
}
</style>