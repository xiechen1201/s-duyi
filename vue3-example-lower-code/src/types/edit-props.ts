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
  editorCom: VueComType;
}

export interface TextProps extends BaseProps {
  status: string;
}

export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDesStatusArr;
  currentStatus: number;
}

// 公共的设置项，每个组件都有的设置项
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
