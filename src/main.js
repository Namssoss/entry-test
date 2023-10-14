import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd).mount("#app");
