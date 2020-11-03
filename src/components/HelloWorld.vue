<template>
  <div class="heardTit">  
    <img alt="Vue logo" class="logo" src="../assets/logo.png"><a href="/"><h1>{{ msg }}</h1></a>
  </div>
  <div class="hello">
      <div class="nav-bar"></div>
      
      <div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img alt="socks_green" :src="require('@/assets/images/socks_green.jpg')">
            <img v-bind:src="image">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <!-- solution -->
            <p v-if="onSale">On Sale!</p>
            <!-- solution -->
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
      product: 'Socks',
      image: require('@/assets/images/socks_blue.jpg'),
      inventory: 100,
      // solution
      onSale: true
      // solution
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  @import "../assets/scss/styles.css";
</style>
