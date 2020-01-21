<template>
  <div>
    <a-button type="primary">Primary</a-button>
    <a-table
      :columns="columns"
      :rowKey="record => record.login.uuid"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template slot="name" slot-scope="name">{{name.first}} {{name.last}}</template>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Gender",
    dataIndex: "gender",
    filters: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    };
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination);
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      });
    },
    fetch() {
      const pagination = { ...this.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.loading = false;
      this.data = [
        {
          id: { name: "HETU", value: "NaNNA921undefined" },
          name: { title: "Mr", first: "Arttu", last: "Leppanen" },
          gender: "male",
          email: "arttu.leppanen@example.com",
          login: { uuid: "18e55810-c46f-4c3b-b05d-bfeaf067a537" }
        }
      ];
      this.pagination = pagination;
    }
  }
};
</script>