<script lang="ts" setup>
import { getAppDays, getCurrentDays } from '@/utils/getAppDays';

// 当前年份
const year = new Date().getFullYear();

const time = getCurrentDays();

const days = Math.floor(getAppDays(time));
</script>

<template>
  <div class="app-footer">
    <div class="app-footer-link"></div>
    <div class="app-footer-info">
      <div class="app-footer-info-time">
        本站已经安全的运行了<b>{{ days }}</b
        >天
      </div>
      <div class="app-footer-info-text">
        Copyright &copy 2021 - {{ year }} Mecci All Rights Reserved
      </div>
      <div class="app-footer-info-record"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
