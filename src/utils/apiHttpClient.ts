import axios from 'axios';
import { API_BASE_URL } from '../config/index'

/**
 * 封装的客户端HTTP请求方法
 */
export const apiHttpClient = axios.create({
  baseURL: API_BASE_URL, 
})