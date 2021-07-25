<template>
    <div>
        <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
        <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOut</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isInit: false,
            isSignIn: false
        }
    },
    components: {
    },
    methods: {
        async handleClickSignIn(){
            try{
                const googleUser = await this.$gAuth.signIn();
                console.log('user', googleUser);
                this.isSignIn = this.$gAuth.isAuthorized;
            } catch(error){
                console.log(error);
                return null;
            }
        },
        async handleClickSignOut(){
            try{
                await this.$gAuth.signOut();
                this.isSignIn = this.$gAuth.isAuthorized;
            } catch(error){
                console.log(error);
            }
        },
        mounted(){
            let that = this;
            let checkGauthLoad = setInterval(function(){
                that.isInit = that.$gAuth.isInit;
                that.isSignIn = that.$gAuth.isAuthorized;
                if(that.isInit) clearInterval(checkGauthLoad);
            }, 1000);
        }
    }
}
</script>
<style>
    
</style>