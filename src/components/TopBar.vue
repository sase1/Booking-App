<template>
  <div class="row">
    <h2 class="mt-5">Key Performance Indicators:</h2>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Current Day's Bookings</h4>
          <p class="card-text text-center display-3 mt-4">
            {{ dataList.kpis.bookings.madeThisDay }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Current Week's Bookings</h4>
          <p class="card-text text-center display-3 mt-4">
            {{ dataList.kpis.bookings.madeThisWeek }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Today's businesses</h4>
          <p class="card-text text-center display-3 mt-4">
            {{
              Math.round(
                dataList.kpis.howBusyIsItFactor.thisDay *
                  dataList.kpis.bookings.madeThisDay
              )
            }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Week's businesses</h4>
          <p class="card-text text-center display-3 mt-4">
            {{
              Math.round(
                dataList.kpis.howBusyIsItFactor.thisWeek *
                  dataList.kpis.bookings.madeThisWeek
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TopBar",

  computed: {
    ...mapGetters(["dataList"]),
  },

  methods: {
    ...mapActions(["fetchAllDataTopBar"]),
  },

  created() {
    this.fetchAllDataTopBar();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row1 {
  background: #c7c9d3;
  color: #fff;
  height: 220px;
  margin-top: 15px;
}
.card {
  border: 1px solid rgba(0, 0, 0, 0) !important;
}
</style>
