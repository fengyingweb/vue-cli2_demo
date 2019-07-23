<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar :title="title" fixed></van-nav-bar>
    </header>
    <transition :name="viewTransition">
      <keep-alive>
        <router-view class="router-view" :style="{height: viewHeight}"></router-view>
      </keep-alive>
    </transition>
    <van-tabbar ref="tabbar" v-model="active" @change="handleChangeTab">
      <van-tabbar-item v-for="tabBar in tabBarList" :key="tabBar.title" :to="tabBar.path">
        <span>{{tabBar.title}}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from 'vuex'
import {Tabbar, TabbarItem} from 'vant'
export default {
  name: 'Home',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data () {
    return {
      title: '基础',
      active: 0,
      tabBarList: [
        {title: '基础', path: '/home/base'},
        {title: '表单', path: '/home/form'},
        {title: '反馈', path: '/home/feedback'},
        {title: '展示', path: '/home/show'},
        {title: '导航', path: '/home/nav'},
        {title: '业务', path: '/home/service'}
      ],
      viewHeight: '0px'
    }
  },

  watch: {
    '$route.path' () {
      this.setTitle()
    }
  },

  computed: {
    ...mapState({
      direction: state => state.app.direction
    }),

    viewTransition () {
      if (!this.direction) return ''
      return 'pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  },

  methods: {
    ...mapMutations({
      setDirection: 'setDirection'
    }),

    ...mapActions({
      getMenuLists: 'getMenuLists'
    }),

    getMenus () {
      let params = {}
      let toast = this.$toast.loading({
        duration: 0,
        forbidClick: true,
        loadingType: 'spinner'
      })
      this.setTitle()
      this.getMenuLists(params).then(() => {
        toast.clear()
      }).catch(err => {
        console.log(err)
        toast.clear()
      })
    },

    // 切换tabbar
    handleChangeTab (val) {
      this.title = this.tabBarList[val].title
      this.setDirection({direction: 'forward'})
    },

    // 设置标题
    setTitle () {
      this.tabBarList.forEach((item, index) => {
        if (item.path === this.$route.path) {
          this.title = item.title
          this.active = index
        }
      })
    }
  },

  mounted () {
    this.getMenus()
    this.$nextTick(() => {
      this.$refs['tabbar'] && (this.viewHeight = window.innerHeight - this.$refs['tabbar'].$el.offsetHeight - this.$refs['header'].offsetHeight + 'px')
    })
  }
}
</script>

<style lang="less" scoped>
  @fontSize: 40px;
  @color: #f56;
  .wrapper {
    width: 100%;
    height: 100%;
  }

  .header {
    height: 46px;
  }

  .router-view {
    overflow-x: hidden;
    overflow-y: auto;
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
