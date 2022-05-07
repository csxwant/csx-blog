---
icon: edit
category:
- 网盘下载

tag:
- 破除限速
- 下载
---

# 百度网盘全速下载

由于贫穷的原因，大部分人都开不起百度网盘超级会员，这也就导致了非会员想要下载网盘里的东西时，速度总是kb/s，实在是让人抓狂。  

本文介绍了使用chrome插件与油猴脚本，来实现百度网盘的全速下载。  

::: tip 提示
需要有一定的chrome插件使用基础，步骤较多
:::

## 准备工作
环境： chrome浏览器  

其他： 需要下载一个chrome插件（Tampermonkey），一个脚本，以及一个下载软件Aria2

### Tampermonkey下载与安装
---
油猴脚本是一个最为流行的用户脚本管理插件，将在您的用户脚本管理方面提供更多的便利。

#### 下载
---
因为chrome官方的插件商店需要有梯子才能上，所以这里使用了国内的镜像网址  

镜像网站：[收藏猫插件](https://chrome.pictureknow.com/)  

插件直接下载地址：[Tampermonkey](https://chrome.pictureknow.com/extension?id=4d999497b75d4eb6acf4d0db3053f1af)  

下载界面：  

![Alt text](/dp/monkey_down_page.png)  

::: tip
1. 记得选择下载插件手动安装哦
2. 镜像网站需要关注公众号，没有梯子的话就将就着用吧
3. 下载好的插件文件应该是以.crx后缀结尾的文件
:::

#### 安装
---
1. 打开谷歌浏览器，在搜索框中输入：==chrome://extensions/==，然后浏览器会跳转到扩展程序界面  

2. 浏览器右上角开启开发者模式  

![Alt text](/dp/open_create_mode.png)  

3. 在扩展程序界面选择==加载已解压的扩展程序==  

![Alt text](/dp/dp1.png)  

4. 选择你刚刚下载的插件文件即可  

![Alt text](/dp/monkey_crx.png)

然后你就可以在浏览器的右上角看到你安装好的Tampermonkey  

![Alt text](/dp/dp_monkey_ok.png)

### 百度网盘简易下载助手脚本安装
---
::: tip
1. 这个脚本是由上面安装的Tampermonkey油猴脚本管理器进行管理的哦
2. 一个纯净好用的直链下载助手，绝无多余附加功能。免SVIP会员，免安装浏览器扩展，无视黑号，只要你有个IDM或Aria2，就能享受极速下载的快感！  
:::

脚本地址：[百度网盘简易下载助手](https://greasyfork.org/zh-CN/scripts/418182-%E7%99%BE%E5%BA%A6%E7%BD%91%E7%9B%98%E7%AE%80%E6%98%93%E4%B8%8B%E8%BD%BD%E5%8A%A9%E6%89%8B-%E7%9B%B4%E9%93%BE%E4%B8%8B%E8%BD%BD%E5%A4%8D%E6%B4%BB%E7%89%88)  

然后在脚本页面直接选择安装即可，安装完成后，当我们在网页中打开百度网盘时，界面上会多出一个红色的按钮：  

![Alt text](/dp/dp2.png)

### Aria2下载
---
这是因为下载百度网盘中文件的工具，其实百度网盘简易下载助手介绍有两种下载方式，但因为使用Aria2无需配置，所以我们使用这一个。  

Aria2下载链接：[Aria2](https://softxm.lanzoui.com/b01nqc7yj)  

![Alt text](/dp/aria2_get_page.png)  

下载后解压到你想放的位置即可，解压之后的文件目录：  

![Alt text](/dp/dp3.png)  

---
上述就是全部的准备工作，下面我将进行一次下载演示

## 下载演示
这里以他人分享的网盘链接下载为例

::: info
请注意下载前需要在网页上登录你的网盘账号！！！
:::

### 运行Aria2
---
进入你之前解压该软件的文件夹，点击==AriaNg启动器.exe==  

![Alt text](/dp/open_aria2_1.png)  

启动之后软件会在浏览器中打开一个新界面  

![Alt text](/dp/Aria2_page.png)

::: tip
点击AriaNg启动器.exe后记得选择使用chrome谷歌浏览器打开
:::

### 保存文件到网盘
---
下载前必须要将你要下载的文件保存到你的网盘中，不然无法下载

### 下载
---

#### 选择下载文件
---
在浏览器中进入你的网盘主页，选择你保存的需要下载的那个文件，如图所示：  

![Alt text](/dp/pd_file_select_page.png)  

勾上你要下载的文件，然后点击红色的简易下载助手按钮  

![Alt text](/dp/pd_select_down.png)  

#### 获取下载地址
---
然后会出现下图所示弹窗，然后点击==点击获取直链地址==  

![Alt text](/dp/get_address_1.png)   

::: tip
如果你是第一次使用，那么你还需要填写一个验证码  
验证码获取方式：关注**软件小妹**公众号，发送验证码
:::

等待一段时间后，如果获取地址成功，那么会出现下图所示界面：  

![Alt text](/dp/get_address_2.png)

#### 使用Aria2进行下载
---
点击图中所示==发送至Aria2==，就是开始下载啦！！！  

::: tip
文件的下载保存地址默认为D:\_\_easyHelper__
:::

#### 查看下载进度
---
你可以切换到之前运行AriaNg启动器.exe打开的界面，就可以看到实时下载进度  

![Alt text](/dp/aria2_download_page.png)

