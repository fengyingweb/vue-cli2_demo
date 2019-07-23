<template>
  <div class="main-wrapper">
    <cell-list :lists="feedbackLists"></cell-list>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CellList from '@/components/cell-list'
export default {
  name: 'Feedback',
  components: {
    'cell-list': CellList
  },

  data () {
    return {}
  },

  computed: {
    ...mapState({
      feedbackLists: state => state.app.feedbackLists
    })
  }
}
</script>

<style lang="less" scoped>
</style>
