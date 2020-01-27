// devExpress imports
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import {GridPlugin} from "@syncfusion/ej2-vue-grids";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import axios from "axios";
// vue-material
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(GridPlugin);

// to use axios in all components
Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

// eslint-disable-next-line no-unused-vars
window.App = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
