import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    // "home",
    // "slide",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
  ],
  "/code-life/": [
    {
      text: "前端知识",
      icon: "front",
      prefix: "front/",
      collapsable: true,
      children: "structure",
    },
  ],
  "/software-guide/": [
    {
      text: "视频剪辑",
      icon: "video-cut",
      prefix: "video-cut/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "度盘下载",
      icon: "wangpan",
      prefix: "pan-download/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "科学上网",
      icon: "airport",
      prefix: "vpn/",
      collapsable: true,
      children: [
        { text: "开启科学上网", icon: "airport", link: "methods" },
        { text: "CFW配置", icon: "config", link: "cfw_setting" }
      ]
    }
  ],
  "/leetcode": "structure"
});
