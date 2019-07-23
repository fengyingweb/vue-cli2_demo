<template>
  <div class="main-wrapper">
    <cell-list :lists="showLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Show',
  components: {
    'cell-list': CellList
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      showLists: state => state.app.showLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
