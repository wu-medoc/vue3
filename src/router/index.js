import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home.vue'
import ChildRouter from '@/components/Nested/ChildRouter.vue'
import NestedContent from '@/components/Nested/NestedContent.vue'
import Plus from '@/components/Element/plus.vue'

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
  console.log(to, from, next)
  // matched find component調派default位置
  // 透過from可以知道是否從外網進來
  // 開了路由至少要打next()才會往下走
  // next(false)停下現在狀態不會往下走
  // next({path:'/'}) 終斷導址
  // next(error)) 呼叫 router.onError()
  // 適用權限判斷，全站beforeEach，單頁beforeEnter
  next()
})

router.afterEach((to, from) => {
  console.log(to, from)
  // 不用next(), hook end
})

export default router
