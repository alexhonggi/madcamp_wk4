<template>
  <div class="just">
    <transition name=list>
      <div id=toggleButton @click="toggleClick" v-if="!toggleButton"></div>
    </transition>
    <div v-if="toggleButton" class="grid">
      <transition-group name="list">
        <div @click="cardClick(index)" v-for="(item, index) in messages" :key="index" class="block" :class="[classnamearray[index%5], flipAnimationlist[index]]">{{item.intro}}
            <div class="bx"></div>
            <div :class="animationList[index]" id=heart @click="heartClick(index); isHeartclicked=true">
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
            flipAnimationlist:Array(300).fill('none'),
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
        for(let i=0;i<300;i++){
            setTimeout(() => {
              this.messages.push({intro:i+"입니다."})
            }, 500+i*50);            
        }
      },
      cardClick(idx){
        if(this.isHeartclicked){
          this.isHeartclicked=false;
          return
        }
        else{
          if(this.flipAnimationlist[idx]==='none'){
            this.flipAnimationlist[idx]='flipcard'
          }
          else{
            this.flipAnimationlist[idx]='none'
          }
        }
      },
    }
};
</script>

<style>
.just {
  background: linear-gradient(90deg, #ff8a00, #e52e71,#ff8a00 );
}
.grid {
  display: flex;
  flex-wrap: wrap;
  margin-top:10vh;
  overflow: hidden;
  margin-left:1vw;
  margin-right:1vw;
}
.block {
  opacity: 1;
  border-radius: 10px;
  background-color: #eeeeee;
  display: block;
  padding: 20px;
  word-wrap: break-word;
  margin-bottom: -6vh ;
  width: 14.5vw;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  height: 25vw;
  margin-left:1vw;
  transition: .5s;
  box-shadow: 3px 3px ;
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
.margin{
    margin-top:8vh;
}
.flipcard{
  transition: .5s;
  transform: rotateY(180deg);
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
  position: relative;
  width: 2vw;
  height: 2vw;
  margin-top: -4vh;
  margin-left: 13vw;
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
    0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}
    40% {-webkit-transform: translateY(-1.2vh) }
    60% {-webkit-transform: translateY(-0.8vh);}
} 
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-1.2vh);}
    60% {transform: translateY(-0.8vh);}
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
