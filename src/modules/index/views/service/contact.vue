<template>
  <div class="wrapper">
    <header class="header" ref="header">
      <van-nav-bar title="Contact" left-arrow fixed @click-left="handleClickLeft"></van-nav-bar>
    </header>
    <div class="main-wrapper" :style="{height: mainHeight}">
      <div class="main-item">
        <h5 class="title5">基础用法</h5>
        <div class="box">
          <van-contact-card
            :type="cardType"
            :name="currentContact.name"
            :tel="currentContact.tel"
            @click="showList = true" />
        </div>
      </div>
    </div>

    <van-popup v-model="showList" position="bottom">
      <van-contact-list
        class="contact-content"
        v-model="activeContactId"
        :list="list"
        @add="handleAdd"
        @edit="handleEdit"
        @select="handleSelect"/>
    </van-popup>

    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        class="contact-content"
        :contact-info="editingContact"
        :is-eidt="isEdit"
        :is-deleting="true"
        @save="handleSave"
        @delete="handleDelete"/>
    </van-popup>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {ContactCard, ContactList, ContactEdit, Popup} from 'vant'
export default {
  components: {
    [ContactCard.name]: ContactCard,
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data () {
    return {
      mainHeight: '0px',
      activeContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: '张三',
          tel: '13000000000',
          id: 0
        }
      ],
      contactHeight: window.innerHeight || document.documentElement.clientHeight
    }
  },

  computed: {
    cardType () {
      return this.activeContactId !== null ? 'edit' : 'add'
    },

    currentContact () {
      let id = this.activeContactId
      return id !== null ? this.list.filter(item => item.id === id)[0] : {}
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

    // 添加联系人
    handleAdd () {
      this.editingContact = {id: this.list.length}
      this.isEdit = false
      this.showEdit = true
    },

    // 编辑联系人
    handleEdit (item) {
      this.isEdit = true
      this.showEdit = true
      this.editingContact = item
    },

    // 选中联系人
    handleSelect () {
      this.showList = false
    },

    // 保存
    handleSave (item) {
      this.showList = false
      this.showEdit = false
      if (this.isEdit) {
        this.list = this.list.map(item1 => item1.id === item.id ? item : item1)
      } else {
        this.list.push(item)
      }
      this.activeContactId = item.id
    },

    // 删除
    handleDelete (info) {
      this.showEdit = false
      this.list = this.list.filter(item => item.id !== info.id)
      if (this.activeContactId === info.id) {
        this.activeContactId = null
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

  .contact-content {
    height: 100%;
  }
</style>
