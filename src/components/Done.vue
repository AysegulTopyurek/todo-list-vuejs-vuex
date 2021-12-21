<template>
  <div class="lined-paper">
    <div class="top-margin"></div>
    <div class="left-margin">
      <p>Yapılanlar✓</p>
      <ul>
        <li v-for="todo in getDoneTodos" :key="todo.title">
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
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getDoneTodos() {
      return this.$store.getters.fetchDoneTodos;
    },
  },
  methods: {
    checked(todo) {
      this.$store.dispatch("changeTodoStatus", todo);
    },
  },
};
</script>
<style scoped>
.lined-paper {
  position: relative;
  width: 38%;
  height: 426px;
  top: 1em;
  background: linear-gradient(to bottom, #f2f2ef 0%, #f2f2ef 97%, #7a88e2 100%);
  background-size: 100% 10px;
  box-shadow: 10px 10px 5px 0px rgba(113, 113, 113, 0.5);
}
.lined-paper .left-margin {
  height: calc(100% - 30px);
  top: 20px;
  left: 10%;
  position: absolute;
  border-left: solid rgba(255, 104, 51, 0.3) 1px;
}
.lined-paper .top-margin {
  height: calc(100% - 30px);
  top: 20px;
  position: absolute;
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
}
.card {
  display: flex;
}
.todosList {
  position: relative;
  padding-left: 9px;
}
.todosList::before {
  position: absolute;
  content: "";
  left: 0;
  top: 50%;
  right: 0;
  border-top: 2px solid #dd0031 !important;
  border-color: inherit;

  -webkit-transform: rotate(-5deg);
  -moz-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  -o-transform: rotate(-5deg);
  transform: rotate(-5deg);
}
</style>
