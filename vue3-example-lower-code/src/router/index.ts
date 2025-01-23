import { createRouter, createWebHistory } from "vue-router";
import { useMaterial } from "@/stores/material";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue")
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
        redirect: "/materials/select-group/single-select",
        meta: { title: "选择组" },
        component: () => import("@/views/MaterialsView/SelectGroupView.vue"),
        children: [
          {
            path: "single-select",
            name: "single-select",
            meta: { title: "单选题" },
            component: () => import("@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue")
          },
          {
            path: "multi-select",
            name: "multi-select",
            meta: { title: "多选题" },
            component: () => import("@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue")
          },
          {
            path: "option-select",
            name: "option-select",
            meta: { title: "选项选择" },
            component: () => import("@/components/SurveyComs/Materials/SelectComs/OptionSelect.vue")
          },
          {
            path: "single-pic-select",
            name: "single-pic-select",
            meta: { title: "单图选择" },
            component: () =>
              import("@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue")
          },
          {
            path: "multi-pic-select",
            name: "multi-pic-select",
            meta: { title: "多图选择" },
            component: () =>
              import("@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue")
          }
        ]
      },
      {
        path: "input-group",
        name: "input-group",
        meta: { title: "输入组" },
        component: () => import("@/views/MaterialsView/InputGroupView.vue")
      },
      {
        path: "advanced-group",
        name: "advanced-group",
        meta: { title: "高级组" },
        component: () => import("@/views/MaterialsView/AdvancedGroupView.vue")
      },
      {
        path: "note-group",
        name: "note-group",
        redirect: "/materials/note-group/text-note",
        meta: { title: "笔记组" },
        component: () => import("@/views/MaterialsView/NoteGroupView.vue"),
        children: [
          {
            path: "text-note",
            name: "text-note",
            meta: { title: "备注说明" },
            component: () => import("@/components/SurveyComs/Materials/NoteComs/TextNote.vue")
          }
        ]
      },
      {
        path: "personal-info-group",
        name: "personal-info-group",
        redirect: "/materials/personal-info-group/personal-info-gender",
        meta: { title: "个人信息组" },
        component: () => import("@/views/MaterialsView/PersonalInfoGroupView.vue"),
        children: [
          {
            path: "personal-info-gender",
            name: "personal-info-gender",
            meta: { title: "性别" },
            component: () => import("@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue")
          },
          {
            path: "personal-info-education",
            name: "personal-info-education",
            meta: { title: "学历" },
            component: () => import("@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue")
          }
        ]
      },
      {
        path: "contact-group",
        name: "contact-group",
        meta: { title: "联系组" },
        component: () => import("@/views/MaterialsView/ContactGroupView.vue")
      }
    ]
  },
  {
    path: "/editor",
    name: "editor",
    redirect: "/editor/survey-type",
    meta: { title: "编辑器" },
    component: () => import("@/views/EditorView/index.vue"),
    children: [
      {
        path: "survey-type",
        name: "survey-type",
        meta: { title: "" },
        component: () => import("@/views/EditorView/LeftSide/SurveyType.vue")
      },
      {
        path: "outline",
        name: "outline",
        meta: { title: "" },
        component: () => import("@/views/EditorView/LeftSide/Outline.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.beforeEach((to) => {
  // 尽针对组件市场进行跳转
  if (to.path.startsWith("/materials") && to.path.split("/").length === 4) {
    const store = useMaterial();
    store.setCurrentMaterial(to.name as string);
  }
});

export default router;
