<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Uploader" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-uploader :after-read="handleAfter1">
            <van-icon name="photograph" />
          </van-uploader>
          <div class="img-wrapper" v-if="fileSrc1.length">
            <img class="upload-img" v-for="(item, i) in fileSrc1" :key="i" :src="item" alt="图片不存在" />
          </div>
        </div>
      </div>

      <div class="main-item">
        <h5 class="title5">多文件</h5>
        <div class="box">
          <van-uploader :before-read="handleBefore" :after-read="handleAfter2" multiple>
            <van-icon name="photograph" />
          </van-uploader>
          <div class="img-wrapper" v-if="fileSrc2.length">
            <img class="upload-img" v-for="(item, i) in fileSrc2" :key="i" :src="item" alt="图片不存在" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {Uploader} from 'vant'
export default {
  components: {
    [Uploader.name]: Uploader
  },
  data () {
    return {
      mainHeight: '0px',
      fileSrc1: [],
      fileSrc2: []
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

    handleAfter1 (file, content) {
      console.log(file)
      if (this.fileSrc1.indexOf(file.content) === -1) {
        this.fileSrc1.push(file.content)
      }
    },

    handleBefore (file) {
      // console.log(file)
      return true
    },
    handleAfter2 (file, content) {
      console.log(file)
      if (file instanceof Array) {
        file.forEach(item => {
          if (this.fileSrc2.indexOf(item.content) === -1) {
            this.fileSrc2.push(item.content)
          }
        })
      } else {
        if (this.fileSrc2.indexOf(file.content) === -1) {
          this.fileSrc2.push(file.content)
        }
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
  .img-wrapper {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
  }
  .upload-img {
    display: block;
    width: 100px;
    height: 100px;
  }
</style>
