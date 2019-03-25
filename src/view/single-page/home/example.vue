<template>
  <div>
    <ListSearchView
      @searchData="searchData"
      @add="add"
      showAdd
      :typeList="typeList"
    >
      <Button slot="extraBtn">结算</Button>
    </ListSearchView>
  </div>
</template>

<script>
import ListSearchView from '@/components/searchView/ListSearchView.vue'
export default {
  name: 'serviceRequests',
  components: {
    ListSearchView
  },
  data () {
    return {
      dom: null,
      typeList: ['accountType', 'appName', 'appStatus', 'saleName', 'dealDate', 'useRate']
    }
  },
  methods: {
    searchData (data) {
      console.log(data)
    },
    add () {
      console.log(1)
    }
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>
