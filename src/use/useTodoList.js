import { ref } from "vue";

export default function() {
  let todos = ref([
    { id: 1, text: "Hello" },
    { id: 2, text: "Composition" },
    { id: 3, text: "API" }
  ]);

  const deleteFromList = (id) => {
    todos.value = todos.value.filter((todo) => {
      return todo.id !== id;
    })
  }

  const addToList = ()  => {
    todos.value.push({
      id: todos.value.length,
      text: `New item! ${todos.value.length}`
    });
  }

  return {
    todos,
    deleteFromList,
    addToList
  };
}
