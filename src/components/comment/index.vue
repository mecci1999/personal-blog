<script lang="ts">
import { defineComponent } from 'vue';
import CommnetOperation from './operation/index.vue';
import CommentShow from './show/index.vue';

export default defineComponent({
  name: 'CommentPanel',

  setup() {
    return {};
  },

  components: {
    CommnetOperation,
    CommentShow,
  },
});
</script>

<template>
  <transition name="comment-panel">
    <div class="comment-panel">
      <CommnetOperation />
      <CommentShow />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
