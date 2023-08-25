import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-38f4aacd.js";const t={},p=e(`<h1 id="cfw配置" tabindex="-1"><a class="header-anchor" href="#cfw配置" aria-hidden="true">#</a> CFW配置</h1><p>这篇文章将讲述如何对Clash For Windows进行配置，以帮助你更好的使用。</p><p>CFW默认的代理模式有四种，分别为:<br> 规则: 代表规则模式，属于国内直连，国外自动走节点流量（建议使用）<br> 全局: 代表全局模式，全部国内国外都走节点流量（有可能导致访问国内比较卡）<br> 直连: 代表直连模式，全部国内国外走不走节点流量（相当于没开clash）<br> 脚本: 配置比较复杂非专业人士不建议用</p><p>但当你使用机场的配置文件时，你使用的规则都是由机场服务提供的，这也注定在某些地方 不能满足你的需求，所以我们可以自己定义配置文件。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里的配置文件指的是./profiles/config.yml</p></div><h2 id="配置文件模板" tabindex="-1"><a class="header-anchor" href="#配置文件模板" aria-hidden="true">#</a> 配置文件模板</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">10800</span>  <span class="token comment"># 这里更改为你的端口</span>
<span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">13990</span>
<span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">ipv6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">log-level</span><span class="token punctuation">:</span> silent  <span class="token comment"># 日志级别</span>
<span class="token key atrule">mode</span><span class="token punctuation">:</span> rule  <span class="token comment"># 代理模式为规则模式</span>

<span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PROXY
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test  <span class="token comment"># 根据延迟自动更换节点</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># 检测节点延迟间隔</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my<span class="token punctuation">-</span>subscription

<span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-subscription</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/my<span class="token punctuation">-</span>subscription.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> url <span class="token comment"># 这里更改为你的订阅地址</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>  <span class="token comment">#  订阅更新间隔</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span> <span class="token comment">#health check option start at here</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># 检测代理延迟间隔</span>

<span class="token key atrule">rule-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">reject</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/reject.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">icloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/icloud.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">apple</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/apple.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">google</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/google.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/proxy.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">direct</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/direct.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">private</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/private.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">gfw</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/gfw.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">greatfire</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/greatfire.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">tld-not-cn</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/tld<span class="token punctuation">-</span>not<span class="token punctuation">-</span>cn.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">telegramcidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/telegramcidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">cncidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/cncidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">lancidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/lancidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">applications</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> classical
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/applications.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>applications<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>clash.razord.top<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>yacd.haishan.me<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>private<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>reject<span class="token punctuation">,</span>REJECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>icloud<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>google<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>proxy<span class="token punctuation">,</span>PROXY
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>direct<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>lancidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>cncidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>telegramcidr<span class="token punctuation">,</span>PROXY
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>LAN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>PROXY
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//172.20.20.1<span class="token punctuation">:</span>801/srun_portal_pc.php<span class="token punctuation">?</span>ac_id=3&amp;<span class="token punctuation">,</span>DIRECT  <span class="token comment"># 这一条专为DLUT Stu</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关键修改" tabindex="-1"><a class="header-anchor" href="#关键修改" aria-hidden="true">#</a> 关键修改</h3><ol><li>mixed-port<br> 修改为你的端口</li><li>proxy-providers/url<br> 修改为你的机场订阅地址</li></ol><h2 id="配置文件改进" tabindex="-1"><a class="header-anchor" href="#配置文件改进" aria-hidden="true">#</a> 配置文件改进</h2><p>这个模板新增了几个免费机场和国内代理</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">10800</span>
<span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">13990</span>
<span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">ipv6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">log-level</span><span class="token punctuation">:</span> silent
<span class="token key atrule">mode</span><span class="token punctuation">:</span> rule

<span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🚀 节点选择
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ♻️ 自动选择(付费代理)
      <span class="token punctuation">-</span> 🛵 luxury免费代理
      <span class="token punctuation">-</span> 🛵 B免费代理
      <span class="token punctuation">-</span> ✈️ 指定国家代理

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ♻️ 自动选择(付费代理)
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my<span class="token punctuation">-</span>subscription

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🛵 luxury免费代理
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNodeA

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🛵 B免费代理
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNodeB

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> ✈️ 指定国家代理 
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 🇨🇳 国内代理
      <span class="token punctuation">-</span> 🇱🇹 立陶宛代理
      <span class="token punctuation">-</span> 🇺🇸 美国代理

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🇨🇳 国内代理
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_cn

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🇱🇹 立陶宛代理
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_lt

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 🇺🇸 美国代理
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_us

<span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-subscription</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/my<span class="token punctuation">-</span>subscription.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> url <span class="token comment"># 这里更改为你的订阅地址</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>  <span class="token comment">#  订阅更新间隔</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span> <span class="token comment">#health check option start at here</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># 检测代理延迟间隔</span>

  <span class="token key atrule">freeNodeA</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNodeA.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//a.luxury/link/mvWYsCsUBcjtNWHA<span class="token punctuation">?</span>clash=2
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

  <span class="token key atrule">freeNodeB</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNodeB.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//raw.githubusercontent.com/anaer/Sub/main/clash.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

  <span class="token key atrule">freeNode_cn</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNode_cn.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//proxies.bihai.cf/clash/proxies<span class="token punctuation">?</span>c=CN
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

  <span class="token key atrule">freeNode_lt</span><span class="token punctuation">:</span> <span class="token comment"># 立陶宛</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNode_lt.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//proxies.bihai.cf/clash/proxies<span class="token punctuation">?</span>c=LT
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

  <span class="token key atrule">freeNode_us</span><span class="token punctuation">:</span> <span class="token comment"># 美国</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNode_us.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//proxies.bihai.cf/clash/proxies<span class="token punctuation">?</span>c=US<span class="token important">&amp;type=vmess</span><span class="token punctuation">,</span>trojan
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

<span class="token key atrule">rule-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">reject</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/reject.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">icloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/icloud.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">apple</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/apple.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">google</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/google.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">proxy</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/proxy.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">direct</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/direct.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">private</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/private.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">gfw</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/gfw.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">greatfire</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/greatfire.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/greatfire.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">tld-not-cn</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> domain
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/tld<span class="token punctuation">-</span>not<span class="token punctuation">-</span>cn.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">telegramcidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/telegramcidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">cncidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/cncidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">lancidr</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> ipcidr
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/lancidr.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

  <span class="token key atrule">applications</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">behavior</span><span class="token punctuation">:</span> classical
    <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt&quot;</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./ruleset/applications.yaml
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>

<span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>applications<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>clash.razord.top<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>yacd.haishan.me<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>private<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>reject<span class="token punctuation">,</span>REJECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>icloud<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>apple<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>google<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>proxy<span class="token punctuation">,</span>🚀 节点选择
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>direct<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>lancidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>cncidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>telegramcidr<span class="token punctuation">,</span>🚀 节点选择
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>LAN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>🚀 节点选择
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//172.20.20.1<span class="token punctuation">:</span>801/srun_portal_pc.php<span class="token punctuation">?</span>ac_id=3&amp;<span class="token punctuation">,</span>DIRECT

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只需要填写你的订阅地址即可</p></div>`,13),l=[p];function i(c,u){return s(),a("div",null,l)}const k=n(t,[["render",i],["__file","cfw_setting.html.vue"]]);export{k as default};
