
<template>
  <div class="table" :style="{ height: '45%' }">
    <div class="sub-title">机柜故障记录</div>
    <div class="more">
      <span>更多</span>
    </div>
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
  name: 'FaultRecord',
  data() {
    return {
      dataSource: page.faultRecord.data,
      columns: [
        {
          title: '设备名称',
          dataIndex: 'name',
          width: '20%'
        },
        {
          title: '设备类型',
          dataIndex: 'type',
          width: '20%',
          scopedSlots: { customRender: 'type' }
        },
        {
          title: '故障原因',
          dataIndex: 'reason',
          width: '40%',
          scopedSlots: { customRender: 'reason' }
        },
        {
          title: '维修人',
          dataIndex: 'repairman',
          width: '20%',
          scopedSlots: { customRender: 'repairman' }
        }
      ]
    };
  },
  mounted() {
    this.wanna = setInterval(this.changeValue, 60 * 24 * 1000);
  },
  beforeDestroy() {
  },
  methods: {
    changeValue() {
      const data = this.dataSource.shift();
      this.dataSource.push(data);
    }
  }
}
</script>
<style scoped>
  .table >>> .ant-table-body {
    width: 100%;
    padding: 0 15px;
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