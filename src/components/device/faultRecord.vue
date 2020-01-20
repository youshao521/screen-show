
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
export default {
  name: 'FaultRecord',
  data() {
    return {
      dataSource: [
        {
          key: 0,
          name: '服务器机柜001',
          type: '服务器机柜',
          reason: '过热将使得电线在额定负载下跳闸',
          repairman: '张晓峰'
        }, {
          key: 1,
          name: '网络机柜005',
          type: '网络机柜',
          reason: '灰尘聚积，噪音增大',
          repairman: '张晓峰'
        }, {
          key: 2,
          name: '控制台机柜007',
          type: '控制台机柜',
          reason: '过热使仪器读数错误',
          repairman: '王晓霞'
        }, {
          key: 3,
          name: '控制台机柜010',
          type: '控制台机柜',
          reason: '箱体内部元件损坏',
          repairman: '张锦江'
        }, {
          key: 4,
          name: '网络机柜012',
          type: '网络机柜',
          reason: '振动损毁箱体内部元件',
          repairman: '钱建设'
        }, {
          key: 5,
          name: '服务器机柜009',
          type: '服务器机柜',
          reason: '灰尘聚积，噪音增大',
          repairman: '钱建设'
        }, {
          key: 6,
          name: '网络机柜028',
          type: '网络机柜',
          reason: '空气过滤装置阻塞',
          repairman: '钱建设'
        }
      ],
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