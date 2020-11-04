<template>
  <!-- <HelloWorld msg="Vue3 Demo"/> -->
  <div class="hello">
      <div class="nav-bar"></div>
      <div class="cart">Cart({{ cart.length }})</div>
      <ProductDisplay :premium="premium"  @add-to-cart="updateCart" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProductDisplay from './components/ProductDisplay.vue'
// import ReviewForm from '../components/ReviewForm.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ProductDisplay,    
    // ReviewForm
  },
  data() {
    return {
        cart: [],
        premium: true
    }
  },
  methods: {
    updateCart(id) {
    this.cart.push(id)
    }
  }
}
</script>

<style lang="scss">
  @import "assets/scss/vars.scss";
  a {
    color: $defColor;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .logo{
    width: 50px;
    height: 50px;
    padding: 0 1em;
  }
</style>
