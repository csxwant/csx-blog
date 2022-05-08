import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    "",
    "home",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "视频剪辑",
      icon: "creative",
      prefix: "vedio-clip/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "度盘下载",
      icon: "creative",
      prefix: "pan-download/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "科学上网",
      icon: "creative",
      prefix: "vpn/",
      collapsable: true,
      children: "structure",
    }
  ]
});
