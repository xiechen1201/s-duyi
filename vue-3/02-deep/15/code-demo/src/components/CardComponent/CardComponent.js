import { defineComponent, h } from 'vue'
import styles from './CardComponent.module.css'

export default defineComponent({
  name: 'CardComponent',
  setup(_, { slots }) {

    let headerSlotVNode = null
    let defaultSlotVNode = slots.default()

    if (slots.header) {
      headerSlotVNode = slots.header({ title: '子组件传递的标题' })
    } else {
      headerSlotVNode = h('div', null, '默认标题')
    }

    return () => {
      return h('div', { class: styles.card }, [
        h('div', { class: styles['card-header'] }, headerSlotVNode),
        h('div', { class: styles['card-body'] }, defaultSlotVNode)
      ])
    }

    /* console.log(slots)
    console.log(slots.default())

    let headerSlotVNode = null
    let defaultSlotVNode = slots.default()

    if (slots.header) {
      headerSlotVNode = slots.header({ title: '标题' })
    } else {
      headerSlotVNode = h('div', null, '默认标题')
    }

    return () => {
      return h('div', { class: styles.card }, [
        h('div', { class: styles['card-header'] }, headerSlotVNode),
        h('div', { class: styles['card-body'] }, defaultSlotVNode)
      ])
    } */
  }
})
