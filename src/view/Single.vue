<template>
    <div class="wrapper mt-5">
  <div class="container ">
      <div class="col-lg-10 offset-1">
          <img class="mb-4 w-100" :src="require(`@/assets/img/${card.img}`)" :alt="card.img">
          <h2>{{card.title}}</h2>
          <div class="description">
              {{card.description}}
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
    computed: {
        pageName() {
            return this.$route.name
        },
        card() {
            console.log(this.$store.getters["getInfoOnce"](this.$route.params.id))
            return this.$store.getters["getInfoOnce"](this.$route.params.id)
        }
    }
}
</script>
