<template>
<div>
    <navbar />
    <router-view />
</div>
</template>

<script>
import axios from "axios";
import navbar from "./components/navbarComponent.vue";
export default {
    components: {
        navbar,
    },
    data() {
        return {
            RefreshTokenTimer: 19 * 60 * 1000
        }
    },
    methods: {
        getRefreshToken() {
            axios.get("http://localhost:3000/auth/refreshToken", {
                    withCredentials: true
                })
                .then((data) => {
                    if (data.data.refreshToken == undefined) {
                        this.$store.commit("LOGGD_IN", false);
                    } else {
                        this.$store.commit("LOGGD_IN", true);
                        this.$store.commit("SET_DATA", data.data.info);
                        this.$store.commit("SET_REFRESH_TOKEN", data.data.refreshToken);
                    }
                });
        }
    },
    mounted() {
        this.getRefreshToken()
        setTimeout(() => {
            this.getRefreshToken()
        }, this.RefreshTokenTimer);
    },
};
</script>
