import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home.vue'
import ChildRouter from '@/components/Nested/ChildRouter.vue'
import NestedContent from '@/components/Nested/NestedContent.vue'

const routes = [
  {
    path: '/vue3/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue3/Plus',
    name: 'Plus',
    component: () => import('@/components/Element/plus.vue')
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
        component: NestedContent
      },
      {
        path: 'Child/:id(\\d+)',
        name: 'ChildRouter',
        component: ChildRouter
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
