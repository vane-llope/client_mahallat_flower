<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>
<script>
import navbar from "./components/navbarComponent.vue";
export default {
  components: {
    navbar,
  },
};
</script>
