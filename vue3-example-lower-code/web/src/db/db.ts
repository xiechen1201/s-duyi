/**
 * @fileoverview 负责定义数据库以及表的结构
 */

import Dexie, { type Table } from "dexie";
import { type SurveyDBData } from "@/types";

class SurveyDataBase extends Dexie {
  // 表示每一条记录都是 SurveyDBData 类型，主键是 number 类型
  surverys!: Table<SurveyDBData, number>;

  constructor() {
    // 数据库的名字
    super("SurveyDataBase");

    // 定义一张表
    this.version(1).stores({
      surverys: "++id, createDate, updateDate, title, surveyCount, coms"
    });
  }
}

const db = new SurveyDataBase();

export { db };
