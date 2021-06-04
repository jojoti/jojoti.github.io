module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JoJo Wang',
      description: '记录的地方'
    },
    // '/en': {
    //   lang: 'en-US',
    //   title: 'JoJo Wang',
    //   description: 'recording'
    // }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo
  themeConfig: {
    // https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F-logo
    logo: '/logo.png',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/jojoti/jojoti.github.io',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'jojoti/jojoti.github.io',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'src',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
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
          {
            text: '首页',
            link: '/',
          },
          {
            text: '效率',
            link: '/01-efficiency/000-efficiency-use-tools'
          },
          {
            text: '博客',
            ariaLabel: '博客',
            items: [
              {
                text: '时间轴',
                link: '/02-blog/000-timeline'
              },
            ]
          },
          {
            text: '源码',
            ariaLabel: '源码解析',
            items: [
              {
                text: '数据库',
                items: [
                  {
                    text: 'tikv 深入解析',
                    link: '/04-srccode/01-tikv'
                  }
                ]
              },
              {
                text: '分布式',
                items: [
                  {
                    text: 'gossip实现serf解析',
                    link: '/04-srccode/01-tikv'
                  }
                ]
              },
            ]
          },
          {
            text: '开源',
            items: [
              {
                text: '分布式自增ID jogid',
                link: '/04-srccode/01-tikv'
              },
            ]
          },
          {
            text: '读书',
            link: '/03-read',
            items: [
              {
                text: '时间轴',
                link: '/02-blog/000-timeline'
              },
            ]
          },
          {
            text: '关于',
            link: '/99-about/00-about'
          },
          {
            text: '留言',
            link: 'https://github.com/jojoti/jojoti.github.io/issues/new',
            target: '_blank'
          },
        ],
        // ----------------------------------------------------------------------------------------------------------------------------------------
        sidebar: {
          // '/': [
          //   {
          //     // groupName
          //     title: '时间轴',
          //     collapsable: false,
          //     children: [
          //       'readme.md',
          //     ]
          //   },
          // ],
          '/01-efficiency/': [
            {
              // groupName
              title: '使用效率工具制定计划',
              collapsable: false,
              children: [
                '000-efficiency-use-tools.md',
              ]
            },
          ],
          '/02-blog/': [
            {
              // groupName
              title: '时间轴',
              collapsable: false,
              children: [
                '000-timeline.md',
              ]
            },
          ],
          '/99-about/': [
            {
              title: '关于',
              collapsable: false,
              children: [
                '00-about.md',
              ]
            },
          ],
        }
      }
    }
  }
}