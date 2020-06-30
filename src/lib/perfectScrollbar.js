
import Vue from 'vue'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const elScrollBar = (el) => {
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update()
  } else {
    el._ps_ = new PerfectScrollbar(el, { suppressScrollX: true })
  }
}

Vue.directive('scrollBar', {
  inserted (el) {
    const rules = ['fixed', 'absolute', 'relative']
    if (!rules.includes(window.getComputedStyle(el, null).position)) {
      console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`)
    }
    elScrollBar(el)
  },
  componentUpdated (el, binding, vnode) {
    try {
      vnode.context.$nextTick(
        () => {
          elScrollBar(el)
        }
      )
    } catch (error) {
      console.error(error)
      elScrollBar(el)
    }
  }
})