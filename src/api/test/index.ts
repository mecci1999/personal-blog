/**
 * 此文件用来存放所有的后端接口模拟数据，仅用来完成前端的开发，后期将用后端的接口代替
 */

/**
 * 博客分类
 */
export const postType = [
  {
    id: 1,
    name: '首页',
  },
  {
    id: 2,
    name: '我的项目',
  },
  {
    id: 3,
    name: '前端技术',
  },
  {
    id: 4,
    name: '经验分享',
  },
  {
    id: 5,
    name: '闲聊杂谈',
  },
  {
    id: 6,
    name: '佳作推荐',
  },
  {
    id: 7,
    name: '优质转载',
  },
  {
    id: 8,
    name: '网站公告',
  },
  {
    id: 9,
    name: '个人经历',
  },
  {
    id: 10,
    name: '其他',
  },
];

/**
 * 博客标签
 */
export const tags = [
  {
    id: 1,
    name: 'JavaScript',
    amount: 11,
  },
  {
    id: 2,
    name: '开发',
    amount: 100,
  },
  {
    id: 3,
    name: 'Python',
    amount: 120,
  },
  {
    id: 4,
    name: 'Docker',
    amount: 67,
  },
  {
    id: 5,
    name: '干货',
    amount: 45,
  },
  {
    id: 6,
    name: '必看',
    amount: 35,
  },
  {
    id: 7,
    name: '热门',
    amount: 14,
  },
  {
    id: 8,
    name: '日常',
    amount: 167,
  },
  {
    id: 9,
    name: '软件',
    amount: 15,
  },
  {
    id: 10,
    name: '闲聊',
    amount: 255,
  },
  {
    id: 11,
    name: '音乐',
    amount: 134,
  },
  {
    id: 12,
    name: '更新日志',
    amount: 12,
  },
];

/**
 * 网站数据
 */
export const info = {
  postAmount: 100,
  wordAmount: 10,
  accessAmount: 4000,
  updatedTime: '4天前',
};

/**
 * 博客发表统计数量根据月份
 */
export const postAmount = [
  {
    date: '01',
    count: 10,
  },
  {
    date: '02',
    count: 30,
  },
  {
    date: '03',
    count: 20,
  },
  {
    date: '04',
    count: 15,
  },
  {
    date: '05',
    count: 12,
  },
  {
    date: '06',
    count: 9,
  },
  {
    date: '07',
    count: 16,
  },
  {
    date: '08',
    count: 15,
  },
  {
    date: '09',
    count: 14,
  },
  {
    date: '10',
    count: 18,
  },
  {
    date: '11',
    count: 14,
  },
  {
    date: '12',
    count: 12,
  },
];

// 博客信息接口
export const posts = [
  {
    id: 3,
    title: '独立开发个人博客',
    description:
      '从0到1独立完成搭建属于自己的个人博客网站，此次开发使用到的技术栈前端为vue3+vite+ts,后端的技术栈为express+mysql。',
    content: '<h1>hello,world!</h1>',
    wordAmount: '800',
    bgImgUrl: '../src/assets/image/post_bg_03.png',
    readTime: '10min',
    created: '2022-06-14 23:26:35',
    updated: '2022-06-14 23:26:35',
    commentAmount: 10,
    accessAmount: 4000,
    types: [
      {
        id: 1,
        name: '前端技术',
      },
      {
        id: 2,
        name: '面经',
      },
    ],
    tags: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: '开发',
      },
      {
        id: 8,
        name: '日常',
      },
    ],
  },
  {
    id: 2,
    title: '独立开发个人博客',
    description:
      '从0到1独立完成搭建属于自己的个人博客网站，此次开发使用到的技术栈前端为vue3+vite+ts,后端的技术栈为express+mysql。',
    content: '<h1>hello,world!</h1>',
    bgImgUrl: '../src/assets/image/post_bg_03.png',
    wordAmount: '800',
    readTime: '10min',
    created: '2022-06-14 23:26:35',
    updated: '2022-06-14 23:26:35',
    commentAmount: 10,
    accessAmount: 4000,
    types: [
      {
        id: 1,
        name: '前端技术',
      },
      {
        id: 2,
        name: '面经',
      },
    ],
    tags: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: '开发',
      },
      {
        id: 3,
        name: '日常',
      },
    ],
  },
  {
    id: 1,
    title: '独立开发个人博客',
    description:
      '从0到1独立完成搭建属于自己的个人博客网站，此次开发使用到的技术栈前端为vue3+vite+ts,后端的技术栈为express+mysql。',
    content: '<h1>hello,world!</h1>',
    bgImgUrl: '../src/assets/image/post_bg_01.png',
    wordAmount: '800',
    readTime: '10min',
    created: '2022-06-14 23:26:35',
    updated: '2022-06-14 23:26:35',
    commentAmount: 10,
    accessAmount: 4000,
    types: [
      {
        id: 1,
        name: '前端技术',
      },
      {
        id: 2,
        name: '面经',
      },
    ],
    tags: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: '开发',
      },
      {
        id: 3,
        name: '日常',
      },
    ],
  },
];

