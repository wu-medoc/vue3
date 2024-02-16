<template>
  <h2>route params is {{ $route.params.uid }}</h2>
  <h2>route query is {{ $route.query.test}}</h2>
</template>

<script>
export default {
  name: 'ChildRouter',
  props: ['uid', 'test'],
  beforeRouteEnter (to, from, next) {
    next()
  },
  beforeRouteUpdate (to, from, next) {
    next()
  },
  beforeRouteLeave (to, from, next) {
    next()
  }
}
</script>
