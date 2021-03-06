<template>
    <el-menu
      :default-active='$route.name'
      class='el-menu-demo'
      mode='horizontal'
    >
      <el-menu-item
        v-for='(item, index) in navbars'
        :key='index'
        :index='item.names'
      >
        <router-link :to='{path: item.router }'>{{ item.names }}</router-link>
      </el-menu-item>
      <!-- <el-menu-item index='2'
      ><router-link to='/about'>About</router-link></el-menu-item> -->
    </el-menu>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: { },
  setup () {
    return {
    }
  },
  data () {
    return {
      navbars: [
        { names: 'Home', router: '/vue3/' },
        { names: 'LifeCycle', router: '/vue3/LifeCycle' },
        { names: 'ElementPlus', router: '/vue3/Plus' },
        { names: 'Nested', router: '/vue3/Nested/NestedContent' }
      ],
      cart: [],
      premium: true,
      count: 1
    }
  }
}
</script>

<style lang='scss'>
  @import './assets/scss/vars.scss';
  @import './assets/scss/main.scss';
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
