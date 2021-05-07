<template>
  <div>
    <div>
      <div class="node-wrapper">
        <small class="node">{{data.type}}</small>
        <span 
          v-for="i in data.slot" 
          :key="'mod-slot-' + i" 
          class="ml-1"
          >
          <small v-if="!(typeof data.mod[i - 1] === 'undefined' || data.mod[i - 1] === '')" :style="findModStyle(data.mod[i - 1])">
            {{findModText(data.mod[i - 1])}}
          </small>
        </span>
      </div>
      <div v-for="(types, index) in avaliableChild" :key="index" class="child-wrapper">
        <div class="arrow-wrapper" v-if="(simpleMode && childHasTypes(types)) || !simpleMode">
          <span class="arrow-before"></span><span class="arrow-after" ></span>
        </div>
        <div class="child-part-wrapper" v-if="(simpleMode && childHasTypes(types)) || !simpleMode">
          <b-dropdown 
            :text="types.join('/')" 
            v-if="!childHasTypes(types)" 
            class="empty-slot node"
            variant="transparent"
            size="sm"
            >
            <b-dropdown-item v-for="type in types" :key="data.type + '-add-' + type" @click="onAddPart(type, index)">
              <i class="fa fa-plus" /> {{type}}
            </b-dropdown-item>
          </b-dropdown>
          <SubPart 
            v-model="data.children[index]" 
            v-else
            @delete="onDelete(index)"
            :simpleMode="simpleMode"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'

import defaultPart from '@/data/part.json'
import parts from '@/data/parts.js'
import options from '@/data/options.js'
import cat from '@/data/cat.js'

