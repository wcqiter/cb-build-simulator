<template>
  <div>
    <b-radio-group
      :options="catOptions"
      v-model="modelCat"
      size="sm"
      class="mb-2"
      :disabled="data !== ''"
      />
    <label class="mr-2" v-if="data !== ''">{{$t('quickTuning.select')}}</label>
    <span
      v-for="(option, optionIndex) in options[modelCat]"
      :key="optionIndex"
      >
      <b-button
        variant="transparent"
        class="mod mt-1 mr-1"
        :class="'mod-' + modelCat"
        size="sm"
        v-if="data === '' ? true : data === option.value"
        @click="onClickMod(option.value)"
        >
        {{option.text}}
      </b-button>
    </span>
    <small class="muted" v-if="data !== ''">{{$t('quickTuning.unselect')}}</small>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'
import options from '@/data/options.js'
import cat from '@/data/cat.js'

export default {
  name: 'QuickTune',
  mixins: [common],
  props: {
    value: {
      type: String,
      required: true
    },
  },
  data: function() {
    return {
      data: '',
      modelCat: 'hp',
    }
  },
  components: {
  
  },
  watch: {
    data(newValue) {
      this.$emit('input', newValue);
    },
  },
  computed: {
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
        if(op.cat.includes('main') || op.cat.includes('sub')) {
          if(Object.prototype.hasOwnProperty.call(op, 'weaponStat') && Object.prototype.hasOwnProperty.call(op.weaponStat, 'display')) {
            Object.keys(op.weaponStat.display).forEach(key => {
              var ef = op.weaponStat.display[key];
              arr.push(this.$t('weapon.' + key, key) + ef);
            });
          }
        }
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
    onClickMod(val) {
      if(this.data === val) {
        this.data = '';
      } else {
        this.data = val;
      }
    },
  }
}
</script>

<style scoped>
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
  font-size: 8px;
  padding-top: 0.15rem;
  padding-bottom: 0.15rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
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
.muted {
  opacity: 0.8;
}
</style>
