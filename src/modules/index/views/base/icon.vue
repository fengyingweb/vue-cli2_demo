<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Icon" left-arrow fixed :z-index="9999" @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-tabs v-model="active" swipeable animated color="#409aff">
        <van-tab v-for="tab in tabLists" :key="tab.title" :title="tab.title">
          <div class="icon-wrapper">
            <div class="icon-item" v-for="icon in tab.iconList" :key="icon.name">
              <van-icon :name="icon.name" :color="icon.color" :info="icon.info ? icon.info : ''" size="30px" />
              <span class="icon-name">{{icon.name}}</span>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Tab, Tabs} from 'vant'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data () {
    return {
      mainHeight: '0px',
      active: 0,
      tabLists: [
        {
          title: '基础图标',
          iconList: [
            {name: 'success', color: '#67c23a'},
            {name: 'plus', color: '#f56c6c'},
            {name: 'cross', color: '#f56c6c'},
            {name: 'fail', color: '#e6a23c'},
            {name: 'arrow', color: '#303133'},
            {name: 'arrow-left', color: '#303133'},
            {name: 'arrow-up', color: '#303133'},
            {name: 'arrow-down', color: '#303133'}
          ]
        },
        {
          title: '线框风格',
          iconList: [
            {name: 'location-o', color: '#409eff'},
            {name: 'like-o', color: '#f56c6c'},
            {name: 'star-o', color: '#e6a23c'},
            {name: 'phone-o', color: '#409eff', info: 5},
            {name: 'setting-o', color: '#409eff'},
            {name: 'fire-o', color: '#f56c6c'},
            {name: 'coupon-o', color: '#303133'},
            {name: 'cart-o', color: '#303133', info: 10},
            {name: 'shopping-cart-o', color: '#303133', info: 9},
            {name: 'cart-circle-o', color: '#303133', info: 9},
            {name: 'friends-o', color: '#303133'},
            {name: 'comment-o', color: '#303133', info: 8},
            {name: 'gem-o', color: '#303133'},
            {name: 'gift-o', color: '#303133'},
            {name: 'point-gift-o', color: '#303133'},
            {name: 'send-gift-o', color: '#303133'},
            {name: 'service-o', color: '#303133'},
            {name: 'bag-o', color: '#303133'},
            {name: 'todo-list-o', color: '#303133'},
            {name: 'balance-list-o', color: '#303133'},
            {name: 'medel-o', color: '#303133'},
            {name: 'close-o', color: '#303133'},
            {name: 'clock-o', color: '#303133'},
            {name: 'question-o', color: '#303133'},
            {name: 'shop-o', color: '#303133'},
            {name: 'shop-collect-o', color: '#303133'},
            {name: 'chat-o', color: '#303133', info: 6},
            {name: 'smile-comment-o', color: '#303133'}
          ]
        },
        {
          title: '实底风格',
          iconList: [
            {name: 'location', color: '#409eff'},
            {name: 'like', color: '#f56c6c'},
            {name: 'star', color: '#e6a23c'},
            {name: 'phone', color: '#409eff', info: 5},
            {name: 'setting', color: '#409eff'},
            {name: 'fire', color: '#f56c6c'},
            {name: 'coupon', color: '#303133'},
            {name: 'cart', color: '#303133', info: 10},
            {name: 'shopping-cart', color: '#303133', info: 9},
            {name: 'cart-circle', color: '#303133', info: 9},
            {name: 'friends', color: '#303133'},
            {name: 'comment', color: '#303133', info: 8},
            {name: 'gem', color: '#303133'},
            {name: 'gift', color: '#303133'},
            {name: 'point-gift', color: '#303133'},
            {name: 'send-gift', color: '#303133'},
            {name: 'service', color: '#303133'},
            {name: 'bag', color: '#303133'},
            {name: 'todo-list', color: '#303133'},
            {name: 'balance-list', color: '#303133'},
            {name: 'medel', color: '#303133'},
            {name: 'close', color: '#303133'},
            {name: 'clock', color: '#303133'},
            {name: 'question', color: '#303133'},
            {name: 'shop', color: '#303133'},
            {name: 'shop-collect', color: '#303133'},
            {name: 'chat', color: '#303133', info: 6},
            {name: 'smile-comment', color: '#303133'}
          ]
        }
      ]
    }
  },

  methods: {
    ...mapMutations({
      setDirection: 'setDirection'
    }),
    // 返回
    handleClickLeft () {
      this.setDirection({direction: 'reverse'})
      this.$router.go(-1)
    }
  },

  mounted () {
    this.$refs['header'] && (this.mainHeight = window.innerHeight - this.$refs['header'].offsetHeight + 'px')
  }
}
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  .header {
    width: 100%;
    height: 46px;
  }
  .main-wrapper {
    width: 100%;
    padding: 10px 0;
    background: #f5f5f5;
  }
  .icon-wrapper {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .icon-item {
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 0;
    width: 93px;
    height: 100px;
  }

  .icon-name {
    display: inline-block;
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }
</style>
