<template>
  <div>
    <div>
      <div class="node-wrapper">
        <span class="node" @click.stop.prevent="onClickNode">{{data.type}}</span>
        <b-button
          size="sm"
          variant="transparent"
          v-if="data.root !== true"
          >
          <i class="fa fa-trash" />
        </b-button>
      </div>
      <div v-if="editing">
        <table border="1" width="100%">
          <tr
            >
            <td
              rowspan="2"
              class="text-center"
              >
              零件數值
            </td>
            <td
              v-for="(key, index) in Object.keys(data.stat)"
              :key="'stat-' + index"
              class="text-center"
              >
              <small>{{key.toUpperCase()}}</small>
            </td>
          </tr>
          <tr>
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
          <SubPart v-model="data.children[index]" v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'

import defaultPart from '@/data/part.json'
import parts from '@/data/parts.js'

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
      data: this.deepCopy(this.value),
      
      editing: false,
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
  },
  methods: {
    onClickNode() {
      this.editing = !this.editing;
      if(this.editing) {
        this.$emit('startEdit');
      }
    },
    onAddPart(type, index) {
      var data = Object.assign({}, this.deepCopy(defaultPart), this.findPartByType(type));
      data['type'] = type;
      data['uid'] = this.uuid();
      
      var i = 0;
      for(i = 0; i < index; i++) {
        if(typeof this.data.children[i] === 'undefined') {
          this.data.children.splice(i, 0, null);
        }
      }
      this.data.children.splice(index, 1, data);
    },
    findPartByType(type) {
      var index = parts.findIndex(i => i.type === type);
      if(index !== -1) {
        return this.deepCopy(parts[index]);
      } else {
        return { child: [] };
      }
    },
    childHasTypes(types) {
      var index = this.data.children.findIndex(c => types.includes(c.type));
      return index !== -1;
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
</style>
