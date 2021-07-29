<template>
  <div class="just">
    <div v-if="toggleButton" class="grid" :class="[awefawef]">
      <transition-group name="list"> 
        <div @click="cardClick(index)" @mousedown="mouseDown(index,$event)" @mousemove="mouseMove(index,$event)" @mouseup="mouseUp(index,$event)" v-for="(item, index) in users" :key="item" class="block" :class="[classnamearray[index%2]]">
          <div class=frontcard :class="[flipAnimationlist[index]]"><div class="quote">{{users[index].description}}</div></div>
          <div class=backcard :class="[flipAnimationlist2[index]]">
            <div class="name">{{users[index].name.split(' ')[0]}}</div>
            <div class="surname">{{users[index].name.split(' ')[1]}}</div>
            <div class="job" >{{users[index].profession}}</div><div class="bar"></div>
            <div class="topic">{{users[index].dream}}</div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import {getProfData} from '../firebase.js';

export default {
    name: 'Verticalscroll',
    props:{
      userId: String,
      prof: String
    },
    data(){
        return{
            classnamearray:["nomargin","margin"],
            heartcolor:Array(300).fill('#989898'),
            animationList:Array(300).fill('none'),
            flipAnimationlist:Array(300).fill('noflipcard'),
            flipAnimationlist2:Array(300).fill('filpcard'),
            randomcolorList:['#e94057','#f27121','#b9316f','#eb4d49','#ef5f35','#d63a62'],
            toggleButton:true,
            isHeartclicked:false,
            isMousedrgged:false,
            isMousepressed:false,
            starty:0,
            input: [],
            users: [],
            updated: false,
        }
    },
    async beforeMount(){
      var allUser = await getProfData(this.prof);
      allUser.forEach(doc=>{
        if(doc.id != this.userId){
          this.input.push(doc.data());
        }
      })
      this.updated = true;
      for(let i=0;i<this.input.length;i++){
        setTimeout(() => {
          this.users.push(this.input[i])
        }, i*50>300?300:i*50);
      }
    },
    mounted(){
    },
    methods:{
      heartClick(idx){
        if(this.heartcolor[idx]==='#989898'){
          this.animationList[idx]="bounce"
          this.heartcolor[idx]='#f53844';          
          setTimeout(() => {
            this.animationList[idx]="none"
          }, 1000);
        }
        else{
          this.heartcolor[idx]='#989898';
        }
      },
      cardClick(idx){
        if(this.isHeartclicked||this.isMousedrgged){
          this.isHeartclicked=false;
          this.isMousedrgged=false;
          return
        }
        else{
          if(this.flipAnimationlist[idx]==='noflipcard'){
            this.flipAnimationlist[idx]='flipcard'
            this.flipAnimationlist2[idx]='noflipcard'
          }
          else{
            this.flipAnimationlist[idx]='noflipcard'
            this.flipAnimationlist2[idx]='flipcard'            
          }
        }
      },
      mouseDown(idx,event){
        this.isMousepressed=true;
        this.starty=event.y;
      },
      mouseMove(idx,event){
        if(this.isMousepressed){
          this.isMousedrgged=true;
        }
      },
      mouseUp(idx,event){
        if(this.isMousedrgged){
          console.log(event.y-this.starty);
          if((event.y-this.starty)<-100){
            this.users.splice(idx,1);
            this.flipAnimationlist.splice(idx,1);
          }
        }
        this.isMousepressed=false;
      }
    }
};
</script>

<style>
.just {
  /* background: linear-gradient(90deg, #ff8a00, #e52e71,#ff8a00 ); */
  margin-bottom: 900px;
} 
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top:12.5vh;
  overflow: hidden;
  margin-left: 10vw;
  margin-bottom: 10vh;
}
.block {
  background-color: rgba(0,0,0,0);
  word-wrap: break-word;
  display: inline-block;
  width: 18vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  height: 25vw;
  margin-left:1vw;
  transition: .5s;
  margin-top:1vw;
}
.bx {
  position: relative;
  width:40px;
  height: 7px;
  background-color: #ff0000;
  background: linear-gradient(90deg, #e52e71,#ff8a00 );
  z-index:5;
  margin-top: 10px;
}
.frontcard {
  background-color: #ffffff;
  position: absolute;
  width: calc(18vw);
  height: 25vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  transition: .5s;
  z-index: 2;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  border-radius: 10px;
  box-shadow: -3px -3px 0px 2.0px inset #4d4d4d;
}
.backcard {
  background-color:#ffffff;
  position: absolute;
  width: calc(18vw - 2px);
  height: 25vw;
  transform: rotateY(180deg);
  z-index: 1;
  border-radius: 10px;
  box-shadow: -3px -3px 0px 2.0px inset #4d4d4d;
}
.quote {
  font-size: 2.85vh;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 4rem;
  margin-right: 4rem;
  font-weight: bolder;
  color: #000000;
  margin-top: 4rem;
}
.name {
  font-size: 2vh;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #000000;
  margin-top: 2vh;
}
.surname {
  font-size: 2vh;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #000000;
}
.job {
  font-size: 3vh;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  font-weight: bolder;
  margin-left: 3rem;
  color: #000000;
  margin-top: 0rem;
  border-width: 3px;
  border-color: white;
}
.bar {
  height: 5px;
  width: calc(15vw+2px);
  color: #000000;
  background-color: #000000;
  margin-left: 3.2rem;
  margin-top: 0.7rem;
}
.topic {
  font-size: 3vh;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
  margin-left: 3rem;
  font-weight: bolder;
  color: #000000;
  margin-top: 2rem;
  margin-right: 3rem;
}
.margin{
  padding-top:7vh;
}

.nomargin{

}
.flipcard{
  transition: .5s;
  transform: rotateY(180deg);
}
.noflipcard{
  transition: .5s;
  transform: rotateY(0deg);
}
#toggleButton{
  background-color: whitesmoke;
  display: block;
  word-wrap: break-word;
  width: 18vw;
  height: 25vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  margin-left: 40vw;
  margin-Top: 15vh;
  margin-bottom:500px;
  border-radius: 10px;
  box-shadow: -3px -3px 0px 2.0px inset #4d4d4d;
}
#heart {
  position: absolute;
  width: 2vw;
  height: 2vw;
  z-index: 3;
  margin-left: 14.5vw;
  margin-top: 1vw;
}

#heartbefore, #heartafter {
  content: "";
  position: absolute;
  top:0;
  width: 1vw;
  height: 1.5vw;
  border-radius: 2vw 2vw 0 0;
  background: #ff0000;
  transition: .3s;
}

#heartbefore {
  left: 1vw;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
}

#heartafter {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}

@-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-webkit-transform:scale(1);}
    40% {-webkit-transform: scale(1.2) }
    60% {-webkit-transform: scale(0.8);}
} 
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {-webkit-transform:scale(1);}
    40% {-webkit-transform: scale(1.2) }
    60% {-webkit-transform: scale(0.7);}
} 
.bounce {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-name: bounce;
    animation-name: bounce;
}

.list-enter-active{
  transition: all .5s ease;
}
.list-leave-active {
  transition: all .5s ease;
  position: absolute;
}

.list-enter-from{
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}
</style>
