<template>
    <div class="demo">
        <strong>文本Text</strong>
        <div id="v-model-basic" class="demo">
            <input v-model="message" placeholder="edit me" />
            <div>Message is: {{ message }}</div>
        </div>
        <div v-text="codeFtxt" class="codeText"></div>

        <strong>多行文字Textarea</strong>
        <div>
            <textarea v-model="message" placeholder="add multiple lines"></textarea>
            <div>Multiline message is:</div>
            <div style="white-space: pre-line;">{{ message }}</div><br />
        </div>
        <div v-text="codeFarea" class="codeText"></div>

        <strong>複選框checkbox</strong>
        <div class="flexCenter">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">{{ checked }}</label>
        </div>
        <div v-text="codeFcheck" class="codeText"></div>

        <strong>多個複選框</strong>
        <div id="v-model-multiple-checkboxes">
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames" />
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
            <label for="mike">Mike</label>
            <br />
            <span>Checked names: {{ checkedNames }}</span>
        </div>
        <div v-text="codeFcheckbox" class="codeText"></div>

        <strong>單選框radio</strong>
        <div id="v-model-radiobutton" class="demo">
            <input type="radio" id="one" value="One" v-model="picked" />
            <label for="one">One</label>
            <input type="radio" id="two" value="Two" v-model="picked" />
            <label for="two">Two</label><br />
            <span>Picked: {{ picked }}</span>
        </div>
        <div v-text="codeFradio" class="codeText"></div>

        <strong>選擇select-單選</strong><br />
        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <br /><strong>選擇select-多選multiple</strong><br />
        <select v-model="selected" multiple style="height: 80px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select><br />
        <span>Selected: {{ selected }}</span>
        <div v-text="codeFselect" class="codeText"></div>

        <strong>動態選項呈現v-for</strong>
        <select v-model="selected1">
            <option v-for="option in options" :value="option.value" :key="option">
            {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected1 }}</span>
        <div v-text="codeFor" class="codeText"></div>
    </div>
    <form-input></form-input>
</template>
<script>
import FormInput from './FormInput.vue'
export default {
  components: { FormInput },
  name: 'FormDemo',
  data () {
    return {
      message: '',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      selected1: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      codeFtxt: '①<input v-model="message" placeholder="edit me" /><p>{{ message }}</p> ②data() {return {message: \'\'}}',
      codeFarea: '<textarea v-model="message" placeholder="add multiple lines"></textarea><p>{{ message }}</p>',
      codeFcheck: '①<input type="checkbox" id="checkbox" v-model="checked" /><label for="checkbox">{{ checked }}</label> ②data() {return {checked: false}}',
      codeFcheckbox: '①<input type="checkbox" id="jack" value="Jack" v-model="checkedNames" /><label for="jack">Jack</label><input type="checkbox" id="john" value="John" v-model="checkedNames" /><label for="john">John</label><input type="checkbox" id="mike" value="Mike" v-model="checkedNames" /><label for="mike">Mike</label> ②data() {return {checkedNames: []}}',
      codeFradio: '①<input type="radio" id="one" value="One" v-model="picked" /><label for="one">One</label><input type="radio" id="two" value="Two" v-model="picked" /><label for="two">Two</label><br /><span>Picked: {{ picked }}</span> ②data() {return {picked: \'\'}}',
      codeFselect: '①<select v-model="selected"><option disabled value="">Please select one</option><option>A</option><option>B</option><option>C</option></select><span>Selected: {{ selected }}</span> ②data() {return {selected: \'\'}}',
      codeFor: '①<div id="v-model-select-dynamic" class="demo"><select v-model="selected"><option v-for="option in options" :value="option.value">{{ option.text }}</option></select><span>Selected: {{ selected }}</span></div> ②data() {return {selected: \'A\',options: [{ text: \'One\', value: \'A\' },{ text: \'Two\', value: \'B\' },{ text: \'Three\', value: \'C\' }]}}',
      codeF: '① ②'
    }
  }
}
</script>
<style scoped>
input[type='checkbox'],
input[type='radio'] {
    margin-bottom: 0.75em;
    vertical-align: middle;
}
</style>
