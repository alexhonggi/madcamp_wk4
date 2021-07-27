<template>
    <div class="login_wrapper">
        <!-- <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
        <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
        <h2 v-if="user">signed user: {{user}}</h2> -->
        <!-- <button @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">sign in</button> -->
        <!-- <button @click="handleClickGetAuthCode" :disabled="!Vue3GoogleOauth.isInit">get authCode</button> -->
        <!-- <button @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">sign out</button> -->
        <!-- <button @click="handleClickDisconnect" :disabled="!Vue3GoogleOauth.isAuthorized">disconnect</button> -->
        <h3 class="login_title">Log In</h3>
        <q-btn color="primary" text-color="white" icon-right="login" @click="handleClickSignIn" :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized">LogIn&nbsp</q-btn>
        <q-btn style="background: #FF0080" text-color="white" icon-right="logout" @click="handleClickSignOut" :disabled="!Vue3GoogleOauth.isAuthorized">LogOut&nbsp</q-btn>
    </div>
</template>
<script>
import { inject, toRefs } from "vue";
export default {
    data() {
        return {
            user: '',
        }
    },
    components: {
    },
    methods: {
        async handleClickSignIn(){
            try {
                const googleUser = await this.$gAuth.signIn();
                if (!googleUser) {
                    return null;
                }
                console.log("googleUser", googleUser);
                this.user = googleUser.getBasicProfile().getEmail();
                // console.log("getId", this.user);
                console.log("getBasicProfile", googleUser.getBasicProfile());
                // console.log("getAuthResponse", googleUser.getAuthResponse());
                // console.log(
                //     "getAuthResponse",
                //     this.$gAuth.instance.currentUser.get().getAuthResponse()
                // );
                this.$emit('loggedIn', googleUser.getBasicProfile().getEmail());
                this.$router.push({name: 'Home', params: {userId: this.user}});
            } catch (error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },
        async handleClickGetAuthCode(){
            try {
                const authCode = await this.$gAuth.getAuthCode();
                console.log("authCode", authCode);
            } catch(error) {
                //on fail do something
                console.error(error);
                return null;
            }
        },
        async handleClickSignOut() {
            try {
                await this.$gAuth.signOut();
                console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);
                this.user = "";
            } catch (error) {
                console.error(error);
            }
        },
        handleClickDisconnect() {
            window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
        },
    },
    setup(props) {
        const { isSignIn } = toRefs(props);
        const Vue3GoogleOauth = inject("Vue3GoogleOauth");
        const handleClickLogin = () => {};
        return {
            Vue3GoogleOauth,
            handleClickLogin,
            isSignIn,
        };
    }
}
</script>
<style scoped>
.login_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px 0;
}
.login_title{
    color: white;
    font-weight: 700;
    margin-bottom: 70px;
}
.q-btn{
    width: 200px;
    height: 50px;
    font-weight: 700;
    font-size: 21px;
    margin: 5px;
}
</style>