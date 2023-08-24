import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/",
  {
    text: "软件教程",
    icon: "edit",
    prefix: "/software-guide/",
    children: [
      {
        text: "视频剪辑",
        icon: "edit",
        prefix: "video-cut/",
        children: [
          { text: "直播流保存", icon: "edit", link: "live-stream-save" },
        ],
      },
      {
        text: "度盘下载",
        icon: "edit",
        prefix: "pan-download/",
        children: [
          { text: "百度网盘", icon: "edit", link: "no-limit-download" },
        ]
      },
      {
        text: "科学上网",
        icon: "edit",
        prefix: "vpn/",
        children: [
          { text: "开启科学上网", icon: "edit", link: "methods" },
          { text: "CFW配置", icon: "edit", link: "cfw_setting" }
        ]
      },
    ],
  },
  {
    text: "Leetcode刷题笔记",
    icon: "anonymous",
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
