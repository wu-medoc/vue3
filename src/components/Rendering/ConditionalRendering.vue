<template>
    <div class="demo">
        <h3>有條件渲染</h3>
        <strong>v-if</strong>
        <p v-if="awesome">Vue is awesome!</p>
        <div v-text="codeVif" class="codeText"></div>

        <strong>v-else</strong>
        <div v-if="Math.random() > 0.5">
            Now you see me
        </div>
        <div v-else>
            Now you don't
        </div>
        <div v-text="codeVelse" class="codeText"></div>

        <strong>v-else-if</strong>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
        <div v-text="codeVelseif" class="codeText"></div>

        <strong>v-show</strong>
        <p v-show="awesome">Hello!</p>
        <div v-text="codeVshow" class="codeText"></div>
        <p class="text-fix">帶有的元素v-show將始終呈現並保留在DOM中；v-show僅切換display元素的CSS屬性。<br>v-show不支持&lt;template&gt;元素，也不與v-else配合使用</p>
        <ul class="square">
            <li>v-if是“真正的”條件渲染，因為它確保了條件塊中的事件監聽器和子組件在切換過程中被正確地銷毀和重新創建。</li>
            <li>v-if也是懶惰的：如果條件在初始渲染時為false，它不會做任何事情-條件塊不會被渲染，直到條件第一次變成真。</li>
            <li>相比之下，v-show要簡單合併-無論初始條件如何，元素都會被渲染，並基於CSS進行切換。</li>
            <li>因此，如果您需要經常切換某些元素，最好選擇v-show，如果條件在運行時不太可能 改變，則選擇v-if。</li>
            <li>不建議同時使用v-if和v-for。</li>
            <li>當v-if和v-for同時使用在同一個元素上時，v-if將首先被評估。</li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'ConditionalRendering',
  data () {
    return {
      awesome: true,
      codeVif: '<p v-if="awesome">Vue is awesome!</p>',
      codeVelse: '<div v-if="Math.random() > 0.5">Now you see me</div><div v-else>Now you don\'t</div>',
      codeVelseif: '<div v-if="type === \'A\'">A</div><div v-else-if="type === \'B\'">B</div><div v-else-if="type === \'C\'">C</div><div v-else>Not A/B/C</div>',
      codeVshow: '<p v-show="awesome">Hello!</p>'
    }
  }
}
</script>
