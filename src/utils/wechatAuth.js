import axios from 'axios'

class WechatAuth {

  constructor(config) {
    let defaultConfig = {
      appid: 'wx04f94d90ce3a219b',
      responseType: 'code',
      redirect_uri: '',
      error_uri: '',
      scope: 'snsapi_userinfo',
      oauth_uri: '',
      login_uri: '',
      main_uri: ''
    }
    this.config = Object.assign(defaultConfig, config)
  }

  //调取微信获取code接口
  getCode() {
    let authPageBaseUri = 'https://open.weixin.qq.com/connect/oauth2/authorize'
    let authParams = `?appid=${this.config.appid}&redirect_uri=${this.config.redirect_uri}&response_type=${this.config.responseType}&scope=${this.config.scope}#wechat_redirect`
    console.log(authParams)
    window.location.href = authPageBaseUri + authParams
  }

  getCodeCallback(next, code, scene_id) {
    // 用户同意授权后回调方法
    // code：用户同意授权后，获得code值
    // code说明： code作为换取access_token的票据，每次用户授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。
    // next： 无论access_token是否获取成功,一定要调用该方法
    // next说明：next方法接收两个参数
    // 参数1(必填，切换到的路由地址，空字符串为当前路由，指定切换对象 next('/') 或者 next({ path: '/' })
    // 参数2为通过code值请求后端获取access_token的结果，true或者false，默认为false
    axios.get(this.config.oauth_uri, {
      params: {
        code,
        scene_id
      }
    }).then(response => {
      console.log(response)
      let data = response.data
      console.log(data)
      let success = data.success // 后端返回的获取accessToken成功或失败，布尔型
      if (success) {
        console.log('router')
        next('/cp/main') // 获取access_toeken成功
        // this.$router.push('/cp/main')
      } else {
        next(this.config.login_uri) // 获取access_token失败
      }
    }).catch(() => {
      next(this.config.login_uri) // ajax出现错误
    })
  }
}

export default WechatAuth
