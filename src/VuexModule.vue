<template>
<div>
  <h2>Module</h2>
  <div>$store.state.count: {{ $store.state.count }}</div>
  <div>$store.state.a.count(+2): {{ $store.state.a.count }}</div>
  <div>$store.state.b.count(+3): {{ $store.state.b.count }}</div>
  <button @click="$store.commit('ADD_COUNT')">ADD_COUNT</button><br>
  <button @click="$store.commit('a/ADD_COUNT')">a ADD_COUNT</button><br>
  <small>當@click="$store.commit('ADD_COUNT')"時，<br>store裡，若各module的function同名會一起被觸發<br>namespaced: true可解決共同觸發問題</small><br><br>
  <button @click="$store.dispatch('a/ACTIONS_COUNT')">ACTIONS_COUNT</button><br>
  <small>A module若要獲取B module資料裡，需透過root</small><br><br>
  <button @click="toggleHandler">toggle registerModule c</button><br>
  <div v-if="hasModule">$store.state.c.count(+4): {{ $store.state.c.count }}</div>
</div>
</template>

<script>
import { mapState } from 'vuex'

const moduleC = {
  // state: {
  //   count: 3
  // },
  // 資料保留
  state: () => ({
    count: 3
  }),
  // 資料不保留
  mutations: {
    ADD_COUNT (state) {
      state.count += 4
    }
  }
}

export default {
  data () {
    return {
      hasModule: false
    }
  },
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  methods: {
    toggleHandler () {
      if (this.$store.hasModule('c')) {
        this.$store.unregisterModule('c', moduleC)
        this.hasModule = false
      } else {
        this.$store.registerModule('c', moduleC)
        this.hasModule = true
      }
    }
  }
}
</script>
