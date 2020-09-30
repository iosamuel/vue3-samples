<template>
  <Counter />
  <ToDo />
</template>

<script>
import Counter from "./components/Counter.vue";
import ToDo from "./components/ToDo.vue";

export default {
  components: {
    Counter,
    ToDo,
  },
};
</script>
