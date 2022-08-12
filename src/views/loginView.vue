<template>
<div class="container mt-4">
    <h5 class="text-center text-danger">{{msg}}</h5>
    <form @submit.prevent="login">
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <!--<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>-->
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text" id="basic-addon3">
                    <i @click="refreshCaptcha" class='bx bx-refresh h1' style="cursor:pointer"></i>
                    <captcha-code :captcha="code" @on-change="handleChange" ref="captcha">
                    </captcha-code>
                </div>
            </div>
            <input type="text" v-model="captchaEntery" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        </div>
        <button type="submit" class="btn btn-primary mt-3">Login</button>
    </form>
</div>
</template>

<script>
import CaptchaCode from "vue-captcha-code";
import axios from 'axios'
export default {
    components: {
        CaptchaCode,
    },
    data() {
        return {
            email: '',
            password: '',
            msg: '',
            code: "",
            captchaEntery: "",
        }
    },
    methods: {
        login() {
            //handleClick
            if (this.code == this.captchaEntery) {
                axios.post('http://localhost:3000/auth/login', {
                        email: this.email,
                        password: this.password
                    }, {
                        withCredentials: true
                    })
                    .then((result) => {
                        this.msg = result.data.msg
                        this.$store.commit("LOGGD_IN", true);
                        if (result.data.permission) this.$router.push({path : '/panel' })
                    })
            } else {
                this.msg = 'captcha error'
                this.refreshCaptcha()
            }
        },
        refreshCaptcha() {
            this.$refs.captcha.refreshCaptcha()
        },
        handleChange(code) {
            this.code = code
        },
    },
}
</script>
