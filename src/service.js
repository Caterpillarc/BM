import createBMService from './api/bm'
import { getToken } from './libs/util'
export default vue => {
  // 错误处理
  const error = ({ statusCode = 500, message = '未知错误' }) => {
    if (message.indexOf('timeout') > -1) {
      message = '请求超时'
    }
    if (parseInt(statusCode) === 403) {
      sessionStorage.clear()
      history.go(0)
    }
    // Message.error(message)
  }

  const fetchAPI = vue.$_createFetch({
    headers: {
      'Authorization': getToken()
    },
    error
  })
  return {
    apiq: createBMService(fetchAPI)
  }
}
