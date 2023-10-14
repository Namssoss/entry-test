<template>
  <a-menu
    style="
      background-color: #1ab9a4;
      height: 100%;
      color: #fff;
      font-weight: 500;
      padding-top: 18px;
      padding-left: 32px;
      font-size: 16px;
    "
    :items="items"
  />
</template>

<script setup>
import { ref, h } from "vue";
import {
  HomeOutlined,
  ContactsOutlined,
  ContainerOutlined,
  CreditCardOutlined,
  TransactionOutlined,
  ApiOutlined,
  AlertOutlined,
} from "@ant-design/icons-vue";
const items = ref([
  {
    key: "1",
    icon: () => h(HomeOutlined),
    label: "Home",
    title: "Home",
  },
  {
    key: "sub1",
    icon: () => h(ContactsOutlined),
    label: "Contract",
    title: "Contract",
    children: [
      {
        key: "2",
        label: "Contract list",
        title: "Contract list",
      },
      {
        key: "3",
        label: "Create new contract",
        title: "Create new contract",
      },
      {
        key: "4",
        label: "Approve contract",
        title: "Approve contract",
      },
      {
        key: "5",
        label: "Approve user",
        title: "Approve user",
      },
      {
        key: "6",
        label: "Unblock contract",
        title: "Unblock contract",
      },
      {
        key: "7",
        label: "Unblock user",
        title: "Unblock user",
      },
      {
        key: "8",
        label: "Reset pin/password",
        title: "Reset pin/password",
      },
    ],
  },
  {
    key: "sub2",
    icon: () => h(ContainerOutlined),
    label: "Fee management",
    title: "Fee management",
    children: [
      {
        key: "9",
        label: "Set fee",
        title: "Set fee",
      },
      {
        key: "sub2-2",
        label: "Transaction fee",
        title: "Transaction fee",
        children: [
          {
            key: "10",
            label: "Product fee",
            title: "Product fee",
          },
          {
            key: "11",
            label: "Contract fee",
            title: "Contract fee",
          },
          {
            key: "12",
            label: "OTC fee",
            title: "OTC fee",
          },
        ],
      },
      {
        key: "13",
        label: "Set fee share",
        title: "Set fee share",
      },
    ],
  },
  {
    key: "sub3",
    icon: () => h(CreditCardOutlined),
    label: "Limit management",
    title: "Limit management",
    children: [
      {
        key: "14",
        label: "Product limit",
        title: "Product limit",
      },
      {
        key: "15",
        label: "Contract limit",
        title: "Contract limit",
      },
      {
        key: "16",
        label: "Wallet balance limit",
        title: "Wallet balance limit",
      },
    ],
  },
  {
    key: "sub4",
    icon: () => h(TransactionOutlined),
    label: "Transaction",
    title: "Transaction",
    children: [
      {
        key: "17",
        label: "Transaction history",
        title: "Transaction history",
      },
      {
        key: "18",
        label: "Top Up to E-wallet",
        title: "Top Up to E-wallet",
      },
      {
        key: "19",
        label: "Withdrawal from E-wallet",
        title: "Withdrawal from E-wallet",
      },
      {
        key: "20",
        label: "Cash back",
        title: "Cash back",
      },
      {
        key: "21",
        label: "Payroll",
        title: "Payroll",
      },
      {
        key: "22",
        label: "Admin transaction",
        title: "Admin transaction",
      },
      {
        key: "23",
        label: "Reversal transaction",
        title: "Reversal transaction",
      },
    ],
  },
  {
    key: "sub5",
    icon: () => h(ApiOutlined),
    label: "System",
    title: "System",
    children: [
      {
        key: "24",
        label: "Group management",
        title: "Group management",
      },
      {
        key: "25",
        label: "User management",
        title: "User management",
      },
      {
        key: "26",
        label: "System parameter",
        title: "System parameter",
      },
    ],
  },
  {
    key: "sub6",
    icon: () => h(AlertOutlined),
    label: "Report",
    title: "Report",
    children: [
      {
        key: "27",
        label: "Report list",
        title: "Report list",
      },
    ],
  },
]);
</script>
