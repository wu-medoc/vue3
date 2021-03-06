<template>
  <button><router-link to="/vue3/Nested/NestedContent">router-link to="/vue3/Nested/NestedContent"</router-link></button><br>
  <button><router-link to="/vue3/Nested/Child/123">router-link to="/vue3/Nested/Child/123"</router-link></button><br>
  <button @click="clickHandler">this.$router.push('/vue3/Nested/Child/456')</button><br>
  <button @click="$router.go(-1)">@click="$router.go(-1)"</button><br>
  <button @click="$router.go(1)">@click="$router.go(1)"</button><br>
  <p>router-link to = router.push(...)<br>
  $router.go(-1)會回到自己網站以外的可能</p>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Nested',
  methods: {
    clickHandler () {
      this.$router.push('/vue3/Nested/Child/456')
    }
  }
}
</script>
