<template>
<div class="mt-2 container">
    <div class="d-flex justify-content-between">
    <div class=" text-center">
      <router-link to="/login" class="text-dark "  style="text-decoration:none"> <i type="button" class="bx bxs-user-circle h3 "></i>login</router-link>
           
             <button class="btn btn-secondary m-3" @click="logout">logout</button>
        </div>
      <h1 class="text-center">IRAN FLOWER</h1>  
</div>
  
</div>
</template>

<script>
import axios from 'axios'
export default {
 /* created:{
    loggedin(){
      return this.$store.state.authenticated.loggedIn
    }
  },

  computed: {
     loggedin(){
      return this.$store.state.authenticated.loggedIn
    }
  },*/

  /*data() {
    return {
      loggedin : true
    }
  },*/
 
  methods:{
        logout(){
      axios.get('http://localhost:3000/auth/logout',{withCredentials: true})
      .then((result) => {this.msg = result.data
       this.$router.push({ name: 'home' })})
    }
  }
};
</script>


