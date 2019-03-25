import fetch from './fetch'
import * as utils from './util'
export default {
  install: (Vue, options) => {
    Vue.$_util = Vue.prototype.$_util = utils
    Vue.$_createFetch = Vue.prototype.$_createFetch = fetch
    //   Object.keys(filters).forEach(key => {
    //     Vue.filter(key, filters[key])
    //   })
    //   Vue.mixin(pagination)
    //   Vue.component('Cache', Cache)
  }
}
