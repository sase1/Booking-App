<template>
  <div class="hello">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <a class="navbar-brand" href="#">Dashboard info</a>
      <div class="container-fluid">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/group-reservations" class="nav-link"
              >Large groups reservations</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/alerts" class="nav-link">Alerts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="#" class="nav-link">Something else</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <TopBar />
        <div class="col-md-12 mt-5">
          <h2>Bookings:</h2>
          <div class="table-responsive">
            <table class="table table-striped table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>Reason</th>
                  <th>Number:</th>
                  <th>Name:</th>
                  <th>Size:</th>
                  <th>Date:</th>
                  <th>Time:</th>
                  <th>Deal/s:</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(booking, index) in bookingListSlicedTen"
                  :key="index"
                >
                  <td>
                    {{ booking.reasonStatus }}
                    <input
                      v-show="InputToShow == index"
                      type="text"
                      class="input-hidden form-control"
                      placeholder="Enter reason and press Enter"
                      @keyup.enter="sendReason(index)"
                      v-model="reason"
                    />
                  </td>
                  <td>{{ index }}</td>
                  <td
                    class="text-danger bg-warning"
                    v-if="booking.name == null"
                  >
                    NO NAME ENTERED -- INVALID
                  </td>
                  <td v-else>{{ booking.name }}</td>
                  <td>{{ booking.groupSize }}</td>
                  <td>{{ booking.date }}</td>
                  <td>{{ booking.time }}</td>
                  <td>
                    <span class="text-danger">{{ booking.deals.length }}</span>
                    -
                    {{ booking.deals.join(",   ").replaceAll("-", "  ") }}
                  </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'SingleBooking',
                        params: {
                          name: booking.name,
                          size: booking.groupSize,
                          date: booking.date,
                          time: booking.time,
                          bookedAt: booking.bookedAt,
                          deal: booking.deals,
                          id: booking.id,
                          index: index,
                        },
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-eye"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                        />
                        <path
                          d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                        />
                      </svg>
                    </router-link>
                    <span @click="InputToShow = index" class="m-3"
                      >Add reason</span
                    >
                    <span @click="cancelReason">Cancel reason</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { TopBar },
  name: "MainContent",
  data() {
    return {
      timer: "",
      reason: "",
      InputToShow: -1,
    };
  },

  computed: {
    ...mapGetters(["bookingListSlicedTen"]),
  },

  methods: {
    ...mapActions(["fetchAllBookings"]),
    sendReason(index) {
      this.InputToShow = -2;
      this.bookingListSlicedTen[index].reasonStatus =
        this.bookingListSlicedTen[index].reasonStatus + this.reason;
      this.reason = "";
    },
    cancelReason() {
      this.reason = "";
      this.InputToShow = -2;
    },
  },

  created() {
    this.fetchAllBookings();
    this.timer = setInterval(this.fetchAllBookings, 60000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table tr:hover {
  cursor: pointer;
}
</style>
