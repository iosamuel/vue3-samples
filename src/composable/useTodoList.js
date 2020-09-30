import { ref, watchEffect } from "vue";

export function useTodoList() {
  let todos = ref([
    { id: 1, title: "Hello" },
    { id: 2, title: "Composition" },
    { id: 3, title: "API" }
  ]);

  let shouldFetch = ref(false);

  watchEffect(() => {
    if (shouldFetch.value) {
      fetch("http://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => {
          for (let { id, title } of json) {
            todos.value.push({
              id: `api-${id}`,
              title
            });
          }
        });
    }
  });

  function deleteFromList(id) {
    todos.value = todos.value.filter(todo => {
      return todo.id !== id;
    });
  }

  function addToList() {
    todos.value.push({
      id: todos.value.length,
      title: `New item! ${todos.value.length}`
    });
  }

  return {
    todos,
    shouldFetch,
    deleteFromList,
    addToList
  };
}
