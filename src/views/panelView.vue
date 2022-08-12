<template>
<div class="container text-center">
    <h1>wellcome {{userData.name}}</h1>
    <h3>Email : {{userData.email}}</h3>
    <!--<p>{{refreshToken}}</p>-->
    <br>
    <br>
    <button @click="getProtectedData">this is protected : </button>
    <p>{{protectedData}}</p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            protectedData: '',
        }
    },
    computed: {
        refreshToken() {
            return this.$store.state.refreshToken
        },
        userData() {
            return this.$store.state.data
        },
    },
    methods: {
        getProtectedData() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.refreshToken}`
            axios.get('http://localhost:3000/auth/protected')
                .then((data) => {
                    this.protectedData = data.data
                })
        }
    },
    mounted() {
        if (!this.$store.state.user) {
            this.$router.push({
                name: "login"
            });
        }
    },
}
</script>
