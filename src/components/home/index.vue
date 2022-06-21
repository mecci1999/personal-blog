<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '../navBar/index.vue';
import AppIcon from '../common/app-icon/index.vue';
import UserInfo from '../user/info/index.vue';

export default defineComponent({
  name: "AppHome",

  setup() {
    const onClickScrollDown = () => {
      document.getElementById('main').scrollIntoView({behavior: 'smooth'})
    }

    return {
      onClickScrollDown,
    };
  },

  components: {
    NavBar,
    AppIcon,
    UserInfo,
  },
});
</script>

<template>
  <div class="app-home">
    <div class="bg">
      <div class="bg-container">
        <span class="bg-container-title">趁现在还年轻</span>
        <div class="bg-container-scroll-down" @click="onClickScrollDown">
          <AppIcon name="keyboard_arrow_down" size="32" color="#eee" />
        </div>
      </div>
    </div>
    <NavBar />
    <div id="main" class="app-main">
      <div class="app-main-container">
        <div class="app-main-container-left">
          <UserInfo />
        </div>
        <div class="app-main-container-right">
          
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
