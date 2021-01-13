<template>
    <ul class="square">
      <strong>除beforeCreate和created之外，我們可以在設置方法中訪問9個舊的生命週期掛鉤</strong>
      <li>onBeforeMount –在安裝開始之前調用</li>
      <li>onMounted –在安裝組件時調用</li>
      <li>onBeforeUpdate –在反應性數據更改時以及重新呈現之前調用</li>
      <li>onUpdated –重新渲染後調用</li>
      <li>onBeforeUnmount –在銷毀Vue實例之前調用</li>
      <li>onUnmount –在實例銷毀後調用</li>
      <li>onActivated –激活保持活動的組件時調用</li>
      <li>onDeactivated –停用保持活動的組件時調用</li>
      <li>onErrorCaptured –從子組件捕獲錯誤時調用</li>
    </ul>
    <ul class="square">
      <strong>Vue2 to Vue3</strong>
      <li>beforeCreate -> use setup()</li>
      <li>created -> use setup()</li>
      <li>beforeMount -> onBeforeMount</li>
      <li>mounted -> onMounted</li>
      <li>beforeUpdate -> onBeforeUpdate</li>
      <li>updated -> onUpdated</li>
      <li>beforeDestroy -> onBeforeUnmount</li>
      <li>destroyed -> onUnmounted</li>
      <li>errorCaptured -> onErrorCaptured</li>
    </ul>
    <div id="lifeHook">
        <!-- <button @click="increment">
          Count is: {{ state.count }}, double is: {{ state.double }}
        </button>
        <div v-bind="increment">watchEffect CurrentWidth is {{ state.currentWidth }}</div> -->
        <!-- <div v-html="CurrentWidth"></div> -->
        {{ id }}
        {{ name }}
    </div>
    <img alt="lifeCycleSvg" class="svgImg" :src="require('@/assets/svg/lifeCycle-Hooks.svg')">
    <ul class="square">
      <strong>總結</strong>
      <li>在 Vue2.x 中通過補丁形式引入 Composition API ，進行 Vue2.x 和 Vue3.x 的回撥函式混用時： Vue2.x 的回撥函式會相對先執行 ，比如： mounted 優先於 onMounted 。</li>
      <li>在 Vue3.x 中，爲了相容 Vue2.x 的語法，所有舊的生命週期函式得到保留（除了 beforeDestroy 和 destroyed ）。當生命週期混合使用時： Vue3.x 的生命週期相對優先於 Vue2.x 的執行 ，比如： onMounted 比 mounted 先執行。 </li>
      <li>通過對比可以得出： 當你的主版本是哪個，當生命週期混用時，誰的回撥鉤子就會相對優先執行。</li>
    </ul>
</template>

<script>
import {
  ref, watchEffect, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
  onRenderTracked, onRenderTriggered, onActivated, onDeactivated, onErrorCaptured
} from 'vue'

export default {
  name: 'LifeCycle',
  setup () {
    const id = ref(1)
    console.log('setup')
    watchEffect(() => { console.log('watchEffect') })
    onBeforeMount(() => { console.log('onBeforeMount') })
    onMounted(() => { console.log('onMounted') })
    onBeforeUpdate(() => { console.log('onBeforeUpdate') })
    onUpdated(() => { console.log('onUpdated') })
    onBeforeUnmount(() => { console.log('onBeforeUnmount') })
    onUnmounted(() => { console.log('onUnmounted') })
    onActivated(() => { console.log('onActivated') })
    onDeactivated(() => { console.log('onDeactivated') })
    onErrorCaptured(() => { console.log('onErrorCaptured') })
    onRenderTracked(({ key, target, type }) => {
      console.log('onRenderTracked')
      console.log({ key, target, type })
    })
    onRenderTriggered((e) => {
      console.log('onRenderTriggered')
      console.log(Object.values(e))
    })
    setTimeout(() => { id.value = 2 }, 2000)
    return { id }
  },
  data () {
    console.log('data')
    return { name: 'LifeCycle' }
  },
  beforeCreate () { console.log('beforeCreate') },
  created () { console.log('created') },
  beforeMount () { console.log('beforeMount') },
  mounted () {
    console.log('mounted')
    setTimeout(() => { this.id = 3 }, 4000)
  },
  beforeUpdate () { console.log('beforeUpdate') },
  updated () { console.log('updated') },
  beforeUnmount () { console.log('beforeUnmount') },
  unmounted () { console.log('unmounted') }
}
</script>

<style scoped>
.svgImg{
  width: 100vw;
}
</style>
