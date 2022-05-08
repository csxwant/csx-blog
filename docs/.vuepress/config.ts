import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";


export default defineUserConfig({
  base: "/csx-blog/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "我的博客",
      description: "csx-blog",
    },
  },

  plugins: [
    searchPlugin({
      // ...

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
      hotKeys: ['k', '/'],
    }),
  ],

  theme,
});
