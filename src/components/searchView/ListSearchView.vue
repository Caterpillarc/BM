<style lang="less">
  @import './search.less';
</style>

<template>
    <div class="search-container">
        <Form inline :label-width="85" id="search-form">
            <FormItem
              v-for="(item, index) in term_list"
              :key="index"
              :label="item.label">
                <Input
                  :size="size"
                  clearable
                  v-model="item[item.value]"
                  class="search-input"
                  :placeholder="item.placeholder"
                  v-if="item.input"/>
                <Select
                  v-if="item.select"
                  clearable
                  v-model="item[item.value]"
                  class="search-select"
                >
                  <Option
                    :size="size"
                    v-for="(i, index) in item.options"
                    :key="index"
                    :value="i.value"
                    :label="i.label"
                  >
                  </Option>
                </Select>
                <RadioGroup
                  clearable
                  v-if="item.radio"
                  v-model="item[item.value]"
                  class="search-radio"
                >
                  <Radio
                  v-for="(i, index) in item.options"
                  :key="index"
                  :label="i.value"
                  ></Radio>
                </RadioGroup>
                <DatePicker
                  clearable
                  v-if="item.dateRangePick"
                  v-model="item[item.value]"
                  type="daterange"
                  class="search-dateRange"></DatePicker>
                <div
                  v-if="item.range"
                  style="display: inline-block">
                  <InputNumber
                    clearable
                    v-model="item.from"
                  >
                  </InputNumber>
                  —
                  <InputNumber
                    clearable
                    v-model="item.to"
                    :min="item.from"
                  >
                  </InputNumber>
                </div>
            </FormItem>
        </Form>
        <div class="search-btns">
          <Button
            @click="search"
            class="btn-mr"
            type="primary">筛选</Button>
            <Button
            @click="add"
            v-if="showAdd"
            class="btn-mr"
            type="primary">添加</Button>
          <slot name="extraBtn"></slot>
        </div>
    </div>
</template>
<script>

import { transToOptions } from './searchOptions'

export default {
  name: 'ListSearchView',
  props: {
    size: {
      type: String,
      defalut: 'small'
    },
    showAdd: {
      type: Boolean,
      default: false
    },
    typeList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  created () {
    this.term_list = transToOptions(this.typeList)
  },
  methods: {
    search () {
      const data = this.term_list.map(item => {
        let temp = {}
        temp[item.value] = item[item.value]
        return temp
      })
      this.$emit('searchData', data)
    },
    // 添加
    add () {
      this.$emit('add')
    }
  },
  data () {
    return {
      term_list: []
    }
  }
}
</script>
