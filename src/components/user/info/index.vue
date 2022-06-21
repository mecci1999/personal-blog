<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserInfo',

  props:{
    user: {
      type: Object,
    }
  },

  setup() {
    return {}
  },

  components: {},
});
</script>

<template>
  <div class="user-info">
    <div class="user-info-avatar"></div>
    <div class="user-info-name"></div>
    <div class="user-info-description"></div>
    <div class="user-info-directory"></div>
    <div class="user-info-other"></div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
