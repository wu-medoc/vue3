<template>
    <div class="demo">
        <h3>{{ msg }}</h3>
        <p v-if="seen">Now you see me</p>
        <p v-if="!seen">You can't see me.</p>
        <div v-text="codeVif" class="codeText"></div>

        <strong>v-bind 速記</strong>
        <p>完整語法</p>
        <div v-text="codeVbind1" class="codeText"></div>
        <p>簡寫語法</p>
        <div v-text="codeVbind2" class="codeText"></div>
        <p>帶有動態參數的簡寫</p>
        <div v-text="codeVbind3" class="codeText"></div>
        
        <strong>v-on 速記</strong>
        <p>完整語法</p>
        <div v-text="codeVon1" class="codeText"></div>
        <p>簡寫語法</p>
        <div v-text="codeVon2" class="codeText"></div>
        <p>帶有動態參數的簡寫</p>
        <div v-text="codeVon3" class="codeText"></div>

        <p class="text-fix">
            模板表達式是沙盒化的，只能訪問白名單中的全局變量，例如Math和Date。您不應嘗試在模板表達式中訪問用戶定義的全局變量。
        </p>
    </div>
</template>
<script>
export default {
  name: 'Directives',
    data() {
        return {
            seen: true,
            msg: 'Directives',
            codeVif: '🔈<p v-if="seen">Now you see me</p> 🔈<p v-if="!seen">You can\'t see me.</p>',
            codeVbind1: '<a v-bind:href="url"> ... </a>',
            codeVbind2: '<a :href="url"> ... </a>',
            codeVbind3: '<a :[key]="url"> ... </a>',
            codeVon1: '<a v-on:click="doSomething"> ... </a>',
            codeVon2: '<a @click="doSomething"> ... </a>',
            codeVon3: '<a @[event]="doSomething"> ... </a>',
        }
    }
}
</script>
