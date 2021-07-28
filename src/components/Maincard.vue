<template>
<transition name="fade">
  <div id="demo" v-if="updated">
    <transition name="fade">
      <p @click="show = !show ; pass = true ; pass2 = false ; index++" class = "nextFront" v-bind:key="show" v-if="!show" :style="{backgroundColor:colorlist[index]}"><div class="quote">{{users[index].description}}</div></p>
    </transition>
    <transition name="fade3">
      <p class = "nextBack" v-bind:key="show" v-if="!show"><div class="name">{{users[index].name.split(' ')[0]}}</div><div class="surname">{{users[index].name.split(' ')[1]}}</div><div class="job" :style="{backgroundColor:colorlist[index]}">{{users[index].profession}}</div><div class="bar"></div><div class="topic">{{users[index].dream}}</div></p>
    </transition>
    <!-- 밑줄에 소개 -->
    <transition name="fade">
      <p @click="show = !show ; pass2 = !pass2 ; pass = false ; index++" class = "nextFront" v-bind:key="show" v-if="show" :style="{backgroundColor:colorlist[index]}"><div class="quote">{{users[index].description}}</div></p>
    </transition>
    <transition name="fade3">
      <p class = "nextBack" v-bind:key="show" v-if="show"><div class="name">{{users[index].name.split(' ')[0]}}</div><div class="surname">{{users[index].name.split(' ')[1]}}</div><div class="job" :style="{backgroundColor:colorlist[index]}">{{users[index].profession}}</div><div class="bar"></div><div class="topic">{{users[index].dream}}</div></p>
    </transition>
    <!-- 밑에다 name, job, topic -->
    <transition name="fade2">
      <p @click="pass = false" class = "beforeBack" v-bind:key="show" v-if="pass" :style="{backgroundColor:colorlist[index-1]}"><div class="name">{{users[index-1].name.split(' ')[0]}}</div><div class="surname">{{users[index-1].name.split(' ')[1]}}</div><div class="job">{{users[index-1].profession}}</div><div class="topic">{{users[index-1].dream}}</div></p>
    </transition>
    <transition name="fade2">
      <p @click="pass2 = false" class = "beforeBack" v-bind:key="show" v-if="pass2" :style="{backgroundColor:colorlist[index-1]}"><div class="name">{{users[index-1].name.split(' ')[0]}}</div><div class="surname">{{users[index-1].name.split(' ')[1]}}</div><div class="job">{{users[index-1].profession}}</div><div class="bar"></div><div class="topic">{{users[index-1].dream}}</div></p>
    </transition>
  </div>
</transition>
</template>

<script>
import {getAllData} from '../firebase.js';

 export default {
  props:{
    userId: String
  },
  name: 'Home',
  data(){
    return{
      show:false,
      pass:false,
      pass2:false,
      elements:[],
      index:0,
      users: [],
      updated: false,
      profclass:["#f53844","#0b5ce2","#f5b338"],
      colorlist:[],
    }
  },
  async beforeMount(){
    var allUser = await getAllData();
    allUser.forEach(doc=>{
      if(doc.id != this.userId){
        this.users.push(doc.data());
      }
    })
    this.users.forEach(user=>{
      if(user.profession==="Designer"){
        this.colorlist.push(this.profclass[0])
      }else if(user.profession==="Developer"){
        this.colorlist.push(this.profclass[1])
      }else if(user.profession==="Manager"){
        this.colorlist.push(this.profclass[2])
      }
    })
    this.updated = true;
  },
  mounted(){
    console.log(this.users, this.userId);
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

.nextFront{
  color:black;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:16vh; /* margin-top: 10vh */
  background-color: #f53844;
  z-index: 2;
  border-radius: 3vh;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 20px;
  box-shadow: -3px -3px 1px 3.0px inset #742131;
  
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  text-shadow: 3px 3px #f53844;
}
.nextBack{
  color:black;
  font-size:30pt;
  width:50vh;
  height:75vh;
  left:40vh;
  position: absolute;
  top:16vh;
  background-color: #f53844;
  z-index: 1;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 20px;
  box-shadow: -3px -3px 0px 2.0px inset #4d4d4d;
    font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  text-shadow: 3px 3px #726769;
}
.beforeBack{
  color:black;
  font-size:30pt;
  background-color: #0B5CE2;
  width:50vh;
  border-radius: 3vh;
  height:75vh;
  left:99vh;
  top:16vh;
  position: absolute;
  border-radius: 20px;
  box-shadow: -3px -3px 1px 3.0px inset #052050;
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  font-weight: bolder;
  color: #ffffff;
  text-shadow: 3px 3px #0b4fb6;
}

.quote {
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  margin-right: 4rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 4rem;
  text-shadow: 3px 3px #dd4f6b;
}
.name {
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 3rem;
}
.surname {
  font-size: 58px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: -1.7rem;
}
.job {
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3.2rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 0rem;
  border-width: 3px;
  border-color: white;
  width: 150px;
}
.bar {
  height: 5px;
  width: 300px;
  color: #FFFFFF;
  background-color: #FFFFFF;
  margin-left: 3.2rem;
  margin-top: 0.7rem;
}
.topic {
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #ffffff;
  margin-top: 2rem;
  margin-right: 3rem;
}

</style>