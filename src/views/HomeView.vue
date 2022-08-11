<template>
<div>
    <!--search box -->
    <div class="container col-md-6">
        <div class="form d-flex border">
            <input type="text" class="form-control form-input text-start" placeholder="...Search anything" />
            <i class="bx bx-search h1 mt-2 pl-5" style="cursor: pointer"></i>
        </div>
    </div>
    <div class="container">
        <h1 class="text-center mt-5">this is the main page</h1>
       <router-link  class="text-dark h4" to="/product/info" style=" text-decoration: none;">{{name}} view info page</router-link> 
    </div>
</div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.form {
  position: relative;
}

.border {
  border-radius: 20px;
}

.form-input {
  border: none;
  height: 55px;
  text-indent: 33px;
  border-radius: 10px;
}

.form-input:focus {
  box-shadow: none;
}
</style>
