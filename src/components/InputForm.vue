<template>
    <form class="input_form" @submit.prevent="submitUser">
        <span class="form_title">Create Your Card</span>
        <q-input class="custom_input" filled  v-model="name" label="Your name" dark autocomplete="off">
            <template v-slot:prepend>
                <q-icon name="person"></q-icon>
            </template>
        </q-input>

        <q-input class="custom_input" filled color="green" type="tel" dark label="Phone Number" v-model="phonenumber" @keyup="getPhoneMask" autocomplete="off">
            <template v-slot:prepend>
                <q-icon name="call"></q-icon>
            </template>
        </q-input>

        <q-input class="custom_input" filled color="yellow" type="email" dark label="Email Address" v-model="email" autocomplete="off">
            <template v-slot:prepend>
                <q-icon name="email"></q-icon>
            </template>
        </q-input>

        <q-file class="custom_input" dark color="purple" filled v-model="image" accept="image/*" v-on:change="onFileChange" label="Profile Image" >
            <template v-slot:prepend>
                <q-icon name="attach_file"></q-icon>
            </template>
        </q-file>

        <q-select dark class="custom_input" color="cyan" use-input  filled v-model="profession" :options="options" label="Profession"
                    transition-show="flip-up" transition-hide="flip-down">
            <template v-slot:prepend>
                <q-icon name="assignment_ind"></q-icon>
            </template>
        </q-select>

        <q-input class="custom_input" filled color="teal" type="text" maxlength="50" dark label="Describe Yourself in one sentence" v-model="description" autocomplete="off">
            <template v-slot:prepend>
                <q-icon name="description"></q-icon>
            </template>
        </q-input>

        <q-input class="custom_input" filled color="amber" type="text" maxlength="50" dark label="What do you wish to accomplish?" v-model="dream" autocomplete="off">
            <template v-slot:prepend>
                <q-icon name="info"></q-icon>
            </template>
        </q-input>

        <q-btn color="primary" type="submit" icon-right="send"><span class="btn_text">SUBMIT&nbsp</span></q-btn>
    </form>
</template>
<script>
import {createUser, uploadFile} from '../firebase.js';

export default {
    data(){
        return {
            options: [
                'Software Engineer',
                'Designer',
                'Marketer'
            ],
            name: '',
            profession: '',
            phonenumber: '',
            email: '',
            description: '',
            dream: '',
            image: '',
        }
    },
    methods: {
        async submitUser(){
            const googleId = this.$gAuth.instance.currentUser.get().getBasicProfile().getEmail();
            let imageLink = await uploadFile(googleId, this.image);
            const user = {
                profileImage: imageLink,
                name: this.name,
                profession: this.profession,
                phonenumber: this.phonenumber,
                email: this.email,
                description: this.description,
                dream: this.dream,
                like: []
            };
            createUser(googleId, user);
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
textarea{
    resize: none;
}
.input_form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.form_title{
    margin: 70px 0 30px;
    font-size: 50px;
    color: #fff;
    font-weight: 700;
}
.custom_input{
    width: 30%;
    margin: 7px;
}
.q-btn{
    margin: 15px 0 20px;
}
.btn_text{
    font-weight: 700 !important;
}
</style>