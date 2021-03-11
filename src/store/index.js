import { createStore } from 'vuex'

export default createStore({
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
    SET_COUNT (state, num) {
      state.count = num
    }
  },
  actions: {
  },
  modules: {
  }
})
