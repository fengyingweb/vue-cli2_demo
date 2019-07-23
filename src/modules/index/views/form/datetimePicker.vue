<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="DatetimePicker" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-cell-group title="选择完整时间">
        <van-cell title="完整时间" :value="formateDateTime(curVal1)" @click="handleOpen1"></van-cell>
      </van-cell-group>

      <van-cell-group title="选择日期">
        <van-cell title="日期选择" :value="formateDateTime(curVal2, '{y}-{m}-{d}')" @click="handleOpen2"></van-cell>
      </van-cell-group>

      <van-cell-group title="选择时间">
        <van-cell title="时间选择" :value="curVal3" @click="handleOpen3"></van-cell>
      </van-cell-group>
    </div>

    <van-popup v-model="show1" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-datetime-picker v-model="curVal1" type="datetime" @confirm="handleConfirm" @cancel="handleCancel" />
      </div>
    </van-popup>

    <van-popup v-model="show2" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-datetime-picker v-model="curVal2" type="date" @confirm="handleConfirm" @cancel="handleCancel" />
      </div>
    </van-popup>

    <van-popup v-model="show3" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-datetime-picker v-model="curVal3" type="time" @confirm="handleConfirm" @cancel="handleCancel" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {DatetimePicker, Popup} from 'vant'
import {parseTime} from '@/utils/index'
let dateTime = new Date()
export default {
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },
  data () {
    return {
      mainHeight: '0px',
      show1: false,
      show2: false,
      show3: false,
      curVal1: new Date(),
      curVal2: new Date(),
      curVal3: this.formateDateTime(dateTime, '{h}:{i}')
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

    // 格式化时间
    formateDateTime (dateTime, formatStr) {
      let timeStr = parseTime(dateTime, formatStr)
      return timeStr
    },

    handleOpen1 () {
      this.show1 = true
    },

    handleOpen2 () {
      this.show2 = true
    },

    handleOpen3 () {
      this.show3 = true
    },

    handleConfirm (val) {
      console.log(val)
      this.show1 = false
      this.show2 = false
      this.show3 = false
    },

    handleCancel () {
      this.show1 = false
      this.show2 = false
      this.show3 = false
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
