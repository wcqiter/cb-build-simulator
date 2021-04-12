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
        <small><a href="javascript:void(0)" @click="modalShow = true;">{{latestVersion}}</a></small>
      </div>
    </div>
    <b-modal v-model="modalShow" hide-footer title="更新歷程">
      <div v-for="(row, i) in version" :key="i">
        <h5>{{row.version}}</h5>
        <small>{{row.date}}</small>
        <ul>
          <li v-for="(item, j) in row.content" :key="j">
            {{item}}
          </li>
        </ul>
      </div>
    </b-modal>
  </div>
</template>

<script>
import version from '@/update-notes/version.json'
import Simulator from '@/views/Simulator.vue'

export default {
  name: 'App',
  components: {
    Simulator,
  },
  data: function() {
    return {
      modalShow: false,
    }
  },
  computed: {
    version() {
      return version;
    },
    latestVersion() {
      return version[0].version;
    },
  },
}
</script>

<style>

</style>
