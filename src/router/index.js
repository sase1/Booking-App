import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SingleBooking from "../components/SingleBooking";
import GroupReservations from "../components/GroupReservations";
import Alerts from "../components/Alerts";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/booking/:id",
    name: "SingleBooking",
    component: SingleBooking,
    props: true,
  },
  {
    path: "/group-reservations",
    name: "GroupReservations",
    component: GroupReservations,
  },
  {
    path: "/alerts",
    name: "Alerts",
    component: Alerts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
