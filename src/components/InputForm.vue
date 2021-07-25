<template>
    <h1>
        Introduce Yourself
    </h1>
    <form class="input_form" @submit.prevent="submitUser">
        <label for="portrait">Upload your profile image</label>
        <input type="file" id="portrait" accept="image/*" v-on:change="onFileChange">
        <input type="text" placeholder="Name" v-model.lazy.trim="name">
        <select name="professions"  v-model.lazy.trim="profession">
            <option value="" selected disabled>Select your Profession</option>
            <option value="frontend">Frontend Engineer</option>
            <option value="backend">Backend Engineer</option>
            <option value="marketing">Marketing Manager</option>
        </select>
        <input type="tel" placeholder="Phone Number" v-model="phonenumber" @keyup="getPhoneMask">
        <input type="email" placeholder="Email" v-model.lazy.trim="email">
        <textarea id="description" cols="60" rows="1" placeholder="Describe Yourself in one sentence" maxlength="60" v-model.lazy.trim="description"></textarea>
        <textarea id="dream" cols="60" rows="1" placeholder="What do you wish to accomplish?" v-model.lazy.trim="dream"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import {createUser, uploadFile} from '../firebase.js';

export default {
    data(){
        return {
            name: '',
            profession: '',
            phonenumber: '',
            email: '',
            description: '',
            dream: '',
            image: ''
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
                dream: this.dream,
                like: []
            }
            createUser(user);
            uploadFile(user.name, this.image);
            this.image = '';
            this.name = '';
            this.profession = '';
            this.phonenumber = '';
            this.email = '';
            this.description = '';
            this.dream = '';
        },
        getPhoneMask(){
            let res = this.getMask(this.phonenumber);
            this.phonenumber = res;

            // this.model.phonenumber = this.phonenumber.replace(/[^0-9]/g, "");
        },
        getMask(phoneNumber){
            if(!phoneNumber) return phoneNumber
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
        
            let res = ''
            if(phoneNumber.length < 3) {
                res = phoneNumber
            }
            else {
                if(phoneNumber.substr(0, 2) =='02') {
            
                    if(phoneNumber.length <= 5) {//02-123-5678
                        res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3)
                    }
                    else if(phoneNumber.length > 5 && phoneNumber.length <= 9) {//02-123-5678
                        res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 3) + '-' + phoneNumber.substr(5)
                    }
                    else if(phoneNumber.length > 9) {//02-1234-5678
                        res = phoneNumber.substr(0, 2) + '-' + phoneNumber.substr(2, 4) + '-' + phoneNumber.substr(6)
                    }
            
                } else {
                    if(phoneNumber.length < 8) {
                        res = phoneNumber
                    }
                    else if(phoneNumber.length == 8)
                    {
                        res = phoneNumber.substr(0, 4) + '-' + phoneNumber.substr(4)
                    }
                    else if(phoneNumber.length == 9)
                    {
                        res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
                    }
                    else if(phoneNumber.length == 10)
                    {
                        res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6)
                    }
                    else if(phoneNumber.length > 10) { //010-1234-5678
                        res = phoneNumber.substr(0, 3) + '-' + phoneNumber.substr(3, 4) + '-' + phoneNumber.substr(7)
                    }
                }
            }
            return res;
        },
        onFileChange(e) {
            var files = e.target.files;
            if(!files.length)
                return;
            this.image = files[0];
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