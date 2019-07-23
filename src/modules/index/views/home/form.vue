<template>
  <div class="main-wrapper">
    <cell-list :lists="formLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Form',
  components: {
    'cell-list': CellList
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      formLists: state => state.app.formLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
