<template>
    <div id="example1" class="demo">
        <h3>{{ msg }}</h3>
        <p>Using mustaches: {{ rawHtml }}</p>
        <p>Using v-html directive: <span v-html="rawHtml"></span></p>
        <div v-text="codeVhtml" class="codeCss"></div>

        <p>Message: {{ msg }}</p>
        <div v-text="codeMsg" class="codeCss"></div>

        <p v-once>This will never change: {{ msg }}</p>
        <div v-text="codeVone" class="codeCss"></div>

        <div v-bind:id="'list-'+dynamicId">this Attributes id is {{dynamicId}}</div>
        <button v-bind:disabled="isButtonDisabled">Button</button>
        <div v-text="codebind" class="codeCss"></div>

        <div>直接在template使用JavaScript表達式</div>
        dynamicId is {{ dynamicId }} , 
        dynamicId+1 = {{ dynamicId + 1 }} ,
        {{ dynamicId ? 'YES' : 'NO' }} 
        <div v-text="codeJs" class="codeCss"></div>
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
            codeVhtml: '<p>Using mustaches: {{ rawHtml }}</p>\n<p>Using v-html directive: <span v-html="rawHtml"></span></p>',
            codeMsg: '<p>Message: {{ msg }}</p>',
            codeVone: '<p v-once>This will never change: {{ msg }}</p>',
            codebind: '<div v-bind:id="\'list-\'+dynamicId">this Attributes id is {{dynamicId}}</div>\n<button v-bind:disabled="isButtonDisabled">Button</button>',
            codeJs: 'dynamicId is {{ dynamicId }} , dynamicId+1 = {{ dynamicId + 1 }} , {{ dynamicId ? \'YES\' : \'NO\' }} '
        }
    }
}
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.codeCss{
    padding: 1em;
    margin-bottom: 2em;
    color: gray;
    background: #E5FDE8;
    overflow: auto;
    font-size: small;
}
p{
    font-size: 1em;
}
</style>