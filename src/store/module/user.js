import {
  setToken,
  getToken,
  setid,
  removeToken,
  setUserName,
  getUserName,
  removeUserName
} from '@/utils/user'

export default {
  state: {
    username: getUserName(),
    token: getToken(),
    role: [], //用户角色
    hasGetUserInfo: false,
    //avatar: '',
  },
  getters: {
    //
  },
  mutations: {
    setUserName(state, username) {
      state.username = username
      //localStorage.setItem('username', username);

      setUserName(username) //调用@/utils/user.js中的同名函数
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    },
    setid(state, id) {
      state.id = id
      setid(id)
    },
    removeUserName(state) {
      state.username = ''
      removeUserName()
    },
    removeToken(state) {
      state.token = ''
      removeToken()
    },
    setRole(state, role) {
      state.role = role
    },
    setHasGetUserInfo(state, status) {
      state.hasGetUserInfo = status
    }

  },
  actions: {
    //登陆

    //获取用户信息
    // handleUserInfo({
    //   state,
    //   commit
    // }) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo(state.id).then(res => {
    //       const data = res.data
    //       commit('setUserName', data.data.username)

    //       // commit('setRole', data.data.role)
    //       commit('setHasGetUserInfo', true)
    //       resolve()
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // },
    //退出登陆
    handleLogout({
      commit
    }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('removeUserName')
          commit('removeToken')
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

  }
}