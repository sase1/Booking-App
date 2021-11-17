<template>
  <div class="p-2">
    <div class="container">
      <h2 class="m-3 float-start">Booking Alerts</h2>
      <router-link to="/" class="btn btn-primary m-4 float-end">
        Back to bookings
      </router-link>
      <div class="clearfix"></div>
      <div class="cards" v-for="(booking, index) in bookingListSlicedHundred" :key="index">
        <div
          v-if="booking.reasonStatus"
          class="bg-info rounded-3 text-white p-3"
        >
        <h2 v-if="booking.reasonStatus !== ''">
            Reason: <span class="reason">{{ booking.reasonStatus }}</span>
          </h2>
          <hr>
          <h4>
            Booking Number: <span class="display-6 float-end">{{ index }}</span>
          </h4>
          <br />
          <hr />
          <h4>Name:</h4>
          <p>{{ booking.name }}</p>
          <hr />
          <h4>Deal/s: {{ booking.deals.length }}</h4>
          {{ booking.deals.join(",   ").replaceAll("-", "  ") }}<br />
          <hr />
          <h4>Size:</h4>
          {{ booking.groupSize }}<br />
          <hr />
          <h4>Time:</h4>
          {{ booking.time }}<br />
          <hr />
          <h4>Date:</h4>
          {{ booking.date }}<br />
          <hr />
          <h4>ID:</h4>
          {{ booking.id }}
        </div>
        <div v-else class="empty"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Alerts",

  methods: {
    ...mapActions(["fetchAlerts"]),
  },

   computed: {
    ...mapGetters(["bookingListSlicedHundred"]),
  },

  created() {
    this.fetchAlerts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  float: left;
}
.cards div {
  width: 400px;
  height: auto;
  max-height: 400px;
  overflow-y: scroll;
  margin: 10px;
}

div > div.empty {
  height: 0px;
  margin: 0;
}

span.reason{
  font-weight: bold;
  color: brown;
  font-size: 22px;
}
</style>
