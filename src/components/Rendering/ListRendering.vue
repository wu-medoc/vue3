<template>
    <div class="demo">
        <h3>列表渲染</h3>
        <strong>v-for</strong>
        <ul id="array-rendering" class="disc">
            <li v-for="item in items" :key='item'>
                {{ item.message }}
            </li>
        </ul>
        <p class="text-fix">該v-for指令需要採用形式的特殊語法item in items，其中items是源數據數組，並且item是被進行迭代的數組元素的別名：</p>
        <div v-text="codeVfor" class="codeText"></div>

        <ul id="array-with-index" class="disc">
            <li v-for="(item, index) of items" :key='item'>
                {{ parentMessage }} - {{ index }} - {{ item.message }}
            </li>
        </ul>
        <p class="text-fix">在v-for塊內部，我們可以完全訪問父作用域屬性。v-for還支持另一個參數，用於當前項的索引。</p>
        <p class="text-fix">也可以將of用作分隔符in，以使其更接近JavaScript的迭代器語法：</p>
        <div v-text="codeVfor1" class="codeText"></div>

        <ul id="v-for-object" class="disc">
            <li v-for="(value, name, index) in myObject" :key="index">
                {{ index }}. {{ name }}: {{ value }}
            </li>
        </ul>
        <p class="text-fix">v-for還可以用於遍歷對象的屬性。並為屬性名稱（又稱鍵）提供第二個參數，另一個用於索引。</p>
        <p class="text-fix">建議盡可能提供一個key屬性v-for，除非迭代的DOM內容很簡單。</p>
        <div v-text="codeVobj" class="codeText"></div>
        <p class="text-fix">Vue封裝了觀察到的數組的變異方法，因此它們也將觸發視圖更新。包裝的方法是：</p>
        <ul id="v-for-object" class="disc">
            <li>push()</li>
            <li>pop()</li>
            <li>shift()</li>
            <li>unshift()</li>
            <li>splice()</li>
            <li>sort()</li>
            <li>reverse()</li>
        </ul>
        <p class="text-fix">變異方法會變異調用它們的原始數組。相比之下，也有非變異方法，例如filter()，concat()並且slice()，不發生變異原數組，但總是返回一個新的數組。使用非變異方法時，可以將舊數組替換為新數組</p>
    </div>
</template>
<script>
export default {
  name: 'ListRendering',
  data () {
    return {
      parentMessage: 'Parent',
      items: [{ message: 'Foo' }, { message: 'Bar' }],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2020-03-22'
      },
      codeVfor: '①<li v-for="item in items">{{ item.message }}</li> ②data() {return {items: [{ message: \'Foo\' }, { message: \'Bar\' }]}}',
      codeVfor1: '①<li v-for="(item, index) of items">{{ parentMessage }} - {{ index }} - {{ item.message }}</li> ②data() {return {parentMessage:\'Parent\', items: [{ message: \'Foo\' }, { message: \'Bar\' }]}}',
      codeVobj: '①<li v-for="(value, name, index) in myObject" :key="index">{{ index }}. {{ name }}: {{ value }}</li> ②data() {return { myObject: {title: \'How to do lists in Vue\',author: \'Jane Doe\',publishedAt: \'2020-03-22\'}}}'

    }
  }
}
</script>
