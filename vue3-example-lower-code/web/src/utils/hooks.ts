import { computed } from "vue";
import { type Status } from "@/types";
import { isSurveyComName } from "@/types";

/**
 * 返回问卷题目序号的数组
 * @function
 * @param {Status} coms 问卷组件数组
 * @example [1, 2, null, 3, 4] ==> [1, 2, 3, 4]
 */
function useSurveyNo(coms: Status[]) {
  console.log(coms);
  return computed(() => {
    let questionNumber = 1;
    return coms.map((com) => {
      if (isSurveyComName(com.name)) {
        return questionNumber++;
      }
      return null;
    });
  });
}

export { useSurveyNo };