// 用户信息接口信息
export const users = {
  name: 'Mecci',
  description: '学习永无止境',
  blogAmount: 10,
  typeAmount: 4,
  tagAmount: 8,
  info: {
    github: 'https://www.github.com/mecci1999',
    qq: 'http://wpa.qq.com/msgrd?v=3&uin=664751829&site=qq&menu=yes',
    wechat: '',
  },
};

// 博客数据
export const post = {
  id: 1,
  title: '为什么要写博客？',
  description:
    '从0到1独立完成搭建属于自己的个人博客网站，此次开发使用到的技术栈前端为vue3+vite+ts,后端的技术栈为express+mysql。',
  content: `<h1>欢迎使用 Cmd Markdown 编辑阅读器</h1>
<hr>
<p>我们理解您需要更便捷更高效的工具记录思想，整理笔记、知识，并将其中承载的价值传播给他人，<strong>Cmd Markdown</strong> 是我们给出的答案 —— 我们为记录思想和分享知识提供更专业的工具。 您可以使用 Cmd Markdown：</p>
<blockquote>
<ul>
<li>整理知识，学习笔记</li>
<li>发布日记，杂文，所见所想</li>
<li>撰写发布技术文稿（代码支持）</li>
<li>撰写发布学术论文（LaTeX 公式支持）</li>
</ul>
</blockquote>
<p><img src="https://www.zybuluo.com/static/img/logo.png" alt="cmd-markdown-logo"></p>
<p>除了您现在看到的这个 Cmd Markdown 在线版本，您还可以前往以下网址下载：</p>
<h3 id="windowsmaclinux-全平台客户端"><a href="https://www.zybuluo.com/cmd/">Windows/Mac/Linux 全平台客户端</a></h3>
<blockquote>
<p>请保留此份 Cmd Markdown 的欢迎稿兼使用说明，如需撰写新稿件，点击顶部工具栏右侧的 <i class="icon-file"></i> <strong>新文稿</strong> 或者使用快捷键 <code>Ctrl+Alt+N</code>。</p>
</blockquote>
<hr>
<h2 id="什么是-markdown">什么是 Markdown</h2>
<p>Markdown 是一种方便记忆、书写的纯文本标记语言，用户可以使用这些标记符号以最小的输入代价生成极富表现力的文档：譬如您正在阅读的这份文档。它使用简单的符号标记不同的标题，分割不同的段落，<strong>粗体</strong> 或者 <em>斜体</em> 某些文字，更棒的是，它还可以</p>
<h3 id="1-制作一份待办事宜-todo-列表">1. 制作一份待办事宜
<a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#13-%E5%BE%85%E5%8A%9E%E4%BA%8B%E5%AE%9C-todo-%E5%88%97%E8%A1%A8">Todo 列表</a></h3>
<ul>
<li><input disabled="" type="checkbox"> 支持以 PDF 格式导出文稿</li>
<li><input disabled="" type="checkbox"> 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率</li>
<li><input checked="" disabled="" type="checkbox"> 新增 Todo 列表功能</li>
<li><input checked="" disabled="" type="checkbox"> 修复 LaTex 公式渲染问题</li>
<li><input checked="" disabled="" type="checkbox"> 新增 LaTex 公式编号功能</li>
</ul>
<h3 id="2-书写一个质能守恒公式latex">2. 书写一个质能守恒公式[^LaTeX]</h3>
<p>$$E=mc^2$$</p>
<h3 id="3-高亮一段代码code">3. 高亮一段代码[^code]</h3>
<pre ><code class="language-javasript">
export const test = () => {
console.log('Hello,World!);
}
</code></pre>`,
  wordAmount: '800',
  readTime: '10min',
  created: '2022-06-14 23:26:35',
  updated: '2022-06-15 12:20:20',
  commentAmount: 10,
  accessAmount: 4000,
  bgImgUrl: '../src/assets/image/post_bg_03.png',
  types: [
    {
      id: 1,
      name: '前端技术',
    },
    {
      id: 2,
      name: '面经',
    },
  ],
  tags: [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: '开发',
    },
    {
      id: 3,
      name: '日常',
    },
  ],
};

