import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ViewDesigner from "../views/ViewDesigner.vue";
import NotFound from "../components/ErrorPages/NotFound";
import ViewEditor from "@/views/ViewEditor";
import ViewMaterialDesign from "@/views/ViewMaterialDesign";
import ViewDevExpress from "@/views/ViewDevExpress";
import ViewDevExpressGridTesting from "@/views/ViewDevExpressGridTesting";
import ViewDevExpressGridTestingApi from "@/views/ViewDevExpressGridTestingApi";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Designer"
  },
  {
    path: "/Designer",
    name: "ViewDesigner",
    component: ViewDesigner
  },
  {
    path: "/Editor",
    name: "ViewEditor",
    component: ViewEditor
  },
  {
    path: "/MDesign",
    name: "ViewMaterialDesign",
    component: ViewMaterialDesign
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/DevEx",
    name: "DevExpress",
    component: ViewDevExpress
  },
  {
    path: "/DevExTest",
    name: "DevExpressTest",
    component: ViewDevExpressGridTesting
  },
  {
    path: "/DevExTestApi",
    name: "DevExpressTestApi",
    component: ViewDevExpressGridTestingApi
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;
