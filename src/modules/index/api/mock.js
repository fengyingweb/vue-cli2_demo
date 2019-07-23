import Mock from 'mockjs'

const allDatas = [
  {
    path: '/getMenus',
    type: 'post',
    data: {
      code: '0',
      success: true,
      message: 'success',
      result: {
        baseList: [
          {title: 'Button 按钮', path: '/button'},
          {title: 'Cell 单元格', path: '/cell'},
          {title: 'Icon 图标', path: '/icon'},
          {title: 'Layout 布局', path: '/layout'},
          {title: 'Popup 弹出层', path: '/popup'}
        ],
        formList: [
          {title: 'Checkbox 复选框', path: '/checkbox'},
          {title: 'DatetimePicker 时间选择', path: '/datetimePicker'},
          {title: 'Field 输入框', path: '/field'},
          {title: 'NumberKeyboard 数字键盘', path: '/numberKeyboard'},
          {title: 'PasswordInput 密码输入框', path: '/passwordInput'},
          {title: 'Picker 选择器', path: '/picker'},
          {title: 'Radio 单选框', path: '/radio'},
          {title: 'Rate 评分', path: '/rate'},
          {title: 'Search 搜索', path: '/search'},
          {title: 'Slider 滑块', path: '/slider'},
          {title: 'Stepper 步进器', path: '/stepper'},
          {title: 'Switch 开关', path: '/switch'},
          {title: 'SwitchCell 开关单元格', path: '/switchCell'},
          {title: 'Uploader 图片上传', path: '/uploader'}
        ],
        feedbackList: [
          {title: 'Actionsheet 上拉菜单', path: '/actionsheet'},
          {title: 'Dialog 弹出框', path: '/dialog'},
          {title: 'Loading 加载', path: '/loading'},
          {title: 'Notify 消息提示', path: '/notify'},
          {title: 'PullRefresh 下拉刷新', path: '/pullRefresh'},
          {title: 'SwipeCell 滑动单元格', path: '/swipeCell'},
          {title: 'Toast 轻提示', path: '/toast'}
        ],
        showList: [
          {title: 'Circle 环形进度条', path: '/circle'},
          {title: 'Collapse 折叠面板', path: '/collapse'},
          {title: 'ImagePreview 图片预览', path: '/imagePreview'},
          {title: 'Lazyload 图片懒加载', path: '/lazyload'},
          {title: 'List 列表', path: '/list'},
          {title: 'NoticeBar 通告栏', path: '/noticeBar'},
          {title: 'Panel 面板', path: '/panel'},
          {title: 'Progress 进度条', path: '/progress'},
          {title: 'Steps 步骤条', path: '/steps'},
          {title: 'Swipe 轮播', path: '/swipe'},
          {title: 'Tag 标记', path: '/tag'}
        ],
        navList: [
          {title: 'Badge 徽章', path: '/badge'},
          {title: 'NavBar 导航栏', path: '/navBar'},
          {title: 'Pagination 分页', path: '/pagination'},
          {title: 'Tab 标签页', path: '/tab'},
          {title: 'Tabbar 标签栏', path: '/tabbar'},
          {title: 'TreeSelect 分类选择', path: '/treeSelect'}
        ],
        serviceList: [
          {title: 'AddressEdit 地址编辑', path: '/addressEdit'},
          {title: 'AddressList 地址列表', path: '/addressList'},
          {title: 'Area 省市区选择', path: '/area'},
          {title: 'Card 卡片', path: '/card'},
          {title: 'Contact 联系人', path: '/contact'},
          {title: 'Coupon 优惠券选择器', path: '/coupon'},
          {title: 'GoodsAction 商品导航', path: '/goodsAction'},
          {title: 'SubmitBar 提交订单栏', path: '/submitBar'},
          {title: 'Sku 商品规格', path: '/sku'}
        ]
      }
    }
  }
]

const productDatas = (datas) => {
  datas.forEach(item => {
    Mock.mock(new RegExp(item.path), item.type, item.data)
  })
}
// console.log(Mock)
productDatas(allDatas)
