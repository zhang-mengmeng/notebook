import{_ as r,c as a,a4 as l,o as i}from"./chunks/framework.DJY4F8Kc.js";const S=JSON.parse('{"title":"浏览器的渲染原理","description":"","frontmatter":{},"headers":[],"relativePath":"front/javascript/rendering.md","filePath":"front/javascript/rendering.md","lastUpdated":null}'),t={name:"front/javascript/rendering.md"};function n(d,e,o,c,s,h){return i(),a("div",null,e[0]||(e[0]=[l('<h1 id="浏览器的渲染原理" tabindex="-1">浏览器的渲染原理 <a class="header-anchor" href="#浏览器的渲染原理" aria-label="Permalink to &quot;浏览器的渲染原理&quot;">​</a></h1><h2 id="url加载过程" tabindex="-1">URL加载过程 <a class="header-anchor" href="#url加载过程" aria-label="Permalink to &quot;URL加载过程&quot;">​</a></h2><ul><li>在URL中输入域名，通过DNS解析，拿到服务器地址，服务器返回数据到浏览器</li></ul><h2 id="浏览器页面渲染的流程" tabindex="-1">浏览器页面渲染的流程 <a class="header-anchor" href="#浏览器页面渲染的流程" aria-label="Permalink to &quot;浏览器页面渲染的流程&quot;">​</a></h2><h3 id="html解析过程" tabindex="-1">HTML解析过程 <a class="header-anchor" href="#html解析过程" aria-label="Permalink to &quot;HTML解析过程&quot;">​</a></h3><ul><li>默认情况下服务器会给浏览器返回index.html文件，所以解析HTML是所有步骤的开始</li><li>解析HTML，会构建DOM Tree</li></ul><h3 id="生成css规则" tabindex="-1">生成CSS规则 <a class="header-anchor" href="#生成css规则" aria-label="Permalink to &quot;生成CSS规则&quot;">​</a></h3><ul><li>在解析的过程中，如果遇到CSS的link元素，那么会由浏览器负责下载对应的CSS文件 <ul><li>下载CSS文件是不会影响DOM的解析的</li></ul></li><li>浏览器下载完CSS文件后，就会对CSS文件进行解析，<code>解析出对应的规则树</code><ul><li>我们可以称之为<code>CSSOM</code>(CSS Object Model, CSS对象模型)</li></ul></li></ul><h3 id="构建render-tree" tabindex="-1">构建Render Tree <a class="header-anchor" href="#构建render-tree" aria-label="Permalink to &quot;构建Render Tree&quot;">​</a></h3><ul><li>当有了DOM Tree和 CSSOM Tree后，就可以两个结合构建<code>Render Tree</code>了</li><li><code>link元素不会阻塞DOM Tree的构建过程</code>，但是<code>会阻塞Render Tree的构建过程</code><ul><li>这是因为Render Tree在构建时，需要对应的CSSOM Tree</li></ul></li><li><code>Render Tree和DOM Tree并不是一一对应的关系</code>,比如对于display为none的元素，压根不会出现在render tree中。</li></ul>',10)]))}const m=r(t,[["render",n]]);export{S as __pageData,m as default};
