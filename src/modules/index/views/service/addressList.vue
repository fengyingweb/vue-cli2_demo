<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="AddressList" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-address-list
            v-model="addressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            @add="handleAdd"
            @edit="handleEdit"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {AddressList} from 'vant'
export default {
  components: {
    [AddressList.name]: AddressList
  },
  data () {
    return {
      mainHeight: '0px',
      addressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '13100000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
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

    handleAdd () {
      this.$toast('新增地址')
    },

    handleEdit (item, index) {
      console.log(item)
      this.$toast('编辑' + index)
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
