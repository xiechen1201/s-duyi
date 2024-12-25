import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', {
  // 定义状态
  state: () => {
    return {
      pageNames: [], // 选项卡的页面
    }
  },
  // 定义修改状态的方法
  actions: {
    addPage(newPageName) {
      if (!this.pageNames.includes(newPageName)) {
        this.pageNames.push(newPageName)
      }
    },
    removePage(pageName) {
      const index = this.pageNames.indexOf(pageName)
      if (index >= 0) {
        this.pageNames.splice(index, 1)
      }
    },
  },
})
