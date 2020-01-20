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
import page from '../../../data/device';
export default {
  name: 'TopFault',
  data() {
    return {
      dataSource: page.faultTop5.data,
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