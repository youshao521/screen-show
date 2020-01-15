<template>
  <div class="table">maxDay
    <a-table
      :dataSource="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template slot="day" slot-scope="text">
        <template v-if="text === maxDay">
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
      <template slot="month" slot-scope="text">
        <template v-if="text === maxMonth">
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
export default {
  data() {
    return {
      dataSource: [
        {
          key: '0',
          name: '加氢裂化',
          day: 0.61,
          month: 2.08
        }, {
          key: '1',
          name: '延迟焦化',
          day: 0.90,
          month: 3.69
        }, {
          key: '2',
          name: '催化裂化',
          day: 0.06,
          month: 0.15
        }, {
          key: '3',
          name: '气体脱硫',
          day: 0.69,
          month: 3.08
        }, {
          key: '4',
          name: '污水处理',
          day: 0.71,
          month: 1.34
        }, {
          key: '5',
          name: '气体分馏',
          day: 0.04,
          month: 0.17
        }, {
          key: '6',
          name: '常减压',
          day: 0.13,
          month: 1.53
        }
      ],
      backup: [
        {
          key: '0',
          name: '加氢裂化',
          day: 0.61,
          month: 2.08
        }, {
          key: '1',
          name: '延迟焦化',
          day: 0.90,
          month: 3.69
        }, {
          key: '2',
          name: '催化裂化',
          day: 0.06,
          month: 0.15
        }, {
          key: '3',
          name: '气体脱硫',
          day: 0.69,
          month: 3.08
        }, {
          key: '4',
          name: '污水处理',
          day: 0.71,
          month: 1.34
        }, {
          key: '5',
          name: '气体分馏',
          day: 0.04,
          month: 0.17
        }, {
          key: '6',
          name: '常减压',
          day: 0.13,
          month: 1.53
        }
      ],
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
    // setTimeout(this.changeValue, 3000)
    // this.changeValue();
    // this.wanna = setInterval(this.changeValue, 3000);
  },
  beforeDestroy() {
    clearInterval(this.wanna);
  },
  methods: {
    changeValue() {
      this.dataSource = this.dataSource.map((item, index) => {
        const random = (0.5-(Math.random()*1)).toFixed(1);
        return {
          key: item.key,
          name: item.name,
          day: (this.backup[index].day + parseFloat(random)).toFixed(1),
          month: (this.backup[index].month + parseFloat(random)).toFixed(1),
        }
      });
    }
  },
  computed: {
    maxDay() {
      const arr = [];
      this.dataSource.forEach((item) => {
        arr.push(item.day);
      });
      return Math.max(...arr);
    },
    maxMonth() {
      const arr = [];
      this.dataSource.forEach((item) => {
        arr.push(item.month);
      });
      console.log(Math.max(...arr))
      return Math.max(...arr);
    }
  }
};
</script>
<style scoped>
  .table >>> .ant-table-body {
    width: 336px;
    margin: 54px auto 0;
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