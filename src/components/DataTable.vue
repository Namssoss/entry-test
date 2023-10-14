<template>
  <a-table
    :columns="columns"
    :data-source="data"
    bordered
    size="middle"
    :pagination="false"
    :scroll="{ y: '33vh' }"
    @change="handleTableChange"
  >
  </a-table>
  <a-row justify="space-between" style="margin: 8px 10px; align-items: center">
    <div>
      <span style="margin-right: 8px">Page size:</span>
      <a-select
        ref="select"
        v-model:value="pageSize"
        style="width: 60px"
        :options="listOptions"
        size="small"
        @focus="focus"
        @change="handleChange"
      >
      </a-select>
      <span style="margin-left: 80px"
        >Displaying: {{ seeFrom }} - {{ seeTo }} of 20</span
      >
    </div>
    <a-space>
      <a-button
        type="text"
        :icon="h(VerticalRightOutlined)"
        @click="
          () => {
            page = 1;
            nextPage();
          }
        "
      />
      <a-button
        type="text"
        style="margin-left: 30px"
        :icon="h(LeftOutlined)"
        @click="
          () => {
            --page;
            nextPage();
          }
        "
      />
      <span style="margin: 0px 30px">{{ page }}</span>
      <a-button
        type="text"
        style="margin-right: 30px"
        :icon="h(RightOutlined)"
        @click="
          () => {
            ++page;
            nextPage();
          }
        "
      />
      <a-button
        type="text"
        :icon="h(VerticalLeftOutlined)"
        @click="
          () => {
            page = maxPage;
            nextPage();
          }
        "
      />
    </a-space>
  </a-row>
</template>
<script setup>
/* eslint-disable */
import {
  VerticalRightOutlined,
  LeftOutlined,
  RightOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons-vue";
import axios from "axios";
import { ref, watch, h } from "vue";
const pageSize = ref(20);
const listData = ref([]);
const data = ref([]);
const seeTo = ref(20);
const seeFrom = ref(1);
var maxPage;
watch(pageSize, (newValue) => {
  data.value = listData.value.slice(0, newValue);
  maxPage = Math.ceil(listData.value.length / newValue);
  resetPage();
});

const props = defineProps(["reset"]);
watch(props, async () => {
  pageSize.value = 20;
  resetPage();
  await fetchData();
});
const fetchData = () => {
  axios
    .get("https://random-data-api.com/api/users/random_user?size=20")
    .then((response) => {
      if (response) {
        data.value = response.data;
        listData.value = response.data;
        maxPage = Math.ceil(response.data.length / pageSize.value);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData();
const resetPage = () => {
  page.value = 1;
  seeFrom.value = 1;
  seeTo.value = pageSize;
};

const columns = [
  {
    title: "Request No",
    dataIndex: "id",
  },
  {
    title: "Request Time",
    dataIndex: "social_insurance_number",
  },
  {
    title: "Created user",
    dataIndex: "username",
  },
  {
    title: "Approval time",
    dataIndex: "date_of_birth",
  },
  {
    title: "Debit account",
    dataIndex: "last_name",
  },
  {
    title: "Amount",
    dataIndex: "uid",
  },
  {
    title: "Approver",
    dataIndex: "first_name",
  },
  {
    title: "Reason to reject",
    dataIndex: "password",
  },
  {
    title: "Status",
    dataIndex: "email",
  },
];

const listOptions = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
];

const page = ref(1);
const nextPage = () => {
  page.value =
    page.value <= 1 ? 1 : page.value > maxPage ? maxPage : page.value;

  const from = (page.value - 1) * pageSize.value;
  const to = page.value * pageSize.value;
  seeFrom.value = from + 1;
  seeTo.value = to;
  data.value = listData.value.slice(from, to);
};
</script>
<style>
.ant-table-cell {
  font-size: 12px !important;
}
</style>
