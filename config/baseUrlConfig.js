'use strict';

const http = window.location.protocol;
// console.log('$envType: ', $envType);
let type = 0;
if (process.env.NODE_ENV === 'development') {
  type = 0;
} else if (process.env.NODE_ENV === 'production') {
  if (location.href.includes('sit')) {
    type = 1;
  } else {
    type = 2;
  }
}
module.exports = {
  get baseUrl() {
    let urlTest = [`${http}//www.dev.com`, `${http}//www.sit.com`, `${http}//www.prod.com`];
    return urlTest[type];
  }
}