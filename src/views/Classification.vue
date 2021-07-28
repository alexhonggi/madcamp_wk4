<template>
    <div class="wrapper" :style="{backgroundColor:backgroundcolor}" v-if="userId">
        <transition-group>
            <div @mouseenter="changeBackground(0)" @click="clickevent(0)" class="firstblock" :class="transition[0]">Designer</div>
            <div @mouseenter="changeBackground(1)" @click="clickevent(1)" class="secondblock" :class="transition[1]">Technician</div>
            <div @mouseenter="changeBackground(2)" @click="clickevent(2)" class="thirdblock" :class="transition[2]">Executive</div>
        </transition-group>        
    </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import Maincard from '@/components/Maincard.vue'
import Verticalscroll from '@/components/Verticalscroll.vue'
export default {
  name: 'Classification',
    data(){
        return{
            backgroundcolor:"#ffffff",
            backgroundcolorList:["#ad242d","#0342ab","#d99134"],
            backgroundcolorClick:["#f53844","#0b5ce2","#f5b338"],
            transition:['none','none','none'],
            userId: '',
        }
    },
    mounted(){
        this.userId = this.$route.params.userId;
    },
    methods:{
        changeBackground(idx){
            this.backgroundcolor=this.backgroundcolorList[idx];
        },
        clickevent(idx){
            this.backgroundcolor=this.backgroundcolorClick[idx];
            switch (idx) {
                case 0:
                    this.transition[0]='transitionUp'
                    this.transition[1]='transitionDown'
                    this.transition[2]='transitionDown'
                    setTimeout(() => {
                        this.$router.push({name: 'Designer', params: {userId: this.userId}});
                    }, 1000);
                    break;
                case 1:
                    this.transition[0]='transitionDown'
                    this.transition[1]='transitionUp'
                    this.transition[2]='transitionDown'
                    setTimeout(() => {
                        this.$router.push({name: 'Technician', params: {userId: this.userId}});
                    }, 1000);
                    break;
                case 2:
                    this.transition[0]='transitionDown'
                    this.transition[1]='transitionDown'
                    this.transition[2]='transitionUp'
                    setTimeout(() => {
                        this.$router.push({name: 'Executive', params: {userId: this.userId}});
                    }, 1000);
                    break;
                default:
                    break;
            }
        }
    },
    components: {
        Maincard,
        Verticalscroll
    }
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  width: 100%;
  min-height: 100vh;
  max-height: max-content;
  margin-top:0;
  transition: .5s;
  color: white;
  font-size:30pt;
  top:7.5vh;
}
.firstblock{
    background: #f53844;
    width:25%;
    height:66vh;
    margin:2vw;
    margin-top:15vh;
    border-radius: 1vw;
    box-shadow: -0.3vw -0.3vw 0 0.1vw black inset;
    display: inline-block;
    opacity: 1;
}
.secondblock{
    background: #0b5ce2;
    width:25%;
    height:66vh;
    margin:2vw;
    border-radius: 1vw;
    box-shadow: -0.3vw -0.3vw 0 0.1vw black inset;
    display: inline-block;
    opacity: 1;
}
.thirdblock{
    background: #f5b338;
    width:25%;
    height:66vh;
    margin:2vw;
    border-radius: 1vw;
    box-shadow: -0.3vw -0.3vw 0 0.1vw black inset;
    display: inline-block;
    opacity: 1;
}
.transitionUp{
    transition-delay: .5s;
    transition:.5s;
    transform: translateY(-10vh);
    opacity: 0;
}
.transitionDown{
    transition:.5s;
    transform: translateY(10vh);
    opacity:0;
}
</style>