/**
 * 网站公告接口
 */
export const websiteInfo = [
  {
    id: 7,
    date: '2022/12/14',
    content: '用户发言前，请认真阅读评论协议',
  },
  {
    id: 6,
    date: '2022/11/14',
    content: '博客项目即将进行重构，大家可以期待一下。',
  },
  {
    id: 5,
    date: '2022/10/14',
    content: '主页面完成了小部分的优化，大家可以体验一下。',
  },
  {
    id: 4,
    date: '2022/08/24',
    content: '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
  },
  {
    id: 3,
    date: '2022/08/14',
    content: '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
  },
  {
    id: 2,
    date: '2022/07/26',
    content: '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
  },
  {
    id: 1,
    date: '2022/07/14',
    content: '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
  },
];

/**
 * 更新日志接口
 */
export const updatedLog = [
  {
    id: 7,
    date: '2022/12/14',
    content: [
      '用户发言前，请认真阅读评论协议',
      '用户发言前，请认真阅读评论协议',
      '用户发言前，请认真阅读评论协议',
    ],
  },
  {
    id: 6,
    date: '2022/11/14',
    content: [
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
    ],
  },
  {
    id: 5,
    date: '2022/10/14',
    content: [
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
    ],
  },
  {
    id: 4,
    date: '2022/08/24',
    content: [
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
      '博客项目即将进行重构，大家可以期待一下。',
    ],
  },
  {
    id: 3,
    date: '2022/08/14',
    content: [
      '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
      '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
    ],
  },
  {
    id: 2,
    date: '2022/07/26',
    content: ['博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。'],
  },
  {
    id: 1,
    date: '2022/07/14',
    content: [
      '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
      '博客正式上线，从无到有耗时三个月的世间，希望能够一直坚持下去。',
    ],
  },
];

/**
 * 打赏名单
 */
export const adwardInfo = [
  {
    id: 8,
    date: '2016-05-05',
    name: 'Tom',
    amount: '¥10',
  },
  {
    id: 7,
    date: '2016-05-04',
    name: 'Tom',
    amount: '¥1.5',
  },
  {
    id: 6,
    date: '2016-05-04',
    name: 'Tom',
    amount: '¥1.5',
  },
  {
    id: 5,
    date: '2016-05-03',
    name: 'Tom',
    amount: '¥0.1',
  },
  {
    id: 4,
    date: '2016-05-02',
    name: 'Tom',
    amount: '¥1.5',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'Tom',
    amount: '¥6.6',
  },
  {
    id: 2,
    date: '2016-05-01',
    name: 'Tom',
    amount: '¥6.6',
  },
  {
    id: 1,
    date: '2016-05-01',
    name: 'Tom',
    amount: '¥6.6',
  },
];

/**
 * 搜索接口测试数据
 */
export const searchResultDataType = [
  {
    postId: 1,
    title: '独立开发个人博客',
  },
  {
    postId: 2,
    title: '独立开发个人博客',
  },
  {
    postId: 3,
    title: '独立开发个人博客',
  },
  {
    postId: 1,
    title: 'SwiftUI 学习笔记 34：项目 6-3 动画 挑战',
  },
  {
    postId: 2,
    title: 'SwiftUI 学习笔记 34：项目 6-3 动画 挑战',
  },
  {
    postId: 3,
    title: 'SwiftUI 学习笔记 34：项目 6-3 动画 挑战',
  },
];
