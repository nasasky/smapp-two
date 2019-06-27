import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/cplogin',
      name: 'cplogin',
      component: () => import('./views/commonPeople/Login.vue')
    },
    {
      path: '/cp/main',
      name: 'cpmain',
      component: () => import('./views/commonPeople/Main.vue')
    },
    {
      path: '/tmbind',
      name: 'tmbind',
      component: () => import('./views/templeManager/BindWechat.vue')
    },
    {
      path: '/tmlogin',
      name: 'tmbind',
      component: () => import('./views/templeManager/TMLogin.vue')
    },
    //手机端寺庙管理员路由

    {
      path: '/homex',
      name: 'homex',
      component: resolve => require(['./views/homex'], resolve),
      children: [{
          path: '/homex',
          redirect: '/homex/index'
        },
        {
          path: '/homex/mine',
          name: 'mine',
          component: resolve => require(['./views/moblie/substitute'], resolve),
        },
        {
          path: '/homex/fomenziliao',
          name: 'fomenziliao',
          component: resolve => require(['./views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/homex/index',
          name: 'substitute',
          component: resolve => require(['./views/moblie/index'], resolve),
        },
        {
          path: '/homex/course',
          name: 'course',
          component: resolve => require(['./views/moblie/ad'], resolve),
        }
      ]
    },


    //手机端僧人页面
    {
      path: '/senghome',
      name: 'senghome',
      component: resolve => require(['./views/senghome'], resolve),
      children: [{
          path: '/senghome',
          redirect: '/senghome/index'
        },
        {
          path: '/senghome/mine',
          name: 'mi',
          component: resolve => require(['./views/moblie/sengsub'], resolve),
        },
        {
          path: '/senghome/fomenziliao',
          name: 'fo',
          component: resolve => require(['./views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/senghome/index',
          name: 'su',
          component: resolve => require(['./views/moblie/index'], resolve),
        },
        {
          path: '/senghome/course',
          name: 'co',
          component: resolve => require(['./views/moblie/ad'], resolve),
        }
      ]
    },



    //手机端民众页面
    {
      path: '/mingzhong',
      name: 'mingzhong',
      component: resolve => require(['./views/mingzhong'], resolve),
      children: [{
          path: '/mingzhong',
          redirect: '/mingzhong/index'
        },
        {
          path: '/mingzhong/mine',
          name: 'mix',
          component: resolve => require(['./views/moblie/mzcenter'], resolve),
        },
        {
          path: '/mingzhong/fomenziliao',
          name: 'fox',
          component: resolve => require(['./views/moblie/fomenziliao'], resolve),
        },
        {
          path: '/mingzhong/index',
          name: 'sux',
          component: resolve => require(['./views/moblie/index'], resolve),
        },
        {
          path: '/mingzhong/course',
          name: 'cox',
          component: resolve => require(['./views/moblie/ad'], resolve),
        }
      ]
    },



    //手机端公共页面
    {
      path: '/moblie/substitute',
      name: 'moblie/substitute',
      component: resolve =>
        require(['./views/moblie/substitute'], resolve),
    }, {
      path: '/moblie/publish',
      name: 'moblie/publish',
      component: resolve =>
        require(['./views/moblie/publish'], resolve),
    }, {
      path: '/moblie/sengren',
      name: 'moblie/sengren',
      component: resolve =>
        require(['./views/moblie/sengren'], resolve),
    },

    {
      path: '/moblie/fabunews',
      name: 'moblie/fabunews',
      component: resolve =>
        require(['./views/moblie/fabunews'], resolve),
    }, {
      path: '/moblie/fabushangpin',
      name: 'moblie/fabushangpin',
      component: resolve =>
        require(['./views/moblie/fabushangpin'], resolve),
    }, {
      path: '/moblie/course',
      name: 'moblie/course',
      component: resolve =>
        require(['./views/moblie/course'], resolve),
    }, {
      path: '/moblie/simiaolie',
      name: 'moblie/simiaolie',
      component: resolve => require(['./views/moblie/simiaolie'], resolve),
    }, {
      path: '/moblie/renlie',
      name: 'moblie/renlie',
      component: resolve =>
        require(['./views/moblie/renlie'], resolve),
    }, {
      path: '/moblie/newslie',
      name: 'moblie/newslie',
      component: resolve =>
        require(['./views/moblie/newslie'], resolve),
    }, {
      path: '/moblie/shanglie',
      name: 'moblie/shanglie',
      component: resolve =>
        require(['./views/moblie/shanglie'], resolve),
    }, {
      path: '/moblie/test',
      name: 'moblie/test',
      component: resolve =>
        require(['./views/moblie/test'], resolve),
    }, {
      path: '/moblie/dingwei',
      name: 'moblie/dingwei',
      component: resolve => require(['./views/moblie/dingwei'], resolve),
    }, {
      path: '/moblie/fashi',
      name: 'moblie/fashi',
      component: resolve => require(['./views/moblie/fashi'], resolve),
    }, {
      path: '/moblie/fomenziliao',
      name: 'moblie/fomenziliao',
      component: resolve => require(['./views/moblie/fomenziliao'], resolve),
    }, {
      path: '/moblie/fomenyaowen',
      name: 'moblie/fomenyaowen',
      component: resolve => require(['./views/moblie/fomenyaowen'], resolve),
    }, {
      path: '/moblie/fomenshangju',
      name: 'moblie/fomenshangju',
      component: resolve => require(['./views/moblie/fomenshangju'], resolve),
    }, {
      path: '/moblie/bangding',
      name: 'moblie/bangding',
      component: resolve => require(['./views/moblie/bangding'], resolve),
    }, {
      path: '/moblie/mzcenter',
      name: 'moblie/mzcenter',
      component: resolve => require(['./views/moblie/mzcenter'], resolve),
    },





    {
      path: '/xinzen/saomiao',
      name: 'xinzen/saomiao',
      component: resolve => require(['./views/xinzen/saomiao'], resolve),

    }, {
      path: '/xinzen/queren',
      name: 'xinzen/queren',
      component: resolve => require(['./views/xinzen/queren'], resolve),
    }



  ]
})
