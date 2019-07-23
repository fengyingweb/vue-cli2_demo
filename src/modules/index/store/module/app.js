import {getMenus} from '../../api/api'
const app = {
  state: {
    isOpen: false,
    token: 'app',
    direction: 'forward',
    baseLists: [],
    formLists: [],
    feedbackLists: [],
    showLists: [],
    navLists: [],
    serviceLists: []
  },

  getters: {
    filterToken (state) {
      return state.token
    }
  },

  mutations: {
    setIsOpne (state, playload) {
      state.isOpen = playload.isOpen
    },

    setLists (state, playload) {
      state.baseLists = playload.baseList || []
      state.formLists = playload.formList || []
      state.feedbackLists = playload.feedbackList || []
      state.showLists = playload.showList || []
      state.navLists = playload.navList || []
      state.serviceLists = playload.serviceList || []
    },

    setDirection (state, playload) {
      state.direction = playload.direction || 'forward'
    }
  },

  actions: {
    getMenuLists ({commit, state}, params) {
      return new Promise((resolve, reject) => {
        // TODO something
        getMenus(params).then(res => {
          console.log(res)
          if (res.success) {
            let {
              baseList = [],
              formList = [],
              feedbackList = [],
              showList = [],
              navList = [],
              serviceList = []} = res.result
            let playload = {
              baseList,
              formList,
              feedbackList,
              showList,
              navList,
              serviceList
            }
            commit('setLists', playload)
            resolve()
          } else {
            reject(res)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default app
