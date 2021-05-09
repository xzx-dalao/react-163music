import axios from 'axios';
import { BASE_URL_163 } from './config';
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

export default function request(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: BASE_URL_163,
    });

    // 配置请求和响应拦截
    instance.interceptors.request.use(config => {
      NProgress.start(); // 启动滚动条
      return config
    }, err => {
      return err
    })
    instance.interceptors.response.use(response => {
      NProgress.done()// 关闭滚动条
      return response.data
    }, err => {
      console.log('来到了response拦截failure中');
      console.log(err);
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break
          case 401:
            err.message = '未授权的访问'
            break
          default:
            err.message = "其他错误信息"
        }
      }
      return err
    })
    // 2.传入对象进行网络请求
    instance(option).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

