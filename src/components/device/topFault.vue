<template>
  <div class="table">
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    />
  </div>
</template>
<script>
export default {
  name: 'TopFault',
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: '加氢裂化',
          fault: 25
        }, {
          key: '1',
          name: '延迟焦化',
          fault: 23
        }, {
          key: '2',
          name: '催化裂化',
          fault: 23
        }, {
          key: '3',
          name: '气体脱硫',
          fault: 18
        }, {
          key: '4',
          name: '污水处理',
          fault: 18
        }
      ],
      columns: [
        {
          title: '装置名称',
          dataIndex: 'name',
          width: '50%'
        },
        {
          title: '故障数',
          dataIndex: 'fault',
          width: '50%',
          scopedSlots: { customRender: 'fault' }
        }
      ],
    };
  },
  created() {

  },
  beforeDestroy() {
  },
  methods: {

  },
  computed: {
  }
};
</script>
<style scoped>
  .table >>> .ant-table-body {
    width: 336px;
    margin-top: 10px;
  }
  .table >>> .ant-table-thead {
    opacity: 0.5;
    background-image: linear-gradient(269deg, #4813FF 0%, #0AECF9 100%);
  }
  .table >>> .ant-table-thead > tr > th {
    padding: 0;
    height: 40px;
    background: transparent;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #CFDDFF;
    letter-spacing: 0;
    line-height: 40px;
    text-align: center;
  }
  .table >>> .ant-table-tbody > tr > td {
    padding: 0;
    opacity: 0.5;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #CFDDFF;
    letter-spacing: 0;
    text-align: center;
    line-height: 40px;
    opacity: 0.7;
    border-bottom: 1px solid #192444;
  }
</style>