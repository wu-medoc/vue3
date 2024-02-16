<template>
    <div class="demo">
        <strong>filter()</strong>
        <ul>
            <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
        </ul>
        <div v-text="codeFilter1" class="codeText"></div>

        <ul v-for="numbers in sets" :key="numbers">
            <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
        </ul>
        <div v-text="codeFilter2" class="codeText"></div>
    </div>
</template>
<script>
export default {
  name: 'FilterRendering',
  data () {
    return {
      numbers: [1, 2, 3, 4, 5],
      sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
      codeFilter1: '①<li v-for="n in evenNumbers">{{ n }}</li> ②data() {return {numbers: [ 1, 2, 3, 4, 5 ]}},computed: {evenNumbers() {return this.numbers.filter(number => number % 2 === 0)}}',
      codeFilter2: '①<ul v-for="numbers in sets"><li v-for="n in even(numbers)">{{ n }}</li></ul> ②data() {return {sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]}},methods: {even(numbers) { return numbers.filter(number => number % 2 === 0)}}'
    }
  },
  computed: {
    evenNumbers () {
      return this.numbers.filter(number => number % 2 === 0)
    }
  },
  methods: {
    even (numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>
