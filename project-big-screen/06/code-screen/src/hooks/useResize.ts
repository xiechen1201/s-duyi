import { ref, useTemplateRef, onMounted, onBeforeUnmount } from 'vue'
import { debounce } from '@/utils'

type Options = {
  refName: string
  w?: number
  h?: number
  fullScreen?: boolean
  delay?: number
}

const useResize = (options: Options) => {
  // 设计稿宽高
  const designWidth = 1920
  const designHeight = 1080

  const { refName, w = designWidth, h = designHeight, fullScreen = false, delay = 100 } = options
  const screenRef = useTemplateRef<HTMLElement>(refName)
  const scale = ref(1)

  function resize() {
    // 视口的宽高
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    // 计算比例
    const scaleX = clientWidth / w
    const scaleY = clientHeight / h

    // 取最小值
    scale.value = Math.min(scaleX, scaleY)

    if (!screenRef.value) {
      return false
    }

    // 如果是全屏
    if (fullScreen) {
      screenRef.value.style.transform = `scale(${scaleX}, ${scaleY})`
    } else {
      screenRef.value.style.transform = `scale(${scale.value})`
      // 居中
      screenRef.value.style.left = `${(clientWidth - w * scale.value) / 2}px`
      screenRef.value.style.top = `${(clientHeight - h * scale.value) / 2}px`
    }
  }

  // 防抖执行
  const resizeDelay = debounce(resize, delay)
  onMounted(() => {
    if (screenRef.value) {
      resize()
    }
    window.addEventListener('resize', resizeDelay)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeDelay)
  })

  return {
    screenRef,
    scale,
  }
}

export { useResize }
