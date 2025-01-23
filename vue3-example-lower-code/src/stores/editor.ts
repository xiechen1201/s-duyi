/**
 * @fileoverview 存储画布的状态
 */

import { defineStore } from "pinia";
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
import { type Status, isSurveyComName } from "@/types";

export const useEditoeStore = defineStore("editor", {
  state: () => {
    return {
      // 当前选中的组件索引，一开始都没有选中
      currentComponentIndex: -1,
      // 问卷题目的数量
      surveyCount: 0,
      // 问卷中的组件
      coms: [] as Status[]
    };
  },

  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPosition,
    setCurrentStatus,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex,
    addCom(newCom: Status) {
      this.coms.push(newCom);
      this.currentComponentIndex = -1;
      if (isSurveyComName(newCom.name)) {
        this.surveyCount++;
      }
    },
    changeCurrentIndex(index: number) {
      if (index === this.currentComponentIndex) {
        this.currentComponentIndex = -1;
      } else {
        this.currentComponentIndex = index;
      }
    }
  }
});
