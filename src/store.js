import { createStore } from "vuex";

export default createStore({
  state: {
    a: 0,
    b: 'none'
  },
  getters: {
    ab: state => {
      return state.a + state.b
    }
  },
  mutations: {
    addA (state) {
      state.a++
    },
    modifyB (state, payload) {
      state.b = payload
    }
  },
  actions: {
    actionA({commit}) {
      return  new Promise((resolve) => {
        setTimeout(() => {
          commit('modifyB', 'done')
          resolve()
        }, 1000)
      })
    }
  },
});
