<template>
    <div class="demo">
        <div id="computed-basics">
        <p>Has published books:</p>
        <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
        <div v-text="codeVhtml" class="codeText"></div>
        <span>{{ publishedBooksMessage }}</span>
        <div v-text="codeVcomputed" class="codeText"></div>
        <span>{{ calculateBooksMessage() }}</span>
        <div v-text="codeVmethods" class="codeText"></div>
        </div>
        <p class="text-fix">
            相比之下，每當發生重新渲染時，方法調用總是會運行函數。
            為什麼我們需要緩存？想像一下，我們有一個昂貴的計算屬性list，它需要循環遍歷一個巨大的數組並進行大量計算。然後，我們可能會具有其他依賴於的計算屬性list。如果不進行緩存，我們執行listgetter的次數將超過必要的次數！在不想要緩存的情況下，可以使用method來代替。
        </p>
        <p class="text-fix">
            當你想對不斷變化的數據進行時，雖然計算屬性在大多數情況下比較合適，但有時也需要自定義的觀察器。這就是為什麼Vue通過watch選項，提供了一種更通用的方式來響應數據變化。 初步或昂貴的操作時，這是最有用的。
        </p>
        <p style="color: gray">
            https://yesno.wtf/api ➞ {"answer":"no","forced":false,"image":"https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif"}
        </p>
        <div id="watch-example">
            <p>
                Ask a yes/no question:
                <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>
        <div id="demo">{{ fullName }}</div>
    </div>
</template>
<script>
export default {
  name: 'ComputedProp',
  data () {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      question: '',
      answer: 'Questions usually contain a question mark. ☺)',
      firstName: 'Foo',
      lastName: 'Bar',
      // fullName: 'Foo Bar',
      codeVhtml: '<span>{{ author.books.length > 0 ? \'Yes\' : \'No\' }}</span>',
      codeVcomputed: '①computed【publishedBooksMessage() {return this.author.books.length > 0 ? \'Yes\' : \'No\'}】, ②html【<span>{{ publishedBooksMessage }}</span>】',
      codeVmethods: '①methods【calculateBooksMessage() {return this.author.books.length > 0 ? \'Yes\' : \'No\'}】, ②html【<span>{{ calculateBooksMessage() }}</span>】'
    }
  },
  watch: {
    // whenever question changes, this function will run
    question (newQuestion, oldQuestion) {
      if (newQuestion.indexOf('?') > -1) {
        this.getAnswer()
      }
    }
  },
  computed: {
    publishedBooksMessage () {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    now () {
      return Date.now()
    },
    fullName () {
      return 'computed➜' + this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    calculateBooksMessage () {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
    getAnswer () {
      // 使用axios 在index.html需引入
      this.answer = 'Thinking...'
      // eslint-disable-next-line no-undef
      axios
        .get('https://yesno.wtf/api')
        .then(response => {
          this.answer = response.data.answer
        })
        .catch(error => {
          this.answer = 'Error! Could not reach the API. ' + error
        })
    }
    // firstName(val) {
    //     this.fullName = val + ' ' + this.lastName
    // },
    // lastName(val) {
    //     this.fullName = this.firstName + ' ' + val
    // }
  }
}
</script>
