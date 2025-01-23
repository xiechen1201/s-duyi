/**
 * 整个组件市场里面所有组件状态的仓库
 */

import { defineStore } from "pinia";
import { updateInitStatusBeforeAdd } from "@/utils";
import { defaultStatusMap } from "@/configs/default-status/default-status-map";
import {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setCurrentStatus,
  setWeight,
  setItalic,
  setColor,
  setPicLinkByIndex
} from "./actions";

import type { Status } from "@/types";
import type { ComKey } from "@/types-new";

// 哪些组件需要进行初始化
const keyToInit = ["personal-info-gender", "personal-info-education"];
const initializedStatus: { [key: string]: Status } = {};

keyToInit.forEach((key) => {
  const comkey = key as ComKey;
  const defaultStatus = defaultStatusMap[comkey]();
  updateInitStatusBeforeAdd(defaultStatus, comkey);
  initializedStatus[comkey] = defaultStatus;
});

export const useMaterial = defineStore("useMaterial", {
  state: () => ({
    // 当前选中的组件
    currentMaterial: "single-select",
    // 记录所有的业务组件
    coms: {
      "single-select": defaultStatusMap["single-select"](),
      "single-pic-select": defaultStatusMap["single-pic-select"](),
      "text-note": defaultStatusMap["text-note"](),
      "personal-info-gender": initializedStatus["personal-info-gender"],
      "personal-info-education": initializedStatus["personal-info-education"]
    }
  }),

  actions: {
    setCurrentMaterial(comName: string) {
      this.currentMaterial = comName;
    },
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setCurrentStatus,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex
  }
});
