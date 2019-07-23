const path = require('path')
const helper = require('./helper.js')
const fs = require('fs-extra');
const modulePath = helper.root('modules')

let entrys = {}
let files = fs.readdirSync(modulePath)
console.log(files);
files.forEach(file=> {
  entrys[file] = path.resolve(modulePath, file, 'main.js')
})
console.log(entrys)

module.exports = entrys