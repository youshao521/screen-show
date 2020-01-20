<template>
  <div class="table">maxDay
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template slot="day" slot-scope="text, record">
        <template v-if="record.maxDay">
          <span :style="{ color: 'red' }">
            {{text}}
          </span>
        </template>
        <template v-else>
          <span>
            {{text}}
          </span>
        </template>
      </template>
      <template slot="month" slot-scope="text, record">
        <template v-if="record.maxMonth">
          <span :style="{ color: 'red' }">
            {{text}}
          </span>
        </template>
        <template v-else>
          <span>
            {{text}}
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script>
import page from '../../../data/wisdom';
export default {
  data() {
    return {
      dataSource: page.statisticsList.data,
      backup: page.statisticsList.data,
      columns: [
        {
          title: '装置名称',
          dataIndex: 'name',
          width: '30%'
        },
        {
          title: '日超标额',
          dataIndex: 'day',
          width: '30%',
          scopedSlots: { customRender: 'day' }
        },
        {
          title: '月超标额',
          dataIndex: 'month',
          width: '30%',
          scopedSlots: { customRender: 'month' }
        }
      ],
    };
  },
  created() {
    this.wanna = setInterval(this.changeValue, 24 * 60 * 60 * 1000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      const arr = this.dataSource.map((item, index) => {
        const random = (0.5-(Math.random()*1)).toFixed(1);
        return {
          key: item.key,
          name: item.name,
          day: parseFloat((this.backup[index].day + parseFloat(random)).toFixed(1)),
          month: parseFloat((this.backup[index].month + parseFloat(random)).toFixed(1)),
          maxDay: false,
          maxMonth: false,
        }
      });
      const maxDay = this.maxNumber(arr, 'day');
      const maxMonth = this.maxNumber(arr, 'month');
      // 最大天数变红
      arr.filter(x => x.day === maxDay).forEach((x) => {
        x.maxDay = true;
      });
      arr.filter(x => x.month === maxMonth).forEach((x) => {
        x.maxMonth = true;
      });
      this.dataSource = arr;
    },
    maxNumber(tArr, key) {
      const arr = [];
      tArr.forEach((item) => {
        arr.push(item[key]);
      });
      return Math.max(...arr);
    }
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