<template>
    <h1>
        Introduce Yourself
    </h1>
    <form class="input_form" @submit.prevent="submitUser">
        <input type="text" placeholder="Name" v-model.lazy.trim="name">
        <select name="professions"  v-model.lazy.trim="profession">
            <option value="" selected disabled>Select your Profession</option>
            <option value="frontend">Frontend Engineer</option>
            <option value="backend">Backend Engineer</option>
            <option value="marketing">Marketing Manager</option>
        </select>
        <input type="tel" placeholder="Phone Number" v-model.lazy.trim="phonenumber">
        <input type="email" placeholder="Email" v-model.lazy.trim="email">
        <textarea id="description" cols="60" rows="1" placeholder="Describe Yourself in one sentence" maxlength="60" v-model.lazy.trim="description"></textarea>
        <textarea id="dream" cols="60" rows="1" placeholder="What do you wish to accomplish?" v-model.lazy.trim="dream"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import {createUser} from '../firebase.js';

export default {
    data(){
        return {
            name: '',
            profession: '',
            phonenumber: '',
            email: '',
            description: '',
            dream: ''
        }
    },
    methods: {
        submitUser(){
            const user = {
                name: this.name,
                profession: this.profession,
                phonenumber: this.phonenumber,
                email: this.email,
                description: this.description,
                dream: this.dream
            }
            createUser(user);
        }
    },
}
</script>
<style scoped>
.input_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
textarea{
    resize: none;
}
</style>