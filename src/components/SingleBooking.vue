<template>
  <div class="row">
    <div
      class="
        col-md-4
        offset-md-4
        mt-5
        text-center
        bg-info
        text-light
        rounded-3
        p-3
      "
    >
      <h2 class="mt-2">
        Booking number <span class="display-3">{{ index }}</span>
      </h2>
      <div>
        <h2 class="float-start">Name:</h2>
        <p class="float-end mt-2">{{ name }}</p>
        <div class="clearfix"></div>
      </div>
      <div>
        <h2 class="float-start">Date:</h2>
        <p class="float-end mt-2">{{ date }}</p>
        <div class="clearfix"></div>
      </div>
      <div>
        <h2 class="float-start">Time:</h2>
        <p class="float-end mt-2">{{ time }}</p>
        <div class="clearfix"></div>
      </div>
      <div>
        <h2 class="float-start">Booked At:</h2>
        <p class="float-end mt-2">{{ bookedAt }}</p>
        <div class="clearfix"></div>
      </div>
      <div>
        <h2 class="float-start">Deal/s:</h2>
        <p class="float-end mt-2">
          {{ deal.join(",   ").replaceAll("-", " ") }}
        </p>
        <div class="clearfix"></div>
      </div>
      <div>
        <h2 class="float-start">ID:</h2>
        <p class="float-end mt-2">{{ id }}</p>
        <div class="clearfix"></div>
      </div>
      <router-link exact to="/" class="btn btn-primary m-4">
        Back to bookings
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBooking",
  props: ["name", "size", "date", "time", "bookedAt", "deal", "id", "index"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
