<template>
    <login class="login"></login>
</template>
<script>
import Login from '../components/Login.vue';

export default {
    name: 'LoginPage',
    components:{
        Login,
    }    
}
</script>
<style scoped>
.login{
    top:7.5vh;
}
</style>