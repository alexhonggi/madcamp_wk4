<template>
  <div class="myNamecard">
      <header class="myHeader header-card white-underline-links">
        <h2 class="header-card-title">Your <br />Namecard <br /> Collection</h2>
        <p class="header-card-sponsor">
          Made by<br />
          <a href="https://alexhonggi.github.io/">Starchaser</a>
        </p>
      </header>
      
      <div class="name-card-grid" v-if="dataReady">
        <article
          class="name-card module module-article article"
          id="name-post-302186"
          v-for="user in userData"
          :key="user.name"
        >
        <div class="container">
          <header class="name-article-card-header">
            <div class="name-article-card-title">
              <div class="name-article-subhead">
                Collected at 
                <time datetime="2020-01-28"> Jan 28, 2020 </time>
              </div>
              <h2 class="">
                <a
                  href="https://css-tricks.com/use-and-reuse-everything-in-svg-even-animations/"
                  class="article-card-header read-article"
                >
                  {{user.name}}
                </a>
              </h2>
            </div>
            <div class="name-article-meta">
            <div class="name-article-byline">
              <div class="author-avatar">
                <a
                  class="author-name"
                  href="https://css-tricks.com/author/marianabeldi/"
                >
                  <img
                    alt=""
                    :src="user.profileImage"
                    class="
                      avatar avatar-80
                      photo
                      jetpack-lazy-image jetpack-lazy-image--handled
                    "
                    height="80"
                    width="80"
                    srcset="
                      https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&amp;d=retro&amp;r=pg 2x
                    "
                    data-lazy-loaded="1"
                  /><noscript
                    ><img
                      alt=""
                      src="https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=80&#038;d=retro&#038;r=pg"
                      srcset="
                        https://secure.gravatar.com/avatar/d478c83f5a06bd37f7087e19478b74bf?s=160&#038;d=retro&#038;r=pg 2x
                      "
                      class="avatar avatar-80 photo"
                      height="80"
                      width="80"
                  /></noscript>
                </a>
                <svg class="half-circle" width="80px" height="80px">
                  <use xlink:href="#half-circle"></use>
                </svg>
              </div>
            </div>
            <div class="author-name-area">
                <div class="author-name-prefix">Job</div>
                <a
                  class="author-name"
                  href="https://css-tricks.com/author/marianabeldi/"
                >
                  {{user.profession}}
                </a>
              </div>
          </div>
          </header>
          </div>
        </article>
      </div>
      <div v-else>
        <h1>else</h1>
      </div>
    </div>
  
</template>

<script>
import {getUser, getLikes} from '../firebase.js';

