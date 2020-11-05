<template>
  <div class="flexCenter">  
    <img alt="Vue logo" class="logo" src="../../assets/logo.png"><a href="/"><h1>{{ msg }}</h1></a>
  </div>
  <div class="hello">
      <div class="nav-bar"></div>
      <div class="cart">Cart({{ cart }})</div>
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="onSale">{{ sale }}</p>
            <p v-if="inStock && inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <ul>
              <li v-for="detail in details" :key="detail.id">{{ detail }}</li>
            </ul>
            <div v-for="(variant, index) in variants" :key="variant.id" 
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color }">
            </div>
            <div class="flexCenter"> 
              <button class="button" v-on:click="cart += 1">Add to Cart</button>
              <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
              <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img alt="socks_green" :src="images">
          </div>
          <div class="product-info">
            <h1>{{ brand + ' ' + product }}</h1>
            <div v-for="(variant, index) in variants" :key="variant.id" 
              @mouseover="updateImage(variant.image, index)"
              class="color-circle" :class="[isActive === variant.id ? 'activeClass': '']"
              :style="{ backgroundColor: variant.color }">
              <small>{{ variant.color }}</small>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue',
      inventory: 100,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      images: require('@/assets/images/socks_blue.jpg'),
      variants: [
        { id: 2234, color: 'green', image: require('@/assets/images/socks_green.jpg'), quantity: 50 },
        { id: 2235, color: 'blue', image: require('@/assets/images/socks_blue.jpg'), quantity: 0 },
      ],
      selectedVariant: 0,
      idx: 0,
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateImage(variantImage, index) {
      this.images = variantImage
      this.idx = index
      // window.console.log()
    },
    updateVariant(index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    isActive() {
      return this.variants[this.idx].id
    },
    sale() {
      if (this.inStock) {
        return this.variants[this.selectedVariant].color + " is on sale."
      }else{
        return this.variants[this.selectedVariant].color + " isn't sale."
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  @import "../../assets/scss/styles.css";
</style>
