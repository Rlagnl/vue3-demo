<template>
  <div class="hello">
    <p>{{ count }}</p>
    <button type='button' @click='onclick'>Click me</button>
  </div>
</template>

<script>
import { useCounter } from '../compositions/counter'
export default {
  setup() {
    let {count, onclick} = useCounter()
    return {
      count,
      onclick
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
