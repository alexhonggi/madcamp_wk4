<template>
  <div>
    <transition name=list>
      <div id=toggleButton @click="toggleClick" v-if="!toggleButton"></div>
    </transition>
    <div v-if="toggleButton" class="grid">
      <transition-group name="list">
        <div @click="cardClick(index)" v-for="(item, index) in messages" :key="index" class="block" :class="[classnamearray[index%5]]">
          <div class=frontcard :class="[flipAnimationlist[index]]"></div>
          <div class=backcard :class="[flipAnimationlist[index]]"></div>
          <div :class="[animationList[index], flipAnimationlist[index]]" id=heart @click="heartClick(index); isHeartclicked=true">
            <div id=heartbefore :style="{backgroundColor:heartcolor[index]}"></div>
            <div id=heartafter :style="{backgroundColor:heartcolor[index]}"></div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Verticalscroll',
    data(){
        return{
            messages:[],
            classnamearray:["nomargin","margin","nomargin","margin","nomargin"],
            heartcolor:Array(300).fill('#aaaaaa'),
            animationList:Array(300).fill('none'),
            flipAnimationlist:Array(300).fill('noflipcard'),
            randomcolorList:['#e94057','#f27121','#b9316f','#eb4d49','#ef5f35','#d63a62'],
            toggleButton:false,
            isHeartclicked:false,
        }
    },
    methods:{
      heartClick(idx){
        if(this.heartcolor[idx]==='#aaaaaa'){
          this.animationList[idx]="bounce"
          this.heartcolor[idx]='#ff1100';          
          setTimeout(() => {
            this.animationList[idx]="none"
          }, 1000);
        }
        else{
          this.heartcolor[idx]='#aaaaaa';
        }
      },
      toggleClick(){
        this.toggleButton=!this.toggleButton;
        for(let i=0;i<10;i++){
            setTimeout(() => {
              this.messages.push({intro:i+"입니다."})
            }, 500+i*50>1000?1000:500+i*50);            
        }
      },
      cardClick(idx){
        if(this.isHeartclicked){
          this.isHeartclicked=false;
          return
        }
        else{
          if(this.flipAnimationlist[idx]==='noflipcard'){
            this.flipAnimationlist[idx]='flipcard'
          }
          else{
            this.flipAnimationlist[idx]='noflipcard'
          }
        }
      },
    }
};
</script>

<style>
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top:10vh;
  overflow: hidden;
  margin-left:1vw;
  margin-right:1vw;
}
.block {
  background-color: rgba(0,0,0,0);
  display: block;
  word-wrap: break-word;
  margin-bottom: -6vh ;
  width: 18vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  height: 25vw;
  margin-left:1vw;
  transition: .5s;
}
.frontcard {
  background-color: aqua;
  position: absolute;
  width: 18vw;
  height: 25vw;
  transition: .5s;
  margin-left: -1.55vw;
  margin-top: -1.55vw;
  z-index: 2;
  -webkit-backface-visibility: hidden;  /* Chrome, Safari, Opera */
  backface-visibility: hidden;
}
.backcard {
  background-color: white;
  position: absolute;
  width: 18vw;
  height: 25vw;
  transition: .5s;
  margin-left: -1.55vw;
  margin-top: -1.55vw;
  z-index: 1;
}
.margin{
    margin-top:8vh;
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
  background-color: #eeeeee;
  display: block;
  padding: 20px;
  word-wrap: break-word;
  width: 14.5vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  height: 25vw;
  margin-left: 40vw;
  margin-Top: 15vh;
}
#heart {
  position: absolute;
  width: 2vw;
  height: 2vw;
  z-index: 3;
  margin-left: 13vw;
  margin-top: -.3vw;
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

.list-enter-active,
.list-leave-active {
  transition: all .5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
