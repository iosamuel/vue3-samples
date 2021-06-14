<template>
    <div class="wrapper">
        <div class="circle countHolder"> Count: {{ state.count }} </div>
        <div class="circle doubleHolder"> Double: {{ state.double}} </div>
    </div>
  <button class="btn-grad" @click="increment">
     Click here to increase count!
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
    });

    function increment() {
      state.count+=5;
    }

    return {
      state,
      increment,
    };
  },
};
</script>

<style scoped>
button {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  ourtline: none;
}



.btn-grad {background-image: linear-gradient(to right, #134E5E 0%, #71B280  51%, #134E5E  100%)}
.btn-grad {
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
         


.wrapper{
    display: flex;
}

.circle {
  margin: 20px;
  padding: 10px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 20px;
  color: #fff;
  text-align: center;
  background: #000
}

.countHolder{
    background-color: #0093E9;
    background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
}

.doubleHolder{
background-image: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
}

</style>
