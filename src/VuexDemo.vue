<template>
<h2>Store & mapState</h2>
  <div>count: {{ count }}</div>
  <div>$store.state.count: {{ $store.state.count }}</div>
  <div>localCount: {{ localCount }}</div>
  <div>countAlias: {{ countAlias }}</div>
  <div>countPlusLocalState: {{ countPlusLocalState }}</div>
<hr>
<h2>Getters</h2>
  <div><b>doneTodos:</b> <br>{{ doneTodos }} <br> {{ $store.getters.doneTodos }}</div>
  <div><b>doneTodosCount:</b> <br>{{ doneTodosCount }} <br> {{ $store.getters.doneTodosCount }}</div>
  <div><b>getTodoById(2):</b> <br>{{ getTodoById }} <br> {{ $store.getters.getTodoById(2) }}</div>
  <div><b>getTodoById(1):</b> <br>{{ getTodoById1 }} <br> {{ $store.getters.getTodoById1(1) }}</div>
  <div><b>oddNumbers:</b> <br>{{ oddNumbers }} </div>
  <div><b>evenNumbers:</b> <br>{{ evenNumbers }} </div>
<hr>
<h2>Mutations</h2>
  <small>mutations處理函數必須是同步的，非同步可用actions</small>
  <div>count: {{ count }}
    <button @click='increment'>+</button>
    <button @click='setCount'>SET_COUNT(10)</button>
  </div>
<hr>
<h2>Actions</h2>
    <button @click='actCount'>ACT_COUNT ++</button>
    <button @click='asyncCount'>ASYNC_COUNT ++</button>
<hr>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { SET_COUNT } from '@/store/mutation-types'

export default {
  data () {
    return {
      localCount: 4
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      countAlias: 'count',
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    ...mapGetters([
      'doneTodos', 'doneTodosCount', 'getTodoById', 'getTodoById1', 'oddNumbers', 'evenNumbers'
    ])
  },
  // computed: mapState({
  //   count: state => state.count,
  //   countAlias: 'count',
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // })
  // computed: mapState([
  //   'count'
  // ])
  methods: {
    increment () {
      this.$store.commit('INCREMENT')
    },
    setCount () {
      this.$store.commit(SET_COUNT, { count: 10 })
    },
    actCount () {
      this.$store.dispatch('ACT_COUNT')
    },
    // asyncCount ({ commit }) {
    //   setTimeout(() => {
    //     this.$store.commit('INCREMENT')
    //   }, 1000)
    // }
    asyncCount () {
      this.$store.dispatch('INCREMENT_ASYNC').then((count) => {
        console.log(count)
      })
    }
    // actionA ({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             this.$store.commit('someMutation')
    //             resolve()
    //         }, 1000)
    //     })
    // },
    // actionB ({ dispatch, commit }) {
    //     return dispatch('actionA').then(() => {
    //         this.$store.commit('someOtherMutation')
    //     })
    // },
    // async actionC ({ commit }) {
    //     this.$store.commit('gotData', await getData())
    // },
    // async actionD ({ dispatch, commit} ) {
    //     await dispatch('actionC')
    //     this.$store.commit('gotOtherData', await getOtherData())
    // }
  }
}
</script>
