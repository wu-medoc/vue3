<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="getSrc(image)">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>

        <ProductDetails :details="details" />
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle cellCenter" :class="[isActive === variant.id ? 'activeClass': '']"
          :style="{ backgroundColor: variant.color }">
          <small>{{ variant.color }}</small>
        </div>

        <button
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          v-on:click="addToCart">
          Add to Cart
        </button>
      </div>
    </div>
    <ReviewList v-if="reviews.length" :reviews="reviews" />
    <ReviewForm @review-submitted="addReview" />
  </div>
</template>

<script>
import ProductDetails from '@/components/Cart/ProductDetails.vue'
import ReviewForm from '@/components/Cart/ReviewForm.vue'
import ReviewList from '@/components/Cart/ReviewList.vue'
export default {
  name: 'ProductDisplay',
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  components: {
    ProductDetails,
    ReviewForm,
    ReviewList
  },
  data () {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: 'socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue', image: 'socks_blue.jpg', quantity: 0 }
      ],
      reviews: []
    }
  },
  methods: {
    addToCart () {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    updateVariant (index) {
      this.selectedVariant = index
    },
    getSrc (name) {
      var images = require.context('../../assets/images/', false, /\.jpg$/)
      return images('./' + name)
    },
    addReview (review) {
      this.reviews.push(review)
    }
  },
  computed: {
    title () {
      return this.brand + ' ' + this.product
    },
    image () {
      return this.variants[this.selectedVariant].image
    },
    inStock () {
      return this.variants[this.selectedVariant].quantity
    },
    isActive () {
      return this.variants[this.selectedVariant].id
    },
    shipping () {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  @import "../../assets/scss/styles.css";
</style>
