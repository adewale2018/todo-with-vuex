<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h3 class="mt-5">Add New Task</h3>
        <form class="form" @submit.prevent="addNewTask()">
          <input
            type="text"
            placeholder="add a task..."
            class="form-input"
            v-model="newTask"
            required
          />
          <button class="btn btn-sm btn-outline-success">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewTodoForm",
  data() {
    return {
      newTask: ""
    };
  },
  methods: {
    addNewTask: function() {
      if (this.newTask.length > 0 && this.newTask.trim() !== "") {
        this.$store.dispatch("addNewTask", this.newTask);
      }
      this.newTask = "";
    }
  }
};
</script>

<style scoped>
h3 {
  text-transform: uppercase;
  font-weight: 800;
  color: black;
  letter-spacing: 0.1rem;
}
</style>