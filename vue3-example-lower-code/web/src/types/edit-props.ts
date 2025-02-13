import type { VueComType } from "./common";

export type StringStatusArr = string[];
export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{
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

export type OptionsStatusArray = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

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
 * @description 判断 status 是否为字符串数组
 * @param status
 * @returns
 */
export function isStringArray(status: OptionsStatusArray): status is StringStatusArr {
  return Array.isArray(status) && typeof status[0] === "string";
}
/**
 * @description 判断 status 是否为 [{ value: any, status: string }] 数组
 * @param status
 * @returns
 */
export function isValueStatusArray(status: OptionsStatusArray): status is ValueStatusArr {
  return (
    Array.isArray(status) && typeof status[0] === "object" && typeof status[0].value === "string"
  );
}

/**
 * @description 判断 status 是否为 [{ picTitle: string, picDesc: string, value: string }] 数组
 * @param status
 * @returns
 */
export function isPicTitleDescStatusArray(
  status: OptionsStatusArray
): status is PicTitleDescStatusArr {
  return Array.isArray(status) && typeof status[0] === "object" && "picTitle" in status[0];
}

export type PicLink = { link: string; index: number };

/**
 * @description 判断 data 是否为 PicLink 类型
 * @param data
 * @returns
 */
export function isPicLink(data: object): data is PicLink {
  return "link" in data && "index" in data;
}

/**
 * 记录题目类型的数组
 * @var
 */
export const surveyComNameArr = [
  "single-select",
  "single-pic-select",
  "personal-info-gender",
  "personal-info-education"
];

/**
 * 判断是否为题目类型
 * @function
 * @param comName
 * @returns
 */
export function isSurveyComName(comName: string) {
  return surveyComNameArr.includes(comName);
}

const PDFComs = [
  "single-select",
  "single-pic-select",
  "personal-info-gender",
  "personal-info-education",
  "text-note"
];

/**
 * 判断是否可以用于 PDF 导出
 * @function
 * @param value
 * @returns
 */
export function canUsedForPDF(value: string): boolean {
  return PDFComs.includes(value);
}

export type QuizData = {
  surveyCount: number;
  coms: TextProps[] | OptionsProps[];
};
