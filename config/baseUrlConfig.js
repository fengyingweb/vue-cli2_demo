'use strict';

const http = window.location.protocol;
// console.log('$envType: ', $envType);
module.exports = {
  get baseUrl() {
    let urlTest = [`${http}//www.dev.com`, `${http}//www.sit.com`, `${http}//www.prod.com`];
    return urlTest[$envType.type];
  }
}