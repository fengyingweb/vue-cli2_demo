import { on, off } from '../../utils/event'
import { getScrollEventTarget } from '../../utils/scroll'
import { context } from './context'
import { openOverlay, closeOverlay, updateOverlay } from './overlay'
import TouchMixin from '../touch'

const PopupMixin = {
  mixins: [TouchMixin],

  props: {
    // 是否显示 popup
    value: Boolean,
    // 是否显示蒙层
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // 是否在点击蒙层后关闭
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [String, Number],
    // 指定挂载的节点，可以传入选择器，或一个返回节点的函数
    getContainer: [String, Function],
    // 是否锁定背景滚动
    lockScroll: {
      type: Boolean,
      default: true
    },
    // 是否在显示弹层时才渲染节点
    lazyRender: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      inited: this.value
    }
  },

  computed: {
    shouldRender () {
      return this.inited || !this.lazyRender
    }
  },

  watch: {
    value (val) {
      const type = val ? 'open' : 'close'
      this.inited = this.inited || this.value
      this[type]()
      this.$emit(type)
    },

    getContainer () {
      this.move()
    },

    overlay () {
      this.renderOverlay()
    }
  },

  mounted () {
    if (this.getContainer) {
      this.move()
    }
    if (this.value) {
      this.open()
    }
  },

  activated () {
    /* istanbul ignore next */
    if (this.value) {
      this.open()
    }
  },

  beforeDestroy () {
    this.close()

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el)
    }
  },

  deactivated () {
    /* istanbul ignore next */
    this.close()
  },

  methods: {
    open () {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return
      }

      // cover default zIndex
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex
      }
           
      this.opened = true
      this.renderOverlay()

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart)
        on(document, 'touchmove', this.onTouchMove)

        if (!context.lockCount) {
          document.body.classList.add('fy-overflow-hidden')
        }
        context.lockCount++
      }
    },

    close () {
      if (!this.opened) {
        return
      }

      if (this.lockScroll) {
        context.lockCount--
        off(document, 'touchstart', this.touchStart)
        off(document, 'touchmove', this.onTouchMove)

        if (!context.lockCount) {
          document.body.classList.remove('fy-overflow-hidden')
        }
      }

      this.opened = false
      closeOverlay(this)
      this.$emit('input', false)
    },

    move () {
      let container
      const { getContainer } = this

      if (getContainer) {
        container =
          typeof getContainer === 'string'
            ? document.querySelector(getContainer)
            : getContainer()
      } else if (this.$parent) {
        container = this.$parent.$el
      }

      if (container && container !== this.$el.parentNode) {
        container.appendChild(this.$el)
      }

      if (this.overlay) {
        updateOverlay()
      }
    },

    onTouchMove (e) {
      this.touchMove(e)
      const direction = this.deltaY > 0 ? '10' : '01'
      const el = getScrollEventTarget(e.target, this.$el)
      const { scrollHeight, offsetHeight, scrollTop } = el
      let status = '11'

      /* istanbul ignore next */
      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01'
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10'
      }

      /* istanbul ignore next */
      if (
        status !== '11' &&
        this.direction === 'vertical' &&
        !(parseInt(status, 2) & parseInt(direction, 2))
      ) {
        e.preventDefault()
        e.stopPropagation()
      }
    },

    renderOverlay () {
      if (this.$isServer || !this.value) {
        return
      }

      if (this.overlay) {
        openOverlay(this, {
          zIndex: context.zIndex++,
          className: this.overlayClass,
          customStyle: this.overlayStyle
        })
      } else {
        closeOverlay(this)
      }

      this.$nextTick(() => {
        this.$el.style.zIndex = context.zIndex++
      })
    }
  }
}

export default PopupMixin
