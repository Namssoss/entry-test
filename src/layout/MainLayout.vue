<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <a-image
        height="42px"
        style="margin-top: 4px; vertical-align: unset"
        :src="require('@/assets/images/logo-02.jpg')"
      />
    </a-layout-header>
    <a-layout>
      <a-layout>
        <a-layout-sider
          width="16vw"
          style="background: #fff; text-align: start"
        >
          <LeftMenu />
        </a-layout-sider>
        <a-layout>
          <a-layout-content
            :style="{
              background: '#fff',
              margin: 0,
            }"
          >
            <Content />
          </a-layout-content>
        </a-layout>
      </a-layout>
      <div style="padding: 0 24px; background-color: #fff">
        <ImageCarousel />
      </div>
    </a-layout>
    <a-layout-footer>
      <div style="color: #fff">Version 1.1.1</div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import LeftMenu from "../components/LeftMenu";
import Content from "../components/Content";
import ImageCarousel from "@/components/ImageCarousel.vue";
const selectedKeys1 = ref(["2"]);
const selectedKeys2 = ref(["1"]);
const openKeys = ref(["sub1"]);
</script>

<style scoped>
.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}

.ant-layout .ant-layout-header {
  height: 50px;
  background-image: url("../assets/images/header_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
}
.ant-layout .ant-layout-footer {
  height: 100px;
  background-image: url("../assets/images/footer_bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  display: flex;
  justify-content: end;
  align-items: end;
  padding: 24px;
}
</style>
