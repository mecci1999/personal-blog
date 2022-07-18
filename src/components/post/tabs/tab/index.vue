<script lang="ts" setup>
import { defineProps, ref,computed } from 'vue';
import { TypesAndTagsDataType } from '@/types/interface';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { postType } from '@/api/test/index'

const router = useRouter();
const store = useStore();

const props = defineProps({
  tabs: {
    type: Array<TypesAndTagsDataType>,
  },
});

const postTabItemClasses = (id:any) => {
  return ['post-tab-item', { active: id === currentTypeId.value }];
};
const currentTypeId = computed(() => store.getters['post/currentPostType'].id);

// 点击切换分类
const onClickChangeType = (id: any) => {
  // 根据当前id获取当前标签数据
  const type = postType.find((item) => item.id === id);
  console.log(type);

  store.commit('post/setCurrentPostType', type);
  console.log(currentTypeId.value);

  router.replace({
    name: 'postCategory',
    params: { typeId: `${currentTypeId.value}` },
  });
};
</script>

<template>
  <div class="post-tab">
    <div
      :class="postTabItemClasses(tab?.id)"
      v-for="tab in tabs"
      :key="tab?.id"
      @click="onClickChangeType(tab?.id)"
    >
      <div class="post-tab-item-name">{{ tab?.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
