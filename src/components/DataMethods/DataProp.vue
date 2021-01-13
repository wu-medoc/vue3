<template>
    <div class="demo">
        <div>{{ count }} / {{ $data.count }} / {{ this.count }}</div>
        <div v-text="codeVdata" class="codeText"></div>
        <button @click="increment">Up count</button>
    </div>
</template>
<script>
export default {
  name: 'DataProp',
  data () {
    return {
      count: 4,
      codeVdata: '<div>{{ count }} / {{ $data.count }} / {{ this.count }}</div>'
    }
  },
  mounted () {
    this.count = 5
    this.increment()
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
