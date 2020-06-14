<template>
  <div>
    <h1>Contact Us Now!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sequi
      cumque consequuntur nisi temporibus itaque ullam dolore enim, cupiditate
      aspernatur ab ducimus magni labore saepe neque iusto quaerat? Pariatur,
      dolore ullam? Dignissimos perferendis vel alias ullam repudiandae? Velit
      nostrum harum blanditiis commodi, quia exercitationem libero quae ex
      deleniti suscipit quidem voluptas, fuga enim hic? Recusandae temporibus
      rerum sed vero incidunt odit reprehenderit officia hic. Natus enim
      blanditiis obcaecati similique eum facilis ex porro suscipit alias animi
      architecto possimus, a qui dolore minima necessitatibus mollitia velit,
      corrupti commodi? Deleniti quo quae, repellat, iste atque tempore cumque
      vitae blanditiis rerum molestias quos!
    </p>
    <hr />
    <button @click="backToProfile">Back to profileI</button>
  </div>
</template>

<script>
export default {
  methods: {
    backToProfile: function() {
      this.$router.push("/profile/234");
    },
  },
};
</script>

<style scoped></style>
