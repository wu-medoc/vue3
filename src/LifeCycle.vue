<template>
    <ul class="square">
      除beforeCreate和created之外，我們可以在設置方法中訪問9個舊的生命週期掛鉤
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
      Vue2 to Vue3
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
        <button @click="increment">
          Count is: {{ state.count }}, double is: {{ state.double }}
        </button>
        <div v-bind="increment">watchEffect CurrentWidth is {{ state.currentWidth }}</div>
        <!-- <div v-html="CurrentWidth"></div> -->
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, 
onErrorCaptured, onRenderTracked, onRenderTriggered, reactive, computed, watchEffect } from 'vue'

export default {
  name: 'LifeCycle',
  setup() {
    var y = 0
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      currentWidth: window.innerWidth
    })
    watchEffect(() => {
      // ... 
      console.log('watchEffect: '+ state.currentWidth++)
    })

    const resizeListener = () => {
      setTimeout(() => {
        console.log('resizeListener: '+ (y+=1))
      }, 2000)
    }
    onRenderTracked(({ key, target, type }) => {
      console.log('onRenderTracked: '+ (y+=1))
      console.log({ key, target, type })
    })    
    onRenderTriggered((e) => {
      // 檢查哪個依賴項導致組件重新呈現
      console.log('onRenderTriggered: '+ (y+=1))
      console.log(Object.values(e))
    })
    onBeforeMount(() => {
      // ... 
      console.log('onBeforeMount: '+ (y+=1))
    })
    onMounted(() => {
      // 已安裝 
      window.addEventListener('resize', resizeListener); 
      console.log('onMounted: '+ (y+=1))
    })
    onBeforeUpdate(() => {
      // ... 
      console.log('onBeforeUpdate: '+ (y+=1))
    })
    onUpdated(() => {
      // 更新 
      console.log('onUpdated: '+ (y+=1))
    })
    onBeforeUnmount(() => {
      // beforeDestroy ->使用onBeforeUnmount
      window.removeEventListener('resize', resizeListener);
      console.log('onBeforeUnmount: '+ (y+=1))
    })
    onUnmounted(() => {
      // 銷毀 destroyed ->使用onUnmounted
      console.log('onUnmounted: '+ (y+=1))
    })
    onActivated(() => {
      // ... 
      console.log('onActivated: '+ (y+=1))
    })
    onDeactivated(() => {
      // ... 
      console.log('onDeactivated: '+ (y+=1))
    })
    onErrorCaptured(() => {
      // errorCaptured ->使用onErrorCaptured 
      console.log('onErrorCaptured: '+ (y+=1))
    })

    function increment() {
      state.count++
      state.currentWidth = window.innerWidth
    }
    return {
      state,
      increment
    }
  },
  // methods: {
  //   addClick() {
  //     this.conunt +=1
  //   }
  // }
}
</script>