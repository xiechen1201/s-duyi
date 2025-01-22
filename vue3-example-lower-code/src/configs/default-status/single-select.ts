/**
 * @file 单选题的 JSON-Schema 配置
 */

/*
  业务组件 ==> JSON File ==> 编辑组件
*/

// 业务组件
import SingleSelect from "@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue";
// 编辑组件
import ColorEditor from "@/components/SurveyComs/EditItems/ColorEditor.vue";
import DescEditor from "@/components/SurveyComs/EditItems/DescEditor.vue";
import ItalicEditor from "@/components/SurveyComs/EditItems/ItalicEditor.vue";
import OptionsEditor from "@/components/SurveyComs/EditItems/OptionsEditor.vue";
import PositionEditor from "@/components/SurveyComs/EditItems/PositionEditor.vue";
import SizeEditor from "@/components/SurveyComs/EditItems/SizeEditor.vue";
import TitleEditor from "@/components/SurveyComs/EditItems/TitleEditor.vue";
import WeightEditor from "@/components/SurveyComs/EditItems/WeightEditor.vue";

import { markRaw } from "vue";
import { v4 as uuidv4 } from "uuid";

export default function () {
  return {
    type: markRaw(SingleSelect),
    name: "single-select",
    id: uuidv4(),
    // 组件的状态，每一个能够修改状态都应该对应一个编辑组件
    status: {
      title: {
        id: uuidv4(),
        status: "单选题默认标题",
        isShow: true,
        name: "title-editor",
        editCom: markRaw(TitleEditor)
      },
      desc: {
        id: uuidv4(),
        status: "单选题默认描述",
        isShow: true,
        name: "desc-editor",
        editCom: markRaw(DescEditor)
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["左对齐", "居中对齐"],
        isShow: true,
        name: "position-editor",
        editCom: markRaw(PositionEditor)
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["22", "20", "18"],
        isShow: true,
        name: "size-editor",
        editCom: markRaw(SizeEditor)
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ["16", "14", "12"],
        isShow: true,
        name: "size-editor",
        editCom: markRaw(SizeEditor)
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editCom: markRaw(WeightEditor)
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["加粗", "正常"],
        isShow: true,
        name: "weight-editor",
        editCom: markRaw(WeightEditor)
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editCom: markRaw(ItalicEditor)
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ["斜体", "正常"],
        isShow: true,
        name: "italic-editor",
        editCom: markRaw(ItalicEditor)
      },
      titleColor: {
        id: uuidv4(),
        status: "#000",
        isShow: true,
        name: "color-editor",
        editCom: markRaw(ColorEditor)
      },
      descColor: {
        id: uuidv4(),
        status: "#909399",
        isShow: true,
        name: "color-editor",
        editCom: markRaw(ColorEditor)
      },
      options: {
        id: uuidv4(),
        status: ["选项1", "选项2", "选项3"],
        currentStatus: 0,
        isShow: true,
        name: "options-editor",
        editCom: markRaw(OptionsEditor)
      }
    }
  };
}
