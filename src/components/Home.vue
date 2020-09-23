<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>store a: {{store.getters.ab}}</p>
    <button type='button' @click='addA'>a++</button>
    <button type='button' @click='actionA'>action a</button>
    <br/>
    <br/>
    <button type='button' @click='goToNext'>Next</button>
    <HelloWorld msg="First Page" />
    <CounterView />
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
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

    const store = useStore()
    function addA () {
      store.commit('addA')
    }
    function actionA () {
      store.dispatch('actionA').then(() => {
        console.log(store.getters.ab)
      })
    }

    provideStore(data)
    function goToNext () {
      router.push({ path: '/detail/123' })
    }

    onMounted(() => {
      console.warn('home app store', store.state)
      console.warn('home app mounted~', route.query)
    })

    return {
      msg,
      store,
      addA,
      actionA,
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
