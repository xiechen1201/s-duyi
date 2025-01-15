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
    redirect: "/materials/select-group",
    meta: { title: "组件市场" },
    component: () => import("@/views/MaterialsView/index.vue"),
    children: [
      {
        path: "select-group",
        name: "select-group",
        meta: { title: "选择组" },
        component: () => import("@/views/MaterialsView/SelectGroup.vue"),
      },
      {
        path: "input-group",
        name: "input-group",
        meta: { title: "输入组" },
        component: () => import("@/views/MaterialsView/InputGroup.vue"),
      },
      {
        path: "advanced-group",
        name: "advanced-group",
        meta: { title: "高级组" },
        component: () => import("@/views/MaterialsView/AdvancedGroup.vue"),
      },
      {
        path: "note-group",
        name: "note-group",
        meta: { title: "笔记组" },
        component: () => import("@/views/MaterialsView/NoteGroup.vue"),
      },
      {
        path: "personal-info-group",
        name: "personal-info-group",
        meta: { title: "个人信息组" },
        component: () => import("@/views/MaterialsView/PersonalInfoGroup.vue"),
      },
      {
        path: "contact-group",
        name: "contact-group",
        meta: { title: "联系组" },
        component: () => import("@/views/MaterialsView/ContactGroup.vue"),
      },
    ],
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
