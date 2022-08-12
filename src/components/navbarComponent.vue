<template>
<div class="mt-2 container">
    <div class="d-flex justify-content-between">
        <div class=" text-center">
            <router-link to="/login" class="text-dark " v-if="!test" style="text-decoration:none">login <i type="button" class="bx bxs-user-circle h3 "></i></router-link>

            <button class="btn btn-secondary m-3" v-if="test" @click="logout">logout</button>
        </div>
        <router-link class="text-center text-dark h1" to="/" style=" text-decoration: none;">IRAN FLOWER</router-link>
        <router-link v-if="test" class="text-dark h4" to="/panel" style=" text-decoration: none;">{{name}} panel</router-link>

    </div>

</div>
</template>

<script>
import axios from 'axios'
export default {
    computed: {
        test() {
            return this.$store.state.user
        },
        name() {
            return this.$store.state.data.name
        }
    },
    methods: {
        logout() {
            axios.get('http://localhost:3000/auth/logout', {
                    withCredentials: true
                })
                .then((result) => {
                    this.msg = result.data
                    this.$store.commit('LOGGD_IN', false)
                    this.$store.commit('SET_DATA', '')
                    this.$store.commit('SET_REFRESH_TOKEN', '')
                    this.$router.push({
                        name: 'home'
                    })
                })
        }
    }
};
</script>
