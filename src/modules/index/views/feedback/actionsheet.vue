<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Actionsheet" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-button @click="show1 = true">弹窗actionsheet</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">带取消按钮</h5>
        <div class="box">
          <van-button @click="show2 = true">弹窗带取消按钮actionsheet</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">带标题</h5>
        <div class="box">
          <van-button @click="show3 = true">弹窗带标题按钮actionsheet</van-button>
        </div>
      </div>
    </div>

    <van-actionsheet v-model="show1" :actions="actions" @select="handleSelect"/>

    <van-actionsheet
      v-model="show2"
      :actions="actions"
      cancel-text="取消"
      @select="handleSelect"/>

      <van-actionsheet
      v-model="show3"
      title="支持以下配送方式">
        <p class="actionsheet-content">一些内容, 一些内容, 一些内容,一些内容, 一些内容, 一些内容, 一些内容</p>
      </van-actionsheet>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Actionsheet, Button} from 'vant'
export default {
  components: {
    [Actionsheet.name]: Actionsheet,
    [Button.name]: Button
  },
  data () {
    return {
      mainHeight: '0px',
      show1: false,
      show2: false,
      show3: false,
      actions: [
        {
          name: '选项1'
        },
        {
          name: '选项2',
          subname: '描述信息'
        },
        {
          name: '禁用选项3',
          disabled: true
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
    },

    handleSelect (item) {
      console.log(item)
      this.show1 = false
      this.show2 = false
      this.show3 = false
      this.$toast(item.name)
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
    padding: 10px 15px;
    background: #f5f5f5;
  }

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin-bottom: 20px;
  }

  .actionsheet-content {
    padding: 15px;
    line-height: 24px;
    font-size: 16px;
    color: #666;
  }
</style>
