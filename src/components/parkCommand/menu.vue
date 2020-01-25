<template>
  <ul class="list">
    <li v-for="todo in todos" >
      <img v-bind:src="todo.img" />
      <span>{{ todo.text }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      todos: [
        { text: '企业列表', img: '../../assets/parkCommand/company.svg' },
        { text: '风险管控', img: '../../assets/parkCommand/风险管控.svg' },
        { text: '重大危险源', img: '../../assets/parkCommand/重大危险源.svg' },
        { text: '特殊作业', img: '../../assets/parkCommand/特殊作业.svg' },
        { text: '物流管理', img: '../../assets/parkCommand/物流管理.svg' },
        { text: '通讯录', img: '../../assets/parkCommand/通讯录.svg' },
        { text: '国家政策', img: '../../assets/parkCommand/国家政策.svg' },
        { text: '行政审批', img: '../../assets/parkCommand/行政审批.svg' }
      ]
    };
  },
  mounted() {
  },
  beforeDestroy() {
  },
  methods: {
  }
}
</script>