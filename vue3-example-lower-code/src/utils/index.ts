import { isStringArray, isPicTitleDesStatusArray } from "@/types";
import type { TextProps, OptionsProps } from "@/types";

/**
 * @description 获取对象的状态
 * @param props
 * @returns
 */
function getTextStatus(props: TextProps) {
  return props.status;
}

function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

function getPicTitleDesStatus(props: OptionsProps) {
  if (props && isPicTitleDesStatusArray(props.status)) {
    return props.status;
  }
}

function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}

function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

export {
  getTextStatus,
  getStringStatus,
  getCurrentStatus,
  getPicTitleDesStatus,
  getStringStatusByCurrentStatus,
};
