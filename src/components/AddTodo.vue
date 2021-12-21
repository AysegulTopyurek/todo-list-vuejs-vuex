<template>
  <div class="addTodo">
    <input
      placeholder="Listeye Ekle..."
      type="text"
      name="add"
      id="add"
      v-model="addTodo.title"
      @keypress.enter="addToTodo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      addTodo: {
        check: false,
        createdAt: new Date(),
        delete: false,
        title: "",
      },
    };
  },
  methods: {
    addToTodo() {
      this.$store.dispatch("addTodo", this.addTodo);
    },
  },
};
</script>

<style scoped>
.addTodo {
  text-align: center;
}
input {
  border-radius: 12px;
  border: 1px solid lightgrey;
  outline: none;
  padding: 5px;
}
</style>
