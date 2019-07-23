<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="AddressEdit" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="handleSave"
            @delete="handleDelete"
            @change-detail="handleChangeDetail"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {AddressEdit} from 'vant'
import areaList from '../../api/area'
export default {
  components: {
    [AddressEdit.name]: AddressEdit
  },
  data () {
    return {
      mainHeight: '0px',
      areaList: areaList,
      searchResult: []
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

    handleSave (content) {
      console.log(content)
    },

    handleDelete (content) {
      console.log(content)
    },

    handleChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
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
