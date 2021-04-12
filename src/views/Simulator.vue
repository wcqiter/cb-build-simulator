<template>
  <div class="mt-4" v-if="ready">
    <b-tabs pills v-if="storageUsed">
      <!-- Add your b-tab components here -->
      <template #tabs-end>
        <b-nav-item 
          v-for="(t, i) in tabs"
          :key="i"
          href="#" 
          @click="onClickTab(i)"
          :active="tab === i"
          >
          {{t.name}}
        </b-nav-item>
        <b-nav-item 
          href="#" 
          @click="onAddTab"
          >
          <i class="fa fa-plus" />
        </b-nav-item>
      </template>
    </b-tabs>
    <b-row>
      <div class="col-md-4">
        <b-card>
          <div>
            <b-form-group 
              v-if="storageUsed"
              label="配置名稱"
              label-cols="3"
              >
              <b-form-input
                v-model="tabs[tab].name"
                />
            </b-form-group>
          </div>
          <h5 class="mb-2">數值</h5>
          <small>1. 輸入機體數值</small>
          <table>
            <tr v-for="(key, i) in Object.keys(defaultStat)" :key="i">
              <td>{{cat[key]}}</td>
              <td>
                <b-form-input
                  type="number"
                  v-model.number="defaultStat[key]"
                  size="sm"
                  />
              </td>
              <td>→</td>
              <td class="td-result">{{finalData[key]}}</td>
            </tr>
          </table>
          <div class="mt-2" style="text-align: center" v-if="storageUsed">
            <b-button
              @click="onSave"
              variant="primary"
              >
              <i class="fa fa-save" /> 儲存
            </b-button>
            <b-button variant="danger" class="ml-2" @click.stop.prevent="onDeleteTab(tab)" v-if="tabs.length > 0">
              <i class="fa fa-trash" /> 刪除配置
            </b-button>
          </div>
        </b-card>
      </div>
      <div class="col-md-8">
        <b-card>
          <h5 class="mb-2">強化項目</h5>
          <small>2. 添加機體強化項目</small>
          <div class="mb-2 mt-2">
            <b-button
              @click="onAddMod"
              variant="primary"
              block
              >
              <i class="fa fa-plus" /> 新強化項目
            </b-button>
          </div>
          <div v-for="(item, i) in mod" :key="i" style="display: flex">
            <b-button
              @click="onDeleteMod(i)"
              variant="danger"
              class="mr-2"
              >
              <i class="fa fa-trash" />
            </b-button>
            <b-row style="flex: 1;">
              <b-form-group
                class="col-8"
                label="強化項目"
                >
                <b-select
                  size="sm"
                  v-model="mod[i].key"
                  :options="computedOptions"
                  />
              </b-form-group>
              <b-form-group
                class="col-4"
                label="數量"
                >
                <b-form-input
                  size="sm"
                  type="number"
                  v-model.number="mod[i].num"
                  />
              </b-form-group>
            </b-row>
          </div>
        </b-card>
      </div>
    </b-row>
  </div>
</template>

<script>

import options from '@/data/options.js'
import cat from '@/data/cat.js'
import defaultModData from '@/data/mod.json'

