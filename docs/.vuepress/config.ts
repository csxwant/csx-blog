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
        href: "//at.alicdn.com/t/c/font_3375345_btvz9znj9k.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "CSX❤LLY",
      description: "csx-blog",
    },
  },

  plugins: [
    searchPlugin({

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
