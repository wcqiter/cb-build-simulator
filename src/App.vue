<template>
  <div id="app" style="height: 100vh; display: flex; flex-direction: column;">
    <b-navbar type="dark" variant="secondary">
      <b-navbar-brand href="#">CBU Simulator</b-navbar-brand>
    </b-navbar>
    <div style="flex: 1">
      <b-container>
        <Simulator />
      </b-container>
    </div>
    <div class="ml-2 mr-2">
      <div style="float: right">
        <small>Power by <a target="_blank" href="https://github.com/wcqiter">天虹@BRD</a></small>
      </div>
      <div>
        <small>v1.0.0</small>
      </div>
    </div>
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