export default {
  name: 'SimplePart',
  mixins: [common],
  props: {
    value: {
      type: Object,
      required: true
    },
    simpleMode: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      data: Object.assign({}, defaultPart, this.deepCopy(this.value)),
    }
  },
  components: {
    SubPart: () => import('./SimplePart.vue')
  },
  watch: {
    
  },
  computed: {
    basicStat() {
      return ['cost', 'capa', 'hp', 'str', 'tec', 'wlk', 'fly', 'tgh'];
    },
    avaliableChild() {
      return this.findPartByType(this.data.type).child
    },
    partTypeToIndex() {
      var obj = {};
      this.data.children.forEach((child, index) => {
        obj[child.type] = index;
      })
      return obj;
    },
    partClass() {
      if(Array.isArray(this.data.tag)) {
        return this.data.tag.join('-');
      } else {
        return '';
      }
    },
    cat() {
      return cat;
    },
    catOptions() {
      var arr = [];
      options.forEach(op => {
        op.cat.forEach(c => {
          var index = arr.findIndex(k => k.value === c);
          if(index === -1) {
            arr.push({
              text: this.$t('cat.' + c, c),
              value: c
            })
          }
        });
      });
      var filtered = arr.filter(cat => !this.findPartByType(this.data.type).exceptCat.includes(cat.value));
      if(Array.isArray(this.data.tag)) {
        if(!this.data.tag.includes('main')) {
          filtered = filtered.filter(cat => cat.value !== 'main');
        }
        if(!this.data.tag.includes('sub')) {
          filtered = filtered.filter(cat => cat.value !== 'sub');
        }
      } else {
        filtered = filtered.filter(cat => cat.value !== 'sub' && cat.value !== 'main');
      }
      return filtered;
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
        if(op.cat.includes('main') || op.cat.includes('sub')) {
          if(Object.prototype.hasOwnProperty.call(op, 'weaponStat') && Object.prototype.hasOwnProperty.call(op.weaponStat, 'display')) {
            Object.keys(op.weaponStat.display).forEach(key => {
              var ef = op.weaponStat.display[key];
              arr.push(this.$t('weapon.' + key, key) + ef);
            });
          }
        }
        op.cat.forEach(cat => {
          if(typeof obj[cat] !== 'undefined') {
            obj[cat].push({
              text: op.display[this.$i18n.locale()] + ' (' + arr.join(', ') + ')',
              value: op.name
            });
          }
        })
      });
      return obj;
    },
    statDisplay() {
      var stat = this.deepCopy(this.data.stat);
      this.data.mod.forEach(mod => {
        var modObj = this.findModByName(mod);
        if(modObj) {
          if(!Object.prototype.hasOwnProperty.call(stat, 'cost')) {
            stat['cost'] = 0;
          }
          if(Object.prototype.hasOwnProperty.call(modObj, 'cost')) {
            stat['cost'] += modObj.cost;
          }
          Object.keys(modObj.effect).forEach(key => {
            if(!Object.prototype.hasOwnProperty.call(stat, key)) {
              stat[key] = 0;
            }
            stat[key] += modObj.effect[key];
          })
        }
      })
      var str = Object.keys(stat).filter(k => stat[k] !== 0).map(k => k.toUpperCase() + (stat[k] > 0 ? '+' : '') + stat[k]).join(' ');
      if(str == '') {
        return this.$t('clickOnPart')
      } else {
        return str;
      }
    },
    mainStat() {
      var stat = this.deepCopy(this.data.main);
      this.data.mod.forEach(mod => {
        var modObj = this.findModByName(mod);
        if(modObj) {
          if(modObj.cat.includes('main')) {
            if(Object.prototype.hasOwnProperty.call(modObj, 'weaponStat') && Object.prototype.hasOwnProperty.call(modObj.weaponStat, 'effect')) {
              Object.keys(modObj.weaponStat.effect).forEach(statKey => {
                stat[statKey] = stat[statKey] + Math.ceil(this.data.main[statKey] * modObj.weaponStat.effect[statKey]);
              })
            }
          }
        }
      })
      return stat;
    },
    subStat() {
      var stat = this.deepCopy(this.data.sub);
      this.data.mod.forEach(mod => {
        var modObj = this.findModByName(mod);
        if(modObj) {
          if(modObj.cat.includes('sub')) {
            if(Object.prototype.hasOwnProperty.call(modObj, 'weaponStat') && Object.prototype.hasOwnProperty.call(modObj.weaponStat, 'effect')) {
              Object.keys(modObj.weaponStat.effect).forEach(statKey => {
                stat[statKey] = stat[statKey] + Math.ceil(this.data.sub[statKey] * modObj.weaponStat.effect[statKey]);
              })
            }
          }
        }
      })
      return stat;
    },
  },
  methods: {
    findPartByType(type) {
      var index = parts.findIndex(i => i.type === type);
      if(index !== -1) {
        return this.deepCopy(parts[index]);
      } else {
        return { child: [], exceptCat: [] };
      }
    },
    childHasTypes(types) {
      var index = this.data.children.findIndex(c => types.includes(c.type));
      return index !== -1;
    },
    findModClass(value) {
      var index = options.findIndex(opt => opt.name === value);
      if(index !== -1) {
        return options[index].cat.map(cat => 'mod-' + cat).join(' ') + ' mod mod-slot';
      } else {
        return 'mod mod-slot';
      }
    },
    findModText(value) {
      var index = options.findIndex(opt => opt.name === value);
      if(index !== -1) {
        var op = options[index];
        return op.display[this.$i18n.locale()];
      } else {
        return '';
      }
    },
    findModByName(value) {
      var index = options.findIndex(opt => opt.name === value);
      if(index !== -1) {
        return options[index];
      } else {
        return null;
      }
    },
    findModStyle(value) {
      var index = options.findIndex(opt => opt.name === value);
      if(index !== -1) {
        var op = options[index];
        if(op.cat.includes('main')) {
          return { color: 'red' };
        } else if(op.cat.includes('sub')) {
          return { color: 'blue' };
        } else if(op.cat.includes('hp')) {
          return { color: 'green' };
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
  },
  mounted() {
  
  },
}
</script>

<style scoped>
.node {
  display: inline-block;
  border: 2px outset;
  padding-left: 2px;
  padding-right: 2px;
  min-height: 20px;
  min-width: 40px;
  text-align: center;
}
div.child-wrapper {
  display: flex;
}
div.child-wrapper div.arrow-wrapper {
  display: flex;
}
div.child-wrapper div.arrow-wrapper span.arrow-before {
  display: inline-block;
  width: 12px;
  height: 100%;
  border-right: 1px solid black;
  transform: translate(0px, 0px);
}
div.child-wrapper:last-child div.arrow-wrapper span.arrow-before {
  height: 16px;
  transform: translate(0px, 0px);
}
span.arrow-after {
  display: inline-block;
  transform: translate(0px, 8px);
  width: 12px;
  height: 8px;
  border-bottom: 1px solid black;
}
.child-part-wrapper {
  padding-top: 4px;
}
.empty-slot {
  display: inline-block;
  border: 2px inset;
  padding-left: 4px;
  padding-right: 4px;
}
.input-field {
  max-width: 80px;
  border-width: 0px;
  text-align: center;
}
.mod-slot {
  width: 20px;
  height: 20px;
  display: inline-block;
  vertical-align: middle;
  border: 4px inset;
  cursor: pointer;
}
.mod-slot:hover {
  opacity: 0.5;
}
.mod-slot-empty {
  border: 4px inset;
  cursor: pointer;
}
.mod-slot-empty:hover {
  opacity: 0.5;
}
.node-wrapper {
  display: inline-block;
}
.mod-main {
  background-color: red !important;
  color: white;
}
.mod-sub {
  background-color: blue !important;
  color: white;
}
.mod {
  background-color: green;
  color: white;
}
.mod:hover {
  color: white;
  opacity: 0.8;
}
.mod-collapse:hover {
  opacity: 0.5;
}
.main {
  background-color: red;
  color: white;
}
.sub {
  background-color: blue;
  color: white;
}
.main-sub {
  background: rgb(255,0,0);
  background: linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%);
  color: white;
}
.sub-main {
  background: rgb(255,0,0);
  background: linear-gradient(135deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%);
  color: white;
}
.buff {
  background-color: green;
  color: white;
}
.debuff {
  background-color: red;
  color: white;
}
</style>
