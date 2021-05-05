import axios from 'axios';
import {BASE_URL} from './config';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const instance = axios.create({
    baseURL:BASE_URL,
    // timeout:TIMEOUT
})
NProgress.configure({ easing: 'ease', speed: 400 });
instance.interceptors.request.use(config => {
    // console.log(config)
    //1.比如config中的一些信息不符合服务器要求
    //2.比如每次发送网络请求时,都希望在界面显示换一个请求图标
    //3.某些网络请求(比如登录(token)),必须携带一些特殊信息
    NProgress.start(); // 启动滚动条
    return config
  }, err => {
    console.log(err)
  })

  //拦截响应
  instance.interceptors.response.use(res => {
    NProgress.done()// 关闭滚动条
    return res.data
  }, err => {
    console.log(err)
  })
export default instance;