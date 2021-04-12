<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand href="#">CBU Simulator</b-navbar-brand>
    </b-navbar>
    <b-container>
      <Simulator />
    </b-container>
  </div>
</template>

<script>
import Simulator from '@/views/Simulator.vue'

export default {
  name: 'App',
  components: {
    Simulator,
  }
}
</script>

<style>

</style>
