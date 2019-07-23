<template>
  <div class="main-wrapper">
    <cell-list :lists="baseLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Base',
  components: {
    'cell-list': CellList
  },
  data () {
    return {}
  },

  computed: {
    ...mapState({
      baseLists: state => state.app.baseLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
