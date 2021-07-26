<template>
  <body>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view class="routerview" />
  </body>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #6600ff;
}

body{
  height:100%;
  width:100%;
  background: black;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;
}
body::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
}

</style>
