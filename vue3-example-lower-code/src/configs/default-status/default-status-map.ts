/**
 * @fileoverview 用于定义默认状态的映射表
 */
import singleSelectDefaultStatus from "./single-select";
import singlePicSelect from "./single-pic-select";
import textNote from "./text-note";

export const defaultStatusMap = {
  "single-select": singleSelectDefaultStatus,
  "single-pic-select": singlePicSelect,
  "text-note": textNote,
  "personal-info-gender": singleSelectDefaultStatus,
  "personal-info-education": singleSelectDefaultStatus
};
