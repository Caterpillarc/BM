import axios from 'axios'
// import qs from 'qs'
// import {getToken} from './auth'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const fetch = (url, data, method, handel) => {
  let {
    error = () => {
    }, headers = {}, ...rests
  } = handel
  // 处理header
  headers = { ...headers }
  const Authorization = headers['Authorization'] && typeof headers['Authorization'] === 'function' ? headers['Authorization']() : headers['Authorization']
  let promise
  let option = {
    headers: {
      ...headers,
      Authorization
    },
    timeout: 300000,
    validateStatus: function (status) {
      return true
    },
    ...rests,
    method,
    url
  }
  if (method === 'get') {
    option = { ...option, params: { ...data } }
  } else if (method === 'upload') {
    promise = axios.post(url, data, {
      validateStatus: function (status) {
        return true
      },
      ...rests,
      headers: {
        ...rests.headers,
        'Content-Type': 'multipart/form-data' // 以表单传数据的格式来传递fromdata
      }
    })
  } else {
    option = { ...option, data }
  }

  promise = promise || axios(option)
  return promise.then(({ data, status, statusText }) => {
    // if (status >= 400) {
    //   throw {statusCode: status, message: statusText}
    // }
    return data
  }).then(data => {
    const { status, code, message, msg } = data
    if (parseInt(status) !== 200 && parseInt(code) !== 200) {
      const statusInfo = {
        statusCode: status || code,
        message: JSON.stringify(message || msg)
      }
      throw statusInfo
    }
    return data
  }).then(data => ({ data })).catch(err => {
    error(err)
    // return { err }
    return { err, data: { data: {}, result: {} } }
  })
}
export default function _fetch (handel) {
  const get = (url, data = {}) => fetch(url, data, 'get', handel)
  const post = (url, data = {}) => fetch(url, data, 'post', handel)
  const del = (url, data = {}) => fetch(url, data, 'delete', handel)
  const put = (url, data = {}) => fetch(url, data, 'put', handel)
  const upload = (url, data = {}) => fetch(url, data, 'upload', handel)
  return {
    get, post, del, put, upload
  }
}
