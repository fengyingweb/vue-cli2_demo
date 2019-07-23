<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Coupon" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"/>
        </div>
      </div>
    </div>

    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :disabled-coupons="disabledCoupons"
        :chosen-coupon="chosenCoupon"
        @change="handleChange"
        @exchange="handleExChange"/>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {CouponCell, CouponList, Popup} from 'vant'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元'
}
export default {
  components: {
    [CouponCell.name]: CouponCell,
    [CouponList.name]: CouponList,
    [Popup.name]: Popup
  },
  data () {
    return {
      mainHeight: '0px',
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
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

    handleChange (index) {
      this.showList = false
      this.chosenCoupon = index
    },

    handleExChange (code) {
      console.log(code)
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
    padding-left: 15px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin-bottom: 20px;
  }
</style>
