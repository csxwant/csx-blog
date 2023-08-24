import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/",
  {
    text: "编程之路",
    icon: "code",
    prefix: "/code-life/",
    children: [
      {
        text: "前端知识",
        icon: "front",
        prefix: "front/",
        children: [
          { text: "nvm安装", icon: "edit", link: "nvm-install" },
        ],
      },
    ]
  },
  {
    text: "软件教程",
    icon: "yingyong",
    prefix: "/software-guide/",
    children: [
      {
        text: "视频剪辑",
        prefix: "video-cut/",
        children: [
          { text: "直播流保存", icon: "live-stream", link: "live-stream-save" },
        ],
      },
      {
        text: "度盘下载",
        prefix: "pan-download/",
        children: [
          { text: "百度网盘", icon: "wangpan", link: "no-limit-download" },
        ]
      },
      {
        text: "科学上网",
        icon: "code",
        prefix: "vpn/",
        children: [
          { text: "起飞教程", icon: "airport", link: "methods" },
          { text: "CFW配置", icon: "config", link: "cfw_setting" }
        ]
      },
    ],
  },
  {
    text: "刷题笔记",
    icon: "leetcode",
    link: "/leetcode",
  },
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
