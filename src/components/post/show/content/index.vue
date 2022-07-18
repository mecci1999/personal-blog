<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PostShowContent',

  props: {
    post: {
      type: Object,
    },
  },

  setup(props) {
    const store = useStore();

    return {
      ...props,
    };
  },

  components: {},
});
</script>

<template>
  <div
    id="post-show-content"
    class="post-show-content"
    v-html="post.content"
  ></div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
