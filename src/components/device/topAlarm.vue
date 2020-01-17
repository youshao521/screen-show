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
  name: 'TopAlarm',
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: '一焦化',
          day: '2/25',
          month: '92%'
        }, {
          key: '1',
          name: '碳五分离',
          day: '23/25',
          month: '8%'
        }, {
          key: '2',
          name: '酚水分离',
          day: '2/28',
          month: '92.8%'
        }, {
          key: '3',
          name: '废氢回收',
          day: '18/18',
          month: '100%'
        }, {
          key: '4',
          name: '一空压站',
          day: '15/15',
          month: '100%'
        }
      ],
      columns: [
        {
          title: '装置名称',
          dataIndex: 'name',
          width: '30%'
        },
        {
          title: '未处理/报警数',
          dataIndex: 'day',
          width: '30%',
          scopedSlots: { customRender: 'day' }
        },
        {
          title: '处理率',
          dataIndex: 'month',
          width: '30%',
          scopedSlots: { customRender: 'month' }
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
    background-image: linear-gradient(269deg, rgba(72,19,255,0.1) 0%, rgba(10,236,249,0.1) 100%);
  }
  .table >>> .ant-table-thead > tr > th {
    padding: 0 10px;
    height: 40px;
    background: transparent;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #CFDDFF;
    letter-spacing: 0;
    line-height: 40px;
  }
  .table >>> .ant-table-tbody > tr > td {
    padding: 0 10px;
    opacity: 0.5;
    font-family: PingFangSC-Semibold;
    font-size: 14px;
    color: #CFDDFF;
    letter-spacing: 0;
    line-height: 40px;
    opacity: 0.7;
    border-bottom: 1px solid #192444;
  }
</style>