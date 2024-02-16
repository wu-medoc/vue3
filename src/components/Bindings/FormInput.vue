<template>
    <div class="demo">
        <h3>表單輸入綁定</h3>
        <strong>＃基本用法</strong>
        <p class="text-fix">
            可以使用v-model指令在表單輸入，文本區域和選擇元素上創建雙向數據綁定。它會根據輸入類型自動選擇更新元素的正確方法。v-model本質上是用於在用戶輸入事件上更新數據的語法糖，並且在某些情況下需要特別注意。
        </p>
        <ul class="square">
            <li>v-model將忽略初始value，checked或selected任何形式的元素中找到的屬性。它將始終將當前活動實例數據視為真相的來源。您應該data在組件選項內的JavaScript端聲明初始值。</li>
            <li>v-model 內部使用不同的屬性，並為不同的輸入元素發出不同的事件：
                <ul class="disc">
                    <li>文本和textarea元素使用value屬性和input事件</li>
                    <li>複選框和單選按鈕使用checked屬性和change事件</li>
                    <li>選擇字段value用作道具和change事件</li>
                </ul>
            </li>
            <li>v-model在IME編寫過程中不會更新。如果您也想滿足這些更新，請改用inputevent。</li>
        </ul>
        <strong>＃價值綁定</strong>
        <ul class="square">
            <li>對於單選，複選框和選擇選項，v-model綁定值通常是靜態字符串（或複選框的布爾值）。但是有時我們可能想將值綁定到當前活動實例上的動態屬性。我們可以v-bind用來實現這一目標。另外，使用v-bind允許我們將輸入值綁定到非字符串值。</li>
            <li>
                <div class="gray">&lt;!-- `picked` is a string "a" when checked --&gt;</div>
                &lt;input type="radio" v-model="picked" value="a" /&gt;
                <div class="gray">&lt;!-- `toggle` is either true or false --&gt;</div>
                &lt;input type="checkbox" v-model="toggle" /&gt;
                <div class="gray">&lt;!-- `selected` is a string "abc" when the first option is selected --&gt;</div>
                &lt;select v-model="selected"&gt;<br />
                &lt;option value="abc"&gt;ABC&lt;/option&gt;<br />
                &lt;/select&gt;
            </li>
            <li>
                <div class="gray">when checked: vm.toggle === 'yes'<br> when unchecked: vm.toggle === 'no'</div>
                &lt;input type="checkbox" v-model="toggle" true-value="yes" false-value="no"&gt;
            </li>
            <li>
                <div class="gray">when checked: vm.pick === vm.a</div>
                &lt;input type="radio" v-model="pick" v-bind:value="a"&gt;
            </li>
            <li>
                <div class="gray">when checked:<br> typeof vm.selected // => 'object'<br>vm.selected.number // => 123</div>
                &lt;select v-model="selected"&gt;<br />
                &lt;option :value="{ number: 123 }"&gt;123&lt;/option&gt;
                &lt;/select&gt;
            </li>
        </ul>
        <strong>＃修飾符</strong>
        <ul class="square">
            <li>.lazy
                <br>默認情況下，v-model在每個input事件之後將輸入與數據同步（如上所述的IME組成除外）。您可以添加lazy修飾符，以在change事件發生後進行同步：
                <div class="gray">在“change”而不是“input”之後同步</div>
                &lt;input v-model.lazy="msg" /&gt;
            </li>
            <li>.number
                <br>如果要自動將用戶輸入鍵入為數字，可以將number修飾符添加到v-model託管輸入中：<br>
                &lt;input v-model.number="age" type="number" /&gt;
            </li>
            <li>.trim
                <br>如果要自動修剪用戶輸入中的空格，可以將trim修飾符添加到您v-model管理的輸入中：<br>
                &lt;input v-model.trim="msg" /&gt;
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'FormInput',
  data () {
    return {
      codeV: '① ②'
    }
  }
}
</script>
<style scoped>
.gray{
    color: gray;
}
</style>
