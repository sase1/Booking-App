<template>
  <div class="p-2">
    <div class="container">
      <h2 class="m-3 float-start">Booking Alerts</h2>
      <router-link exact to="/" class="btn btn-primary m-4 float-end">
        Back to bookings
      </router-link>
      <div class="clearfix"></div>
      <div class="cards" v-for="(booking, index) in bookingList" :key="index">
        <div
          v-if="
            booking.name == null ||
            booking.name.includes('alert') ||
            booking.groupSize < 1
          "
          class="bg-info rounded-3 text-white p-3"
        >
          <h4>
            Booking Number: <span class="display-6 float-end">{{ index }}</span>
          </h4>
          <br />
          <hr />
          <h4>Name:</h4>
          <p class="bg-danger" v-if="booking.name == null">No name</p>
          <p v-else>{{ booking.name }}</p>
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
export default {
  name: "Alerts",
  data() {
    return {
      bookingList: [],
      timer: "",
    };
  },

  methods: {
    fetchBookingsList() {
      fetch("http://localhost:3000/bookings")
        .then((res) => res.json())
        .then((data) => (this.bookingList = data.slice(0, 100)))
        .catch((err) => console.log(err.message));
    },
  },

  created() {
    this.fetchBookingsList();
    this.timer = setInterval(this.fetchBookingsList, 60000);
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
</style>
