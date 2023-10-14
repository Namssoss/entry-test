<template>
  <div class="container">
    <div
      style="
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: 500;
        color: #1ab9a4;
      "
    >
      Payroll services in bank
    </div>
    <a-form
      lao
      :model="formState"
      @finish="handleFinish"
      @finishFailed="handleFinishFailed"
    >
      <a-row>
        <a-col>
          <a-form-item label="Request No"></a-form-item>
          <a-form-item label="Debit account"></a-form-item>
          <a-form-item label="Status"></a-form-item>
        </a-col>
        <a-col class="col-margin">
          <a-form-item>
            <a-input v-model:value="formState.requestNo"> </a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="formState.debitAccount"> </a-input>
          </a-form-item>
          <a-row>
            <a-form-item>
              <a-select
                ref="select"
                v-model:value="formState.status"
                style="width: 120px"
                :options="listOptions"
                @focus="focus"
                @change="handleChange"
              >
              </a-select>
            </a-form-item>
          </a-row>
        </a-col>
        <a-col>
          <a-form-item label="Request Time"></a-form-item>
          <a-form-item label="Approval date"></a-form-item>
        </a-col>
        <a-col class="col-margin">
          <a-form-item
            ><a-input v-model:value="formState.approvalDate"> </a-input
          ></a-form-item>
          <a-form-item>
            <a-input v-model:value="formState.requestTime"> </a-input>
          </a-form-item>
        </a-col>
        <a-col>
          <a-form-item>
            <a-button
              type="primary"
              style="color: #fff; background-color: #1ab9a4"
              html-type="submit"
            >
              Search
            </a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-space>
      <a-upload
        v-model:file-list="fileList"
        name="file"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        :headers="headers"
        @change="handleChange"
      >
        <a-button>
          <UploadOutlined></UploadOutlined>
          Upload file
        </a-button>
      </a-upload>

      <a-button
        type="primary"
        style="color: #fff; background-color: #1ab9a4"
        @click="resetData()"
        >Refresh
      </a-button>
    </a-space>
    <DataTable :reset="reset" />
  </div>
</template>
<script setup>
/* eslint-disable */
import DataTable from "./DataTable.vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import { reactive, ref, onMounted, onUpdated } from "vue";
const formState = reactive({
  requestNo: "",
  requestTime: "",
  debitAccount: "",
  approvalDate: "",
  status: "all",
});
const reset = ref(true);

const listOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "status1",
    label: "Status 1",
  },
  {
    value: "status2",
    label: "Status 2",
  },
  {
    value: "status3",
    label: "Status 3",
  },
];
const handleFinish = (values) => {
  console.log(values, formState);
};
const handleFinishFailed = (errors) => {
  console.log(errors);
};

const resetData = () => {
  reset.value = !reset.value;
};
const containerRef = ref(null);

const fileList = ref([]);
</script>
<style scoped>
.col-margin {
  margin-right: 10vw;
}
.ant-form-item {
  margin-bottom: 6px;
}

.container {
  background-image: url("../assets/images/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 150%;
  height: 100%;
  padding: 24px;
}

.ant-upload .ant-btn-default {
  margin: 3vh 0;
  color: #fff;
  background-color: #1ab9a4;
}
</style>
