const path = require('path')
const glob = require('glob')
const helper = require('./helper.js')
const modulePath = helper.root('modules')

let htmlFiles = {}
let pageName = ''
let pages = glob.sync(`${modulePath}/**/*.html`)
pages.forEach(pagePath=> {
  let basename = path.basename(pagePath, path.extname(pagePath))
  pageName = basename
  htmlFiles[pageName] = {}
  htmlFiles[pageName]['chunk'] = basename
  htmlFiles[pageName]['path'] = pagePath
})

module.exports = {
  htmlFiles
};