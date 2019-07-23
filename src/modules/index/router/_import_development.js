// 注意vue-loader@13.* require的使用发生了变化, 引用vue组件时需加上.default
module.exports = file => require('@/modules/index/views/' + file + '.vue').default
