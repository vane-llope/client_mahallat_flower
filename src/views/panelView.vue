<template>
  <div class="container text-center">
        <h1>wellcome {{userData.name}}</h1>
        <h3>Email : {{userData.email}}</h3>
    <p>{{refreshToken}}</p>
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
      refreshToken : '',
      protectedData : '',
      userData:''
    }
  },
 
 methods: {
   getProtectedData(){
     axios.defaults.headers.common['Authorization'] = `Bearer ${this.refreshToken}`
      axios.get('http://localhost:3000/auth/protected')
      .then( (data) => {this.protectedData = data.data})
   }
 },
  mounted() {
    axios.get('http://localhost:3000/auth/refreshToken',{withCredentials: true})
    .then( (data) => {
      if(data.data.refreshToken == undefined) {
        this.$router.push({ name: 'home' })
        } 
      else{
         this.refreshToken = data.data.refreshToken
         this.userData = data.data.info}
      }
   )
    
    console.log(this.$store.state.user)

    setInterval( () => { axios.get('http://localhost:3000/auth/refreshToken',{withCredentials: true})
    .then( (data) => {this.refreshToken = data.data.refreshToken
    this.userData = data.data.info})}, 19*60*1000);


   
   
  },
}
</script>