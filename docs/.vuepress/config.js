module.exports = {
  locales: {
    "/": {
      lang: "en-US",
      title: "X-BUILD",
      description: "",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "X-BUILD",
      description: "",
    },
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        repoLabel: "View source",
        editLinkText: "Edit this page on GitHub",
        nav: [
          { text: "Get started", link: "/" },
          { text: "Guide", link: "/guide/" },
        ],
        sidebar: [
          {
            title: "基础",
            collapsable: false,
            // sidebarDepth: 2,
            children: [
              ["/", "设置"],
              ["/guide/", "快速上手"],
              // {
              //   title: "设置",
              //   path: "/",
              // },
            ],
          },
        ],
      },
      "/zh/": {
        selectText: "选择语言",
        label: "简体中文",
        repoLabel: "查看源码",
        editLinkText: "在 GitHub 上编辑此页",
        nav: [
          { text: "快速上手", link: "/zh/" },
          { text: "指南", link: "/zh/guide/" },
        ],
        sidebar: [
          {
            title: "基础",
            // path: "/zh/guide/",
            collapsable: false,
            // sidebarDepth: 2,
            children: [
              ["/zh/", "快速上手"],
              ["/zh/guide/", "快速上手"],
              // {
              //   title: "设置",
              //   path: "/zh/",
              // },
            ],
          },
        ],
      },
    },
  },
};
