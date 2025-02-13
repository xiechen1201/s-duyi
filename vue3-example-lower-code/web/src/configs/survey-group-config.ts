/**
 * @fileoverview 题型面板对应的配置文件
 */

import { CircleCheck, ChatLineSquare, User } from "@element-plus/icons-vue";

export const SurveyComsList = [
  {
    title: "选择题",
    icon: CircleCheck,
    list: [
      { materialName: "single-select", comName: "单选题" },
      { materialName: "single-pic-select", comName: "图片单选" }
    ]
  },
  {
    title: "备注说明",
    icon: ChatLineSquare,
    list: [{ materialName: "text-note", comName: "备注说明" }]
  },
  {
    title: "个人信息",
    icon: User,
    list: [
      { materialName: "personal-info-gender", comName: "性别" },
      { materialName: "personal-info-education", comName: "学历" }
    ]
  }
];
