import{_ as s,o as a,c as e,V as n}from"./chunks/framework.364d6ed5.js";const F=JSON.parse('{"title":"Registries","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/basics/registries.md","filePath":"documentation/basics/registries.md","lastUpdated":1684512137000}'),o={name:"documentation/basics/registries.md"},l=n(`<h1 id="registries" tabindex="-1">Registries <a class="header-anchor" href="#registries" aria-label="Permalink to &quot;Registries&quot;">​</a></h1><p>Forme has the concept of registry classes. Their main purpose is to register a collection of a particular type of asset or functions with WordPress via action hooks.</p><p>For example, the standard Forme theme boilerplate has a class called <code>PublicQueueRegistry</code>. This is wired up to the <code>wp_enqueue_scripts</code> action hook, and contains all your script and style enqueues.</p><p>The boilerplate also has a shortcode registry, a theme support registry, and more, but you can create whatever makes sense to you. They are essentially just a way of organising and grouping together related actions that need to fire on a particular hook.</p><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>Registries are classes with a public method named (appropriately enough) <code>register</code>, within which you do whatever needs to happen.</p><p>They should implement <code>Forme\\Framework\\Registry\\RegistryInterface</code>, and should be wired up to the relevant action hook via <code>app/config/hooks.yaml</code></p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// app\\Registry\\HelloWorldRegistry.php</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">declare</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">strict_types</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Bar</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Registry</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Registry</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">RegistryInterface</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HelloWorldRegistry</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RegistryInterface</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">register</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// register all the things</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="code-generation" tabindex="-1">Code Generation <a class="header-anchor" href="#code-generation" aria-label="Permalink to &quot;Code Generation&quot;">​</a></h2><p>You can easily create a new registry via the cli:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">FooBar</span></span></code></pre></div><p>This will make a new empty registry class <code>YourNameSpace\\YourApp\\Registry\\FooBarRegistry</code> and hook it up with <code>init</code>. You&#39;ll need to edit <code>app/config/hooks.yaml</code> manually if you need to connect it to a different action.</p>`,12),t=[l];function p(r,c,i,y,d,h){return a(),e("div",null,t)}const D=s(o,[["render",p]]);export{F as __pageData,D as default};
