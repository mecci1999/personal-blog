<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavMenuItem',

  props:{
    item: {
      type: Object,
    }
  },

  setup() {
    return {
    }
  },

  components: {},
});
</script>

<template>
  <div class="nav-menu-list-item">
        <AppIcon :name="item.icon" size="20" />
        <span class="nav-menu-list-item-name">{{ item.text }}</span>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
