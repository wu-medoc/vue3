<template>
    <div class="demo">
        <div id="basic-event">
            <button @click="counter += 1">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
        </div>
        <div v-text="codeVclick" class="codeText"></div>

        <div id="event-with-method">
            <button @click="greet">Greet</button>
        </div>        
        <div v-text="codeVmethods" class="codeText"></div>

        <div id="inline-handler">
            <button @click="say('hi')">Say hi</button>
            <button @click="say('what')">Say what</button>
        </div>
        <div v-text="codeVsay" class="codeText"></div>

        <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>
        <p>有時需要在內聯語句處理程序中訪問原始DOM事件。可以使用特殊$event變量將其傳遞給方法：</p>
        <div v-text="codeVevent" class="codeText"></div>

        <button @click="one($event), two($event)">
            2 event Submit
        </button>
        <p>事件處理程序中使用多個方法，這些方法之間用逗號分隔</p>
        <div v-text="codeVmutli" class="codeText"></div>
        <h3>事件修飾符</h3>
        <ul class="square">
            <li>.stop</li>
            <li>.prevent</li>
            <li>.capture</li>
            <li>.self</li>
            <li>.once</li>
            <li>.passive</li>
        </ul>
        <p class="text-fix">&lt;！-click事件的傳播將被停止-&gt;
            <br>&lt;a @click.stop="doThis"&gt; &lt;/a&gt;</p>
        <p class="text-fix">&lt;！-提交事件將不再重新加載頁面-&gt;
            <br>&lt;form @submit.prevent =“ onSubmit”&gt; &lt;/ form&gt;</p>
        <p class="text-fix">&lt;！-修飾符可以鏈接-&gt;
            <br>&lt;a @click.stop.prevent="doThat"&gt; &lt;/a&gt;</p>
        <p class="text-fix">&lt;！-只是修飾符-&gt;
            <br>&lt;form @submit.prevent&gt; &lt;/ form&gt;</p>
        <p class="text-fix">&lt;！-添加事件偵聽器時使用捕獲模式-&gt;<br>&lt;！-即以內部元素為目標的事件在此元素處理之前先在這裡處理-&gt;
            <br>&lt;div @click.capture =“ doThis”&gt; ... &lt;/ div&gt;</p>
        <p class="text-fix">&lt;！-僅當event.target是元素本身時才觸發處理程序-&gt;<br>&lt;！-即不是來自子元素-&gt;
            <br>&lt;div @click.self =“ doThat”&gt; ... &lt;/ div&gt;</p>
        <p class="text-fix">&lt;！-滾動事件的默認行為（滾動）將發生-&gt;<br>&lt;！-立即，而不是等待ʻonScroll`完成-&gt;<br>&lt;！-如果包含ʻevent.preventDefault（）`-&gt;
            <br>&lt;！-.passive修飾符，對應於addEventListener的passiveoption。-&gt;<br>&lt;！請勿將.passive和.prevent一起使用，因為.prevent它將被忽略，並且瀏覽器可能會向您顯示警告。-&gt;
            <br>&lt;div @ scroll.passive =“ onScroll”&gt; ... &lt;/ div&gt;</p>
        <p class="text-fix">使用修飾符時順序很重要，因為相關代碼以相同順序生成。因此，使用@click.prevent.self將阻止所有單擊，而@click.self.prevent只會阻止對元素本身的單擊。</p>

        <h3>關鍵修飾符</h3>
        <p class="text-fix">在監聽鍵盤事件時，我們經常需要檢查特定的鍵。Vue允許在監聽關鍵事件時v-on或@在監聽關鍵事件時添加關鍵修飾符。通過將它們轉換為kebab-case，可以直接使用通過as修飾符公開的任何有效鍵名。在以下示例中，僅當$event.key等於時才調用處理程序'PageDown'。</p>
        <div v-text="codeVkey" class="codeText"></div>
        
        <h3>關鍵別名</h3>
        <ul class="square">
            <li>.enter</li>
            <li>.tab</li>
            <li>.delete （同時捕獲“刪除”和“退格”鍵）</li>
            <li>.esc</li>
            <li>.space</li>
            <li>.up</li>
            <li>.down</li>
            <li>.left</li>
            <li>.right</li>
        </ul>

        <h3>系統修改鍵</h3>
        <p class="text-fix">僅當按下相應的修飾鍵時，才可以使用以下修飾符觸發鼠標或鍵盤事件偵聽器：</p>
        <ul class="square">
            <li>.ctrl</li>
            <li>.alt</li>
            <li>.shift</li>
            <li>.meta</li>
        </ul>
        <div v-text="codeVsys1" class="codeText"></div>
        <div v-text="codeVsys2" class="codeText"></div>

        <h3>.exact 修飾符</h3>
        <p class="text-fix">&lt;！-即使同時按下Alt或Shift也會觸發-&gt;
        <br>&lt;button @ click.ctrl =“ onClick”&gt; A &lt;/ button&gt;</p>
        <p class="text-fix">&lt;！-僅在按Ctrl鍵且沒有其他鍵時才觸發-&gt;
        <br>&lt;button @ click.ctrl.exact =“ onCtrlClick”&gt; A &lt;/ button&gt;</p>
        <p class="text-fix">&lt;！-僅在未按下系統修飾符時才會觸發-&gt;
        <br>&lt;button @ click.exact =“ onClick”&gt; A &lt;/ button&gt;</p>

        <h3>.exact 修飾符</h3>
        <ul class="square">
            <li>.left</li>
            <li>.right</li>
            <li>.middle</li>
            <li>這些修飾符將處理程序限制為由特定鼠標按鈕觸發的事件。</li>
        </ul>

        <p class="text-fix"></p>

    </div>
</template>
<script>
export default {
    name: 'ListeningEvents',
    data() {
        return {
            counter: 1,
            name: 'Vue.js',
            codeVclick: '<button @click="counter += 1">Add 1</button><p>The button above has been clicked {{ counter }} times.</p></div>',
            codeVmethods: '①<button @click="greet">Greet</button> ②methods: {greet(event) {alert(\'Hello \' + this.name + \'!\') if (event) {alert(event.target.tagName)}}}',
            codeVsay: '①<button @click="say(\'hi\')">Say hi</button><button @click="say(\'what\')">Say what</button> ②methods: {say(message) { alert(message) }}',
            codeVevent: '①<button @click="warn(\'Form cannot be submitted yet.\', $event)">Submit</button> ②methods: {warn(message, event) {if (event) {event.preventDefault()} alert(message)}}',
            codeVmutli: '①<button @click="one($event), two($event)">Submit</button> ②methods: {one(event) {alert(event.target.tagName+"first event")}, two(event) {alert(event.target.tagName+"second event")}}',
            codeVkey: '<input @keyup.page-down="onPageDown" />',
            codeVsys1: 'Alt + Enter → <input @keyup.alt.enter="clear" />',
            codeVsys2: 'Ctrl + Click → <div @click.ctrl="doSomething">Do something</div>',
            codeV: '① ②',
        }
    },
    methods: {
        greet(event) {
            alert('Hello ' + this.name + '!')
            if (event) {
                alert(event.target.tagName)
            }
        },
        say(message) {
            alert(message)
        },
        warn(message, event) {
            if (event) {
                event.preventDefault()
            }
            alert(message)
        },
        one(event) {
            alert(event.target.tagName+"first event")
        },
        two(event) {
            alert(event.target.tagName+"second event")
        }
    }
}
</script>