import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  // 当前网站部署的域名
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "CSXWANT",
    // 作者域名
    // url: "https://mrhope.site",
  },

  iconPrefix: "iconfont icon-",

  // 页面左上角图标
  logo: "/logo.jpg",

  repo: "csxwant/csx-blog",

  // 文档在仓库中的目录
  docsDir: "docs",
  // 分支
  docsBranch: "master",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    medias: {
      GitHub: "https://github.com/csxwant",
      Gitee: "https://gitee.com/csxwant",
    },
  },

  locales: {
    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: "",

      displayFooter: true,

      blog: {
        description: "一个倒霉蛋！",
        intro: "/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using giscus
    //    */
    //   type: "giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    //
    //   /**
    //    * Using twikoo
    //    */
    //   // type: "twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    //
    //   /**
    //    * Using Waline
    //    */
    //   // type: "waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
