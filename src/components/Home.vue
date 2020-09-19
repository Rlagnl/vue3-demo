<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type='button' @click='goToNext'>Next</button>
    <HelloWorld msg="First Page" />
    <CounterView />
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HelloWorld from "./HelloWorld.vue";
import CounterView from "./CounterView.vue";
import { provideStore } from '../compositions/store'

export default {
  components: {
    HelloWorld,
    CounterView
  },
  setup() {
    var msg = ref('Welcome to Your Vue 3.0 App ?')
    var data = reactive({
      aaa: 1,
      bbb: 'kim'
    })
    // 获取当前路由
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    provideStore(data)
    onMounted(() => {
      console.warn('home app mounted~', route.query)
    })
    function goToNext () {
      router.push({ path: '/detail/123' })
    }
    return {
      msg,
      goToNext
    }
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
