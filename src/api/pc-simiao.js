import axios from '@/utils/custom-axios'


//pc端寺庙管理员登录接口
export const simiaologin = ((data) => {
    return axios({
        url: '/templemanager/authentications',
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


//pc端寺庙管理员退出登录接口
export const logout = (() => {
    return axios.request({
        url: '/templemanager/logout',
        method: 'get'
    })
})


//pc端寺庙管理员添加寺庙信息接口
export const addUsi = ((user) => {
    let url = '/templemanager/temple'
    return axios.request({
        url: url,
        data: user,
        method: 'post',

    })
})


//pc端寺庙管理员发布资讯接口
export const addUsizixun = ((user) => {
    let url = '/templemanager/information'
    return axios.request({
        url: url,
        data: user,
        method: 'post',

    })
})

//移动端寺庙管理员信息类型接口
export const getleixing = (() => {
    let url = '/infotype'
    return axios({
        url: url,
        method: 'get',


    })
})




//pc端寺庙管理员获取微信二维码接口
export const getma = (() => {
    return axios({
        url: '/templemanager/bindqrcode',
        method: 'get',

    })
})