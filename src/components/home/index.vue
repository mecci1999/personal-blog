<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../navBar/index.vue';

export default defineComponent({
  name: "AppHome",

  setup() {
    return {};
  },

  components: {
    NavBar,
  },
});
</script>

<template>
  <div class="app-home">
    <div class="bg">
      <span class="bg-title">趁现在还年轻</span>
    </div>
    <NavBar />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
