import type { defineComponent } from "vue";
import type { OptionsStatus } from "./edit-props";

// 导出 Vue 组件类型
export type VueComType = ReturnType<typeof defineComponent>;

// 整个 Status 的类型
export interface Status {
  type: VueComType;
  name: string;
  id: string;
  status: OptionsStatus;
}
