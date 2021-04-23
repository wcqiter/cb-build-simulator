<template>
  <div>
    <ShareNetwork
      network="facebook"
      :url="link"
      :title="title"
      :description="description"
      class="mr-1"
      >
      <i class="fab fa-facebook"></i>
    </ShareNetwork>
    <ShareNetwork
      network="line"
      :url="link"
      :title="title"
      :description="description"
      class="mr-1"
      >
      <i class="fab fa-line"></i>
    </ShareNetwork>
    <ShareNetwork
      network="reddit"
      :url="link"
      :title="title"
      class="mr-1"
      >
      <i class="fab fa-reddit"></i>
    </ShareNetwork>
    <ShareNetwork
      network="telegram"
      :url="link"
      :title="title"
      :description="description"
      class="mr-1"
      >
      <i class="fab fa-telegram"></i>
    </ShareNetwork>
    <ShareNetwork
      network="twitter"
      :url="link"
      :title="title"
      class="mr-1"
      hashtags="CBUNI"
      >
      <i class="fab fa-twitter"></i>
    </ShareNetwork>
    <ShareNetwork
      network="whatsapp"
      :url="link"
      :title="title"
      :description="description"
      class="mr-1"
      >
      <i class="fab fa-whatsapp"></i>
    </ShareNetwork>
  </div>
</template>

<script>
import { common } from '@/mixins/common.js'

export default {
  name: 'Share',
  mixins: [common],
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data: function() {
    return {
    
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
</style>
