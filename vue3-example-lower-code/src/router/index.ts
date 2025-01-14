import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/materials",
    name: "materials",
    component: () => import("@/views/MaterialsView/index.vue"),
  },
  {
    path: "/editor",
    name: "editor",
    component: () => import("@/views/EditorView/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
