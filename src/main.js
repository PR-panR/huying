import { createApp } from "vue";
import App from "./App.vue";
import Vue from 'vue'
// import router from "./router";
// import store from "./store";
import ElementPlus from 'element-plus';
import router from "./router/router";
import 'element-plus/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'


createApp(App).use(scroll).use(ElementPlus, { locale }).use(router).mount("#app");
