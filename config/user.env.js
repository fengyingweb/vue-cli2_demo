/**
 *
 * 环境配置文件说明：
 * 1.建议经常性修改的环境信息都写在当前文件（避免重复修改需打包发布）
 * 2.带有私密性内容写在环境变量中
 */
var environment = (function () {
  // 后台接口域
  var _application = {
    apiserver: '/api/server',
  };
  //项目目录
  var _pathName = '/';

  return {
    securityKey: 'test_token',// 前端秘钥
    // 基础框架配置
    apiserver: {
      APPLICATION_NAME: _application.apiserver,
    }
  }
})();

window.environment = environment;
