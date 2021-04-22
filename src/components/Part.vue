<template>
  <div>
    <div>
      <div class="node-wrapper">
        <span class="node" @click.stop.prevent="onClickNode"
          :class="partClass">{{data.type}}</span>
        <b-button
          size="sm"
          variant="transparent"
          v-if="data.root !== true"
          @click="onClickDelete"
          >
          <i class="fa fa-trash" />
        </b-button>
        <small>
          {{statDisplay}}
        </small>
        <div 
          v-for="i in data.slot" 
          :key="'mod-slot-' + i" 
          class="mod-slot ml-1"
          :class="(typeof data.mod[i - 1] === 'undefined' || data.mod[i - 1] === '') ? 'mod-slot-empty' : findModClass(data.mod[i - 1])"
          @click="onClickMod(i - 1)"
          v-b-tooltip.hover 
          :title="(typeof data.mod[i - 1] === 'undefined' || data.mod[i - 1] === '') ? '' : findModText(data.mod[i - 1])"
          >
          
        </div>
      </div>
      <div v-if="editing">
        <table border="1" width="100%">
          <tr
            >
            <td class="text-center"><small>SLOT</small></td>
            <td
              v-for="(key, index) in Object.keys(data.stat)"
              :key="'stat-' + index"
              class="text-center"
              >
              <small>{{key.toUpperCase()}}</small>
            </td>
          </tr>
          <tr>
            <td>
              <b-form-input 
                size="sm" 
                v-model.number="data.slot" 
                type="number"
                class="input-field"
                min="0"
                />
            </td>
            <td
              v-for="(key, index) in Object.keys(data.stat)"
              :key="'stat-' + index"
              >
              <b-form-input 
                size="sm" 
                v-model.number="data.stat[key]" 
                type="number"
                class="input-field"
                min="0"
                :step="['hp', 'cost', 'capa'].includes(key) ? 5 : 1"
                />
            </td>
          </tr>
        </table>
        <table border="1" width="100%" class="mt-1">
          <tr>
            <td :colspan="Object.keys(data.main).length + 1">
              <b-checkbox
                v-model="data.tag"
                value="main"
                >
                {{$t('cat.main')}}
              </b-checkbox>
            </td>
          </tr>
          <tr v-if="data.tag.includes('main')">
            <td
              v-for="(key, index) in Object.keys(data.main)"
              :key="'main-stat-' + index"
              >
              {{$t('weapon.' + key, key)}}
            </td>
          </tr>
          <tr v-if="data.tag.includes('main')">
            <td
              v-for="(key, index) in Object.keys(data.main)"
              :key="'main-stat-' + index"
              >
              <b-form-input 
                size="sm" 
                v-model.number="data.main[key]" 
                type="number"
                class="input-field"
                min="0"
                step="10"
                />
            </td>
          </tr>
        </table>
        <table border="1" width="100%" class="mt-1">
          <tr>
            <td :colspan="Object.keys(data.sub).length + 1">
              <b-checkbox
                v-model="data.tag"
                value="sub"
                >
                {{$t('cat.sub')}}
              </b-checkbox>
            </td>
          </tr>
          <tr v-if="data.tag.includes('sub')">
            <td
              v-for="(key, index) in Object.keys(data.sub)"
              :key="'sub-stat-' + index"
              >
              {{$t('weapon.' + key, key)}}
            </td>
          </tr>
          <tr v-if="data.tag.includes('sub')">
            <td
              v-for="(key, index) in Object.keys(data.sub)"
              :key="'sub-stat-' + index"
              >
              <b-form-input 
                size="sm" 
                v-model.number="data.sub[key]" 
                type="number"
                class="input-field"
                min="0"
                step="10"
                />
            </td>
          </tr>
        </table>
      </div>
      <div v-for="(types, index) in avaliableChild" :key="index" class="child-wrapper">
        <div class="arrow-wrapper">
          <span class="arrow-before"></span><span class="arrow-after" ></span>
        </div>
        <div class="child-part-wrapper">
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
            />
        </div>
      </div>
      <b-modal 
        v-model="modalMod"
        hide-footer
        :title="$t('selectMod')"
        size="xl"
        >
        <b-row v-if="typeof data.mod[modIndex] !== 'undefined' && data.mod[modIndex] !== ''">
          <div class="col-md-3 mb-2">
            <b-button
              block
              variant="danger"
              size="sm"
              @click="onRemoveModOption"
              >
              {{$t('removeMod')}}
            </b-button>
          </div>
        </b-row>
        <div
          v-for="(item, catName) in options"
          :key="catName"
          >
          <h5 block v-b-toggle="'mod-collapse-' + catName" class="mod-collapse">{{$t('cat.' + catName, catName)}}</h5>
          <b-collapse 
            accordion="mod-collapse"
            :id="'mod-collapse-' + catName"
            >
            <b-row>
              <div 
                class="col-lg-3 mb-2"
                v-for="(option, optionIndex) in item"
                :key="optionIndex"
                >
                <b-button
                  block
                  variant="transparent"
                  class="mod"
                  :class="'mod-' + catName"
                  size="sm"
                  @click="onClickModOption(option.value)"
                  :disabled="(typeof data.mod[modIndex] !== 'undefined' && data.mod[modIndex] !== '') && data.mod[modIndex] === option.value"
                  >
                  {{option.text}}
                </b-button>
              </div>
            </b-row>
          </b-collapse>
        </div>
      </b-modal>
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
  name: 'Part',
  mixins: [common],
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      data: Object.assign({}, defaultPart, this.deepCopy(this.value)),
      
      editing: false,
      modalMod: false,
      modIndex: -1,
    }
  },
  components: {
    SubPart: () => import('./Part.vue')
  },
  watch: {
    data: {
      handler(newValue) {
        this.$emit('input', newValue);
      },
      deep: true
    }
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
        op.cat.forEach(cat => {
          if(typeof obj[cat] !== 'undefined') {
            obj[cat].push({
              text: op.display[this.$i18n.locale()] + ' (' + arr.join(' ,') + ')',
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
          Object.keys(modObj.effect).forEach(key => {
            if(!Object.prototype.hasOwnProperty.call(stat, key)) {
              stat[key] = 0;
            }
            stat[key] += modObj.effect[key];
            if(Object.prototype.hasOwnProperty.call(modObj, 'cost')) {
              stat['cost'] += modObj.cost;
            }
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
  },
  methods: {
    onClickNode() {
      this.editing = !this.editing;
    },
    onAddPart(type, index) {
      var data = Object.assign({}, this.deepCopy(defaultPart), this.findPartByType(type));
      data['type'] = type;
      data['uid'] = this.uuid();
      
      var i = 0;
      for(i = 0; i < index; i++) {
        if(typeof this.data.children[i] === 'undefined') {
          this.data.children.splice(i, 0, this.deepCopy(defaultPart));
        }
      }
      this.data.children.splice(index, 1, data);
    },
    onClickDelete() {
      this.$emit('delete');
    },
    onDelete(index) {
      this.data.children.splice(index, 1, this.deepCopy(defaultPart));
    },
    onClickMod(index) {
      this.modIndex = index;
      this.modalMod = true;
    },
    onClickModOption(option) {
      this.modalMod = false;
      
      var i = 0;
      for(i = 0; i < this.modIndex; i++) {
        if(typeof this.data.mod[i] === 'undefined') {
          this.data.mod.splice(i, 0, "");
        }
      }
      
      this.data.mod.splice(this.modIndex, 1, option);
    },
    onRemoveModOption() {
      this.modalMod = false;
      
      var i = 0;
      for(i = 0; i < this.modIndex; i++) {
        if(typeof this.data.mod[i] === 'undefined') {
          this.data.mod.splice(i, 0, "");
        }
      }
      
      this.data.mod.splice(this.modIndex, 1, '');
    },
    
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
        var arr = ['cost ' + op.cost];
        Object.keys(op.effect).forEach(key => {
          var ef = op.effect[key] < 0 ? op.effect[key] : '+' + op.effect[key];
          arr.push(key + ef);
        });
        return op.display[this.$i18n.locale()] + ' (' + arr.join(' ,') + ')';
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
  }
}
</script>

<style scoped>
.node {
  display: inline-block;
  border: 2px outset;
  padding-left: 4px;
  padding-right: 4px;
  min-height: 24px;
  min-width: 60px;
  text-align: center;
}
.node:hover {
  border: 2px outset;
}
.node:active {
  border: 2px inset;
  cursor: pointer;
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
  border-width: 0px
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
</style>
