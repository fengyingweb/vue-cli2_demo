const _import = require('./_import_' + process.env.NODE_ENV)
let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: _import('home/home'),
    name: 'Home',
    redirect: '/home/base',
    children: [
      {
        path: 'base',
        component: _import('home/base'),
        name: 'Base'
      },
      {
        path: 'form',
        component: _import('home/form'),
        name: 'Form'
      },
      {
        path: 'feedback',
        component: _import('home/feedback'),
        name: 'Feedback'
      },
      {
        path: 'show',
        component: _import('home/show'),
        name: 'Show'
      },
      {
        path: 'nav',
        component: _import('home/nav'),
        name: 'Nav'
      },
      {
        path: 'service',
        component: _import('home/service'),
        name: 'Service'
      }
    ]
  },
  {
    path: '/button',
    component: _import('base/button'),
    name: 'Button'
  },
  {
    path: '/cell',
    component: _import('base/cell'),
    name: 'Cell'
  },
  {
    path: '/icon',
    component: _import('base/icon'),
    name: 'Icon'
  },
  {
    path: '/layout',
    component: _import('base/layout'),
    name: 'Layout'
  },
  {
    path: '/popup',
    component: _import('base/popup'),
    name: 'Popup'
  },
  {
    path: '/checkbox',
    component: _import('form/checkbox'),
    name: 'Checkbox'
  },
  {
    path: '/datetimePicker',
    component: _import('form/datetimePicker'),
    name: 'DatetimePicker'
  },
  {
    path: '/field',
    component: _import('form/field'),
    name: 'Field'
  },
  {
    path: '/numberKeyboard',
    component: _import('form/numberKeyboard'),
    name: 'NumberKeyboard'
  },
  {
    path: '/passwordInput',
    component: _import('form/passwordInput'),
    name: 'PasswordInput'
  },
  {
    path: '/picker',
    component: _import('form/picker'),
    name: 'Picker'
  },
  {
    path: '/radio',
    component: _import('form/radio'),
    name: 'Radio'
  },
  {
    path: '/rate',
    component: _import('form/rate'),
    name: 'Rate'
  },
  {
    path: '/search',
    component: _import('form/search'),
    name: 'Search'
  },
  {
    path: '/slider',
    component: _import('form/slider'),
    name: 'Slider'
  },
  {
    path: '/stepper',
    component: _import('form/stepper'),
    name: 'Stepper'
  },
  {
    path: '/switch',
    component: _import('form/switch'),
    name: 'Switch'
  },
  {
    path: '/switchCell',
    component: _import('form/switchCell'),
    name: 'SwitchCell'
  },
  {
    path: '/uploader',
    component: _import('form/uploader'),
    name: 'Uploader'
  },
  {
    path: '/actionsheet',
    component: _import('feedback/actionsheet'),
    name: 'Actionsheet'
  },
  {
    path: '/dialog',
    component: _import('feedback/dialog'),
    name: 'Dialog'
  },
  {
    path: '/loading',
    component: _import('feedback/loading'),
    name: 'Loading'
  },
  {
    path: '/notify',
    component: _import('feedback/notify'),
    name: 'Notify'
  },
  {
    path: '/pullRefresh',
    component: _import('feedback/pullRefresh'),
    name: 'PullRefresh'
  },
  {
    path: '/swipeCell',
    component: _import('feedback/swipeCell'),
    name: 'SwipeCell'
  },
  {
    path: '/toast',
    component: _import('feedback/toast'),
    name: 'Toast'
  },
  {
    path: '/circle',
    component: _import('show/circle'),
    name: 'Circle'
  },
  {
    path: '/collapse',
    component: _import('show/collapse'),
    name: 'Collapse'
  },
  {
    path: '/imagePreview',
    component: _import('show/imagePreview'),
    name: 'ImagePreview'
  },
  {
    path: '/lazyload',
    component: _import('show/lazyload'),
    name: 'Lazyload'
  },
  {
    path: '/list',
    component: _import('show/list'),
    name: 'List'
  },
  {
    path: '/noticeBar',
    component: _import('show/noticeBar'),
    name: 'NoticeBar'
  },
  {
    path: '/panel',
    component: _import('show/panel'),
    name: 'Panel'
  },
  {
    path: '/progress',
    component: _import('show/progress'),
    name: 'Progress'
  },
  {
    path: '/steps',
    component: _import('show/steps'),
    name: 'Steps'
  },
  {
    path: '/swipe',
    component: _import('show/swipe'),
    name: 'Swipe'
  },
  {
    path: '/tag',
    component: _import('show/tag'),
    name: 'Tag'
  },
  {
    path: '/badge',
    component: _import('nav/badge'),
    name: 'Badge'
  },
  {
    path: '/navBar',
    component: _import('nav/navBar'),
    name: 'NavBar'
  },
  {
    path: '/pagination',
    component: _import('nav/pagination'),
    name: 'Pagination'
  },
  {
    path: '/tab',
    component: _import('nav/tab'),
    name: 'Tab'
  },
  {
    path: '/tabbar',
    component: _import('nav/tabbar'),
    name: 'Tabbar'
  },
  {
    path: '/treeSelect',
    component: _import('nav/treeSelect'),
    name: 'TreeSelect'
  },
  {
    path: '/addressEdit',
    component: _import('service/addressEdit'),
    name: 'AddressEdit'
  },
  {
    path: '/addressList',
    component: _import('service/addressList'),
    name: 'AddressList'
  },
  {
    path: '/area',
    component: _import('service/area'),
    name: 'Area'
  },
  {
    path: '/card',
    component: _import('service/card'),
    name: 'Card'
  },
  {
    path: '/contact',
    component: _import('service/contact'),
    name: 'Contact'
  },
  {
    path: '/coupon',
    component: _import('service/coupon'),
    name: 'Coupon'
  },
  {
    path: '/goodsAction',
    component: _import('service/goodsAction'),
    name: 'GoodsAction'
  },
  {
    path: '/submitBar',
    component: _import('service/submitBar'),
    name: 'SubmitBar'
  },
  {
    path: '/sku',
    component: _import('service/sku'),
    name: 'Sku'
  },
  {
    path: '*',
    redirect: {
      path: '/'
    }
  }
]

export default routes
