/* 
    触发器
*/

/**
 * 触发器
 * @param {*} target 目标对象
 * @param {*} type 操作类型
 * @param {*} key 对象的 Key
 */
export default function(target, type, key){
    console.log(`>>> 触发器：${JSON.stringify(target)} >>> Type：${type} >>> Key：${key}`)
}