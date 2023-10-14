<template>
  <a-carousel autoplay arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div style="background-color: #fff" v-for="item in 4" :key="item">
      <img
        style="width: 97vw; height: 140px"
        :src="require(`@/assets/images/${item + 1}.png`)"
      />
    </div>
  </a-carousel>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const getImgUrl = (i) => {
      return `require('@/assets/images/${i + 1}.png')`;
    };
    return {
      getImgUrl,
    };
  },
});
</script>
<style scoped>
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 140px;
  line-height: 140px;
  background: #fff;
  margin: 10px 0;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
