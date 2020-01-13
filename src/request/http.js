// import Vue from 'vue';
import axios from 'axios';
// import router from '../router';
import { _typeof } from '../utils/common'
import { notification } from 'ant-design-vue'

// import {
//   getToken,
//   removeToken,
// } from '../utils/common';
let token = ''
const msg = localStorage.getItem('loginMsg')
if (msg) {
  token = JSON.parse(msg).ticket
  // console.log(token)
}

// 默认请求超时时长
axios.defaults.timeout = 20000;

// POST 请求头
axios.defaults.headers.post['Content-Type']
  = 'application/x-www-form-urlencoded;charset=UTF-8';

// 拦截器
axios.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${token}`;
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器 根据服务器返回状态码
axios.interceptors.response.use(
  response => {
    const { status } = response
    if ([200, 201].includes(status)) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    // console.log(error.response.status)
    if (error.response.status) {
      const { status, statusText } = error.response;
      notification.error({
        message: status,
        description: statusText,
      });
      return Promise.reject(error.response)
    }
  }
);

/**
 * GET
 * @param {*} url 地址
 * @param {*} params 参数
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(res => {
      const data = parseData(res)
      resolve(data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      const data = parseData(res)
      resolve(data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

export function del(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, params).then(res => {
      const data = parseData(res)
      resolve(data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(res => {
      const data = parseData(res)
      resolve(data);
    }).catch(err => {
      reject(err.data);
    });
  });
}

/**
 * 解析 request response code
 * @param {number} n
 */
export function decode(n) {
  return Number(n) % 1000
}

/**
 *  合并status & code
 * @param {*} {}
 */
function parseData({ status, data }) {
  const { code: temp } = data;
  const code = temp ? decode(temp) : status
  const type = _typeof(data)
  let res = data;
  switch (type) {
    case 'Object':
      res = {
        ...data,
        code,
      }
      break
    case 'String':
      res = {
        data, code,
      }
      break
    case 'Boolean':
      res = {
        data, code,
      }
      break
    case 'Array':
      res = {
        list: data,
        code,
      }
  }
  return res
}
