import Vue from 'vue'

export const isServer = Vue.prototype.$isServer

export function noop () {}

export let supportsPassive = false

if (!isServer) {
  try {
    const opts = {}
    Object.defineProperty(opts, 'passive', {
      get () {
        /* istanbul ignore next */
        supportsPassive = true
        return supportsPassive
      }
    })
    window.addEventListener('test-passive', noop, opts)
  } catch (e) {
    console.log(e)
  }
}

export function on (target, event, handler, passive = false) {
  if (!isServer) {
    target.addEventListener(event, handler, supportsPassive ? { capture: false, passive } : false)
  }
}

export function off (target, event, handler) {
  !isServer && target.removeEventListener(event, handler)
}

export function stop (event) {
  event.stopPropagation()
}

export function prevent (event) {
  event.preventDefault()
}

export function isObject (value) {
  let type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}
