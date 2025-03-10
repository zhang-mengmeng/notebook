import{_ as i,c as a,a4 as n,o as l}from"./chunks/framework.DJY4F8Kc.js";const E=JSON.parse('{"title":"JavaScript内置类","description":"","frontmatter":{},"headers":[],"relativePath":"front/javascript/class.md","filePath":"front/javascript/class.md","lastUpdated":1741538050000}'),t={name:"front/javascript/class.md"};function e(h,s,p,r,k,d){return l(),a("div",null,s[0]||(s[0]=[n(`<h1 id="javascript内置类" tabindex="-1">JavaScript内置类 <a class="header-anchor" href="#javascript内置类" aria-label="Permalink to &quot;JavaScript内置类&quot;">​</a></h1><h2 id="原始类型的包装类" tabindex="-1">原始类型的包装类 <a class="header-anchor" href="#原始类型的包装类" aria-label="Permalink to &quot;原始类型的包装类&quot;">​</a></h2><ul><li>JavaScript原始类型并非对象类型，所以从理论上来说，它们是没有办法获取属性或者调用方法的</li><li>但是JavaScript为了可以使其获取属性和调用方法，对其封装了对应的包装类型</li><li>常见的包装类型有：<code>String</code>、<code>Number</code>、<code>Boolean</code>、<code>Symbol</code>、<code>BingInt</code>类型</li></ul><h2 id="原始类型的使用过程" tabindex="-1">原始类型的使用过程 <a class="header-anchor" href="#原始类型的使用过程" aria-label="Permalink to &quot;原始类型的使用过程&quot;">​</a></h2><ul><li>根据原始值，创建一个原始类型对应的包装类型对象</li><li>调用对应的属性或者方法，返回一个新的值</li><li>创建的包装类对象被销毁</li><li>通常JavaScript引擎会进行很多的优化，它可以跳过创建包装类的过程在内部直接完成属性的获取或者方法的调用</li></ul><h2 id="number类型" tabindex="-1">Number类型 <a class="header-anchor" href="#number类型" aria-label="Permalink to &quot;Number类型&quot;">​</a></h2><h3 id="类属性" tabindex="-1">类属性 <a class="header-anchor" href="#类属性" aria-label="Permalink to &quot;类属性&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.MAX_SAFE_INTEGER)  JavaScript 中最大的安全整数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.MIN_SAFE_INTEGER)  JavaScript 中最小的安全整数</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.1415926</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(base)) 将数字转成字符串，并且按照base进制执行转化，base的范围可以从2到36，默认情况下是10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(digits)) 格式化一个数字，保留digits位的小数，</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">digits的范围是0到20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(包含)之间</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="类方法" tabindex="-1">类方法 <a class="header-anchor" href="#类方法" aria-label="Permalink to &quot;类方法&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;3.1415&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str))  将字符串解析成整数,也有对应的全局方法parseInt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Number.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str)) 将字符串解析成浮点数，也有对应的全局方法parseFloat</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="math对象" tabindex="-1">Math对象 <a class="header-anchor" href="#math对象" aria-label="Permalink to &quot;Math对象&quot;">​</a></h2><p><strong><code>Math</code>是一个<code>内置对象</code></strong>，它<code>拥有一些数字常数属性和数学函数方法</code></p><h3 id="math常见的属性" tabindex="-1">Math常见的属性 <a class="header-anchor" href="#math常见的属性" aria-label="Permalink to &quot;Math常见的属性&quot;">​</a></h3><ul><li>Math.PI: 圆周率，约等于3.14159</li></ul><h3 id="math常见的方法" tabindex="-1">Math常见的方法 <a class="header-anchor" href="#math常见的方法" aria-label="Permalink to &quot;Math常见的方法&quot;">​</a></h3><ul><li><code>Math.floor</code>: 向下舍入取整</li><li><code>Math.ceil</code>: 向上舍入取整</li><li><code>Math.round</code>: 四舍五入取整</li><li><code>Math.random</code>：生成0-1的随机数(包含0，不包含1)</li><li><code>Math.pow</code>：返回x的y次幂</li></ul><h2 id="string类型" tabindex="-1">String类型 <a class="header-anchor" href="#string类型" aria-label="Permalink to &quot;String类型&quot;">​</a></h2><h3 id="常见的属性" tabindex="-1">常见的属性 <a class="header-anchor" href="#常见的属性" aria-label="Permalink to &quot;常见的属性&quot;">​</a></h3><ul><li><code>length</code>：获取字符串的长度</li></ul><h3 id="常见的方法" tabindex="-1">常见的方法 <a class="header-anchor" href="#常见的方法" aria-label="Permalink to &quot;常见的方法&quot;">​</a></h3><h4 id="访问字符串的字符" tabindex="-1">访问字符串的字符 <a class="header-anchor" href="#访问字符串的字符" aria-label="Permalink to &quot;访问字符串的字符&quot;">​</a></h4><ul><li>方法一: 通过字符串的索引 <code>str[0]</code></li><li>方法二：通过<code>str.charAt(pos)</code>方法</li><li>区别：索引的方式没有找到会返回undefined，而charAt没有找到会返回空字符串</li></ul><h4 id="字符串的遍历" tabindex="-1">字符串的遍历 <a class="header-anchor" href="#字符串的遍历" aria-label="Permalink to &quot;字符串的遍历&quot;">​</a></h4><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Hello Word&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for循环遍历</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(message[i])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// for...for  String对象内部是将字符串变成了一个可迭代对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> char </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(char)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="修改字符串" tabindex="-1">修改字符串 <a class="header-anchor" href="#修改字符串" aria-label="Permalink to &quot;修改字符串&quot;">​</a></h4><ul><li>字符串在定义后是<code>不可以修改</code>的,所以，我们改变很多字符串的操作中，都是生成了一个新的字符串</li><li><code>toLowerCase()</code>: 将所有的字符串转成小写</li><li><code>toUpperCase()</code>: 将所有的字符转成大写</li></ul><h4 id="查找字符串" tabindex="-1">查找字符串 <a class="header-anchor" href="#查找字符串" aria-label="Permalink to &quot;查找字符串&quot;">​</a></h4><ul><li><p>查找字符串的位置 indexOf</p><ul><li>搜索到，返回搜索字符串的索引位置</li><li>没有搜索到，返回-1</li></ul></li><li><p>是否包含字符串 includes</p><ul><li>根据情况返回true跟false</li></ul></li><li><p>以xxx开头 startsWith(searchString, position)</p><ul><li>从position位置开始，判断字符串是否以searchString开头</li></ul></li><li><p>以xxx开头 endsWith(searchString, position)</p><ul><li>从position位置开始，判断字符串是否以searchString结尾</li></ul></li><li><p>替换字符串 str.replace(regexp, newSubStr)</p><ul><li>查找到对应的字符串，并且使用新的字符串进行替代</li></ul></li></ul><h4 id="获取子字符串" tabindex="-1">获取子字符串 <a class="header-anchor" href="#获取子字符串" aria-label="Permalink to &quot;获取子字符串&quot;">​</a></h4><table tabindex="0"><thead><tr><th>方法</th><th style="text-align:center;">选择方式</th><th style="text-align:right;">负值参数</th></tr></thead><tbody><tr><td>slice(start, end)</td><td style="text-align:center;">从 start 到 end (不含 end)</td><td style="text-align:right;">允许</td></tr><tr><td>substring(start, end)</td><td style="text-align:center;">从 start 到 end (不含 end)</td><td style="text-align:right;">负值代表0</td></tr><tr><td>substr(start, length)</td><td style="text-align:center;">从 start 开始获取长为 length 的字符串</td><td style="text-align:right;">允许 start 为负数</td></tr></tbody></table><h4 id="字符串的拼接" tabindex="-1">字符串的拼接 <a class="header-anchor" href="#字符串的拼接" aria-label="Permalink to &quot;字符串的拼接&quot;">​</a></h4><p><code>+</code>、<code>concat</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;word&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;kobe&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 +</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newString </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用concat</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newString2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str2).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str3)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newString3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">concat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str2, str3, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;abc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cba&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="删除首尾空格" tabindex="-1">删除首尾空格 <a class="header-anchor" href="#删除首尾空格" aria-label="Permalink to &quot;删除首尾空格&quot;">​</a></h4><p><code>trim()</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;   zhangmeng   &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="字符串的切割" tabindex="-1">字符串的切割 <a class="header-anchor" href="#字符串的切割" aria-label="Permalink to &quot;字符串的切割&quot;">​</a></h4><p><code>split</code></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;nba-cba-abc&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> message.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,41)]))}const c=i(t,[["render",e]]);export{E as __pageData,c as default};