export default {
  name: 'Simulator',
  components: {
    
  },
  data: function() {
    return {
      defaultStat: {
        hp: 0,
        str: 0,
        tec: 0,
        wlk: 0,
        fly: 0,
        tgh: 0,
        slot: 0,
        capa: 0
      },
      tabs: [],
      tab: 0,
      mod: [],
      computedOptions: [],
      ready: false,
      storageUsed: false,
      initialized: false,
    }
  },
  watch: {
    tab(newValue, oldValue) {
      if(this.storageUsed) {
        // Save oldValue
        if(this.initialized) {
          window.localStorage.setItem('cb-build-' + this.tabs[oldValue].id, JSON.stringify({
            stat: this.defaultStat,
            mod: this.mod,
            name: this.tabs[oldValue].name
          }))
          console.log("Loaded build " + this.tabs[oldValue].name);
        }
        // Load newValue
        var key = this.tabs[newValue].id;
        var storageData = window.localStorage.getItem('cb-build-' + key);
        if(storageData) {
          var temp = JSON.parse(storageData);
          var stat = temp.stat;
          var mod = temp.mod;
          this.defaultStat = this.deepCopy(stat);
          this.mod = this.deepCopy(mod);
          console.log("Loaded build " + this.tabs[newValue].name);
        }
        
        window.localStorage.setItem('cb-build-tab-index', newValue);
        this.initialized = true;
      } 
    },
  },
  computed: {
    cat() {
      return cat;
    },
    flattenedOptions() {
      return options;
    },
    
    finalData() {
      var data = this.deepCopy(this.defaultStat);
      this.mod.forEach(item => {
        var opt = this.findOptionByName(item.key);
        if(opt) {
          data['capa'] -= opt.cost * item.num;
          data['slot'] -= item.num;
          Object.keys(opt.effect).forEach(ef => {
            data[ef] += opt.effect[ef] * item.num
          });
        }
      })
      return data;
    },
  },
  methods: {
    initData() {
      if(window.localStorage) {
        console.log('localStorage enabled.')
        this.storageUsed = true;
        var currentTabIndex = window.localStorage.getItem('cb-build-tab-index');
        if(currentTabIndex) {
          this.tab = parseInt(currentTabIndex);
          console.log('Tab index detected, changed to ' + currentTabIndex);
        } else {
          this.tab = 0;
          console.log('Tab index not detected, changed to 0');
        }
        var keys = Object.keys(window.localStorage).filter(i => i.includes('cb-build') && i !== 'cb-build-tab-index');
        console.log('Found ' + keys.length + ' set of build in localStorage');
        if(keys.length > 0) {
          this.tabs = keys.map(key => {
            var storageData = window.localStorage.getItem(key);
            if(storageData) {
              var temp = JSON.parse(storageData);
              var name = temp.name;
              var id = key.replace('cb-build-', '');
              return {
                id: id,
                name: name
              }
            } else {
              return null;
            }
          });
          var key = this.tabs[this.tab].id;
          var storageData = window.localStorage.getItem('cb-build-' + key);
          if(storageData) {
            var temp = JSON.parse(storageData);
            var stat = temp.stat;
            var mod = temp.mod;
            this.defaultStat = this.deepCopy(stat);
            this.mod = this.deepCopy(mod);
            console.log("Loaded build " + this.tabs[this.tab].name);
          }
        } else {
          var uid = this.uuid();
          this.tabs = [{ id: uid, name: "New Build 1"}];
          this.tab = 0;
        }
      } else {
        this.storageUsed = false;
        this.onErrorStorage();
      }
    },
    deepCopy(ob) {
      return JSON.parse(JSON.stringify(ob));
    },
    uuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    },
    
    onAddMod() {
      this.mod.splice(this.mod.length, 0, this.deepCopy(defaultModData));
    },
    onDeleteMod(index) {
      this.mod.splice(index, 1);
    },
    findOptionByName(name) {
      var index = this.flattenedOptions.findIndex(i => i.name === name);
      if(index !== -1) {
        return this.flattenedOptions[index];
      } else {
        return null;
      }
    },options() {
      var opts = [];
      
      options.forEach(op => {
        op.cat.forEach(c => {
          var index = opts.findIndex(k => k.label === this.cat[c]);
          if(index === -1) {
            opts.push({
              label: this.cat[c],
              options: []
            })
          }
          
          var j = opts.findIndex(k => k.label === this.cat[c]);
          var arr = ['cost ' + op.cost];
          Object.keys(op.effect).forEach(key => {
            var ef = op.effect[key] < 0 ? op.effect[key] : '+' + op.effect[key];
            arr.push(key + ef);
          });
          opts[j].options.push({
            text: op.name + ' (' + arr.join(' ,') + ')',
            value: op.name
          });
        })
      })
      return opts;
    },
    onErrorStorage() {
      this.$bvToast.toast("你的瀏覽器不支持LocalStorage，無法儲存配置。", {
        variant: 'danger',
        solid: true
      })
    },
    onClickTab(index) {
      this.tab = index;
    },
    onAddTab() {
      var uid = this.uuid();
      var name = "New Build " + (this.tabs.length + 1);
      this.tabs.splice(this.tabs.length, 0, { name: name, id: uid });
      this.tab = this.tabs.length - 1;
      this.onClearData();
    },
    onSave() {
      if(this.storageUsed) {
        window.localStorage.setItem('cb-build-' + this.tabs[this.tab].id, JSON.stringify({
          stat: this.defaultStat,
          mod: this.mod,
          name: this.tabs[this.tab].name
        }))
        this.$bvToast.toast("已儲存配置", {
          variant: 'primary',
          solid: true,
          "auto-hide-delay": 1000,
          toaster: 'b-toaster-bottom-right'
        })
      } else {
        this.onErrorStorage();
      }
    },
    onClearData() {
      this.defaultStat = {
        hp: 0,
        str: 0,
        tec: 0,
        wlk: 0,
        fly: 0,
        tgh: 0,
        slot: 0,
        capa: 0
      };
      this.mod = [];
    },
    onDeleteTab(index) {
      window.localStorage.removeItem('cb-build-' + this.tabs[index].id);
      this.tabs.splice(index, 1);
      this.tab = 0;
      var newValue = 0;
      var key = this.tabs[newValue].id;
      var storageData = window.localStorage.getItem('cb-build-' + key);
      if(storageData) {
        var temp = JSON.parse(storageData);
        var stat = temp.stat;
        var mod = temp.mod;
        this.defaultStat = this.deepCopy(stat);
        this.mod = this.deepCopy(mod);
        console.log("Loaded build " + this.tabs[newValue].name);
      }
    },
  },
  mounted() {
    this.initData();
    this.$nextTick(() => {
      this.computedOptions = this.deepCopy(this.options());
      this.ready = true;
    })
  },
}
</script>

<style scoped>
.td-result {
  padding: 0.5rem;
  font-weight: bold;
}
td {
  padding: 0.25rem;
}
.display-none {
  display: none;
}
</style>
