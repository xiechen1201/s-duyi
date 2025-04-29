import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./assets/styles/index.scss";
// element-plus 样式
import "element-plus/es/components/message/style/css";
import "element-plus/es/components/message-box/style/css";

const app = createApp(App);

// 将所有 solid 图标添加到库中
library.add(fas);
app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.mount("#app");
