<template>
  <div id="app" style="height: 100vh; display: flex; flex-direction: column;">
    <div style="flex: 1">
      <div class="app-content">
        <Simulator />
      </div>
    </div>
    <div class="ml-2 mr-2">
      <b-row no-gutters>
        <b-col>
          <small><a href="javascript:void(0)" @click="modalShow = true;">{{latestVersion}}</a></small>
        </b-col>
        <b-col style="text-align: right">
          <small class="mr-2">Powered by 天虹@BRD</small>
          <a target="_blank" href="https://github.com/wcqiter/cb-build-simulator/issues" >
            <i class="fab fa-github" />
          </a>
        </b-col>
      </b-row>
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

<style scoped>
.app-content {
  overflow: hidden; 
  height: calc(100vh - 24px);
}
</style>
