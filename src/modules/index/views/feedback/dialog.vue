<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Dialog" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-button type="primary" plain @click="handleShow1">消息提示</van-button>
          <van-button type="primary" plain @click="handleShow2">不带标题</van-button>
          <van-button type="primary" plain @click="handleShow3">带取消按钮</van-button>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">高级用法</h5>
        <div class="box">
          <van-button type="danger" plain @click="show4 = true">高级用法</van-button>
        </div>
      </div>
    </div>

    <fy-dialog v-model="show1" title="标题" :message="message"></fy-dialog>

    <fy-dialog v-model="show2" :message="message"></fy-dialog>

    <fy-dialog
      v-model="show3"
      title="标题"
      show-cancel-button
      :message="message"
      @confirm="handleConfirm"
      @cancel="handleCancel">
    </fy-dialog>

    <fy-dialog
      v-model="show4"
      title="登录"
      show-cancel-button
      :before-close="handleBeforeClose"
      >
      <van-field v-model="userName" label="用户名: " placeholder="请输入用户名..." required />
      <van-field v-model="password" type="password" label="密码: " placeholder="请输入密码..." required />
    </fy-dialog>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Button, Field} from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field
  },
  data () {
    return {
      mainHeight: '0px',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      message: '有赞是一家零售科技公司，致力于成为商家服务领域里最被信任的引领者',
      userName: '',
      password: ''
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

    handleConfirm (val) {
      console.log(val)
    },

    handleCancel () {},

    handleBeforeClose (action, done) {
      console.log(action)
      if (action === 'confirm') {
        setTimeout(done, 2000)
      } else {
        done()
      }
    },

    handleShow1 () {
      this.$dialog.alert({
        title: '标题',
        message: '弹窗内容'
      }).then(()=> {
        console.log('confirm')
      })
    },

    handleShow2 () {
      this.$dialog.alert({
        message: '弹窗内容'
      }).then(()=> {
        console.log('confirm')
      })
    },

    handleShow3 () {
      this.$dialog.confirm({
        title: '标题',
        message: '弹窗内容'
      }).then(()=> {
        console.log('confirm')
      }).catch(()=> {
        console.log('cancel')
      })
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
</style>
