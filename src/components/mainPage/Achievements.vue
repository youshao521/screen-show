<template>
  <div class="table">
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template slot="status" slot-scope="text, record">
        <template v-if="text === 1">
          <img src="../../assets/mainPage/1zhuangtai.png" />
        </template>
        <template v-else-if="text === 2">
          <img src="../../assets/mainPage/2zhuangtai.png" />
        </template>
        <template v-else-if="text === 3">
          <img src="../../assets/mainPage/3zhuangtai.png" />
        </template>
        <template v-else>
          <img src="../../assets/mainPage/other_zhuangtai.png" />
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import page from '../../../data/wisdom';
export default {
  name: 'Achievements',
  data() {
    return {
      dataSource: [
        {
          key: 1,
          index: 1,
          name: '化工二厂',
          score: '109.82',
          status: 1
        },{
          key: 2,
          index: 2,
          name: '镇江江南有机硅',
          score: '108.82',
          status: 2
        },{
          key: 3,
          index: 3,
          name: '剂型中心',
          score: '106.72',
          status: 3
        },{
          key: 4,
          index: 4,
          name: '镇江江南农化',
          score: '106.19',
          status: 4
        },{
          key: 5,
          index: 5,
          name: '镇江江南',
          score: '105.51',
          status: 5
        },{
          key: 6,
          index: 6,
          name: '有机硅材料事业部生产中心',
          score: '85.94',
          status: 6
        }
      ],
      columns: [
        {
          title: '排名',
          dataIndex: 'index',
          width: '12%',
          scopedSlots: { customRender: 'index' }
        },
        {
          title: '项目名称',
          dataIndex: 'name',
          width: '48%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '综合得分',
          dataIndex: 'score',
          width: '20%',
          scopedSlots: { customRender: 'score' }
        },
        {
          title: '状态',
          dataIndex: 'status',
          width: '15%',
          scopedSlots: { customRender: 'status' }
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
    margin: 54px auto 0;
  }
  .table >>> .ant-table-thead {
    background-image: linear-gradient(269deg, rgba(72,19,255,0.1) 0%, rgba(10,236,249,0.1) 100%);
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