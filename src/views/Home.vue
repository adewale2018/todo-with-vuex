<template>
  <div class="home">
    <todos-list />
    <new-todo-form />
  </div>
</template>

<script>
// @ is an alias to /src
import TodosList from "@/components/TodosList.vue";
import NewTodoForm from "@/components/NewTodoForm.vue";

export default {
  name: "Home",
  components: {
    TodosList,
    NewTodoForm
  }
};
</script>
