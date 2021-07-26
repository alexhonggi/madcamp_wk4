import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GAuth from 'vue3-google-oauth2'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const gAuthOptions = { clientId: '305158596238-ll45ct3p6lnser64vc3cglpbbcqmk12s.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }
createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(GAuth, gAuthOptions).mount('#app')
