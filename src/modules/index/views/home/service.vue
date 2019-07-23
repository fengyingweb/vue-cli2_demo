<template>
  <div class="main-wrapper">
    <cell-list :lists="serviceLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Service',
  components: {
    'cell-list': CellList
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      serviceLists: state => state.app.serviceLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
