<template>
    <div class="demo">
        <h3>綁定HTML類</h3>
        <div
            class="static"
            :class="{ active: isActive, 'text-danger': error }"
        >class="static active"</div>
        <div v-text="codeVhtml" class="codeText"></div>

        <div :class="classObject1">class="active"</div>
        <div v-text="codeVobj1" class="codeText"></div>

        <div :class="classObject2">class="active"</div>
        <div v-text="codeVobj2" class="codeText"></div>

        <div :class="[activeClass, errorClass]">class="active text-danger"</div>
        <div v-text="codeVmutli" class="codeText"></div>

        <div :class="[isActive ? activeClass : '', errorClass]">class="active text-danger"</div>
        <div :class="[{ active: isActive }, errorClass]">class="active text-danger"</div>
        <div v-text="codeV3" class="codeText"></div>
    </div>
</template>
<script>
export default {
  name: 'HtmlClasses',
  data () {
    return {
      activeClass: 'active',
      errorClass: 'text-danger',
      isActive: true,
      error: false,
      classObject1: {
        active: true,
        'text-danger': false
      },
      codeVhtml: '①<div class="static" :class="{ active: isActive, \'text-danger\': error }"></div> ②data() {return {isActive: true, hasError: false}}',
      codeVobj1: '①<div :class="classObject1"></div> ②data() {return {classObject1: {active: true, \'text-danger\': false}}}',
      codeVobj2: '①<div :class="classObject2"></div> ②data() {return {isActive: true, error: null}},computed: {classObject2: {return {active: this.isActive && !this.error, \'text-danger\': this.error && this.error.type === \'fatal\'}}}',
      codeVmutli: '①<div :class="[activeClass, errorClass]"></div> ②data() {return {activeClass: \'active\', errorClass: \'text-danger\'}}',
      codeV3: '🔈<div :class="[isActive ? activeClass : \'\', errorClass]"></div> 🔈<div :class="[{ active: isActive }, errorClass]"></div>'
    }
  },
  computed: {
    classObject2 () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}

</script>
