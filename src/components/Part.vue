<template>
  <div>
    <span class="node">
      {{data.type}}
    </span>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'

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
    }
  },
  components: {
    
  },
  watch: {
  
  },
  computed: {
  
  },
  methods: {
  
  }
}
</script>

<style scoped>
.node {
  border: 1px inset black;
  padding: 1rem;
}
</style>
