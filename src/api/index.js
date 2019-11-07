import axios from 'axios'

// 创建一个 axios 实例(接口)
const ajx = axios.create({
  // baseURL: 'http://stage.ocheng.me/api/',
  // baseURL: 'http://scrm.ocheng.me/v2/api/',
  baseURL: '/api/',
  // baseURL:process.env.VUE_APP_BASEURL,
  timeout: 1000 * 180,
  withCredentials: true,
//   headers: {
//     Accept: 'application/json',
//     'X-Channel': configUrl.channelId,
//     'X-Channel-Type': SSL_OP_NO_TLSv1_1,
//     'Content-Security-Policy': 'upgrade-insecure-requests'
//   }
})



export function HttpGet(url, params = {}) {
  return new Promise((resolve, reject) => {
    ajx.get(url, {
      params
    })
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function HttpPost(url, data = {}) {
  return new Promise((resolve, reject) => {
    ajx.post(url, data)
      .then((response) => {
        if (url === 'user/signin') {
          // /登录,把请求头返回
          resolve(response)
        } else {
          resolve(response.data)
        }
      }, (err) => {
        reject(err)
      })
  })
}

export function HttpPatch(url, data = {}) {
  return new Promise((resolve, reject) => {
    ajx.patch(url, data)
      .then((response) => {
        resolve(response.data)
      }, (err) => {
        reject(err)
      })
  })
}

export function HttpPut(url, data = {}) {
  return new Promise((resolve, reject) => {
    ajx.put(url, data)
      .then((response) => {
        resolve(response.data)
      }, (err) => {
        reject(err)
      })
  })
}
export function HttpDelete(url, data = {}) {
  return new Promise((resolve, reject) => {
    ajx.delete(url, data)
      .then((response) => {
        resolve(response.data)
      }, (err) => {
        reject(err)
      })
  })
}
