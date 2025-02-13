import { type Status } from "@/types";

/**
 * 问卷数据库数据类型
 * @interface
 */
export interface SurveyDBData {
  createDate: number;
  updateDate: number;
  title: string;
  surveyCount: number;
  coms: Status[];
}
