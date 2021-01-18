<template>
  <!-- <HelloWorld msg="Vue3 Demo"/> -->
  <div>
      <div class="nav-bar flexCenter">Components Basics</div>
      <Basic />
      <Blog />
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
      <FormInput />
  </div>
  <div>
      <div class="nav-bar flexCenter">Rendering Demo</div>
      <RenderingDemo />
      <ConditionalRendering />
      <FilterRendering />
      <ListRendering />
  </div>
  <div>
      <div class="nav-bar flexCenter">Events Handling</div>
      <ListeningEvents />
  </div>
  <div>
      <div class="nav-bar flexCenter">Form Demo</div>
      <FormDemo />
  </div>
  <div>
      <div class="nav-bar flexCenter">Cart Demo</div>
      <div class="cart">Cart({{ cart.length }})</div>
      <ProductDisplay :premium="premium"  @add-to-cart="updateCart" />
  </div>
  <div>
      <div class="nav-bar flexCenter">Components In-Depth</div>
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
import FormInput from './components/Bindings/FormInput'
import FormDemo from './components/Bindings/FormDemo'
import Basic from './components/CompDemo/Basic'
import Blog from './components/CompDemo/Blog'
import ConditionalRendering from './components/Rendering/ConditionalRendering'
import ListRendering from './components/Rendering/ListRendering'
import FilterRendering from './components/Rendering/FilterRendering'
import RenderingDemo from './components/Rendering/RenderingDemo'
import ListeningEvents from './components/Events/ListeningEvents'

export default {
  name: 'Home',
  components: {
    ProductDisplay,
    Interpolations,
    Directives,
    DataProp,
    ComputedProp,
    HtmlClasses,
    InlineStyles,
    FormInput,
    FormDemo,
    Basic,
    Blog,
    ConditionalRendering,
    ListRendering,
    FilterRendering,
    RenderingDemo,
    ListeningEvents
  },
  setup () {
    return {
    }
  },
  data () {
    return {
      cart: [],
      premium: true,
      count: 1
    }
  },
  methods: {
    updateCart (id) {
      this.cart.push(id)
    }
  }
}
</script>
