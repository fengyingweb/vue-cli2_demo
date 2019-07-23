// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      "browsers": ["Android >= 4.0", "iOS >= 7"]
    },
    "postcss-pxtorem": {
      "rootValue": 37.5, // 基准值, 例如设计稿元素宽度为375px, 转换为rem为375/37.5 = 10rem
      "propList": ["*"],
      "mediaQuery": false, // （布尔值）允许在媒体查询中转换px
      "minPixelValue": 0 //设置要替换的最小像素值(0px会被转rem)。 默认 0
    }
  }
}
