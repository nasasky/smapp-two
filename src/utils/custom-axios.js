import axios from 'axios'
//import store from '@/store'
//import router from '@/router'

//const baseURL = 'http://192.168.0.18/api'

//axios.defaults.baseURL = baseURL

//axios.defaults.baseURL = 'baseURL'

//对生产环境和开发环境进行合并处理

if (process.env.NODE_ENV === 'development') {

  axios.defaults.baseURL = '/api' //开发环境测试地址

} else if (process.env.NODE_ENV === 'production') {

  axios.defaults.baseURL = 'http://192.168.0.18/api' //打包生产环境地址
}


// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 拦截每次请求,携带token
    config.headers.Authorization = localStorage.getItem('token')
    return config

  },

  function (error) {
    // Do something with request error

    return Promise.reject(error)

  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // Do something with response data
    // 可以根据响应数据中的code值来做不同的处理（和后端约定）
    //console.log('请求响应数据：',response)
    return response;
  },
  error => {
    // Do something with response error
    if (error && error.response) {
      switch (error.response.status) {
        case 400: {
          console.log('请求错误(400)');
          break;
        }
        case 401: {
          console.log('未授权，请重新登录(401)');
          //删除本地token，重新登陆
          break;
        }
        default: {
          console.log(error.response.status);
        }
      }
    } else {
      console.log('连接服务器失败！');
    }
    return Promise.reject(error); //如果用Promise.resolve(err)，则回调中能收到通知
  });

export default axios