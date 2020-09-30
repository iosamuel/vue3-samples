<template>
  <div class="nav">
    <button @click="addToList()">Add new item</button>
    <div class="buttons">
      <label for="split-color">Split Color</label>
      <input id="split-color" type="checkbox" v-model="splitColor" />
    </div>
    <div class="buttons">
      <label for="fetch-list">Fetch List</label>
      <input
        id="fetch-list"
        type="checkbox"
        :disabled="shouldFetch"
        v-model="shouldFetch"
      />
    </div>
    <div class="mouse-position">X: {{ x }} | Y: {{ y }}</div>
  </div>
  <ul v-for="(todos, key) in todosList" :key="key">
    <li v-for="todo in todos" :key="todo.id" :class="`list-${key}`">
      <span>{{ todo.title }}</span>
      <button @click="deleteFromList(todo.id)">X</button>
    </li>
  </ul>
</template>

<script>
import { useTodoList } from "../composable/useTodoList";
import { useMousePosition } from "../composable/useMousePosition";
import { computed, ref } from "vue";

export default {
  setup() {
    const { todos, shouldFetch, deleteFromList, addToList } = useTodoList();
    const { x, y } = useMousePosition();

    const splitColor = ref(false);

    const todosList = computed(() => {
      if (splitColor.value) {
        const halfList = todos.value.length / 2;
        return [todos.value.slice(0, halfList), todos.value.slice(halfList)];
      }
      return [todos.value];
    });

    return {
      // useTodoList
      todosList,
      shouldFetch,
      deleteFromList,
      addToList,

      // ToDo component
      splitColor,

      // useMousePosition
      x,
      y,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
button {
  padding: 14px;
}
.nav {
  position: sticky;
  top: 0;
  background: white;
  z-index: 99;
  display: flex;
  align-items: center;
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
