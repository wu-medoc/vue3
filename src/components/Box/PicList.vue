<template>
  <div class="PicList">
    <h1>This is an PicList page</h1>
    <router-link to="/vue3/Box/pic/1" class="pic">1</router-link>
    <router-link to="/vue3/Box/pic/2" class="pic">2</router-link>
  </div>
</template>

<script>
export default {
  name: 'PicList'
}
</script>

<style lang="scss" scoped>
.pic {
  display: inline-block;
  width: 150px;
  height: 100px;
  border: 2px solid;
  margin: 16px;
}
</style>
