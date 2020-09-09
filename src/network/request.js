//用于封装axios
import axios from 'axios'
export function request(config) {
    //方法二
    const instancel = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/z8',
            timeout: 5000
        })
        //拦截器的使用
        //请求拦截器 (用于拦截token，判断是否登录，请求加载页面)
    instancel.interceptors.request.use(config => {
        // console.log(config)
        return config
    }, err => {
        console.log(err)
    })

    //响应拦截器 (对数据进行更改)
    instancel.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })


    return instancel(config)


}