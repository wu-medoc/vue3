import { createStore } from 'vuex'

export default createStore({
  state: {
    lightbox: 0
  },
  mutations: {
    LIGHTBOX (state) {
      state.lightbox += 1
    },
    RESET_LIGHTBOX (state) {
      state.lightbox = 0
    }
  },
  actions: {
  },
  modules: {
  }
})
