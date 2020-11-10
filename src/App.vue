<template>
  <!-- <HelloWorld msg="Vue3 Demo"/> -->
  <div>
      <div class="nav-bar flexCenter">LifeCycle</div>
      <LifeCycle />
  </div>
  <div>
      <div class="nav-bar flexCenter">Template-Syntax</div>
      <Interpolations />
      <Directives />
  </div>
  <div>
      <div class="nav-bar flexCenter">Data / Methods / Computed / Watchers</div>      
      <DataProp />  
      <ComputedProp />
  </div>
  <div>
      <div class="nav-bar flexCenter">Bindings</div>      
      <HtmlClasses />  
      <InlineStyles />
  </div>
  <div>
      <div class="nav-bar flexCenter">Rendering</div>      
      <ConditionalRendering />  
      <ListRendering />
      <FilterRendering />
      <RenderingDemo />
  </div>
  <div>
      <div class="nav-bar flexCenter">Cart Demo</div>
      <div class="cart">Cart({{ cart.length }})</div>
      <ProductDisplay :premium="premium"  @add-to-cart="updateCart" />
  </div>
</template>

<script>
// import HelloWorld from './components/Cart/HelloWorld.vue'
import ProductDisplay from './components/Cart/ProductDisplay'
import Interpolations from './components/Syntax/Interpolations'
import Directives from './components/Syntax/Directives'
import DataProp from './components/DataMethods/DataProp'
import ComputedProp from './components/DataMethods/ComputedProp'
import HtmlClasses from './components/Bindings/HtmlClasses'
import InlineStyles from './components/Bindings/InlineStyles'
import ConditionalRendering from './components/Rendering/ConditionalRendering'
import ListRendering from './components/Rendering/ListRendering'
import FilterRendering from './components/Rendering/FilterRendering'
import RenderingDemo from './components/Rendering/RenderingDemo'
import LifeCycle from './LifeCycle'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    ProductDisplay,
    LifeCycle,
    Interpolations,
    Directives,
    DataProp,
    ComputedProp,
    HtmlClasses,
    InlineStyles,
    ConditionalRendering,
    ListRendering,
    FilterRendering,
    RenderingDemo,
  },
  setup() {
    return {
    };
  },
  data() {
    return {
        cart: [],
        premium: true,
        count: 1
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
  @import "./assets/scss/vars.scss";
  @import "./assets/scss/main.scss";
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
