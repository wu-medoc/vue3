<template>
    <div id="nav">
      <router-link to="/vue3/Box/pic">PicList</router-link> |
      <router-link to="/vue3/Box/pic/1">Pic 1</router-link> |
      <router-link to="/vue3/Box/pic/2">Pic 2</router-link>
    </div>
    <!-- name="default" -->
    <router-view />
    <div class="lightbox" v-show="$route.meta.lightbox">
      <div class="content">
        <router-view name="lightbox"></router-view>
      </div>
      <button @click="closeHandler">X</button>
    </div>
</template>

<script>
export default {
  methods: {
    closeHandler () {
      const count = this.$store.state.lightbox * -1
      this.$store.commit('RESET_LIGHTBOX')
      this.$router.go(count)
    }
  }
}
</script>

<style lang="scss">

.lightbox {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;

  > .content {
    width: 800px;
    height: 600px;
    background-color: white;
  }

  > button {
    width: 50px;
    height: 50px;
    font-size: 30px;
    line-height: 50px;
  }
}

</style>
