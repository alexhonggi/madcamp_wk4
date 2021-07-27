<template>
  <body >
    <div id="nav">
      <router-link to='/login'>Login</router-link> |
      <router-link :to='{name: "Home", params: {userId: this.id}}'>Home</router-link> |
      <router-link :to='{name: "About", params: {userId: this.id}}'>About</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/executive" class="executive" >Executive</router-link> |
      <router-link to="/technician" class="technician">Technician</router-link> |
      <router-link to="/designer" class="designer">Designer</router-link>
    </div>
    <router-view class="routerview" @loggedIn="handleLoggedIn"/>
  </body>
</template>

<script>
export default {
  data(){
    return {
      id: ''
    }
  },
  methods: {
    handleLoggedIn(id){
      this.id = id;
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 2.5vh;
}

#nav a {
  font-weight: bold;
  font-size: 22px;
  color: #ffffff;
}

/* #nav a.router-link-exact-active {
  color: #F53844;
  text-align: center;
} */

body{
  height:100%;
  width:100%;
  background: #2b2b2b;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
  
}
body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

#nav a.designer {
  color: #f53844;
}
#nav a.technician {
  color: #0B5CE2;
}

#nav a.executive {
  color: #f5b338;
}
#nav a.router-link-exact-active{
  color: #ffffff;
}

body.routerview {
  /* margin-bottom: 100px; */
}
</style>
