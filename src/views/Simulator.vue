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
          <hr />
          <h5 class="mb-2">基本資料</h5>
          <small>1. 輸入機體基本資料</small>
          <b-form-group>
            <b-form-radio-group
              size="sm"
              v-model="defaultStat.type"
              :options="typeOptions"
              />
          </b-form-group>
          <b-form-group
            label="戰力卡類別"
            label-cols-md="4"
            >
            <b-form-select
              size="sm"
              v-model="defaultStat.capaType"
              :options="capaTypeOptions"
              />
          </b-form-group>
          <b-form-group>
            <b-form-checkbox
              size="sm"
              v-model="defaultStat.weaponUsed"
              :checked-value="true"
              :unchecked-value="false"
              >
              有核心強化
            </b-form-checkbox>
          </b-form-group>
          <b-form-group
            label="核心卡類別"
            label-cols-md="4"
            v-if="defaultStat.weaponUsed"
            >
            <b-form-select
              size="sm"
              v-model="defaultStat.weaponType"
              :options="weaponTypeOptions"
              />
          </b-form-group>
          <hr />
          <h5 class="mb-2">數值</h5>
          <small>2. 輸入機體數值</small>
          <table>
            <tr>
            
            </tr>
            <tr v-for="(key, i) in Object.keys(defaultStat).filter(i => i !== 'cost')" :key="i">
              <td>{{cat[key]}}</td>
              <td v-if="key === 'capa'">
                <b-input-group>
                <b-form-input
                  type="number"
                  v-model.number="defaultStat['cost']"
                  />
                <b-input-group-text>/</b-input-group-text>
                <b-form-input
                  type="number"
                  v-model.number="defaultStat['capa']"
                  />
                </b-input-group>
              </td>
              <td v-else>
                <b-form-input
                  type="number"
                  v-model.number="defaultStat[key]"
                  />
              </td>
              <td>→</td>
              <td class="td-result">{{finalData[key === 'capa' ? 'finalCapa' : key]}}</td>
            </tr>
          </table>
          <div class="mt-2" style="text-align: center" v-if="storageUsed">
            <b-button
              @click="onSave"
              variant="primary"
              >
              <i class="fa fa-save" /> 儲存
            </b-button>
            <b-button variant="danger" class="ml-2" @click.stop.prevent="onDeleteTab(tab)" v-if="tabs.length > 1">
              <i class="fa fa-trash" /> 刪除配置
            </b-button>
          </div>
        </b-card>
      </div>
      <div class="col-md-8">
        <b-card>
          <h5 class="mb-2">強化項目</h5>
          <small>4. 添加機體強化項目</small>
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
            <div class="mr-2" style="padding: 0.25rem">
              <b-button
                @click="onDeleteMod(i)"
                variant="danger"
                >
                <i class="fa fa-trash" />
              </b-button>
            </div>
            <b-row style="flex: 1;">
              <b-form-group
                class="col-3"
                label="強化類別"
                >
                <b-select
                  size="sm"
                  v-model="mod[i].cat"
                  :options="catOptions"
                  />
              </b-form-group>
              <b-form-group
                class="col-5"
                label="強化項目"
                >
                <b-form-select
                  v-model="mod[i].key"
                  size="sm"
                  :options="options[mod[i].cat]"
                  v-if="mod[i].cat"
                  />
                <b-form-input
                  plaintext
                  size="sm"
                  value="<= 先選擇類別"
                  v-else
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
import type from '@/data/type.js'
import card from '@/data/cards.js'
import defaultModData from '@/data/mod.json'
import defaultStat from '@/data/stat.json'

export default {
  name: 'Simulator',
  components: {
    
  },
  data: function() {
    return {
      defaultStat: this.deepCopy(defaultStat),
      tabs: [],
      tab: 0,
      mod: [],
      computedOptions: [],
      ready: false,
      storageUsed: false,
    }
  },
  watch: {
    tab(newValue) {
      if(this.storageUsed) {
        // Load newValue
        var key = this.tabs[newValue].id;
        var storageData = window.localStorage.getItem('cb-build-' + key);
        if(storageData) {
          var temp = JSON.parse(storageData);
          var stat = temp.stat;
          var mod = temp.mod;
          this.defaultStat = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(stat));
          this.mod = this.deepCopy(mod);
          console.log("Loaded build " + this.tabs[newValue].name);
        }
        
        window.localStorage.setItem('cb-build-tab-index', newValue);
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
    typeOptions() {
      return Object.keys(type).map(i => {
        return {
          text: type[i],
          value: i
        }
      })
    },
    capaTypeOptions() {
      var arr = [];
      var capaCard = this.findCardByType('capa');
      if(capaCard) {
        Object.keys(capaCard.effect).forEach(capaType => {
          var strArr = [];
          Object.keys(capaCard.effect[capaType]).forEach(key => {
            var ef = capaCard.effect[capaType][key] < 0 ? capaCard.effect[capaType][key] : '+' + capaCard.effect[capaType][key];
            strArr.push(key + ef);
          });
          arr.push({
            text: strArr.join(', '),
            value: capaType
          })
        })
      }
      return arr;
    },
    weaponTypeOptions() {
      var arr = [];
      var weaponCard = this.findCardByType('weapon');
      if(weaponCard) {
        Object.keys(weaponCard.effect).forEach(capaType => {
          var strArr = [];
          Object.keys(weaponCard.effect[capaType]).forEach(key => {
            var ef = weaponCard.effect[capaType][key] < 0 ? weaponCard.effect[capaType][key] : '+' + weaponCard.effect[capaType][key];
            strArr.push(key + ef);
          });
          arr.push({
            text: strArr.join(', '),
            value: capaType
          })
        })
      }
      return arr;
    },
    
    finalData() {
      var data = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(this.defaultStat));
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
      data['finalCapa'] = data['capa'] - data['cost'];
      return data;
    },
    catOptions() {
      var arr = [];
      options.forEach(op => {
        op.cat.forEach(c => {
          var index = arr.findIndex(k => k.value === c);
          if(index === -1) {
            arr.push({
              text: this.cat[c],
              value: c
            })
          }
        });
      });
      return arr;
    },
    options() {
      var obj = {};
      this.catOptions.forEach(cat => {
        obj[cat.value] = [];
      })
      options.forEach(op => {
        var arr = ['cost ' + op.cost];
        Object.keys(op.effect).forEach(key => {
          var ef = op.effect[key] < 0 ? op.effect[key] : '+' + op.effect[key];
          arr.push(key + ef);
        });
        op.cat.forEach(cat => {
          obj[cat].push({
            text: op.name + ' (' + arr.join(' ,') + ')',
            value: op.name
          });
        })
      });
      return obj;
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
          if(typeof this.tabs[this.tab] === 'undefined') {
            this.tab = 0;
          }
          var key = this.tabs[this.tab].id;
          var storageData = window.localStorage.getItem('cb-build-' + key);
          if(storageData) {
            var temp = JSON.parse(storageData);
            var stat = temp.stat;
            var mod = temp.mod;
            this.defaultStat = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(stat));
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
    },
    findCardByType(type) {
      var index = card.findIndex(i => i.type === type);
      if(index !== -1) {
        return card[index];
      } else {
        return null;
      }
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
          stat: Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(this.defaultStat)),
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
        this.defaultStat = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(stat));
        this.mod = this.deepCopy(mod);
        console.log("Loaded build " + this.tabs[newValue].name);
      }
    },
  },
  mounted() {
    this.initData();
    this.$nextTick(() => {
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
