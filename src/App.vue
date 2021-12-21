<template>
  <div id="app">
    <h1 class="myHeader">Yapılacaklar Listem</h1>
    <todo-list />
  </div>
</template>
<script>
import TodoList from "./components/TodoList";
export default {
  components: { TodoList },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 5px;
}
.myHeader {
  text-align: center;
  font-size: 2em;
}
</style>
