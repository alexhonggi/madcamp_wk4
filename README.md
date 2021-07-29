# Foobar

협업 툴

## 당신의 동료를 찾아보세요.
첫 화면에 모든 사람을 담았습니다.  
당신의 동료를 찾아보세요.  

**한번** 눌러 누구인지 알 수 있어요.
**한번 더** 눌러 명함 교환을 신청 할 수 있답니다.  

개성 있는 색일수록 깔끔함이 중요하겠죠? **Vue.js**의 v-bind 속성을 이용해 움직임과 마감 처리를 하였습니다.
```javascript
    <transition name="fade">
      <p @click="show = !show ; pass = true ; pass2 = false ; index++" class = "nextFront"  
        :class="classArray[whichnum[index]]" v-bind:key="show" v-if="!show" :style="{backgroundColor:colorlist[index]}"> 
        <div class="quote">{{users[index].description}}</div> 
      </p>
    </transition>
```  

자주 둘러보고, 맘에 드는 사람을 찾으세요!


![home](https://user-images.githubusercontent.com/46164736/127443396-330c5d5e-6d67-4532-8cb1-147f09c0d628.gif)


기억하세요, 디자이너는 **분홍색**, 개발자는 **파란색**, 기획자는 **노란색**입니다!


## 원하는 사람만 찾아보세요.
천천히 모든 사람을 둘러보며 보물찾기 하는 재미도 있지만,  
당장 필요한 **그 사람**을 찾는 분들을 위해 준비했습니다.  

**Search** 카테고리에서는 **기획자, 개발자, 디자이너** 중 하나의 직업군을 골라 모아볼 수 있어요.  

![search](https://user-images.githubusercontent.com/46164736/127444284-e3fe0537-e64d-4724-b15c-1e24c98a9faa.gif)



## 당신도 참여해보세요.
내게 맞는 사람을 찾는 것 만큼, 나를 다른사람에게 소개하는 것도 중요하답니다.  
**Edit Card** 카테고리에서는 내 카드를 만들거나, 수정할 수 있어요.  

눈에 띄는 문구와 통통 튀는 아이디어로 다른 사람들을 사로잡아보세요!  

![create_your_card](https://user-images.githubusercontent.com/46164736/127444996-8c87a959-7af3-4adb-8d20-bd97de055d2c.gif)



## 다른 사람과 연락해보세요.
**명함 교환**이 성공했다면, **My Cards** 카테고리에서 상대의 정보를 확인할 수 있어요.  

**서로 마음이 통한 사람만**의 연락처와 사진을 알 수 있답니다.  
프라이버시는 소중하니까요.

![my_card](https://user-images.githubusercontent.com/46164736/127446055-7257d74d-e779-420a-abbf-9e9c1594508f.gif)
