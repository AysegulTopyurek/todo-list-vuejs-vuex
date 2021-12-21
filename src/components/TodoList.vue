<template>
  <div>
    <div>
      <add-todo @add-todo="addList" />
      <div class="todoBox">
        <div class="lined-paper">
          <div class="top-margin"></div>
          <div class="left-margin">
            <p>Yapılacaklar</p>
            <div v-if="$store.state.isLoading.todos" class="loading">
              Yükleniyor
            </div>
            <ul v-if="!$store.state.isLoading.todos">
              <li v-for="todo in getTodos" :key="todo.id">
                <div v-if="!todo.delete" class="card">
                  <div class="checkButton">
                    <input
                      type="checkbox"
                      v-model="todo.check"
                      @change="checked(todo)"
                    />
                  </div>

                  <div class="todosList">
                    {{ todo.title }}
                  </div>

                  <div class="deleteButton">
                    <button @click="deleted(todo)">
                      <img src="../assets/Eraser.png" alt="Silgi" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <done />
      </div>
    </div>
  </div>
</template>
<script>
import AddTodo from "./AddTodo.vue";
import Done from "./Done.vue";
export default {
  components: { AddTodo, Done },

  computed: {
    getTodos() {
      return this.$store.getters.fetchTodos;
    },
  },
  methods: {
    checked(todo) {
      this.$store.dispatch("changeTodoStatus", todo);
    },
    deleted(todo) {
      this.$store.dispatch("changeTodoDeleted", todo);
    },
  },
  mounted() {
    this.$store.dispatch("fetchTodos");
  },
};
</script>
<style scoped>
.todoBox {
  display: flex;
  gap: 1em;
  justify-content: center;
}
.lined-paper {
  position: relative;
  width: 100%;
  height: 426px;
  top: 1em;
  background: linear-gradient(to bottom, #f2f2ef 0%, #f2f2ef 97%, #7a88e2 100%);
  background-size: 100% 10px;
  box-shadow: 10px 10px 5px 0px rgba(113, 113, 113, 0.5);
}
.lined-paper .left-margin {
  height: calc(100% - 30px);
  top: 20px;
  width: 86%;
  left: 10%;
  position: absolute;
  border-left: solid rgba(255, 104, 51, 0.3) 1px;
}
.lined-paper .top-margin {
  height: calc(100% - 30px);
  top: 20px;
  position: relative;
  width: 100%;
  top: 20px;
  border-top: double rgba(255, 104, 51, 0.3) 3px;
  border-bottom: solid rgba(255, 104, 51, 0.3) 1px;
}
.lined-paper p {
  letter-spacing: 3px;
  left: 10%;
  font-family: "Reenie Beanie", cursive;
  font-size: 28px;
  color: rgba(26, 70, 178, 0.7);
}

ul {
  list-style: none;
  padding-left: 0;
  height: 300px;
  overflow-y: scroll;
}
.card {
  display: flex;
  width: 100%;
}
.todosList {
  padding-left: 9px;
}
.deleteButton {
  margin-left: auto;
}
button {
  border: none;
  background: transparent;
}
img {
  width: 30px;
}
@media screen and (max-width: 600px) {
  .todoBox {
    display: block;
  }
}
</style>
