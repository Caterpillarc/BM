const optionCopy = {
  input: {
    label: '',
    value: '',
    input: true
  },
  select: {
    label: '',
    value: '',
    options: [],
    select: true
  },
  range: {
    label: '',
    from: '',
    to: '',
    range: true
  },
  datePicker: {
    label: '',
    value: '',
    datePick: true
  },
  dateRangePick: {
    label: '',
    value: '',
    dateRangePick: true
  }
}
/**

 * 应用管理

 */

// 应用
optionCopy.appName = {
  ...optionCopy.input,
  value: 'appName',
  appName: '',
  label: '应用',
  placeholder: '请输入应用名称'
}

// 状态
optionCopy.appStatus = {
  ...optionCopy.select,
  value: 'appStatus',
  appStatus: '',
  label: '状态',
  options: mapped(['0-全部', '1-正常', '2-锁定'])
}

// 指定代币优惠活动
optionCopy.saleName = {
  ...optionCopy.input,
  label: '优惠活动',
  value: 'saleName',
  saleName: '',
  placeholder: '请输入描述或编号'
}

// 用户管理 - 账目类型
optionCopy.accountType = { ...optionCopy.select,
  value: 'accountType',
  label: '账目类型',
  accountType: '',
  options: mapped(['0-全部', '1-收入', '2-支出'])
}
// 商家管理 -日期
optionCopy.dealDate = {
  ...optionCopy.dateRangePick,
  value: 'dealDate',
  label: '日期',
  dealDate: []
}

// 用户管理 - 使用频率
optionCopy.useRate = {
  ...optionCopy.range,
  from: '',
  to: '',
  useRate: '',
  label: '使用频率'
}

function mapped (options) {
  if (!Array.isArray(options)) return
  return options.map(item => {
    const temp = item.split('-')
    return {
      value: temp[0],
      label: temp[1]
    }
  })
}

function trans (optionCopy) {
  return function (typeList) {
    if (!Array.isArray(typeList)) return
    return typeList.map(item => {
      return optionCopy[item]
    })
  }
}
const transToOptions = trans(optionCopy)
export { optionCopy, transToOptions }
