<template>
  <div id="app" style="height: 100vh; display: flex; flex-direction: column;">
    <div style="flex: 1">
      <div class="app-content">
        <router-view />
      </div>
    </div>
    <div class="ml-2 mr-2">
      <b-row no-gutters>
        <b-col>
          <small><a href="javascript:void(0)" @click="modalShow = true;"><i class="fas fa-code-branch"></i> {{latestVersion}}</a></small>
        </b-col>
        <b-col style="text-align: center">
          <small><a href="javascript:void(0)" @click="creditModal = true;"><i class="fas fa-user-friends"></i> {{$t('credit')}}</a></small>
        </b-col>
        <b-col style="text-align: right">
          <small class="mr-2">Powered by 天虹@BRD</small>
          <a target="_blank" href="https://github.com/wcqiter/cb-build-simulator/issues" >
            <i class="fab fa-github" />
          </a>
        </b-col>
      </b-row>
    </div>
    <b-modal v-model="modalShow" hide-footer :title="$t('history')">
      <div v-for="(row, i) in version" :key="i">
        <h5>{{row.version}}</h5>
        <small>{{row.date}}</small>
        <ul>
          <li v-for="(item, j) in row.content" :key="j">
            <span v-if="typeof item === 'string'">
            {{item}}
            </span>
            <span v-else>
              {{item[$i18n.locale()]}}
            </span>
          </li>
        </ul>
      </div>
    </b-modal>
    <b-modal v-model="creditModal" hide-footer :title="$t('credit')">
      <ul>
        <li>{{$t('translation')}}<a href="https://steamcommunity.com/id/halkeye777" target="_blank">halkeye-7</a></li>
        <li>{{$t('suggestion')}}</li>
        <ul>
          <li><a href="https://github.com/wcqiter/cb-build-simulator/issues?q=is%3Aissue+author%3AHC307" target="_blank">HC307</a></li>
          <li><a href="https://github.com/wcqiter/cb-build-simulator/issues?q=is%3Aissue+author%3Areihunter360" target="_blank">reihunter360</a></li>
        </ul>
      </ul>
    </b-modal>
    <b-modal v-model="langModal" hide-footer hide-header no-close-on-backdrop no-close-on-esc>
      <div class="text-center">
        <div>
          選擇語言
        </div>
        <div>
          Select Your Preferred Language
        </div>
        <div>
          ご希望の言語を選択してください
        </div>
      </div>
      <b-row>
        <b-col v-for="(row, i) in lang" :key="i">
          <b-button
            @click="setLang(row.value)"
            variant="primary"
            class="mt-2"
            block
            :disabled="row.disabled"
            >
            {{row.text}}
          </b-button>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'

import version from '@/update-notes/version.json'

export default {
  name: 'App',
  mixins: [common],
  components: {
    
  },
  data: function() {
    return {
      modalShow: false,
      langModal: false,
      creditModal: false,
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
  created() {
    this.initLang();
  },
  mounted() {
  
  },
  methods: {
    initLang() {
      if(window.localStorage) {
        var savedLang = window.localStorage.getItem('cb-build-lang');
        if(savedLang) {
          this.setLang(savedLang)
        } else {
          this.langModal = true;
        }
      } else {
        this.langModal = true;
      }
    },
    setLang(lang) {
      this.langModal = false;
      this.$i18n.set(lang);
      if(window.localStorage) {
        window.localStorage.setItem('cb-build-lang', lang);
      }
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
