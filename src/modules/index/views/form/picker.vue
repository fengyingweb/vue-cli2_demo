<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Picker" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <van-cell-group title="显示顶部栏">
        <van-cell title="城市: " :value="value1" @click="show1 = true" is-link></van-cell>
      </van-cell-group>

      <van-cell-group title="默认选中">
        <van-cell title="城市: " :value="value2" @click="show2 = true" is-link></van-cell>
      </van-cell-group>

      <van-cell-group title="禁用选项">
        <van-cell title="城市: " :value="value3" @click="show3 = true" is-link></van-cell>
      </van-cell-group>

      <van-cell-group title="多级联动">
        <van-cell title="城市: " :value="value4" @click="show4 = true" is-link></van-cell>
      </van-cell-group>
    </div>

    <van-popup v-model="show1" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-picker
          show-toolbar
          title="选择城市"
          :columns="columns1"
          :default-index="index1"
          @confirm="handleConfirm1"
          @cancel="handleCancel1"
          @change="handleChange1" />
      </div>
    </van-popup>

    <van-popup v-model="show2" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-picker
          show-toolbar
          title="选择城市"
          :columns="columns1"
          :default-index="index2"
          @confirm="handleConfirm2"
          @cancel="handleCancel2"
          @change="handleChange2" />
      </div>
    </van-popup>

    <van-popup v-model="show3" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-picker
          show-toolbar
          title="选择城市"
          :columns="columns2"
          :default-index="index3"
          @confirm="handleConfirm3"
          @cancel="handleCancel3"
          @change="handleChange3" />
      </div>
    </van-popup>

    <van-popup v-model="show4" position="bottom" :close-on-click-overlay="false">
      <div class="popup-content">
        <van-picker
          show-toolbar
          title="选择城市"
          :columns="columns3"
          @confirm="handleConfirm4"
          @cancel="handleCancel4"
          @change="handleChange4" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Popup, Picker} from 'vant'
const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州']
}
export default {
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  data () {
    return {
      mainHeight: '0px',
      value1: '',
      oldV1: '',
      value2: '温州',
      oldV2: '温州',
      value3: '',
      value4: '',
      index1: 0,
      oldInd1: 0,
      index2: 2,
      oldInd2: 2,
      index3: 1,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      columns1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      columns2: [
        {text: '杭州', disabled: true},
        {text: '宁波'},
        {text: '温州'},
        {text: '嘉兴'}
      ],
      columns3: [
        {
          values: Object.keys(citys),
          className: 'column1'
        },
        {
          values: citys['浙江'],
          className: 'column2',
          defaultIndex: 2
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

    // 确定
    handleConfirm1 (val, index) {
      this.show1 = false
      this.oldV1 = val
      this.oldInd1 = index
    },

    handleConfirm2 (val, index) {
      this.show2 = false
      this.oldV2 = val
      this.oldInd2 = index
    },

    handleConfirm3 (val, index) {
      this.show3 = false
      this.oldV3 = val.text
      this.oldInd3 = index
    },

    handleConfirm4 (val, index) {
      this.show4 = false
    },

    // 取消
    handleCancel1 (val, index) {
      this.show1 = false
      this.value1 = this.oldV1
      this.index1 = this.oldInd1
    },

    handleCancel2 (val, index) {
      this.show2 = false
      this.value2 = this.oldV2
      this.index2 = this.oldInd2
    },

    handleCancel3 (val, index) {
      this.show3 = false
      this.value3 = this.oldV3
      this.index3 = this.oldInd3
    },

    handleCancel4 (val, index) {
      this.show4 = false
    },

    handleChange1 (picker, val, index) {
      console.log(val)
      console.log(index)
      this.value1 = val
    },

    handleChange2 (picker, val, index) {
      console.log(val)
      console.log(index)
      this.value2 = val
    },

    handleChange3 (picker, val, index) {
      console.log(val)
      console.log(index)
      this.value3 = val.text
    },

    handleChange4 (picker, vals, index) {
      console.log(vals)
      console.log(index)
      picker.setColumnValues(1, citys[vals[0]])
      this.value4 = vals.join('')
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
    padding: 10px 0px;
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
