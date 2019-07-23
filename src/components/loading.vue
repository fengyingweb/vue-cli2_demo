<template>
  <div class="loading-wrapper" v-if="show">
    <van-loading :type="type" :color="color" :size="size" />
  </div>
</template>

<script>
import {Loading} from 'vant'
export default {
  name: 'Loading',
  components: {
    [Loading.name]: Loading
  },
  props: {
    type: {
      type: String,
      default: 'spinner'
    },
    color: {
      type: String,
      default: 'white'
    },
    size: {
      type: String,
      default: '30px'
    },
    show: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
  .loading-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px;
    margin-top: -25px;
    z-index: 9999;
    .van-loading--white {
      padding: 10px;
      background: rgba(0, 0, 0, .5);
      border-radius: 3px;
      box-sizing: content-box;
    }
  }
</style>
