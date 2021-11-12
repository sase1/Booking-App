<template>
  <div class="row">
    <h2 class="mt-5">Key Performance Indicators:</h2>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Current Day's Bookings</h4>
          <p class="card-text text-center display-3 mt-4">
            {{ dataInfo[0].kpis.bookings.madeThisDay }}
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body row1">
          <h4 class="card-title">Current Week's Bookings</h4>
          <p class="card-text text-center display-3 mt-4">
            {{ dataInfo[0].kpis.bookings.madeThisWeek }}
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
                dataInfo[0].kpis.howBusyIsItFactor.thisDay *
                  dataInfo[0].kpis.bookings.madeThisDay
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
                dataInfo[0].kpis.howBusyIsItFactor.thisWeek *
                  dataInfo[0].kpis.bookings.madeThisWeek
              )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  data() {
    return {
      dataInfo: [],
    };
  },

  created() {
    fetch("http://localhost:4000/data")
      .then((res) => res.json())
      .then((data) => (this.dataInfo = data))
      .catch((err) => console.log(err.message));
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
