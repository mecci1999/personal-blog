import axios from 'axios';
// import { API_BASE_URL } from '../config/index';

/**
 * 封装的客户端HTTP请求方法
 */
export const apiHttpClient = axios.create({
  baseURL: 'http://localhost:3000',
});

/**
 * 封装的第三方tenapi.cn接口请求
 */
export const tenApiHttpRequest = axios.create({
  baseURL: 'https://tenapi.cn/',
});

export const thirdQQHttpRequest = axios.create({
  baseURL: 'https://thirdqq.qlogo.cn/',
});
