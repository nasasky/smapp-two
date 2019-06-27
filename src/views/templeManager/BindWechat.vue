<template>
  <div>
    <h1>This is an TempleManager bind page</h1>
  </div>
</template>
<script>
import WechatAuth from '@/utils/wechatAuth'

export default {
   name: 'TempleManagerBind',
   beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    let wa = new WechatAuth({
      redirect_uri: encodeURIComponent('http://smapp.natapp1.cc/tmbind?scene_id='+to.query.scene_id),
      oauth_uri: '/api/oauthbindtemplemanager',
      login_uri: `/tmbind?scene_id=${to.query.scene_id}`,
      main_uri: '/tm/main'
    })

    if (to.query.code) {
      wa.getCodeCallback(next, to.query.code, to.query.scene_id)
    } else {
      wa.getCode()
    }

    next()
  }
}
</script>
