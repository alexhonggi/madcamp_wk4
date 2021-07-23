<template>
<div>
  <div @mousedown="mousedownevent($event,0)"
  @mousemove="mousemoveevent($event,0)"
  @mouseup="mouseupevent($event,0)" 
  @click="clickevent($event,0)" class="slider" ref="slider1ref">
    <div class="innerSlider" ref="innerSlider1ref" :style="{left:sliderleftlist[0].left+'px'}">
        <div class = "slideitem" :style="{backgroundColor:itemlist1[index].color}" v-bind:key="item" v-for="(item, index) in itemlist1"></div>
    </div>
  </div>
  <div @mousedown="mousedownevent($event,1)"
  @mousemove="mousemoveevent($event,1)"
  @mouseup="mouseupevent($event,1)"
   @click="clickevent($event,1)" class="slider" :style="{top:'45%'}">
    <div class="innerSlider" :style="{left:sliderleftlist[1].left+'px'}">
        <div class = "slideitem" :style="{backgroundColor:itemlist2[index].color}" v-bind:key="item" v-for="(item, index) in itemlist2"></div>
    </div>
  </div>
  <div @mousedown="mousedownevent($event,2)"
  @mousemove="mousemoveevent($event,2)"
  @mouseup="mouseupevent($event,2)"
   @click="clickevent($event,2)"
   @scroll="scrollevent($event)" class="slider" :style="{top:'70%'}">
    <div class="innerSlider" :style="{left:sliderleftlist[2].left+'px'}">
        <div class = "slideitem" :style="{backgroundColor:itemlist3[index].color}" v-bind:key="item" v-for="(item, index) in itemlist3"></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Slider',
    props: {

    },
    data(){
        return{
            itemlist1:[],
            itemlist2:[],
            itemlist3:[],
            sliderleftlist:[{left:0},{left:-120},{left:-200}],
            startx:[0,0,0],
            x:0,
            vx:0.3,
            pressed:false,
            isdrag:false,
            leftconstraint:[0,-120, -200]
        }
    },
    mounted() {
        for(let i=0;i<10;i++){
            const colorlist = ["#ff0066", "#0044ff", "#ffff00"]
            this.itemlist1.push({id:i, name:i.toString(), color:colorlist[i%3]})
            this.itemlist2.push({id:i, name:i.toString(), color:colorlist[(i+1)%3]})
            this.itemlist3.push({id:i, name:i.toString(), color:colorlist[(i+2)%3]})
        }
        setInterval(()=>{
            this.sliderleftlist[0].left+=this.vx;
            this.checkBoundry(0);
            this.sliderleftlist[1].left+=this.vx;
            this.checkBoundry(0);
            this.sliderleftlist[2].left+=this.vx;
            this.checkBoundry(0);
        },10)
        
    },
    beforeDestroy(){

    },
    methods:{
        mousedownevent(event, index){
            this.pressed=true;
            this.startx[0]=event.offsetX-this.sliderleftlist[0].left;
            this.startx[1]=event.offsetX-this.sliderleftlist[1].left;
            this.startx[2]=event.offsetX-this.sliderleftlist[2].left;
        },
        mousemoveevent(event, index){
            if(!this.pressed) return;
            this.x=event.offsetX;
            var moved = this.x-this.startx[0];
            this.sliderleftlist[0].left = moved;
            this.checkBoundry(0);
            moved = this.x-this.startx[1];
            this.sliderleftlist[1].left = moved;
            this.checkBoundry(1);
            moved = this.x-this.startx[2];
            this.sliderleftlist[2].left = moved;
            this.checkBoundry(2);
            this.isdrag=true;
        },
        mouseupevent(event, index){
            this.pressed=false;
            this.isdrag=false;
        },
        checkBoundry(index) {
            const gap  = this.$refs.innerSlider1ref.clientWidth - this.$refs.slider1ref.clientWidth ;
            if(this.sliderleftlist[index].left>this.leftconstraint[index]){
                this.sliderleftlist[index].left=this.leftconstraint[index];
                this.vx*=(-1);
            }
            else if(gap<-this.sliderleftlist[index].left+this.leftconstraint[index]){
                this.sliderleftlist[index].left=-gap+this.leftconstraint[index]
                this.vx*=(-1);
            }
        },
        clickevent(event, index){
            if(!this.isdrag){
                const ind = Math.floor((event.offsetX-this.sliderleftlist[index].left)/240)
                console.log("("+ind+","+index+")");
            }
        },
        scrollevent(event){
            console.log(event);
        }
    },
    computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
template{
    padding: 0%;
    background: black;
}
.wrapper{
    background: black;
    width:100%;
    height:100%;
}
.slider {
  position: absolute;
  left: 10%;
  top: 20%;
  width: 80%;
  height: 23vh;
  overflow: hidden;
  align-items: center;
}
.innerSlider{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 100%;
  width: 2500px;
  display: grid;
  grid-template-columns: repeat(10, 230px);
  gap: 10px;
  pointer-events: none;
  transition: 0s ease-in;
}
.slideitem{
  height: 100%;
  background-color: gray;
  font-size: 16pt;
  font-family: "titlehandwrites";
  border-radius: 10px;
  text-align: center;
}
</style>
