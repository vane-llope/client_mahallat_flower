<template>
<div class="mt-2 container">
    <div class="d-flex justify-content-between">
    <div class=" text-center">
      <router-link to="/login" class="text-dark "  style="text-decoration:none">login <i type="button" class="bx bxs-user-circle h3 "></i></router-link>
           
             <button class="btn btn-secondary m-3" @click="logout">logout</button>
        </div>
      <h1 class="text-center">IRAN FLOWER</h1>  
      <pre>{{test}}</pre>
</div>
  
</div>
</template>

<script>
import axios from 'axios'
export default {
 computed: {
  test () {
    return this.$store.state.user
  }
},
  methods:{
        logout(){
      axios.get('http://localhost:3000/auth/logout',{withCredentials: true})
      .then((result) => {this.msg = result.data
        this.$store.commit('LOGGD_IN',false)
       this.$router.push({ name: 'home' })})
    }
  }
};
</script>


