/**
 * 负责数据库具体的操作
 */

import { db } from "./db";
import { type SurveyDBData } from "@/types";

/**
 * 保存问卷数据到数据库
 * @param {SurveyDBData} data
 * @returns {Promise}
 */
async function saveSurveyData(data: SurveyDBData) {
  return db.surverys.add(data);
}

/**
 * 获取所有的问卷数据
 * @returns {Promise}
 */
function getAllSurveyData() {
  return db.surverys.toArray();
}

/**
 * 根据 ID 获取问卷数据
 * @param {number} id
 * @returns {Promise}
 * */
function getSurveyDataById(id: number) {
  return db.surverys.get(id);
}

/**
 * 根据 ID 删除问卷数据
 * @param {number} id
 * @returns {Promise}
 * */
function deleteSurveyData(id: number) {
  return db.surverys.delete(id);
}

/**
 * 根据 ID 更新问卷数据
 * @param {number} id
 * @param {SurveyDBData} data
 * @returns {Promise}
 * */
function updateSurveyData(id: number, data: Partial<SurveyDBData>) {
  return db.surverys.update(id, data);
}

export { saveSurveyData, getAllSurveyData, getSurveyDataById, deleteSurveyData, updateSurveyData };
