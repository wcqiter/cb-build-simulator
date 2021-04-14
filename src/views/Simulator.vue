<template>
  <div class="mt-4" v-if="ready">
    <b-tabs pills v-if="storageUsed">
      <!-- Add your b-tab components here -->
      <template #tabs-end>
        <b-nav-item 
          v-for="(t, i) in tabs"
          :key="'tab-' + i"
          href="#" 
          @click="onClickTab(i)"
          :active="tab === t.id"
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
      <div class="col-md-6">
        <b-card>
          <div>
            <b-form-group 
              v-if="storageUsed"
              label="配置名稱"
              label-cols="3"
              >
              <b-form-input
                v-model="tabs[findTabIndexById(tab)].name"
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
          <table border="1">
            <tr>
              <td class="text-center">{{cat['capa']}}</td>
              <td class="input-td" v-if="!hideStatDetails">
                <b-form-input
                  class="input-field"
                  type="number"
                  v-model.number="defaultStat['cost']"
                  size="sm"
                  :min="0"
                  />
              </td>
              <td class="text-center" style="min-width: 50px;" v-if="!hideStatDetails">+ {{deltaData['cost']}} /</td>
              <td class="input-td" v-if="!hideStatDetails">
                <b-form-input
                  class="input-field"
                  type="number"
                  v-model.number="defaultStat['capa']"
                  size="sm"
                  :min="0"
                  />
              </td>
              <td class="text-center" style="min-width: 50px;" v-if="!hideStatDetails">+ {{deltaData['capa']}} /</td>
              <td class="text-center"><span v-if="!hideStatDetails">= </span><b>{{finalData['finalCapa']}}</b></td>
            </tr>
            <tr>
              <td class="text-center">{{cat['slot']}}</td>
              <td class="input-td" colspan="3" v-if="!hideStatDetails">
                <b-form-input
                  class="input-field"
                  type="number"
                  v-model.number="defaultStat['slot']"
                  size="sm"
                  :min="0"
                  />
              </td>
              <td class="text-center" v-if="!hideStatDetails">− {{deltaData['slot']}}</td>
              <td class="text-center"><span v-if="!hideStatDetails">= </span><b>{{finalData['slot']}}</b></td>
            </tr>
            <tr v-for="(key, i) in basicStatKeys" :key="i">
              <td class="text-center">{{cat[key]}}</td>
              <td class="input-td" colspan="3" v-if="!hideStatDetails">
                <b-form-input
                  class="input-field"
                  type="number"
                  v-model.number="defaultStat[key]"
                  size="sm"
                  :min="0"
                  />
              </td>
              <td class="text-center" v-if="!hideStatDetails">{{deltaData[key] >= 0 ? '+' : '-'}} {{deltaData[key]}}</td>
              <td class="text-center"><span v-if="!hideStatDetails">= </span><b>{{finalData[key]}}</b></td>
            </tr>
          </table>
          <b-button
            size="sm"
            class="mt-1"
            @click="hideStatDetails = !hideStatDetails"
            :variant="hideStatDetails ? 'outline-primary' : 'outline-danger'"
            block
            >
            <i class="fa" :class="hideStatDetails ? 'fa-plus' : 'fa-minus'" />
            {{hideStatDetails ? '顯示詳細' : '隱藏詳細'}}
          </b-button>
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
      <div class="col-md-6">
        <b-card class="mb-2">
          <div class="pull-right">
            <table>
              <tr>
                <td class="text-center td-small-padding">
                  <small>機體等級</small>
                </td>
              </tr>
              <tr>
                <td class="text-center td-small-padding">{{level}} / 10</td>
              </tr>
            </table>
          </div>
          <h5 class="mb-2">強化卡片</h5>
          <small>3. 添加機體強化卡片</small>
          <div class="clearfix" />
          <div>
            <b-button
              size="sm"
              v-for="i in findCardByType('capa').num"
              :key="'capa-' + i"
              class="mr-1 mb-1 card-all"
              :class="capaCards[i - 1] ? 'card-capa-active' : 'card-capa'"
              @click="onClickCapaCards(i - 1)"
              variant="success"
              :disabled="isLevelMaxed && !capaCards[i - 1]"
              >
              {{findCardByType('capa').name}}
            </b-button>
            <div>
              <small></small>
            </div>
          </div>
          <div v-if="defaultStat.weaponUsed">
            <b-button
              size="sm"
              v-for="i in findCardByType('weapon').num"
              :key="'weapon-' + i"
              class="mr-1 mb-1 card-all"
              :class="weaponCards[i - 1] ? 'card-weapon-active' : 'card-weapon'"
              @click="onClickWeaponCards(i - 1)"
              variant="danger"
              :disabled="isLevelMaxed && !weaponCards[i - 1]"
              >
              {{findCardByType('weapon').name}}
            </b-button>
          </div>
          <div>
            <b-button
              size="sm"
              v-for="(card, i) in defenseCardOptions"
              :key="'card-' + i"
              class="mr-1 mb-1 card-all"
              :class="cards.includes(card.name) ? 'card-defense-active' : 'card-defense'"
              @click="onClickCards(card.name)"
              variant="primary"
              :disabled="isLevelMaxed && !cards.includes(card.name)"
              >
              <div>{{card.name}}</div>
              <small>COST {{card.effect[defaultStat['type']].cost}}</small>
            </b-button>
          </div>
          <div>
            <b-button
              size="sm"
              v-for="(card, i) in moveCardOptions"
              :key="'card-' + i"
              class="mr-1 mb-1 card-all"
              :class="cards.includes(card.name) ? 'card-move-active' : 'card-move'"
              @click="onClickCards(card.name)"
              variant="warning"
              :disabled="isLevelMaxed && !cards.includes(card.name)"
              >
              <div>{{card.name}}</div>
              <small>COST {{card.effect[defaultStat['type']].cost}}</small>
            </b-button>
          </div>
          <div>
            <b-button
              size="sm"
              v-for="(card, i) in otherCardOptions"
              :key="'card-' + i"
              class="mr-1 mb-1 card-all"
              :class="cards.includes(card.name) ? 'card-other-active' : 'card-other'"
              @click="onClickCards(card.name)"
              variant="secondary"
              :disabled="isLevelMaxed && !cards.includes(card.name)"
              >
              <div>{{card.name}}</div>
              <small>COST {{card.effect[defaultStat['type']].cost}}</small>
            </b-button>
          </div>
        </b-card>
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
      cards: [],
      capaCards: [false, false, false, false, false, false],
      weaponCards: [false, false],
      computedOptions: [],
      ready: false,
      storageUsed: false,
      
      hideStatDetails: false,
    }
  },
  watch: {
    tab(newValue) {
      if(this.storageUsed) {
        // Load newValue
        var key = this.tabs[this.findTabIndexById(newValue)].id;
        var storageData = window.localStorage.getItem('cb-build-' + key);
        if(storageData) {
          var temp = JSON.parse(storageData);
          this.onLoadData(temp);
          console.log("Loaded build " + this.tabs[this.findTabIndexById(newValue)].name);
        }
        
        window.localStorage.setItem('cb-build-tab-index', this.tabs[this.findTabIndexById(newValue)].id);
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
    basicStatKeys() {
      return ['hp', 'str', 'tec', 'wlk', 'fly', 'tgh'];
    },
    typeOptions() {
      return Object.keys(type).map(i => {
        return {
          text: type[i],
          value: i
        }
      })
    },
    cardOptions() {
      return card;
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
            value: capaType,
            effect: capaCard.effect[this.defaultStat.capaType]
          })
        })
      }
      return arr;
    },
    weaponTypeOptions() {
      var arr = [];
      var weaponCard = this.findCardByType('weapon');
      if(weaponCard) {
        Object.keys(weaponCard.effect).forEach(weaponType => {
          var strArr = [];
          Object.keys(weaponCard.effect[weaponType]).forEach(key => {
            var ef = weaponCard.effect[weaponType][key] < 0 ? weaponCard.effect[weaponType][key] : '+' + weaponCard.effect[weaponType][key];
            strArr.push(key + ef);
          });
          arr.push({
            text: strArr.join(', '),
            value: weaponType,
            effect: weaponCard.effect[this.defaultStat.weaponType]
          })
        })
      }
      return arr;
    },
    defenseCardOptions() {
      return this.cardOptions.filter(c => c.type === 'defense').filter(c => {
        if(Object.prototype.hasOwnProperty.call(c.effect, this.defaultStat[c.effectKey])) {
          return true;
        } else {
          return false;
        }
      })
    },
    moveCardOptions() {
      return this.cardOptions.filter(c => c.type === 'move').filter(c => {
        if(Object.prototype.hasOwnProperty.call(c.effect, this.defaultStat[c.effectKey])) {
          return true;
        } else {
          return false;
        }
      })
    },
    otherCardOptions() {
      return this.cardOptions.filter(c => c.type === 'other').filter(c => {
        if(Object.prototype.hasOwnProperty.call(c.effect, this.defaultStat[c.effectKey])) {
          return true;
        } else {
          return false;
        }
      })
    },
    level() {
      var capaCardsCount = this.capaCards.filter(c => c === true).length;
      var weaponCardsCount = 0;
      if(this.defaultStat.weaponUsed) {
        weaponCardsCount = this.weaponCards.filter(c => c === true).length;
      }
      var cardsCount = this.cards.filter(c => {
        var cardOpt = this.findCardByName(c);
        if(cardOpt) {
          if(Object.prototype.hasOwnProperty.call(cardOpt.effect, this.defaultStat[cardOpt.effectKey])) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      }).length;
      return capaCardsCount + weaponCardsCount + cardsCount;
    },
    isLevelMaxed() {
      return this.level >= 10;
    },
    
    deltaData() {
      var data = Object.assign({}, this.deepCopy(defaultStat));
      this.mod.forEach(item => {
        var opt = this.findOptionByName(item.key);
        if(opt) {
          data['cost'] += opt.cost * item.num;
          data['slot'] += item.num;
          Object.keys(opt.effect).forEach(ef => {
            data[ef] += opt.effect[ef] * item.num
          });
        }
      })
      var capaCardsCount = this.capaCards.filter(c => c === true).length;
      Object.keys(this.capaCardEffect).forEach(key => {
        data[key] += this.capaCardEffect[key] * capaCardsCount;
      })
      if(this.defaultStat.weaponUsed) {
        var weaponCardsCount = this.weaponCards.filter(c => c === true).length;
        Object.keys(this.weaponCardEffect).forEach(key => {
          data[key] += this.weaponCardEffect[key] * weaponCardsCount;
        })
      }
      this.cards.forEach(card => {
        var opt = this.findCardByName(card);
        if(opt) {
          if(Object.prototype.hasOwnProperty.call(opt.effect, this.defaultStat[opt.effectKey])) {
            Object.keys(opt.effect[this.defaultStat[opt.effectKey]]).forEach(key => {
              data[key] += opt.effect[this.defaultStat[opt.effectKey]][key];
            })
          }
        }
      });
      return data;
    },
    finalData() {
      var data = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(this.defaultStat));
      data['finalCapa'] = data['capa'] + this.deltaData['capa'] - data['cost'] - this.deltaData['cost'];
      data['slot'] = data['slot'] - this.deltaData['slot'];
      this.basicStatKeys.forEach(key => {
        data[key] += data[key] + this.deltaData[key]
      });
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
    
    capaCardEffect() {
      var index = this.capaTypeOptions.findIndex(c => c.value === this.defaultStat.capaType);
      if(index != -1) {
        return this.capaTypeOptions[index].effect;
      } else {
        return {};
      }
    },
    weaponCardEffect() {
      var index = this.weaponTypeOptions.findIndex(c => c.value === this.defaultStat.weaponType);
      if(index != -1) {
        return this.weaponTypeOptions[index].effect;
      } else {
        return {};
      }
    },
  },
  methods: {
    initData() {
      if(window.localStorage) {
        console.log('localStorage enabled.')
        this.storageUsed = true;
        var currentTabIndex = window.localStorage.getItem('cb-build-tab-index');
        if(currentTabIndex) {
          this.tab = currentTabIndex;
          console.log('Tab index detected, changed to ' + currentTabIndex);
        } else {
          this.tab = null;
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
          if(typeof this.tabs[this.findTabIndexById(this.tab)] === 'undefined') {
            this.tab = this.tabs[0].id;
          }
          var key = this.tabs[this.findTabIndexById(this.tab)].id;
          var storageData = window.localStorage.getItem('cb-build-' + key);
          if(storageData) {
            var temp = JSON.parse(storageData);
            this.onLoadData(temp);
            console.log("Loaded build " + this.tabs[this.findTabIndexById(this.tab)].name);
          }
        } else {
          var uid = this.uuid();
          this.tabs = [{ id: uid, name: "New Build 1"}];
          this.tab = this.tabs[0].id;
        }
      } else {
        this.storageUsed = false;
        this.onErrorStorage();
      }
    },
    onLoadData(temp) {
      var stat = temp.stat;
      var mod = temp.mod;
      this.defaultStat = Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(stat));
      this.mod = this.deepCopy(mod);
      if(Object.prototype.hasOwnProperty.call(temp, 'weaponCards') && Array.isArray(temp.weaponCards)) {
        this.weaponCards = this.deepCopy(temp.weaponCards);
      }
      if(Object.prototype.hasOwnProperty.call(temp, 'capaCards') && Array.isArray(temp.capaCards)) {
        this.capaCards = this.deepCopy(temp.capaCards);
      }
      if(Object.prototype.hasOwnProperty.call(temp, 'cards') && Array.isArray(temp.cards)) {
        this.cards = this.deepCopy(temp.cards);
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
    findTabIndexById(id) {
      var index = this.tabs.findIndex(tab => tab.id === id);
      if(index != -1) {
        return index;
      } else {
        return 0;
      }
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
    findCardByName(name) {
      var index = card.findIndex(i => i.name === name);
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
      this.tab = this.tabs[index].id;
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
        window.localStorage.setItem('cb-build-' + this.tabs[this.findTabIndexById(this.tab)].id, JSON.stringify({
          stat: Object.assign({}, this.deepCopy(defaultStat), this.deepCopy(this.defaultStat)),
          mod: this.mod,
          name: this.tabs[this.findTabIndexById(this.tab)].name,
          capaCards: this.capaCards,
          weaponCards: this.weaponCards,
          cards: this.cards
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
        this.onLoadData(temp);
        console.log("Loaded build " + this.tabs[index].name);
      }
    },
    onClickCapaCards(i) {
      if(this.capaCards[i] === true) {
        this.capaCards.splice(i, 1, false);
      } else {
        this.capaCards.splice(i, 1, true);
      }
    },
    onClickWeaponCards(i) {
      if(this.weaponCards[i] === true) {
        this.weaponCards.splice(i, 1, false);
      } else {
        this.weaponCards.splice(i, 1, true);
      }
    },
    onClickCards(name) {
      var index = this.cards.findIndex(c => c === name);
      if(index != -1) {
        this.cards.splice(index, 1);
      } else {
        this.cards.splice(this.cards.length, 0, name);
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
table {
  white-space: nowrap;
  width: 100%;
  border-color: rgba(0, 0, 0, 0.125);
}
td {
  padding: 0.5rem;
}
.td-small-padding {
  padding: 0.15rem;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.display-none {
  display: none;
}
.input-td {
  padding: 0.25rem;
}
.input-text {
  min-width: 50px;
}
.input-field {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0px;
  text-align: center;
  min-width: 50px;
}
.input-text {
  border: none;
  background-color: transparent;
}
.no-border {
  border: none;
}
.pull-right {
  float: right;
}

.card-capa {
  border: 1px solid #00992e;
  background-color: transparent;
  color: #00992e;
}
.card-capa:focus {
  border: 1px solid #00992e;
  background-color: transparent;
  color: #00992e;
}
.card-capa:hover {
  border: 1px solid #00992e;
  background-color: #00992e;
  color: white;
}
.card-capa-active {
  border: 1px solid #00992e;
  background-color: #00992e;
  color: white;
}
.card-capa-active:focus {
  border: 1px solid #00992e;
  background-color: #00992e;
  color: white;
}
.card-capa-active:hover {
  border: 1px solid #00992e;
  background-color: transparent;
  color: #00992e;
}

.card-weapon {
  border: 1px solid #bd0000;
  background-color: transparent;
  color: #bd0000;
}
.card-weapon:focus {
  border: 1px solid #bd0000;
  background-color: transparent;
  color: #bd0000;
}
.card-weapon:hover {
  border: 1px solid #bd0000;
  background-color: #bd0000;
  color: white;
}
.card-weapon-active {
  border: 1px solid #bd0000;
  background-color: #bd0000;
  color: white;
}
.card-weapon-active:focus {
  border: 1px solid #bd0000;
  background-color: #bd0000;
  color: white;
}
.card-weapon-active:hover {
  border: 1px solid #bd0000;
  background-color: transparent;
  color: #bd0000;
}

.card-defense {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}
.card-defense:focus {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}
.card-defense:hover {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-defense-active {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-defense-active:focus {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-defense-active:hover {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}

.card-move {
  border: 1px solid #807c00;
  background-color: transparent;
  color: #807c00;
}
.card-move:focus {
  border: 1px solid #807c00;
  background-color: transparent;
  color: #807c00;
}
.card-move:hover {
  border: 1px solid #ebeb00;
  background-color: #ebeb00;
  color: black;
}
.card-move-active {
  border: 1px solid #ebeb00;
  background-color: #ebeb00;
  color: black;
}
.card-move-active:focus {
  border: 1px solid #ebeb00;
  background-color: #ebeb00;
  color: black;
}
.card-move-active:hover {
  border: 1px solid #807c00;
  background-color: transparent;
  color: #807c00;
}

.card-other {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}
.card-other:focus {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}
.card-other:hover {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-other-active {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-other-active:focus {
  border: 1px solid #00abfa;
  background-color: #00abfa;
  color: white;
}
.card-other-active:hover {
  border: 1px solid #00abfa;
  background-color: transparent;
  color: #00abfa;
}
.card-all:disabled {
  border: none;
  color: #F0F0F0;
  background-color: transparent;
}
</style>
