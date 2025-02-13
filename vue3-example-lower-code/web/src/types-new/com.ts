import type { VueComType } from "@/types";

/**
 * 属性的基本属性
 * @interface
 */
export interface ComStatusBaseProps {
  id: string;
  name: string;
  isShow: boolean;
  editCom: VueComType;
}

/**
 * 文本类属性的属性
 * @interface
 */
export interface ComStatusTextProps extends ComStatusBaseProps {
  status: string;
}

/**
 * 选项类属性的属性
 * @interface
 */
export interface ComStatusOptionsProps extends ComStatusBaseProps {
  currentStatus: number;
  status: OptionsStatusArray;
}

/**
 * 选项类属性数组类型
 * @type
 */
type OptionsStatusArray = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

/**
 * 字符串数组
 * @type
 */
export type StringStatusArr = string[];

/**
 * [{ value: string; status: string }] 对象数组
 * @type
 */
export type ValueStatusArr = Array<{ value: string; status: string }>;

/**
 * [{ picTitle: string; picDesc: string; value: string }] 对象数组
 * @type
 */
export type PicTitleDescStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

// ===============================================

/**
 * 组件的基础属性的状态
 * @interface
 */
export interface ComBaseStatus {
  title: ComStatusTextProps;
  desc: ComStatusTextProps;
  position: ComStatusOptionsProps;
  titleSize: ComStatusOptionsProps;
  descSize: ComStatusOptionsProps;
  titleWeight: ComStatusOptionsProps;
  descWeight: ComStatusOptionsProps;
  titleItalic: ComStatusOptionsProps;
  descItalic: ComStatusOptionsProps;
  titleColor: ComStatusTextProps;
  descColor: ComStatusTextProps;
}

/**
 * 组件的 options 属性的状态
 * @interface
 */
export interface ComOptionsStatus extends ComBaseStatus {
  options: ComStatusOptionsProps;
}

/**
 * 组件的 type 属性的状态
 * @interface
 */
export interface ComTypeStatus extends ComBaseStatus {
  type: ComStatusOptionsProps;
}
