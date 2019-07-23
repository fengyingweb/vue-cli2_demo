<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Field" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-cell-group title="基础用法">
        <van-field v-model="name1" label="用户名:" center placeholder="请输入用户名" />
      </van-cell-group>

      <van-cell-group title="自定义类型">
        <van-field
          v-model="userName1"
          label="用户名: "
          required
          center
          clearable
          placeholder="请输入用户名"
          right-icon="question-o"
          @click-right-icon="$toast('question')" />
        <van-field
          v-model="password1"
          label="密码: "
          required
          center
          clearable
          type="password"
          placeholder="请输入密码" />
      </van-cell-group>

      <van-cell-group title="禁用">
        <van-field
          value="输入框已禁止"
          label="用户名: "
          center
          disabled />
      </van-cell-group>

      <van-cell-group title="高度自适应">
        <van-field
          v-model="value1"
          type="textarea"
          label="留言"
          center
          clearable
          rows="1"
          autosize
          placeholder="请输入留言" />
      </van-cell-group>

      <van-cell-group title="插入按钮">
        <van-field
          v-model="sms"
          label="短信验证码"
          center
          clearable
          placeholder="请输入短信验证码">
          <van-button slot="button" type="primary" size="small">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Field, Button} from 'vant'
export default {
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  data () {
    return {
      mainHeight: '0px',
      name1: '',
      userName1: '',
      password1: '',
      value1: '',
      sms: ''
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

  .title5 {
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }
</style>
