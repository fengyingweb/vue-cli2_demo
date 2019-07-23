<template>
  <div class="cell-wrapper">
    <van-cell-group>
      <van-cell v-for="item in lists" :key="item.title" size="large" is-link :to="item.path" @click="handleCellClick">
        <template slot="title">
          <span class="cell-title">{{item.title}}</span>
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CellList',
  props: {
    lists: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    }
  },
  methods: {
    ...mapMutations({
      setDirection: 'setDirection'
    }),
    handleCellClick () {
      this.setDirection({direction: 'forward'})
    }
  }
}
</script>

<style lang="less" scoped>
  .cell-wrapper {
    margin-top: 10px;
  }
  .cell-title {
    font-weight: 500;
    font-size: 20px;
    color: #333;
  }
</style>
