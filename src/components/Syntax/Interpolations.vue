<template>
    <div class="demo">
        <h3>{{ msg }}</h3>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <div v-text="codeVhtml" class="codeText"></div>

        <p>Message: {{ msg }}</p>
        <div v-text="codeMsg" class="codeText"></div>

        <p v-once>This will never change: {{ msg }}</p>
        <div v-text="codeVone" class="codeText"></div>

        <div v-bind:id="'list-'+dynamicId">this Attributes id is {{dynamicId}}</div>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        <div v-text="codebind" class="codeText"></div>

        <div>直接在template使用JavaScript表達式</div>
        dynamicId is {{ dynamicId }} , 
        dynamicId+1 = {{ dynamicId + 1 }} ,
        {{ dynamicId ? 'YES' : 'NO' }} 
        <div v-text="codeJs" class="codeText"></div>
    </div>
</template>
<script>
export default {
  name: 'Interpolations',
    data() {
        return {
            dynamicId: 0,
            isButtonDisabled: true,
            msg: 'Interpolations',
            rawHtml: '<span style="color: red">This should be red.</span>',
            codeVhtml: '☗<p>Using mustaches: {{ rawHtml }}</p> ☗<p>Using v-html directive: <span v-html="rawHtml"></span></p>',
            codeMsg: '<p>Message: {{ msg }}</p>',
            codeVone: '<p v-once>This will never change: {{ msg }}</p>',
            codebind: '☗<div v-bind:id="\'list-\'+dynamicId">this Attributes id is {{dynamicId}}</div> ☗<button v-bind:disabled="isButtonDisabled">Button</button>',
            codeJs: 'dynamicId is {{ dynamicId }} , dynamicId+1 = {{ dynamicId + 1 }} , {{ dynamicId ? \'YES\' : \'NO\' }} '
        }
    }
}
</script>
