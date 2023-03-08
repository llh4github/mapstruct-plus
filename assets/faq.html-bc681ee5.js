import{_ as s,X as n,Y as l,a1 as a}from"./framework-6ad2459b.js";const p={},o=a(`<h2 id="与-lombok-整合" tabindex="-1"><a class="header-anchor" href="#与-lombok-整合" aria-hidden="true">#</a> 与 <code>lombok</code> 整合</h2><p>与 Mapstruct 整合 lombok 的方式一致。</p><h3 id="lombok-1-18-16-之前" tabindex="-1"><a class="header-anchor" href="#lombok-1-18-16-之前" aria-hidden="true">#</a> lombok 1.18.16 之前：</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">build</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.apache.maven.plugins&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;maven-compiler-plugin&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;3.8.1&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">&gt;1.8&lt;/</span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">&gt;1.8&lt;/</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">annotationProcessorPaths</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.projectlombok&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;lombok&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;\${lombok.version}&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;io.github.linpeilie&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;mapstruct-plus-processor&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;\${mapstruct-plus.version}&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;">annotationProcessorPaths</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">build</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lombok-1-18-16-及以后" tabindex="-1"><a class="header-anchor" href="#lombok-1-18-16-及以后" aria-hidden="true">#</a> lombok 1.18.16 及以后：</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">build</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.apache.maven.plugins&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;maven-compiler-plugin&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;3.8.1&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">&gt;1.8&lt;/</span><span style="color:#E06C75;">source</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">&gt;1.8&lt;/</span><span style="color:#E06C75;">target</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;</span><span style="color:#E06C75;">annotationProcessorPaths</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.projectlombok&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;lombok&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;\${lombok.version}&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;io.github.linpeilie&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;mapstruct-plus-processor&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;\${mapstruct-plus.version}&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;org.projectlombok&lt;/</span><span style="color:#E06C75;">groupId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;lombok-mapstruct-binding&lt;/</span><span style="color:#E06C75;">artifactId</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                        &lt;</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;0.2.0&lt;/</span><span style="color:#E06C75;">version</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    &lt;/</span><span style="color:#E06C75;">path</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                &lt;/</span><span style="color:#E06C75;">annotationProcessorPaths</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">plugin</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">plugins</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">build</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),e=[o];function t(c,B){return n(),l("div",null,e)}const i=s(p,[["render",t],["__file","faq.html.vue"]]);export{i as default};