import { createWebHistory, createRouter } from "vue-router";
import Plus from "../components/Element/plus.vue";
import Home from "../Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Plus",
    name: "Plus",
    component: Plus,
  },
  {
    path: "/LifeCycle",
    name: "LifeCycle",
    component: () => import('../LifeCycle.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
