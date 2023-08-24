# 卸载原有nodejs
(1) 在系统程序中卸载nodejs  
(2) 删除安装位置的文件夹nodejs  
(3) 删除C:\Users\csxwant\node_modules，C:\Users\csxwant\.npmrc，C:\Users\csxwant\.yarnrc，C:\Users\csxwant\yarn.lock  
(4) 删除环境变量中与Node相关的路径  
# 安装nvm
**到官网下载安装包**  
官方github地址：[https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)  
下载nvm-setup.zip或者nvm-setup.exe  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/28449339/1692848841046-8909911f-fd47-42fe-a427-4a69fc180b21.png#averageHue=%23fefefe&clientId=ubd49eea4-1b16-4&from=paste&id=uc668f6cc&originHeight=470&originWidth=1515&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=60694&status=done&style=none&taskId=ud5fe78a6-980b-4a15-86f2-ab8ed06e67b&title=)  

**安装**  
如果下载的ZIP压缩文件，解压后会发现里面有名为nvm-setup.exe的文件，点击进行安装  
注意安装的路径不能有中文和空格  
我的安装路径：C:\Users\csxwant\Myapp\nvm  
然后还需要设置nodejs文件的存放路径：D:\nodejs  
安装完成后可以打开cmd，输入nvm version查看是否安装成功  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/28449339/1692848841041-5c34cf3e-82ab-4d9e-8e6c-35475bc6d39f.png#averageHue=%2313110f&clientId=ubd49eea4-1b16-4&from=paste&id=uf3aa08fd&originHeight=49&originWidth=290&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=2843&status=done&style=none&taskId=u4004878c-2b9e-46df-9e1f-ad9443c91fd&title=)  
# 使用nvm安装node  
nvm install 14.19.1 # 你想安装的版本号  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/28449339/1692848841071-adafb644-0cc2-4141-9e92-ab75fc31a59d.png#averageHue=%2311100e&clientId=ubd49eea4-1b16-4&from=paste&id=u8c6951b4&originHeight=296&originWidth=628&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=25523&status=done&style=none&taskId=u81258a97-169e-45f0-afc1-6dd7cbe0aba&title=)  
踩坑：安装node完成后，执行nvm use命令，报exit status 1:乱码错误，原因是没有权限  
解决：使用管理员权限打开cmd，再执行命令  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/28449339/1692848841083-dd99d63e-fc89-49ce-a436-7ea53812d987.png#averageHue=%23333130&clientId=ubd49eea4-1b16-4&from=paste&id=uc4335182&originHeight=273&originWidth=420&originalType=url&ratio=1.5&rotation=0&showTitle=false&size=23260&status=done&style=none&taskId=u13ced5d3-8abf-47a5-a128-9c72e38b13d&title=)  
**使用/切换node版本**  
nvm use <版本号>  
