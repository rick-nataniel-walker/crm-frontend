import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import alertPlugin from "@/plugins/alertPlugin";

createApp(App).use(store).use(router).use(alertPlugin).mount("#app");
