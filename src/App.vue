<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";

import MainPage from "./views/MainPage";
import Contacts from "./views/Contacts";
import AboutUs from "./views/AboutUs";
import Catalogue from "./views/Catalogue";
import New from "./views/New";
import HeaderComponent from "./views/Header";
import FooterComponent from "./views/Footer";
import ItemPage from "./views/ItemPage";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);
library.add(faSearch);

const routes = [
  { path: "/", component: MainPage },
  { path: "/contacts", component: Contacts },
  { path: "/aboutus", component: AboutUs },
  { path: "/catalogue", component: Catalogue },
  { path: "/new", component: New },
  { path: "/item/:id", component: ItemPage },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  router,
};
</script>

<style>
@font-face {
  font-family: "Futura-Bt";
  src: local("Futura-Bt"),
    url("./assets/fonts/futura-medium-bt.ttf") format("truetype");
}

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500&display=swap");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

@import "./src/assets/font-awesome-4.7.0/css/font-awesome.min.css";

* {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
}

h2 {
  text-transform: uppercase;
}
</style>
