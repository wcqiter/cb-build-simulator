<template>
  <div class="mt-4" v-if="ready">
    <b-row>
      <div class="col-4">
        <b-card>
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
        </b-card>
      </div>
      <div class="col-8">
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
      mod: [],
      computedOptions: [],
      ready: false,
    }
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
    deepCopy(ob) {
      return JSON.parse(JSON.stringify(ob));
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
    
    onSave() {
      
    },
  },
  mounted() {
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
</style>