export default {
  name: 'Inputinformation',
  data(){
    return {
      userData: [],
      dataReady: false,
    }
  },
  mounted(){
    let googleId;
    setTimeout(async ()=>{
      googleId = this.$gAuth.instance.currentUser.get().getBasicProfile().getEmail();
      console.log(googleId);
      const user = await getUser(googleId);
      const likes = user.like;
      const dataList = await getLikes(likes);
      this.userData = dataList;
      console.log(dataList);
      console.log(this.userData);
      this.dataReady = true;
    }, 1500);
  },
  props: {

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
a {
  color: #fff;
}
a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):focus,
a:not(.button):not(.commentPreviewButton):not(.comment-reply-link):hover {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff8a00),
    to(#e52e71)
  );
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  text-shadow: none;
}
h2 {
  font-weight: 900;
  margin: 0 0 1.5rem;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 1;
}
/* 이름 */
h2 a {
  color: #d4ccca;
  border: 0;
  font-size: 38px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  display: inline-block;
}
h2 a:focus,
h2 a:hover {
  color: #03a9f4;
}
h2 {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, Sans-Serif;
  font-style: bold;
  font-size: 2rem;
  letter-spacing: -0.03rem;
  font-weight: 400;
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
.h4 {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 0.8rem;
}
@media (max-width: 1200px) {
  .h4 {
    font-size: 1.4rem;
  }
}
@media (max-width: 800px) {
  .h4 {
    font-size: 1.25rem;
  }
}
.h4 {
  line-height: 1.05;
}
time {
  color: #a0a0b7;
}
p {
  margin: 0 0 1.5rem;
}
/* Sponsered by 부분 */
.white-underline-links a {
  position: relative;
  font-weight: 700;
}
.white-underline-links a:after {
  content: "";
  height: 2px;
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: -2px;
  left: 0;
  border-radius: 2px;
}

.white-underline-links a:focus,
.white-underline-links a:hover {
  color: inherit !important;
  -webkit-text-fill-color: inherit !important;
}
.white-underline-links a:focus:after,
.white-underline-links a:hover:after {
  -webkit-transform: translateY(1px);
  transform: translateY(1px);
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
  height: auto !important;
}
img {
  max-width: 100%;
}
.author-avatar {
  grid-area: avatar;
  align-self: start;
  position: relative;
}
.author-avatar img {
  border-radius: 50%;
  width: 160px;
  height: 160px !important;
  display: block;
  overflow: hidden;
  margin: 1px 55px;
}
.author-avatar .half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180px;
  height: 156px;
  fill: none;
  stroke: url(https://css-tricks.com/wp-content/themes/CSS-Tricks-17/style.css?cache_bust=1580767355603#orange-to-pink);
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}
@media (max-width: 800px) {
  .author-avatar img {
    width: 35px;
    height: 35px !important;
  }
  .author-avatar .half-circle {
    width: 55px;
    height: 40px;
  }
}
.author-name-prefix {
  font-family: Ringside Regular A, Ringside Regular B, Rubik, Lato,
    Lucida Grande, Lucida Sans Unicode, Tahoma, Sans-Serif;
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
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
/* .tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
}
@media (max-width: 800px) {
  .tags {
    margin: 0;
  }
}
.tags a {
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  white-space: nowrap;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
}
.tags a:focus,
.tags a:hover {
  color: #03a9f4;
  border-color: #fff;
  position: relative;
} */
.header-card {
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#ff8a00),
    to(#e52e71)
  );
  background-image: linear-gradient(0deg, #ff8a00, #e52e71);
  position: relative;
  border-radius: 16px;
  padding: 2rem;
  margin: 0 4rem 0 0;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-flex: 0;
  flex: 0 0 320px;
}
.header-card p {
  margin: 0;
  font-size: 0.8rem;
}
@media (max-width: 1200px) {
  .header-card {
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-box-flex: 0;
    flex: 0;
    width: 110px;
    margin-right: 1rem;
  }
  .header-card a:after,
  .header-card br {
    display: none;
  }
}
/* 헤더 제목 */
.header-card-title {
  font-size: 1.8rem;
  margin: 0 0 0.8rem;
}
.myNamecard {
  box-sizing: content-box;
  display: -webkit-box;
  display: flex;
  width: calc(100vw - 71px);
  margin: 0 0 5rem;
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
.myHeader {
  margin: 3rem 0;
}
.header-card-sponsor {
  color: #ffb4b4;
}
.name-card-grid {
  scrollbar-color: #54525a;
  scrollbar-width: 10px;
  scrollbar-gutter: always;
  padding: 3rem;
  display: -webkit-box;
  display: flex;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
.name-card-grid::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.name-card-grid::-webkit-scrollbar-thumb {
  background: #201c29;
  border-radius: 10px;
  box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
    inset -2px -2px 2px rgba(0, 0, 0, 0.25);
}
.name-card-grid::-webkit-scrollbar-track {
  background: linear-gradient(90deg, #201c29, #201c29 1px, #17141d 0, #17141d);
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
  width: 300px;
  min-height: 450px;
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
}
.name-article-meta .author-name {
  display: block;
  position: relative;
  width:150px; /* 참고 */
  margin: 5px 0 auto;
}
/* 아바타 이미지 */ 
.name-article-meta .author-avatar img {
  width: 140px !important;
  height: 140px !important;
}
.name-article-meta .author-avatar .half-circle {
  width: 160px;
  height: 148px;
}
.name-article-byline {
  margin:30px 0 0;
  display: grid;
  grid-template-columns: 0px;
  -webkit-box-align: center;
  align-items: center;
}
.name-article-byline .author-avatar,
.name-article-byline .author-name-area {
  grid-area: auto;
  margin: 0px
}
/* @media print {
  .tags,
  svg {
    display: none !important;
  }
  a,
  time {
    background: 0 0 !important;
    color: #000 !important;
  }
} */

</style>
