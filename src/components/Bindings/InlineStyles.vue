<template>
    <div class="demo">
        <h3>綁定內聯樣式</h3>
        <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">style="color: red; font-size: 20px;"</div>        
        <div v-text="codeVstyle" class="codeText"></div>

        <div :style="styleObject">style="color: red; font-size: 13px;"</div>
        <div v-text="codeVobj1" class="codeText"></div>
        
        <div v-text="codeVobj2" class="codeText"></div>
        
        <div v-text="codeVobj3" class="codeText"></div>        
        
    </div>
</template>
<script>
export default {
    name: 'InlineStyles',
    data() {
        return {
            activeColor: 'red',
            fontSize: 20,
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },
            codeVstyle: '<div :style="{ color: activeColor, fontSize: fontSize + \'px\' }"></div> ',
            codeVobj1: '①<div :style="styleObject"></div> ②data() {return {styleObject { color: \'red\', fontSize: \'13px\'}}}',
            codeVobj2: '<div :style="[baseStyles, overridingStyles]"></div>',
            codeVobj3: '<div :style="{ display: [\'-webkit-box\', \'-ms-flexbox\', \'flex\'] }"></div>',
        }
    }
}
</script>