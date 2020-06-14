<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item pl-5">
        <input
          type="checkbox"
          class="form-check-input py-3"
          @change="switchDone()"
        />
        <span :class="{ completed: todo.done }">{{ todo.task }}</span>
        <button class="btn btn-sm btn-danger" @click="deleteTodo()">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  methods: {
    deleteTodo: function() {
      this.$store.dispatch("deleteTodo", this.todo);
    },
    switchDone: function() {
      this.$store.dispatch("switchDone", this.todo);
    }
  }
};
</script>

<style scoped>
button {
  margin-left: 2.5rem;
}
.completed {
  text-decoration: line-through;
}
</style>
