<template>
  <div>
    <h3>My Profile</h3>
    <p>
      This is my profile as a fullstack software developer from the Giant of
      Africa. ID: {{ $route.params.id }} 
    </p>
    <hr>
    <button @click="goHome">Back Home</button>
  </div>
</template>

<script>
export default {
  created() {
    // alert(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      // alert(this.$route.params.id);
      console.log("to", to);
      console.log("from", from);
    },
  },
  methods: {
    goHome: function() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h3 {
  color: steelblue;
  text-align: center;
  letter-spacing: 0.25rem;
  font-weight: 800;
}
</style>
