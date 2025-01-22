import type { defineComponent } from "vue";
import type { OptionsStatus } from "./edit-props";
import type { ComTypeStatus } from "@/types-new";

// 导出 Vue 组件类型
export type VueComType = ReturnType<typeof defineComponent>;

// 整个 Status 的类型
export interface Status {
  id: string;
  name: string;
  type: VueComType;
  status: OptionsStatus | ComTypeStatus;
}
