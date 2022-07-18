<script lang="ts" setup>
import { defineProps } from 'vue';
import {AdwardInfoDataType} from '@/types/interface';
import {ElTableColumn, ElTable} from 'element-plus';

const props = defineProps({
  data:{
    type: Array<AdwardInfoDataType>,
  }
});
</script>

<template>
  <div class="table-field">
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="date" label="Date" style="text-align: center" />
      <el-table-column prop="name" label="Name" style="text-align: center" />
      <el-table-column
        prop="amount"
        label="Address"
        style="text-align: center"
      />
    </el-table>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
