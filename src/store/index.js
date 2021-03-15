import { createStore } from 'vuex'
import { SET_COUNT } from './mutation-types'

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    ADD_COUNT (state) {
      state.count += 2
    }
  },
  getters: {
    plusCount (state, getters, rootState, rootGetters) {
      return state + 1
    }
  },
  actions: {
    ACTIONS_COUNT (context) {
      console.log(context)
      console.log(context.getters.plusCount)
      return context.state + 1
    }
  }
}

const moduleB = {
  state: {
    count: 2
  },
  mutations: {
    ADD_COUNT (state) {
      state.count += 3
    }
  },
  getters: {
  },
  actions: {
    ACTIONS_COUNT_B (state) {
      return state + 1
    }
  }
}

export default createStore({
  modules: {
    a: moduleA,
    b: moduleB
  },
  state: {
    lightbox: 0,
    count: 3,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    getTodoById1 (state) {
      return (id) => {
        return state.todos.find((todo) => todo.id === id)
      }
    },
    oddNumbers (state) {
      return state.numbers.filter((num) => {
        // return num % 2
        return num % 2 !== 0
      })
    },
    evenNumbers (state) {
      return state.numbers.filter((num) => {
        // return (num % 2) - 1
        return num % 2 === 0
      })
    }
  },
  mutations: {
    LIGHTBOX (state) {
      state.lightbox += 1
    },
    RESET_LIGHTBOX (state) {
      state.lightbox = 0
    },
    INCREMENT (state) {
      state.count++
    },
    // []定義參數
    [SET_COUNT] (state, payload) {
      state.count = payload.count
    },
    ADD_COUNT (state) {
      state.count++
    }
  },
  actions: {
    ACT_COUNT ({ commit }) {
      commit('INCREMENT')
    },
    INCREMENT_ASYNC ({ commit, state }) {
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //   try {
        //     axios.err().then((res) => {
        //        // status code 2xx, 3xx
        //        commit(SET_COUNT, { count: state.count + 1 })
        //        resolve({ data: { count: state.count }})
        //     }).catch((res) => {
        //        // status code 4xx, 5xx
        //        commit(SET_ERR_MSG, { text: res.message })
        //        resolve(err[res.status])
        //   })
        //     // axios這段故意寫錯
        //   } catch (e) {
        //     resolve({ err: 'error' })
        //      // 在此攔截錯誤，避免錯誤外擴
        //   }
        // }, 3000)
        setTimeout(() => {
          commit(SET_COUNT, { count: state.count + 1 })
          resolve(state.count)
        }, 3000)
      })
    }
  }
})
// let obj = await this.$store.dispatch(GET_xxx, {...})
// if(obj.err) errHandler(obj.err.type)
// else completeHandler(obj.data)
