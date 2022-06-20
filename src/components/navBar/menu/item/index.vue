<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'NavMenuItem',

  props:{
    item: {
      type: Object,
    }
  },

  setup() {
    const store = useStore();

    // 定义切换主题方法
    const changeTheme = () => {
      const theme = store.getters['theme/theme'] === 'dark' ? 'light' : 'dark';

      store.commit('theme/setTheme', theme);
    };

    return {
      changeTheme,
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
