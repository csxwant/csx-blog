---
icon: edit
category:
- 科学上网
- CFW

tag:
- vpn
- 机场
- 配置
---

# CFW配置
这篇文章将讲述如何对Clash For Windows进行配置，以帮助你更好的使用。 

CFW默认的代理模式有四种，分别为:  
规则: 代表规则模式，属于国内直连，国外自动走节点流量（建议使用）  
全局: 代表全局模式，全部国内国外都走节点流量（有可能导致访问国内比较卡）  
直连: 代表直连模式，全部国内国外走不走节点流量（相当于没开clash）  
脚本: 配置比较复杂非专业人士不建议用  

但当你使用机场的配置文件时，你使用的规则都是由机场服务提供的，这也注定在某些地方
不能满足你的需求，所以我们可以自己定义配置文件。

::: tip 提示
这里的配置文件指的是./profiles/config.yml
:::

## 配置文件模板

```yaml
mixed-port: 10800  # 这里更改为你的端口
allow-lan: false
external-controller: 127.0.0.1:13990
secret: ''
ipv6: true
log-level: silent  # 日志级别
mode: rule  # 代理模式为规则模式

proxy-groups:
  - name: PROXY
    type: url-test  # 根据延迟自动更换节点
    url: http://www.gstatic.com/generate_204
    interval: 600  # 检测节点延迟间隔
    use:
      - my-subscription

proxy-providers:
  my-subscription:
    type: http
    path: ./profiles/my-subscription.yml
    url: url # 这里更改为你的订阅地址
    interval: 86400  #  订阅更新间隔
    health-check: #health check option start at here
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600  # 检测代理延迟间隔

rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  icloud:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
    path: ./ruleset/icloud.yaml
    interval: 86400

  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

  google:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
    path: ./ruleset/google.yaml
    interval: 86400

  proxy:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  greatfire:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
    path: ./ruleset/greatfire.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  cncidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.yaml
    interval: 86400

  lancidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
    path: ./ruleset/lancidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400

rules:
  - RULE-SET,applications,DIRECT
  - DOMAIN,clash.razord.top,DIRECT
  - DOMAIN,yacd.haishan.me,DIRECT
  - RULE-SET,private,DIRECT
  - RULE-SET,reject,REJECT
  - RULE-SET,icloud,DIRECT
  - RULE-SET,apple,DIRECT
  - RULE-SET,google,DIRECT
  - RULE-SET,proxy,PROXY
  - RULE-SET,direct,DIRECT
  - RULE-SET,lancidr,DIRECT
  - RULE-SET,cncidr,DIRECT
  - RULE-SET,telegramcidr,PROXY
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
  - DOMAIN,http://172.20.20.1:801/srun_portal_pc.php?ac_id=3&,DIRECT  # 这一条专为DLUT Stu

```

### 关键修改
1. mixed-port  
修改为你的端口
2. proxy-providers/url  
修改为你的机场订阅地址

## 配置文件改进
这个模板新增了几个免费机场和国内代理
```yaml
mixed-port: 10800
allow-lan: false
external-controller: 127.0.0.1:13990
secret: ''
ipv6: true
log-level: silent
mode: rule

proxy-groups:
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择(付费代理)
      - 🛵 luxury免费代理
      - 🛵 B免费代理
      - ✈️ 指定国家代理

  - name: ♻️ 自动选择(付费代理)
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 600
    use:
      - my-subscription

  - name: 🛵 luxury免费代理
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 600
    use:
      - freeNodeA

  - name: 🛵 B免费代理
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 600
    use:
      - freeNodeB

  - name: ✈️ 指定国家代理 
    type: select
    proxies:
      - 🇨🇳 国内代理
      - 🇱🇹 立陶宛代理
      - 🇺🇸 美国代理

  - name: 🇨🇳 国内代理
    type: select
    use:
      - freeNode_cn

  - name: 🇱🇹 立陶宛代理
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 600
    use:
      - freeNode_lt

  - name: 🇺🇸 美国代理
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 600
    use:
      - freeNode_us

proxy-providers:
  my-subscription:
    type: http
    path: ./profiles/my-subscription.yml
    url: url # 这里更改为你的订阅地址
    interval: 86400  #  订阅更新间隔
    health-check: #health check option start at here
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600  # 检测代理延迟间隔

  freeNodeA:
    type: http
    path: ./profiles/freeNodeA.yml
    url: https://a.luxury/link/mvWYsCsUBcjtNWHA?clash=2
    interval: 86400
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600

  freeNodeB:
    type: http
    path: ./profiles/freeNodeB.yml
    url: https://raw.githubusercontent.com/anaer/Sub/main/clash.yaml
    interval: 86400
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600

  freeNode_cn:
    type: http
    path: ./profiles/freeNode_cn.yml
    url: https://proxies.bihai.cf/clash/proxies?c=CN
    interval: 86400
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600

  freeNode_lt: # 立陶宛
    type: http
    path: ./profiles/freeNode_lt.yml
    url: https://proxies.bihai.cf/clash/proxies?c=LT
    interval: 86400
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600

  freeNode_us: # 美国
    type: http
    path: ./profiles/freeNode_us.yml
    url: https://proxies.bihai.cf/clash/proxies?c=US&type=vmess,trojan
    interval: 86400
    health-check:
      enable: true
      url: http://www.gstatic.com/generate_204
      interval: 600

rule-providers:
  reject:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt"
    path: ./ruleset/reject.yaml
    interval: 86400

  icloud:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt"
    path: ./ruleset/icloud.yaml
    interval: 86400

  apple:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt"
    path: ./ruleset/apple.yaml
    interval: 86400

  google:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt"
    path: ./ruleset/google.yaml
    interval: 86400

  proxy:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt"
    path: ./ruleset/proxy.yaml
    interval: 86400

  direct:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt"
    path: ./ruleset/direct.yaml
    interval: 86400

  private:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt"
    path: ./ruleset/private.yaml
    interval: 86400

  gfw:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt"
    path: ./ruleset/gfw.yaml
    interval: 86400

  greatfire:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt"
    path: ./ruleset/greatfire.yaml
    interval: 86400

  tld-not-cn:
    type: http
    behavior: domain
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt"
    path: ./ruleset/tld-not-cn.yaml
    interval: 86400

  telegramcidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt"
    path: ./ruleset/telegramcidr.yaml
    interval: 86400

  cncidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt"
    path: ./ruleset/cncidr.yaml
    interval: 86400

  lancidr:
    type: http
    behavior: ipcidr
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt"
    path: ./ruleset/lancidr.yaml
    interval: 86400

  applications:
    type: http
    behavior: classical
    url: "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt"
    path: ./ruleset/applications.yaml
    interval: 86400

rules:
  - RULE-SET,applications,DIRECT
  - DOMAIN,clash.razord.top,DIRECT
  - DOMAIN,yacd.haishan.me,DIRECT
  - RULE-SET,private,DIRECT
  - RULE-SET,reject,REJECT
  - RULE-SET,icloud,DIRECT
  - RULE-SET,apple,DIRECT
  - RULE-SET,google,DIRECT
  - RULE-SET,proxy,🚀 节点选择
  - RULE-SET,direct,DIRECT
  - RULE-SET,lancidr,DIRECT
  - RULE-SET,cncidr,DIRECT
  - RULE-SET,telegramcidr,🚀 节点选择
  - GEOIP,LAN,DIRECT
  - GEOIP,CN,DIRECT
  - MATCH,🚀 节点选择
  - DOMAIN,http://172.20.20.1:801/srun_portal_pc.php?ac_id=3&,DIRECT

```
::: tip
只需要填写你的订阅地址即可
:::