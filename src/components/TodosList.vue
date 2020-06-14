<template>
  <div class="container">
    <h3>Todo App with vuex</h3>
    <div class="row">
      <div class="col-md-8">
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo" />
      </div>
      <div class="col-md-4">
        <h3>Statistics</h3>
        <ul class="list-group">
          <li class="list-group-item">Completed: {{ completedTodos }}</li>
          <li class="list-group-item">Pending: {{ pendingTodos }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Todo from "./Todo";
export default {
  name: "TodosList",

  components: {
    Todo
  },
  computed: {
    ...mapState({
      todos: 'todos',
    }),
    ...mapGetters({
      completedTodos: 'completedTodos',
      pendingTodos: 'pendingTodos'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-transform: uppercase;
  font-weight: 800;
  color: black;
  letter-spacing: 0.1rem;
}
</style>
