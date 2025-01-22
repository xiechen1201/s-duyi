import { isStringArray, isPicTitleDescStatusArray } from "@/types";
import type { TextProps, OptionsProps } from "@/types";
import type { ComTypeStatus } from "@/types-new";

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

export {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getPicTitleDesStatus,
  getStringStatusByCurrentStatus,
  changeEditorShowStatus,
};
