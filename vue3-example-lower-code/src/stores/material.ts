/**
 * 整个组件市场里面所有组件状态的仓库
 */

import { defineStore } from "pinia";
import { defaultStatusMap } from "@/configs/default-status/default-status-map";

import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setSize,
  setWeight,
  setItalic,
  setColor,
} from "./actions";

export const useMaterial = defineStore("useMaterial", {
  state: () => ({
    // 当前选中的组件
    currentMaterial: "single-select",
    // 记录所有的业务组件
    coms: {
      "single-select": defaultStatusMap["single-select"](),
      // "multi-select": {},
    },
  }),

  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setSize,
    setWeight,
    setItalic,
    setColor,
  },
});
