<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Checkbox" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法 {{'checked: ' + checked1}}</h5>
        <div class="checkbox-box">
          <van-checkbox v-model="checked1" @change="handleChange">
            <span class="check-text">复选框</span>
          </van-checkbox>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">禁用状态</h5>
        <div class="checkbox-box">
          <van-checkbox v-model="checked2" disabled>
            <span class="check-text">复选框1</span>
          </van-checkbox>

          <van-checkbox v-model="checked3" disabled>
            <span class="check-text">复选框2</span>
          </van-checkbox>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义颜色 {{'checked: ' + checked4}}</h5>
        <div class="checkbox-box">
          <van-checkbox v-model="checked4" checked-color="#07c160" @change="handleChange">
            <span class="check-text">复选框</span>
          </van-checkbox>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">自定义图标 {{'checked: ' + checked5}}</h5>
        <div class="checkbox-box">
          <van-checkbox v-model="checked5">
            <span class="check-text">自定义图标</span>
            <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" width="25px" height="20px" @click="handleClickImg(props)" />
          </van-checkbox>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">复选框组 {{result}}</h5>
        <div class="checkbox-box">
          <van-checkbox-group v-model="result">
            <van-checkbox v-for="item in list" :key="item" :name="item">
              <span class="check-text">{{'复选框' + item}}</span>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">复选框组 {{result1}}</h5>
        <div class="checkbox-box">
          <van-checkbox-group v-model="result1" :max="2">
            <van-checkbox v-for="item in list" :key="item" :name="item">
              <span class="check-text">{{'复选框' + item}}</span>
            </van-checkbox>
          </van-checkbox-group>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">复选框组 {{result2}}</h5>
        <div class="checkbox-box">
          <van-checkbox-group v-model="result2">
            <van-cell-group>
              <van-cell v-for="item in list" :key="item" :title="'复选框' + item">
                <van-checkbox :name="item"></van-checkbox>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Checkbox, CheckboxGroup} from 'vant'
export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup
  },
  data () {
    return {
      mainHeight: '0px',
      checked1: true,
      checked2: false,
      checked3: true,
      checked4: true,
      checked5: true,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      result1: ['a', 'c'],
      result2: ['b', 'c'],
      icon: {
        normal: require('@/assets/person-normal.png'),
        active: require('@/assets/person-active.png')
      }
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

    handleChange (val) {
      this.$toast(JSON.stringify(val))
    },

    handleClickImg (props) {
      this.$toast(JSON.stringify(props))
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
  .check-text {
    font-size: 16px;
  }
  .checkbox-box {
    margin-bottom: 20px;
  }
</style>
