<template>
  <div class="myNamecard">      
    <div class="name-card-grid" v-if="dataReady">
      <article
        class="name-card module module-article article"
        id="name-post-302186"
        v-for="(user) in userData"
        :key="user.name"
      >
        <div class="container">
          <header class="name-article-card-header">
            <div class="name-article-card-title">
              <h1 class="">
                <div class="article-card-header read-article">
                  {{user.name}}
                </div>
              </h1>
            </div>
            <div class="name-article-meta">
            <div class="name-article-byline">
              <div class="author-avatar">
                <img
                  alt=""
                  :src="user.profileImage"
                  data-lazy-loaded="1"
                />
              </div>
            </div>
            <h2 class="author-name-area">
              {{user.profession}}
            </h2>
            <br>
            <h2 class="author-name-area">
              {{user.phonenumber}}
            </h2>
            <br>
            <h2 class="author-name-area">
              {{user.email}}
            </h2>
            <br>
            <h2 class="author-name-area">
              {{user.dream}}
            </h2>
          </div>
        </header>
      </div>
      </article>
    </div>
  </div>
</template>

<script>
import {getUser, getLikes} from '../firebase.js';

export default {
  props:{
    userId: String
  },
  name: 'Inputinformation',
  data(){
    return {
      userData: [],
      dataReady: false,
      flipanimationList:[],
    }
  },
  async mounted(){
    let googleId = this.userId;
    console.log(googleId);
    const user = await getUser(googleId);
    const likes = user.like;
    const dataList = await getLikes(likes);
    this.userData = dataList;
    this.flipanimationList=Array(this.userData.length).fill('none')
    this.dataReady = true;
  },
  methods: {
    clickAnimation(idx){
      if(this.flipanimationList[idx]==='cardflip'){
        this.flipanimationList[idx]='nocardflip';
      }else{
        this.flipanimationList[idx]='cardflip';
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR&display=swap');
@media screen and (prefers-reduced-motion: reduce) {
  * {
    -webkit-transition: 0s !important;
    transition: 0s !important;
  }
}
*,
:after,
:before {
  box-sizing: border-box;
  font-family: 'Apple SD Gothic', sans-serif;
}
a {
  text-decoration: none;
}
article,
header {
  display: block;
}
img {
  border: 0;
  -ms-interpolation-mode: bicubic;
}
@media (prefers-reduced-motion: reduce) {
  * {
    -webkit-animation-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
h1{
  font-weight: 1000;
  color: #d4ccca;
  font-size:45px;
  line-height: 0.2;
}
h2 {
  font-weight: 900;
  margin: 0 0 1.5rem;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1;
  max-width: 300px;
}
/* 이름 */
h2{
  color: #d4ccca;
  border: 0;
  font-size: 38px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  display: inline-block;
}
@media (max-width: 1200px) {
  h2 {
    font-size: 1.8rem;
  }
}
@media (max-width: 800px) {
  h2 {
    font-size: 1.7rem;
  }
}
time {
  color: #a0a0b7;
}
p {
  margin: 0 0 1.5rem;
}
p:empty {
  display: none;
}
.module {
  clear: both;
  margin: 0 0 1rem;
  position: relative;
}
.module > :last-child,
.module > :last-child > :last-child {
  margin-bottom: 0;
}
img {
  max-width: 80%;
  height: 80% !important;
  object-fit: cover;
  display: block;
  margin: auto;
  border-radius: 50%;
}
.author-avatar {
  text-align: center;
  width:300px;
  vertical-align: middle;
  display: table-cell;
  height: 300px;
  vertical-align: middle;  
}
.author-name-area {
  grid-area: author;
  margin: 50px;
}
.author-name,
time {
  font-family: Sentinel SSm A, Sentinel SSm B, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
}
.author-name {
    margin: 0px;
}
.myNamecard {
  box-sizing: content-box;
  display: -webkit-box;
  display: flex;
  width: calc(90vw);
  margin-top:10vh;
  margin-left:4.5vw;
  padding: 2rem 0;
}
@media (max-width: 1200px) {
  .myNamecard {
    scrollbar-color: #201c29;
    scrollbar-width: 10px;
    width: 100%;
    padding-bottom: 2rem;
    margin-bottom: 6rem;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    -ms-scroll-snap-points-x: repeat(250px);
    scroll-snap-points-x: repeat(250px);
    -ms-scroll-snap-type: mandatory;
    scroll-snap-type: mandatory;
  }
  .myNamecard::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .myNamecard::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
  .myNamecard::-webkit-scrollbar-track {
    background: linear-gradient(
      90deg,
      #201c29,
      #201c29 1px,
      #17141d 0,
      #17141d
    );
  }
  .myNamecard .name-card {
    scroll-snap-align: start;
  }
}
@media (max-width: 1200px) {
  .myNamecard {
    padding-left: 0;
  }
}
.name-card-grid {
  padding: 3rem;
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style:none;
}
.name-card-grid::-webkit-scrollbar{
  display:none;
}
@media (max-width: 1200px) {
  .name-card-grid {
    overflow-x: visible;
  }
}
.tags a {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
}
/* 카드 메인 */
.name-card {
  align-items: center;
  min-width: 500px;
  min-height: 750px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #36333b;
  box-shadow: -1rem 0 3rem #000;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  margin: 0;
}
.name-card h2 {
  font-size: 25px;
  margin: 0.25rem 0 auto;
}
.name-card:not(:first-child) {
  margin-left: -130px;
}
.name-card:hover {
  -webkit-transform: translateY(-1rem);
  transform: translateY(-1rem);
}
.name-card:hover ~ .name-card {
  -webkit-transform: translateX(130px);
  transform: translateX(130px);
}
/* 반응형 1200 */
@media (max-width: 1200px) {
  .name-card {
    min-width: 220px;
  }
  .name-card:not(:first-child) {
    margin-left: -30px;
  }
  .name-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
  .name-card:hover ~ .name-card {
    -webkit-transform: translateX(30px);
    transform: translateX(30px);
  }
}
/* 반응형 800 */
@media (max-width: 800px) {
  .name-card {
    min-width: 190px;
  }
  .name-card:not(:first-child) {
    margin-left: -10px;
  }
  .name-card:hover {
    -webkit-transform: translateY(-1rem);
    transform: translateY(-1rem);
  }
  .name-card:hover ~ .name-card {
    -webkit-transform: translateX(10px);
    transform: translateX(10px);
  }
}
/* 날짜 부분 */
.name-article-subhead {
  font-size: 14px;
  color: #d4ccca;
  margin: 0 0 1rem;
}
.name-article-card-header {
  margin-bottom: auto;
}
/* 밑 이름, Author */
.name-article-meta {
  font-size: 16px;
  line-height: 60px;
}
.name-article-meta .author-name {
  display: block;
  position: relative;
  width:150px; /* 참고 */
  align-items: center;
  margin: 5px 0 auto;
}
.name-article-byline {
  margin-top: 10px;
  -webkit-box-align: center;
  align-items: center;
}

</style>
