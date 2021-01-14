module.exports = {
  // 浏览器标题
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JoJo Wang',
      description: '记录的地方'
    },
    '/en': {
      lang: 'en-US',
      title: 'JoJo Wang',
      description: 'recording'
    }
  },
  // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo
  themeConfig: {
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'https://github.com/jojoti/jojoti.github.io',
      // 以下为可选的编辑链接选项
      // 假如你的文档仓库和项目本身不在一个仓库：
      docsRepo: 'jojoti/jojoti.github.io',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'dev',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      locales: {
          '/': {
            label: '简体中文',
            selectText: '选择语言',
            ariaLabel: '选择语言',
            editLinkText: '在 GitHub 上编辑此页',
            lastUpdated: '上次更新',
            // 配置导航栏
            nav: [
              {text: '关于',link: '/about'}
            ],
            sidebar: {
              '/about/': [{title:"关于", collapsable: false, children:["about"]}],
            }
          }
      }
    }
}