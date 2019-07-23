<template>
  <div class="main-wrapper">
    <cell-list :lists="navLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Nav',
  components: {
    'cell-list': CellList
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      navLists: state => state.app.navLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
