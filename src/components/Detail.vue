<template>
  <div class="hello">
    <h1>Detail App</h1>
    <button type='button' @click='goToBack'>Back</button>
    <!-- to 属性就是目标位置 -->
    <teleport to="#teleport-target">
      <div class="toast-wrap"></div>
    </teleport>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    // 获取当前路由
    const route = useRoute()
    // 获取路由实例
    const router = useRouter()
    function goToBack() {
      router.push({ path: '/home', params: { aaa: 1, bbb: 2 } })
    }
    onMounted(() => {
      console.warn('detail app', route.path, route.params)
    })
    return {
      goToBack
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
.toast-wrap {
  height: 100px;
  width: 100px;
  background-color: #42b983;
}
</style>
