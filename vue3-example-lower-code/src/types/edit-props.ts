import type { VueComType } from "./common";

export type StringStatusArr = string[];
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDesStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export interface BaseProps {
  id: string;
  isShow: boolean;
  name: string;
  editCom: VueComType;
}

export interface TextProps extends BaseProps {
  status: string;
}

export type OptionsStatusArray = StringStatusArr | ValueStatusArr | PicTitleDesStatusArr;

export interface OptionsProps extends BaseProps {
  status: OptionsStatusArray;
  currentStatus: number;
}

// 公共的设置项，每个组件都有的设置项
// 业务组件下编辑组件的类型
export interface BaseStatus {
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  titleSize: OptionsProps;
  descSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

// 不是所有业务组件都有 options 属性
export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}

/**
 * @description 判断 status 是否是字符串数组
 * @param status
 * @returns
 */
export function isStringArray(status: OptionsStatusArray): status is StringStatusArr {
  return Array.isArray(status) && typeof status[0] === "string";
}
