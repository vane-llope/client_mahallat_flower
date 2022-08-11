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
                <input type="password" v-model="password"  class="form-control" id="exampleInputPassword1">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>

    </div>


     
 
   
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email : '',
      password : '',
      msg:'',
    }
  },
  methods: {
    login(){
   axios.post('http://localhost:3000/auth/login', {email : this.email, password :this.password }, { withCredentials: true }) 
   .then((result) => {
     this.msg = result.data.msg
   if(result.data.permission)  this.$router.push({ name: 'panel' }) }) 

    },
  },
}
</script>
