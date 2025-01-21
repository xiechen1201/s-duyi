import { isStringArray } from "@/types";
import type { TextProps, OptionsProps, PicLink } from "@/types";
import { isPicTitleDesStatusArray } from "@/types";

function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

function addOption(optionsProps: OptionsProps) {
  if (isStringArray(optionsProps.status)) {
    const lastItem = optionsProps.status[optionsProps.status.length - 1];
    const lastChar = lastItem[lastItem.length - 1];
    const isNumber = /^\d+$/.test(lastChar);
    const num = isNumber ? Number(lastChar) + 1 : 1;
    optionsProps.status.push(`新增选项${num}`);
  }
}

function removeOption(optionsProps: OptionsProps, index: number) {
  if (optionsProps.status.length === 2) {
    return false;
  }
  optionsProps.status.splice(index, 1);
  return true;
}

function setPosition(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

function setSize(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

function setWeight(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

function setItalic(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

function setColor(textProps: TextProps, color: string) {
  textProps.status = color;
}

function setPicLinkByIndex(optionProps: OptionsProps, payload: PicLink) {
  if (isPicTitleDesStatusArray(optionProps.status)) {
    optionProps.status[payload.index].value = payload.link;
  }
}

export {
  setTextStatus,
  addOption,
  removeOption,
  setPosition,
  setSize,
  setWeight,
  setItalic,
  setColor,
  setPicLinkByIndex,
};
