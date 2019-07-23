<template>
  <div id="app">
    <transition :name="viewTransition">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      direction: state => state.app.direction
    }),

    viewTransition () {
      if (!this.direction) return ''
      return 'pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  width: 375px;
  height: 100%;
}

  /*start 路由动画*/
  .pop-out-enter-active,
  .pop-out-leave-active,
  .pop-in-enter-active,
  .pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  /*end 路由动画*/
</style>
