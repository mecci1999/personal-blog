<script lang="ts">
import { defineComponent, onMounted, ref, reactive, computed } from 'vue';
import NavBar from '@/components/navBar/index.vue';
import { useStore } from 'vuex';
import AppFooter from '@/components/footer/index.vue';
import { websiteInfo, updatedLog, adwardInfo } from '@/api/test/index';
import TimeLine from '@/components/common/time-line/index.vue';
// import TableField from '@/components/common/form/table/index.vue';

export default defineComponent({
  name: 'AppAbout',

  setup() {
    let time = ref('');
    let date: any;
    let style = reactive({
      backgroundImage: '',
    });

    const store = useStore();
    // 获取用户信息
    const getUser = async () => {
      await store.dispatch('user/getUser');
    };

    let name = ref('');
    let introduction = ref('');
    let info = reactive({
      github: '',
      qq: '',
      wechat: '',
      eMail: '',
    });

    // onMounted(async () => {

    // });

    return {
      time,
      style,
      name,
      introduction,
      info,
      websiteInfo,
      updatedLog,
      adwardInfo,
    };
  },

  components: {
    NavBar,
    AppFooter,
    TimeLine,
    // TableField,
  },
});
</script>

<template>
  <div class="app-about">
    <NavBar />
    <div class="app-about-title">
      <h2 class="app-about-title-header">
        源于
        <br />
        喜欢<span>分享</span>而创造
      </h2>
      <div class="app-about-title-description">
        在这里你可以了解<span class="app-about-title-description-coding"
          >技术</span
        >、<span class="app-about-title-description-item">项目</span> 、<span
          class="app-about-title-description-ideal"
          >个人感想</span
        >等。
        <br />
        我会分享一些我觉得有意思的东西，希望大家喜欢。
      </div>
    </div>
    <div class="app-about-container">
      <div class="app-about-container-text">
        <p>
          创建这个站的时候，想要就是能够有一个自己能够积累知识、积累兴趣的地方。和他人分享，会让这些成为积累和沉淀。如果能够帮助到更多的人，帮助更多人解决问题，那一定是非常棒的事情。
        </p>
        <p>
          分享这件事我从很早就开始了，起初做的微信公众号，现在做的网站。因为我比较喜欢研究数码和软件，想要探究在互联网上的事物是如何被创造和发展。
          网络给我带来了非常多的知识和眼界，我也想力所能及的分享一些我生活的琐碎知识。
        </p>
        <p>
          与大多数垂直类的技术博客不同，这里的种类会非常的繁杂，有技能的教程干货、有生活上的吐槽和妙招、有话题上的思考和想法。一般我研究什么、发现了什么都会分享在这里。
        </p>
        <p>
          这些就是创造这个小站的本意，也是我分享生活的方式。有幸能和你相遇在这里，相信我们能共同留下一段美好记忆。
        </p>
      </div>
      <div class="app-about-container-announcement">
        <div class="app-about-container-announcement-title">网站公告</div>
        <TimeLine :items="websiteInfo" />
      </div>
      <div class="app-about-container-log">
        <div class="app-about-container-log-title">更新日志</div>
        <TimeLine :items="updatedLog" />
      </div>
      <div class="app-about-container-adward">
        <div class="app-about-container-adward-title">好心人名单</div>
        <div class="app-about-container-adward-description">
          在这里特别鸣谢下面这些好心人，正是因为有了你们的资助，让我感受到我写的博客能够给你们带来价值，
          也让我有了信心接着在这条路上越走越远，最后再次衷心的感谢你们。
        </div>
        <div class="app-about-container-adward-table">
          <el-table :data="adwardInfo" border style="width: 100%">
            <el-table-column prop="date" label="日期" />
            <el-table-column prop="name" label="昵称" />
            <el-table-column prop="amount" label="金额" />
          </el-table>
        </div>
      </div>
      <div class="app-about-container-author">
        <div class="app-about-container-author-title">关于博主</div>
        <div class="app-about-container-author-description">
          性别男、99年、可以吃辣但不太喜欢吃辣的江西人。目前在深圳某互联网公司从事前端开发工作。爱好足球和摄影，喜欢记录生活中有意思的事物。
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
