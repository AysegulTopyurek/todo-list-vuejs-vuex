import { createStore } from "vuex";
import Axios from "axios";

export default createStore({
  state: {
    todos: [],
    isLoading: {
      todos: true,
    },
  },
  mutations: {
    sendTodo(state, payload) {
      state.todos = payload;
      state.isLoading.todos = false;
    },

   },
  // İlk olarak action çalışır ardından mutation a commit edilir ,burada state dolar ve state in bir kopyası getters ile alınabilir ve işlem yapılabilir 
  
  getters: {
    fetchTodos(state) {
      return state.todos.filter((item) => !item.check);
    },
    fetchDoneTodos(state) {
      return state.todos.filter((item) => item.check);
    },
  },
  actions: {
    fetchTodos() {
      Axios.get("https://615224e54a5f22001701d661.mockapi.io/todos").then(
        (response) => {
          this.commit("sendTodo", response.data);
        }
      );
    },
    changeTodoStatus(state, todo) {
      console.log("id");
      console.log(todo.check);
      Axios.put(
        "https://615224e54a5f22001701d661.mockapi.io/todos/" + todo.id,
        todo
      )
    },
    changeTodoDeleted(state, todo) {
      console.log("id");
      console.log(todo.delete);
      todo.delete=true;
      Axios.put(
        "https://615224e54a5f22001701d661.mockapi.io/todos/" + todo.id,
        todo
      )
    },
    addTodo(state,todo){
      Axios.post(
        "https://615224e54a5f22001701d661.mockapi.io/todos",
        todo
      ).then(() => {

        state.dispatch("fetchTodos")

      });

    }
  },
  modules: {},
});
