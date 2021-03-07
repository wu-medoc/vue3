<template>
  <button><router-link to="/vue3/Nested/NestedContent">router-link to="/vue3/Nested/NestedContent"</router-link></button><br>
  <button><router-link to="/vue3/Nested/Child/123">router-link to="/vue3/Nested/Child/123"</router-link></button><br>
  <button><router-link :to="{name:'ChildRouter',params:{uid:123}}">router-link :to="{name:'ChildRouter',params:{uid:123}}"</router-link></button><br>
  <button @click="$router.push({name:'ChildRouter',params:{uid:123}})">@click="$router.push({name:'ChildRouter',params:{uid:123}})"</button><br>
  <button @click="clickHandler">this.$router.push('/vue3/Nested/Child/456')</button><br>
  <button @click="$router.go(-1)">@click="$router.go(-1)"</button><br>
  <button @click="$router.go(1)">@click="$router.go(1)"</button><br>
  <p>router-link to = router.push(...)<br>
  $router.go(-1)會回到自己網站以外的可能</p>
  <router-view></router-view>
  <hr>
  <p>name view概念是同頁多router-view<br>
  <small>name view平行關係，nested router父子關係<br>
  當component曾被初始後，再切換時，<br>不會更新redenr效能較佳<br>
  缺點是在router要定義較多的東西</small>
  </p>
  <router-view name="a"></router-view>
  <router-view name="b"></router-view>
  <router-view name="c"></router-view>
  <hr>
  <p>redirect為replace概念，不會回到上一個path</p>
  <button><router-link to="/vue3/Nested/999">/vue3/Nested/999 redirect to /vue3/Nested</router-link></button><br>
  <p>alias楖念為a->b網址但看到的還是b，<br>也就是多址但同頁，例如短網址</p>
  <button><router-link to="/vue3/Nested/888">/vue3/Nested/888 alise to /vue3/Nested/alise</router-link></button><br>
  <hr>
  <p>props被動取得參數</p>
  <router-link to="/vue3/Nested/Child/123?test=aaa">router-link to="/vue3/Nested/Child/123?test=aaa"</router-link><br>
  <p>history mode<br>mode: 'histroy' 會移除hash#，會導致找不到檔案<br>
  <small>cli會將所有serve路徑位址頁面導到index裡，<br>要請後端把所有頁面有關index的交給前端rewrites處理</small></p>
  <hr>
  <p>navigation guards<br>
  <small>
  <b>router.beforeEach((to, from, next) => {...}</b><br>
  matched find component調派default位置<br>
  透過from可以知道是否從外網進來<br>
  開了路由至少要打next()才會往下走<br>
  next(false)停下現在狀態不會往下走<br>
  next({path:'/'}) 終斷導址<br>
  next(error)) 呼叫 router.onError()<br>
  適用權限判斷，全站beforeEach，單頁beforeEnter<br>
  beforeEnter不能用this, beforeRouteUpdate可以用<br>
  </small></p>
  <p>route meta fields<br>
  <small>
    在路由規格下，下些區隔定義 meta:{key:value}，搭配beforeEach使用
  </small></p>
  <p>transition<br>
  <small>
    切換如果未生效，可以router-view加key做為輔助，或用watch來偵測
  </small></p>
  <p>data fetching<br>
  <small>
    fetching after navigation | fetching before navigation針對使用者體驗，資料在何時何地使用
  </small></p>
  <p>scrollBehavior<br>
  <small>
    切換頁面時可以定義捲軸所在位置
  </small></p>
  <br>
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

<style scoped>
a:visited{
  background: #eee;
}
</style>
