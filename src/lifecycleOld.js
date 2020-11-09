{/* <template>
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
</script> */}