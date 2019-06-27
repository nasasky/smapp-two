import axios from '@/utils/custom-axios'


//移动端寺庙管理员信息类型接口
export const getleixing_mb = (() => {
    let url = '/infotype'
    return axios({
        url: url,
        method: 'get',


    })
})

//移动端寺庙管理员发布资讯接口
export const addUsizixun_mb = ((user) => {
    let url = '/templemanager/information'
    return axios.request({
        url: url,
        data: user,
        method: 'post',

    })
})