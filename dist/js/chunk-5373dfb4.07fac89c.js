(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5373dfb4"],{2958:function(e,t,a){"use strict";a("2f72")},"2f72":function(e,t,a){},"4f9a":function(e,t,a){"use strict";a.r(t);var r=a("7a23"),c=Object(r["withScopeId"])("data-v-35ae1fa7");Object(r["pushScopeId"])("data-v-35ae1fa7");var o=Object(r["createTextVNode"])('router-link to="/vue3/Nested/NestedContent"'),d=Object(r["createVNode"])("br",null,null,-1),n=Object(r["createTextVNode"])('router-link to="/vue3/Nested/Child/123"'),l=Object(r["createVNode"])("br",null,null,-1),u=Object(r["createTextVNode"])("router-link :to=\"{name:'ChildRouter',params:{uid:123}}\""),b=Object(r["createVNode"])("br",null,null,-1),i=Object(r["createVNode"])("br",null,null,-1),f=Object(r["createVNode"])("br",null,null,-1),N=Object(r["createVNode"])("br",null,null,-1),s=Object(r["createVNode"])("br",null,null,-1),v=Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])("router-link to = router.push(...)"),Object(r["createVNode"])("br"),Object(r["createTextVNode"])(" $router.go(-1)會回到自己網站以外的可能")],-1),j=Object(r["createVNode"])("hr",null,null,-1),O=Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])("name view概念是同頁多router-view"),Object(r["createVNode"])("br"),Object(r["createVNode"])("small",null,[Object(r["createTextVNode"])("name view平行關係，nested router父子關係"),Object(r["createVNode"])("br"),Object(r["createTextVNode"])(" 當component曾被初始後，再切換時，"),Object(r["createVNode"])("br"),Object(r["createTextVNode"])("不會更新redenr效能較佳"),Object(r["createVNode"])("br"),Object(r["createTextVNode"])(" 缺點是在router要定義較多的東西")])],-1),V=Object(r["createVNode"])("hr",null,null,-1),p=Object(r["createVNode"])("p",null,"redirect為replace概念，不會回到上一個path",-1),h=Object(r["createTextVNode"])("/vue3/Nested/999 redirect to /vue3/Nested"),m=Object(r["createVNode"])("br",null,null,-1),k=Object(r["createVNode"])("p",null,[Object(r["createTextVNode"])("alias楖念為a->b網址但看到的還是b，"),Object(r["createVNode"])("br"),Object(r["createTextVNode"])("也就是多址但同頁，例如短網址")],-1),x=Object(r["createTextVNode"])("/vue3/Nested/888 alise to /vue3/Nested/alise"),C=Object(r["createVNode"])("br",null,null,-1),T=Object(r["createVNode"])("hr",null,null,-1),w=Object(r["createVNode"])("p",null,"props被動取得參數",-1),g=Object(r["createTextVNode"])('router-link to="/vue3/Nested/Child/123?test=aaa"'),$=Object(r["createStaticVNode"])("<br data-v-35ae1fa7><p data-v-35ae1fa7>history mode<br data-v-35ae1fa7>mode: &#39;histroy&#39; 會移除hash#，會導致找不到檔案<br data-v-35ae1fa7><small data-v-35ae1fa7>cli會將所有serve路徑位址頁面導到index裡，<br data-v-35ae1fa7>要請後端把所有頁面有關index的交給前端rewrites處理</small></p><hr data-v-35ae1fa7><p data-v-35ae1fa7>navigation guards<br data-v-35ae1fa7><small data-v-35ae1fa7><b data-v-35ae1fa7>router.beforeEach((to, from, next) =&gt; {...}</b><br data-v-35ae1fa7> matched find component調派default位置<br data-v-35ae1fa7> 透過from可以知道是否從外網進來<br data-v-35ae1fa7> 開了路由至少要打next()才會往下走<br data-v-35ae1fa7> next(false)停下現在狀態不會往下走<br data-v-35ae1fa7> next({path:&#39;/&#39;}) 終斷導址<br data-v-35ae1fa7> next(error)) 呼叫 router.onError()<br data-v-35ae1fa7> 適用權限判斷，全站beforeEach，單頁beforeEnter<br data-v-35ae1fa7> beforeEnter不能用this, beforeRouteUpdate可以用<br data-v-35ae1fa7></small></p><p data-v-35ae1fa7>route meta fields<br data-v-35ae1fa7><small data-v-35ae1fa7> 在路由規格下，下些區隔定義 meta:{key:value}，搭配beforeEach使用 </small></p><p data-v-35ae1fa7>transition<br data-v-35ae1fa7><small data-v-35ae1fa7> 切換如果未生效，可以router-view加key做為輔助，或用watch來偵測 </small></p><p data-v-35ae1fa7>data fetching<br data-v-35ae1fa7><small data-v-35ae1fa7> fetching after navigation | fetching before navigation針對使用者體驗，資料在何時何地使用 </small></p><p data-v-35ae1fa7>scrollBehavior<br data-v-35ae1fa7><small data-v-35ae1fa7> 切換頁面時可以定義捲軸所在位置 </small></p><br data-v-35ae1fa7>",9);Object(r["popScopeId"])();var _=c((function(e,t,a,_,E,y){var R=Object(r["resolveComponent"])("router-link"),I=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("button",null,[Object(r["createVNode"])(R,{to:"/vue3/Nested/NestedContent"},{default:c((function(){return[o]})),_:1})]),d,Object(r["createVNode"])("button",null,[Object(r["createVNode"])(R,{to:"/vue3/Nested/Child/123"},{default:c((function(){return[n]})),_:1})]),l,Object(r["createVNode"])("button",null,[Object(r["createVNode"])(R,{to:{name:"ChildRouter",params:{uid:123}}},{default:c((function(){return[u]})),_:1})]),b,Object(r["createVNode"])("button",{onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"ChildRouter",params:{uid:123}})})},"@click=\"$router.push({name:'ChildRouter',params:{uid:123}})\""),i,Object(r["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return y.clickHandler.apply(y,arguments)})},"this.$router.push('/vue3/Nested/Child/456')"),f,Object(r["createVNode"])("button",{onClick:t[3]||(t[3]=function(t){return e.$router.go(-1)})},'@click="$router.go(-1)"'),N,Object(r["createVNode"])("button",{onClick:t[4]||(t[4]=function(t){return e.$router.go(1)})},'@click="$router.go(1)"'),s,v,Object(r["createVNode"])(I),j,O,Object(r["createVNode"])(I,{name:"a"}),Object(r["createVNode"])(I,{name:"b"}),Object(r["createVNode"])(I,{name:"c"}),V,p,Object(r["createVNode"])("button",null,[Object(r["createVNode"])(R,{to:"/vue3/Nested/999"},{default:c((function(){return[h]})),_:1})]),m,k,Object(r["createVNode"])("button",null,[Object(r["createVNode"])(R,{to:"/vue3/Nested/888"},{default:c((function(){return[x]})),_:1})]),C,T,w,Object(r["createVNode"])(R,{to:"/vue3/Nested/Child/123?test=aaa"},{default:c((function(){return[g]})),_:1}),$])})),E={name:"Nested",methods:{clickHandler:function(){this.$router.push("/vue3/Nested/Child/456")}}};a("2958");E.render=_,E.__scopeId="data-v-35ae1fa7";t["default"]=E}}]);
//# sourceMappingURL=chunk-5373dfb4.07fac89c.js.map