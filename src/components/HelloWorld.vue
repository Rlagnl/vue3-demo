<template>
  <div class="hello">
    <h1>{{ message }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener"
      >vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from '../compositions/store'

export default {
  props: {
    msg: String
  },
  setup(props) {
    const _p = useStore()
    const message = computed(() => '<' + props.msg + ' ' + _p.bbb + '>')
    return {
      message
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
