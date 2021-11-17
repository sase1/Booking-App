import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookingList: [],
    dataList: {},
    alert: "",
  },
  mutations: {
    setBookings(state, bookingList) {
      state.bookingList = bookingList;
    },
    setTopBarData(state, dataList) {
      state.dataList = dataList;
    },
    setAlerts(state, alert) {
      state.alert = alert;
    },
  },
  actions: {
    fetchAllBookings(context) {
      return fetch("http://localhost:3000/bookings")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setBookings", data);
        })
        .catch((err) => console.error(err));
    },
    fetchAllDataTopBar(context) {
      return fetch("http://localhost:4000/stats")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setTopBarData", data);
        })
        .catch((err) => console.error(err));
    },
    fetchAlerts(context) {
      return fetch("http://localhost:3000/bookings")
        .then((response) => response.json())
        .then((data) => {
          context.commit("setAlerts", data);
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    bookingListSlicedHundred(state) {
      return state.bookingList.slice(0, 100);
    },
    bookingListSlicedTen(state) {
      return state.bookingList.slice(-10);
    },
    dataList(state) {
      return state.dataList;
    },
  },
  modules: {},
});
