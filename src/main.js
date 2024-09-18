import { createApp } from "vue";
import App from "./App.vue";

import ContactC from "./components/ContactC.vue";
import HomeC from "./components/HomeC.vue";
import ServicesC from "./components/ServicesC.vue";
import FaqC from "./components/FaqC.vue";

import { createRouter, createWebHistory } from "vue-router";
// define the routes => component
const routes = [
  { path: "/home", component: HomeC },
  { path: "/services", component: ServicesC },
  { path: "/contact", component: ContactC },
  {path:'/faq', component:FaqC}
];

// instance of the router
const router = createRouter({
    history:createWebHistory(),
    routes,
});

// create an instance of the app
const app = createApp(App);
app.use(router);
app.mount("#app");
