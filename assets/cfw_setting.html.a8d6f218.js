import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{f as s}from"./app.eadaa411.js";const a={},p=s(`<h1 id="cfw\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#cfw\u914D\u7F6E" aria-hidden="true">#</a> CFW\u914D\u7F6E</h1><p>\u8FD9\u7BC7\u6587\u7AE0\u5C06\u8BB2\u8FF0\u5982\u4F55\u5BF9Clash For Windows\u8FDB\u884C\u914D\u7F6E\uFF0C\u4EE5\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u4F7F\u7528\u3002</p><p>CFW\u9ED8\u8BA4\u7684\u4EE3\u7406\u6A21\u5F0F\u6709\u56DB\u79CD\uFF0C\u5206\u522B\u4E3A:<br> \u89C4\u5219: \u4EE3\u8868\u89C4\u5219\u6A21\u5F0F\uFF0C\u5C5E\u4E8E\u56FD\u5185\u76F4\u8FDE\uFF0C\u56FD\u5916\u81EA\u52A8\u8D70\u8282\u70B9\u6D41\u91CF\uFF08\u5EFA\u8BAE\u4F7F\u7528\uFF09<br> \u5168\u5C40: \u4EE3\u8868\u5168\u5C40\u6A21\u5F0F\uFF0C\u5168\u90E8\u56FD\u5185\u56FD\u5916\u90FD\u8D70\u8282\u70B9\u6D41\u91CF\uFF08\u6709\u53EF\u80FD\u5BFC\u81F4\u8BBF\u95EE\u56FD\u5185\u6BD4\u8F83\u5361\uFF09<br> \u76F4\u8FDE: \u4EE3\u8868\u76F4\u8FDE\u6A21\u5F0F\uFF0C\u5168\u90E8\u56FD\u5185\u56FD\u5916\u8D70\u4E0D\u8D70\u8282\u70B9\u6D41\u91CF\uFF08\u76F8\u5F53\u4E8E\u6CA1\u5F00clash\uFF09<br> \u811A\u672C: \u914D\u7F6E\u6BD4\u8F83\u590D\u6742\u975E\u4E13\u4E1A\u4EBA\u58EB\u4E0D\u5EFA\u8BAE\u7528</p><p>\u4F46\u5F53\u4F60\u4F7F\u7528\u673A\u573A\u7684\u914D\u7F6E\u6587\u4EF6\u65F6\uFF0C\u4F60\u4F7F\u7528\u7684\u89C4\u5219\u90FD\u662F\u7531\u673A\u573A\u670D\u52A1\u63D0\u4F9B\u7684\uFF0C\u8FD9\u4E5F\u6CE8\u5B9A\u5728\u67D0\u4E9B\u5730\u65B9 \u4E0D\u80FD\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u5B9A\u4E49\u914D\u7F6E\u6587\u4EF6\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u91CC\u7684\u914D\u7F6E\u6587\u4EF6\u6307\u7684\u662F./profiles/config.yml</p></div><h2 id="\u914D\u7F6E\u6587\u4EF6\u6A21\u677F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u6A21\u677F" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u6A21\u677F</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">10800</span>  <span class="token comment"># \u8FD9\u91CC\u66F4\u6539\u4E3A\u4F60\u7684\u7AEF\u53E3</span>
<span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">13990</span>
<span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">ipv6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">log-level</span><span class="token punctuation">:</span> silent  <span class="token comment"># \u65E5\u5FD7\u7EA7\u522B</span>
<span class="token key atrule">mode</span><span class="token punctuation">:</span> rule  <span class="token comment"># \u4EE3\u7406\u6A21\u5F0F\u4E3A\u89C4\u5219\u6A21\u5F0F</span>

<span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> PROXY
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test  <span class="token comment"># \u6839\u636E\u5EF6\u8FDF\u81EA\u52A8\u66F4\u6362\u8282\u70B9</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># \u68C0\u6D4B\u8282\u70B9\u5EF6\u8FDF\u95F4\u9694</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my<span class="token punctuation">-</span>subscription

<span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-subscription</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/my<span class="token punctuation">-</span>subscription.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> url <span class="token comment"># \u8FD9\u91CC\u66F4\u6539\u4E3A\u4F60\u7684\u8BA2\u9605\u5730\u5740</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>  <span class="token comment">#  \u8BA2\u9605\u66F4\u65B0\u95F4\u9694</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span> <span class="token comment">#health check option start at here</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># \u68C0\u6D4B\u4EE3\u7406\u5EF6\u8FDF\u95F4\u9694</span>

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
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//172.20.20.1<span class="token punctuation">:</span>801/srun_portal_pc.php<span class="token punctuation">?</span>ac_id=3&amp;<span class="token punctuation">,</span>DIRECT  <span class="token comment"># \u8FD9\u4E00\u6761\u4E13\u4E3ADLUT Stu</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br></div></div><h3 id="\u5173\u952E\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u4FEE\u6539" aria-hidden="true">#</a> \u5173\u952E\u4FEE\u6539</h3><ol><li>mixed-port<br> \u4FEE\u6539\u4E3A\u4F60\u7684\u7AEF\u53E3</li><li>proxy-providers/url<br> \u4FEE\u6539\u4E3A\u4F60\u7684\u673A\u573A\u8BA2\u9605\u5730\u5740</li></ol><h2 id="\u914D\u7F6E\u6587\u4EF6\u6539\u8FDB" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u6539\u8FDB" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u6539\u8FDB</h2><p>\u8FD9\u4E2A\u6A21\u677F\u65B0\u589E\u4E86\u51E0\u4E2A\u514D\u8D39\u673A\u573A\u548C\u56FD\u5185\u4EE3\u7406</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">mixed-port</span><span class="token punctuation">:</span> <span class="token number">10800</span>
<span class="token key atrule">allow-lan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">external-controller</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">13990</span>
<span class="token key atrule">secret</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token key atrule">ipv6</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">log-level</span><span class="token punctuation">:</span> silent
<span class="token key atrule">mode</span><span class="token punctuation">:</span> rule

<span class="token key atrule">proxy-groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F680} \u8282\u70B9\u9009\u62E9
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> \u267B\uFE0F \u81EA\u52A8\u9009\u62E9(\u4ED8\u8D39\u4EE3\u7406)
      <span class="token punctuation">-</span> \u{1F6F5} luxury\u514D\u8D39\u4EE3\u7406
      <span class="token punctuation">-</span> \u{1F6F5} B\u514D\u8D39\u4EE3\u7406
      <span class="token punctuation">-</span> \u2708\uFE0F \u6307\u5B9A\u56FD\u5BB6\u4EE3\u7406

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u267B\uFE0F \u81EA\u52A8\u9009\u62E9(\u4ED8\u8D39\u4EE3\u7406)
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> my<span class="token punctuation">-</span>subscription

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F6F5} luxury\u514D\u8D39\u4EE3\u7406
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNodeA

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F6F5} B\u514D\u8D39\u4EE3\u7406
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNodeB

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u2708\uFE0F \u6307\u5B9A\u56FD\u5BB6\u4EE3\u7406 
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">proxies</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> \u{1F1E8}\u{1F1F3} \u56FD\u5185\u4EE3\u7406
      <span class="token punctuation">-</span> \u{1F1F1}\u{1F1F9} \u7ACB\u9676\u5B9B\u4EE3\u7406
      <span class="token punctuation">-</span> \u{1F1FA}\u{1F1F8} \u7F8E\u56FD\u4EE3\u7406

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F1E8}\u{1F1F3} \u56FD\u5185\u4EE3\u7406
    <span class="token key atrule">type</span><span class="token punctuation">:</span> select
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_cn

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F1F1}\u{1F1F9} \u7ACB\u9676\u5B9B\u4EE3\u7406
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_lt

  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> \u{1F1FA}\u{1F1F8} \u7F8E\u56FD\u4EE3\u7406
    <span class="token key atrule">type</span><span class="token punctuation">:</span> url<span class="token punctuation">-</span>test
    <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>
    <span class="token key atrule">use</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> freeNode_us

<span class="token key atrule">proxy-providers</span><span class="token punctuation">:</span>
  <span class="token key atrule">my-subscription</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/my<span class="token punctuation">-</span>subscription.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> url <span class="token comment"># \u8FD9\u91CC\u66F4\u6539\u4E3A\u4F60\u7684\u8BA2\u9605\u5730\u5740</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>  <span class="token comment">#  \u8BA2\u9605\u66F4\u65B0\u95F4\u9694</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span> <span class="token comment">#health check option start at here</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>  <span class="token comment"># \u68C0\u6D4B\u4EE3\u7406\u5EF6\u8FDF\u95F4\u9694</span>

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

  <span class="token key atrule">freeNode_lt</span><span class="token punctuation">:</span> <span class="token comment"># \u7ACB\u9676\u5B9B</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> http
    <span class="token key atrule">path</span><span class="token punctuation">:</span> ./profiles/freeNode_lt.yml
    <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//proxies.bihai.cf/clash/proxies<span class="token punctuation">?</span>c=LT
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">86400</span>
    <span class="token key atrule">health-check</span><span class="token punctuation">:</span>
      <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//www.gstatic.com/generate_204
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">600</span>

  <span class="token key atrule">freeNode_us</span><span class="token punctuation">:</span> <span class="token comment"># \u7F8E\u56FD</span>
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
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>proxy<span class="token punctuation">,</span>\u{1F680} \u8282\u70B9\u9009\u62E9
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>direct<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>lancidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>cncidr<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> RULE<span class="token punctuation">-</span>SET<span class="token punctuation">,</span>telegramcidr<span class="token punctuation">,</span>\u{1F680} \u8282\u70B9\u9009\u62E9
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>LAN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> GEOIP<span class="token punctuation">,</span>CN<span class="token punctuation">,</span>DIRECT
  <span class="token punctuation">-</span> MATCH<span class="token punctuation">,</span>\u{1F680} \u8282\u70B9\u9009\u62E9
  <span class="token punctuation">-</span> DOMAIN<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//172.20.20.1<span class="token punctuation">:</span>801/srun_portal_pc.php<span class="token punctuation">?</span>ac_id=3&amp;<span class="token punctuation">,</span>DIRECT

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u53EA\u9700\u8981\u586B\u5199\u4F60\u7684\u8BA2\u9605\u5730\u5740\u5373\u53EF</p></div>`,13);function e(t,l){return p}var o=n(a,[["render",e],["__file","cfw_setting.html.vue"]]);export{o as default};
