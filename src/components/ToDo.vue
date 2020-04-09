<template>
  <button @click="addToList()">Add new item</button>
  <div class="buttons">
    <label for="split-color">Split Color</label>
    <input id="split-color" type="checkbox" v-model="splitColor">
  </div>
  <div class="buttons">
    <label for="dup-list">Duplicate List</label>
    <input id="dup-list" type="checkbox" v-model="dupList">
  </div>
  <ul v-for="(n, k) in (dupList ? 2 : 1)" :key="k">
    <template v-for="(todos, key) in todosList">
      <li v-for="todo in todos" :key="todo.id" :class="`list-${key}`">
        <span>{{ todo.text }}</span>
        <button @click="deleteFromList(todo.id)">X</button>
      </li>
    </template>
  </ul>
</template>

<script>
import useTodoList from "../use/useTodoList";
import { computed, reactive, toRefs } from 'vue';

export default {
  setup() {
    const { todos, deleteFromList, addToList } = useTodoList();

    const state = reactive({
      splitColor: false,
      dupList: false
    });

    const todosList = computed(() => {
      if (state.splitColor) {
        const halfList = todos.value.length / 2;
        return [
          todos.value.slice(0, halfList),
          todos.value.slice(halfList)
        ]
      }
      return [todos.value];
    })

    return {
      todosList,
      deleteFromList,
      addToList,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
button {
  padding: 14px;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  padding: 14px;
  margin: 8px 0;
  list-style-type: none;
  position: relative;
  overflow: hidden;
  background-color: rgb(180, 202, 139);
}
ul li button {
  position: absolute;
  right: 8px;
  top: calc(50% - 18px);
  padding: 8px;
}
.list-1 {
  background-color: rgb(93, 136, 65);
}
.buttons {
  display: inline-block;
  padding: 8px;
  border: 1px dotted black;
}
.buttons label {
  margin-right: 8px;
}
.buttons input {
  width: 30px;
  height: 30px;
  margin: 0;
  vertical-align: middle;
}
</style>