import { componentMap } from "@/configs/component-map";
import { isStringArray, isPicTitleDescStatusArray } from "@/types";
import type { TextProps, OptionsProps, Status, SurveyDBData } from "@/types";
import type { ComTypeStatus, ComKey } from "@/types-new";
import type { TableColumnCtx } from "element-plus";

/**
 * @description 获取文本属性状态
 * @param props
 * @returns
 */
function getTextStatus(props: TextProps) {
  return props.status;
}

/**
 * @description 获取字符串数组
 * @param props
 * @returns
 */
function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

/**
 * @description 获取图片标题描述数组
 * @param props
 * @returns
 */
function getPicTitleDesStatus(props: OptionsProps) {
  if (props && isPicTitleDescStatusArray(props.status)) {
    return props.status;
  }
}

/**
 * @description 获取当前状态
 * @param props
 * @returns
 */
function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

/**
 * @description 根据当前状态获取数组中的字符串
 * @param props
 * @returns
 */
function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

/**
 * @description 设置文本类型以及相关的状态取反
 * @param status
 * @param type
 */
function changeEditorShowStatus(status: ComTypeStatus, type: number) {
  if (type !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow;
    status.desc.isShow = !status.desc.isShow;
    status.position.isShow = !status.position.isShow;
    status.titleSize.isShow = !status.titleSize.isShow;
    status.descSize.isShow = !status.descSize.isShow;
    status.titleWeight.isShow = !status.titleWeight.isShow;
    status.descWeight.isShow = !status.descWeight.isShow;
    status.titleItalic.isShow = !status.titleItalic.isShow;
    status.descItalic.isShow = !status.descItalic.isShow;
    status.titleColor.isShow = !status.titleColor.isShow;
    status.descColor.isShow = !status.descColor.isShow;
  }
}

/**
 * @description 新增选项前的初始化操作
 */
function updateInitStatusBeforeAdd(comsStatus: Status, statusKey: ComKey) {
  switch (statusKey) {
    case "personal-info-gender":
      comsStatus.name = statusKey;
      comsStatus.status.title.status = "您的性别是？";
      if ("options" in comsStatus.status) {
        comsStatus.status.options.status = ["男", "女", "保密"];
      }
      break;
    case "personal-info-education":
      comsStatus.name = statusKey;
      comsStatus.status.title.status = "到目前为止您的最高学历是？";
      if ("options" in comsStatus.status) {
        comsStatus.status.options.status = ["小学", "初中", "高中", "大专", "本科", "硕士", "博士"];
      }
      break;
  }
}

/**
 * 时间格式化
 * @param row
 * @param column
 * @param cellValue
 * @returns
 */
export function formatDate(
  row: SurveyDBData,
  column: TableColumnCtx<SurveyDBData>,
  cellValue: number
) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };
  return new Intl.DateTimeFormat("zh-CN", options).format(new Date(cellValue));
}

function restoreComponentsStatus(coms: Status[]) {
  coms.forEach((com) => {
    // 业务组件的还原
    com.type = componentMap[com.name];
    // 编辑组件的还原
    for (const key in com.status) {
      const name = com.status[key].name;
      com.status[key].editCom = componentMap[name];
    }
  });
}

export {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getPicTitleDesStatus,
  getStringStatusByCurrentStatus,
  changeEditorShowStatus,
  updateInitStatusBeforeAdd,
  restoreComponentsStatus
};
