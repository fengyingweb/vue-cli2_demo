<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="TreeSelect" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-tree-select
            :items="items"
            :main-active-index="mainActiveIndex"
            :active-id="activeId"
            @navclick="handleNavClick"
            @itemclick="handleItemClick"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {TreeSelect} from 'vant'
export default {
  components: {
    [TreeSelect.name]: TreeSelect
  },
  data () {
    return {
      mainHeight: '0px',
      items: [
        {
          // 导航名称
          text: '所有城市',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: '杭州',
              id: 2
            },
            {
              text: '宁波',
              id: 3
            },
            {
              text: '义乌',
              id: 4
            },
            {
              text: '南京',
              id: 5
            },
            {
              text: '无锡',
              id: 6
            },
            {
              text: '徐州',
              id: 7
            },
            {
              text: '苏州',
              id: 8
            }
          ]
        },
        {
          text: '浙江',
          children: [
            {
              text: '温州',
              id: 1,
              disabled: true
            },
            {
              text: '杭州',
              id: 2
            },
            {
              text: '宁波',
              id: 3
            },
            {
              text: '义乌',
              id: 4
            }
          ]
        },
        {
          text: '江苏',
          children: [
            {
              text: '南京',
              id: 5
            },
            {
              text: '无锡',
              id: 6
            },
            {
              text: '徐州',
              id: 7
            },
            {
              text: '苏州',
              id: 8
            }
          ]
        }
      ],
      mainActiveIndex: 0,
      activeId: 1
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

    // 点击左侧导航
    handleNavClick (index) {
      console.log(index)
      this.mainActiveIndex = index
    },

    // 点击右侧数据
    handleItemClick (data) {
      console.log(data)
      this.activeId = data.id
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
    padding: 10px 0;
    background: #f5f5f5;
  }

  .title5 {
    padding-left: 15px;
    line-height: 40px;
    font-size: 18px;
    color: #666;
  }

  .box {
    margin-bottom: 20px;
  }
</style>
