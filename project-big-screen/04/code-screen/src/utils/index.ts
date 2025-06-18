// 防抖
function debounce(func: Function, wait: number) {
  let timer: number | null = null

  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

export { debounce }
