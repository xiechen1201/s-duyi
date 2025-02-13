/**
 * @fileoverview 存储画布的状态
 */

// 编辑器
import TextTypeEditor from "@/components/SurveyComs/EditItems/TextTypeEditor.vue";
import TitleEditor from "@/components/SurveyComs/EditItems/TitleEditor.vue";
import DescEditor from "@/components/SurveyComs/EditItems/DescEditor.vue";
import PositionEditor from "@/components/SurveyComs/EditItems/PositionEditor.vue";
import SizeEditor from "@/components/SurveyComs/EditItems/SizeEditor.vue";
import WeightEditor from "@/components/SurveyComs/EditItems/WeightEditor.vue";
import ItalicEditor from "@/components/SurveyComs/EditItems/ItalicEditor.vue";
import ColorEditor from "@/components/SurveyComs/EditItems/ColorEditor.vue";
import textNoteDefaultStatus from "@/configs/default-status/text-note";

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
import { type Status, type SurveyDBData, isSurveyComName } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { markRaw } from "vue";
import { type ComBaseStatus } from "@/types-new";
import { saveSurveyData, updateSurveyData, deleteSurveyData } from "@/db/operation";

// 仓库的初始化状态
const initStore = () => [
  Object.assign({}, textNoteDefaultStatus(), {
    status: <ComBaseStatus>{
      type: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["标题", "段落"],
        isShow: true,
        editCom: markRaw(TextTypeEditor),
        name: "text-type-editor"
      },
      title: {
        id: uuidv4(),
        status: "问卷标题",
        isShow: true,
        editCom: markRaw(TitleEditor),
        name: "title-editor"
      },
      desc: {
        id: uuidv4(),
        status: "默认描述内容",
        isShow: false,
        editCom: DescEditor,
        name: "desc-editor"
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: false,
        editCom: markRaw(PositionEditor),
        name: "position-editor"
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["26", "24", "22"],
        isShow: true,
        editCom: markRaw(SizeEditor),
        name: "size-editor"
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: false,
        editCom: markRaw(SizeEditor),
        name: "size-editor"
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        editCom: markRaw(WeightEditor),
        name: "weight-editor"
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: false,
        editCom: markRaw(WeightEditor),
        name: "weight-editor"
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        editCom: markRaw(ItalicEditor),
        name: "italic-editor"
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: false,
        editCom: markRaw(ItalicEditor),
        name: "italic-editor"
      },
      titleColor: {
        id: uuidv4(),
        status: "#000",
        isShow: true,
        editCom: markRaw(ColorEditor),
        name: "color-editor"
      },
      descColor: {
        id: uuidv4(),
        status: "#909399",
        isShow: false,
        editCom: markRaw(ColorEditor),
        name: "color-editor"
      }
    }
  }),
  Object.assign({}, textNoteDefaultStatus(), {
    status: <ComBaseStatus>{
      type: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["标题", "段落"],
        isShow: true,
        editCom: markRaw(TextTypeEditor),
        name: "text-type-editor"
      },
      title: {
        id: uuidv4(),
        status: "默认标题内容",
        isShow: false,
        editCom: markRaw(TitleEditor),
        name: "title-editor"
      },
      desc: {
        id: uuidv4(),
        status:
          "为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！",
        isShow: true,
        editCom: markRaw(DescEditor),
        name: "desc-editor"
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: true,
        editCom: markRaw(PositionEditor),
        name: "position-editor"
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["26", "24", "22"],
        isShow: false,
        editCom: markRaw(SizeEditor),
        name: "size-editor"
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: true,
        editCom: markRaw(SizeEditor),
        name: "size-editor"
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: false,
        editCom: markRaw(WeightEditor),
        name: "weight-editor"
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        editCom: markRaw(WeightEditor),
        name: "weight-editor"
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: false,
        editCom: markRaw(ItalicEditor),
        name: "italic-editor"
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        editCom: markRaw(ItalicEditor),
        name: "italic-editor"
      },
      titleColor: {
        id: uuidv4(),
        status: "#000",
        isShow: false,
        editCom: markRaw(ColorEditor),
        name: "color-editor"
      },
      descColor: {
        id: uuidv4(),
        status: "#909399",
        isShow: true,
        editCom: markRaw(ColorEditor),
        name: "color-editor"
      }
    }
  })
];

export const useEditoeStore = defineStore("editor", {
  state: () => {
    return {
      // 当前选中的组件索引，一开始都没有选中
      currentComponentIndex: -1,
      // 问卷题目的数量
      surveyCount: 0,
      // 问卷中的组件
      coms: initStore() as Status[]
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
    removeCom(index: number) {
      this.coms.splice(index, 1);
      this.currentComponentIndex = -1;
      if (isSurveyComName(this.coms[index].name)) {
        this.surveyCount--;
      }
    },
    resetComs() {
      this.coms = initStore();
      this.currentComponentIndex = -1;
      this.surveyCount = 0;
    },
    saveComs(data: SurveyDBData) {
      return saveSurveyData(data);
    },
    updateComs(id: number, data: SurveyDBData) {
      return updateSurveyData(id, data);
    },
    changeCurrentIndex(index: number) {
      if (index === this.currentComponentIndex) {
        this.currentComponentIndex = -1;
      } else {
        this.currentComponentIndex = index;
      }
    },
    // 根据传入的数据设置组件的状态
    setStore(data: SurveyDBData) {
      this.coms = data.coms;
      this.surveyCount = data.surveyCount;
      this.currentComponentIndex = -1;
    },
    // 删除
    removeComs(id: number) {
      return deleteSurveyData(id);
    }
  }
});
