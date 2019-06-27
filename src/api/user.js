import axios from '@/utils/custom-axios'


//pc端平台管理员登录接口
export const login = ((data) => {
  return axios({
    url: '/admin/authentications',
    //transformRequest 方法进行数据格式转换
    transformRequest: [
      function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'));
        return ret
      }
    ],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',

    },
    method: 'post',
    data
  })
})



export const getUserInfo = ((id) => {
  return axios.request({
    url: '/5a6a2f4c31ce0',
    data: {
      id: id
    }, //测试需要，请求体带上token，便于mock时确定用户信息
    method: 'get'
  })
})


//pc端平台管理员退出登录接口
export const logout = (() => {
  return axios.request({
    url: '/admin/logout',
    method: 'get'
  })
})