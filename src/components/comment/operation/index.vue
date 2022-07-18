<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import InputField from '@/components/common/form/input/index.vue';
import { checkIsQQNumber, checkIsQQEmail } from '@/utils/checkIsQQNumber';
import { useStore } from 'vuex';
import TextareaField from '@/components/common/form/textarea/index.vue';
import ButtonField from '@/components/common/form/button/index.vue';

export default defineComponent({
  name: 'CommnetOperation',

  setup() {
    const store = useStore();

    const name = ref('');
    const email = ref('');
    const text = ref('');
    const avatarImgUrl = ref('../../../src/assets/icon/account-black-32px.svg');
    const commentAvatarImgClasses = computed(() => {
      return [
        'comment-operation-form-header-avatar-img',
        {
          default:
            avatarImgUrl.value ===
            '../../../src/assets/icon/account-black-32px.svg',
        },
      ];
    });

    // 行数
    const row = 7;

    // 用户QQ信息
    const qqUserInfo = computed(() => {
      return store.getters['comment/qqUserInfo'];
    });

    // 获取用户QQ信息接口
    const getQQInfo = async (id: string) => {
      await store.dispatch('comment/getQQUserInfo', id);
    };

    /**
     * 当获取到字段的焦点时触发请求
     * 并且触发请求的条件需要满足QQ号的正则匹配，才能够发送请求，其他情况一切return
     * 查看store中是否存在数据，如果没有再发送请求。
     */
    const onSendReqGetAvatarByQQ = async () => {
      // 首先判断是否为QQ号
      if (!checkIsQQNumber(name.value)) return;

      // 通过api获取用户QQ信息，并存储在store中
      // 判断store中是否用数据，如果store中有数据，就不用发送请求
      if (qqUserInfo.value.code === 200) {
        avatarImgUrl.value = qqUserInfo.value.imgurl;
        name.value = qqUserInfo.value.name;
        email.value = qqUserInfo.value.mail;
      } else {
        await getQQInfo(name.value);
        avatarImgUrl.value = qqUserInfo.value.imgurl;
        if (qqUserInfo.value.name) {
          name.value = qqUserInfo.value.name;
        }
        if (qqUserInfo.value.mail) {
          email.value = qqUserInfo.value.mail;
        }
      }
    };

    const onSendReqGetAvatarByQQEmail = async () => {
      // 首先判断是否为QQ邮箱
      if (!checkIsQQEmail(email.value)) return;

      // 如果为qq邮箱就可以拿到qq去请求信息
      const QQNumber = email.value.split('@')[0];

      // 通过api获取用户QQ信息，并存储在store中
      // 判断store中是否用数据，如果store中有数据，就不用发送请求
      if (qqUserInfo.value.code === 200) {
        avatarImgUrl.value = qqUserInfo.value.imgurl;
        name.value = qqUserInfo.value.name;
        email.value = qqUserInfo.value.mail;
      } else {
        await getQQInfo(QQNumber);
        avatarImgUrl.value = qqUserInfo.value.imgurl;
        name.value = qqUserInfo.value.name;
        email.value = qqUserInfo.value.mail;
      }
    };

    return {
      name,
      email,
      avatarImgUrl,
      onSendReqGetAvatarByQQ,
      onSendReqGetAvatarByQQEmail,
      getQQInfo,
      qqUserInfo,
      commentAvatarImgClasses,
      text,
      row,
    };
  },

  components: {
    InputField,
    TextareaField,
    ButtonField,
  },
});
</script>

<template>
  <div class="comment-operation">
    <div class="comment-operation-title">
      <i class="comment-operation-title-icon"></i>
      <span class="comment-operation-title-text">写评论</span>
    </div>
    <div class="comment-operation-form">
      <div class="comment-operation-form-header">
        <div class="comment-operation-form-header-avatar">
          <img :class="commentAvatarImgClasses" :src="avatarImgUrl" />
        </div>
        <div class="comment-operation-form-header-input">
          <InputField
            placeholder="昵称/QQ号(必填)"
            v-model="name"
            @onBlur="onSendReqGetAvatarByQQ"
          />
          <InputField
            placeholder="邮箱(必填)"
            v-model="email"
            @onBlur="onSendReqGetAvatarByQQEmail"
          />
        </div>
      </div>
      <div class="comment-operation-form-line"></div>
      <div class="comment-operation-form-main">
        <TextareaField
          placeholder="友情提示：输入QQ号可以自动获取QQ头头像以及QQ邮箱"
          v-model="text"
          :rows="row"
        />
        <div class="comment-operation-form-main-button">
          <ButtonField />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
