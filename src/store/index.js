import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 10,
        task: "Build a todo app with vue.js and manage the state with vuex",
        done: false
      },
      {
        id: 11,
        task: "Prepare for tommorrow's Etinx online meeting ",
        done: false
      },
      {
        id: 12,
        task: "Continue learning about vue.js and firebase",
        done: false
      }
    ],
  },
  mutations: {
    ADD_NEW_TASK: function(state, newTask) {
      const newTodo = { id: 15, task: newTask, done: false };
      state.todos = [newTodo, ...state.todos];
    },
    REMOVE_TODO: function(state, todo) {
      state.todos = state.todos.filter((td) => td !== todo);
    },
    TOGGLE_DONE: function(state, todo) {
      todo.done = !todo.done;
    },
  },
  actions: {
    addNewTask: function({ commit }, newTask) {
      commit("ADD_NEW_TASK", newTask);
    },
    deleteTodo: function({ commit }, todo) {
      commit("REMOVE_TODO", todo);
    },
    switchDone: function({ commit }, todo) {
      commit("TOGGLE_DONE", todo);
    },
  },
  getters: {
    completedTodos: function(state) {
      return state.todos.filter(td => td.done === true).length;
    },
    pendingTodos: function(state) {
      return state.todos.filter(td => td.done === false).length;
    }
  }

});
