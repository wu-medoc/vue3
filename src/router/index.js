import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home.vue'
import ChildRouter from '@/components/Nested/ChildRouter.vue'
import NestedContent from '@/components/Nested/NestedContent.vue'
import Plus from '@/components/Element/plus.vue'
import PicList from '@/components/Box/PicList.vue'
import Pic from '@/components/Box/Pic.vue'

const routes = [
  {
    path: '/vue3/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue3/Plus',
    name: 'Plus',
    component: Plus
  },
  {
    path: '/vue3/LifeCycle',
    name: 'LifeCycle',
    component: () => import('@/LifeCycle.vue')
  },
  {
    path: '/vue3/Vuex',
    name: 'VuexDemo',
    component: () => import('@/VuexDemo.vue')
  },
  {
    path: '/vue3/Box',
    name: 'Box',
    component: () => import('@/Box.vue'),
    children: [
      {
        path: 'pic',
        name: 'PicList',
        component: PicList,
        meta: {
          type: 'container'
        }
      },
      {
        path: 'pic/:id',
        name: 'Pic',
        component: Pic,
        meta: {
          type: 'content',
          lightbox: false
        }
      }
    ]
  },
  {
    path: '/vue3/Nested',
    name: 'Nested',
    component: () => import('@/Nested.vue'),
    children: [
      {
        path: 'NestedContent',
        name: 'NestedContent',
        components: {
          a: NestedContent,
          b: ChildRouter,
          c: Plus
        }
      },
      {
        path: 'Child/:uid(\\d+)',
        name: 'ChildRouter',
        component: ChildRouter,
        // props: { default: true }
        props: {
          default: (route) => ({
            uid: route.params.uid,
            test: route.query.test
          })
        },
        beforeEnter: (to, from, next) => {
          next()
        }
      },
      {
        path: '999', redirect: '/vue3/Nested'
      },
      {
        path: '888', component: NestedContent, alias: '/vue3/Nested/alias'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  // 當每個路由在切換時準備兩件事，假設從 container容器頁(PicList)跑到內容頁(Pic)，你準備要開lightbox
  // 第一次從其他地方進來網站

  // 確保client side render 頁面導頁面，不是第一次從其他地方進來網站才要判斷 lightbox
  if (from.matched.length > 1) {
    const fromMatch = from.matched[1]
    const toMatch = to.matched[1]
    let defaultComponent = null // lightbox下當襯底的人

    // 處理 from 來源
    if (fromMatch.meta.type === 'container' && to.meta.type === 'content') {
      // 拿來源的東西當襯底，先記著，等等要打開
      defaultComponent = fromMatch.components.default
      // 來源已經開 lightbox
    } else if (fromMatch.components.lightbox) {
      // 拿來源的東西當襯底，先記著，等等要打開
      defaultComponent = fromMatch.components.default
      // 新的來之前先關掉，先復原
      fromMatch.components.default = fromMatch.components.lightbox
      fromMatch.components.lightbox = null
      to.meta.lightbox = false
    }

    // 處理 to: 站內路由互換，要判斷你是不是去 content還有lightbox有無墊底，是，那就切換位置，打開 lightbox
    if (defaultComponent && to.meta.type === 'content') {
      toMatch.components.lightbox = toMatch.components.default
      toMatch.components.default = defaultComponent
      to.meta.lightbox = true

      // if (this.$route.meta.lightbox) {
      //   this.$store.commit("LIGHTBOX")
      // }
    }
  }
  next()
})

router.afterEach((to, from) => {
  console.log(to, from)
  // 不用next(), hook end
})

export default router
