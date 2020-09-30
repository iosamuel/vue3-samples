import { reactive, onMounted, onUnmounted, toRefs } from "vue";

export function useMousePosition() {
  const mousePosition = reactive({
    x: 0,
    y: 0
  });

  function update(evt) {
    mousePosition.x = evt.clientX;
    mousePosition.y = evt.clientY;
  }

  onMounted(() => {
    document.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    document.removeEventListener("mousemove", update);
  });

  return {
    ...toRefs(mousePosition)
  };
}
