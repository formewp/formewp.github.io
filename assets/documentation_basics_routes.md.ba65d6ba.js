import{_ as s,o as a,c as o,V as n}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"Routes","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/basics/routes.md","filePath":"documentation/basics/routes.md","lastUpdated":1686053599000}'),l={name:"documentation/basics/routes.md"},e=n(`<h1 id="routes" tabindex="-1">Routes <a class="header-anchor" href="#routes" aria-label="Permalink to &quot;Routes&quot;">​</a></h1><p>Forme simplifies adding custom, ajax and rest routes, via the <code>Router</code> class and the <code>routes/routes.php</code> file.</p><p>You can use the <code>Router::map</code> static method, which has the following signature:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">map</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">method </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null);</span></span></code></pre></div><p>The handler is a callable, therefore can be a closure, a function name, a controller class name which should implement <code>__invoke</code>, or an array in the form <code>[&#39;class&#39;, &#39;method&#39;]</code>. This will receive a request object, a <a href="https://www.php-fig.org/psr/psr-7/" target="_blank" rel="noreferrer">PSR 7</a> Request in the form of a <code>Forme\\Framework\\Http\\ServerRequest</code>.</p><p>You can also use convenience methods for the different http methods.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">patch</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">delete</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callable </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">handler</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">type </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">custom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="custom-routes" tabindex="-1">Custom Routes <a class="header-anchor" href="#custom-routes" aria-label="Permalink to &quot;Custom Routes&quot;">​</a></h3><p>For custom routes, the syntax is identical to <a href="https://github.com/Upstatement/routes" target="_blank" rel="noreferrer">upstatement/routes</a> which is the library that <a href="https://timber.github.io/docs/" target="_blank" rel="noreferrer">Timber</a> uses.</p><p>The route parameter sets a pattern for routes to match on, by default everything is handled as a string. Any segment that begins with a <code>:</code> is handled as an argument and passed into the handler via the request.</p><p>The request object is a <code>Forme\\Framework\\Http\\ServerRequest</code> with the url params added to its query params. For convenience, these url params can be accessed via array syntax along with any query or body params.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// routes/routes.php</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Http</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ServerRequest</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Closure</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo/:bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ServerRequest</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Value of bar is </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">esc_html</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Named function, args will be passed into it</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo/:bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myFunction</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Ad hoc class, args will be passed into the specified method</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo/:bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NameSpace</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">YourApp</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">MyService</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">myMethod</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span></code></pre></div><p>Closures are useful for testing and debugging but most commonly, you&#39;ll want to point your route to a controller.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// routes/routes.php</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Controller, \`Forme\\Framework\\Http\\ServerRequest\` will be injected into its __invoke method</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo/:bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NameSpace</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">YourApp</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">FooController</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can leave out the type, unless you&#39;re using <code>map</code> with an HTTP method other than <code>GET</code></p></div><h3 id="ajax-routes" tabindex="-1">Ajax Routes <a class="header-anchor" href="#ajax-routes" aria-label="Permalink to &quot;Ajax Routes&quot;">​</a></h3><p>For ajax routes, everything behaves as per the custom route, except:</p><ul><li>the route parameter here should be a string representing the snake cased method name.</li><li>you need to add &quot;ajax-public&quot; or &quot;ajax-private&quot; as the type parameter.</li><li>the request object will not hoist any url params into the query params.</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// routes/routes.php</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my_ajax_method</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NameSpace</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">YourApp</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">AjaxMethodController</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ajax-private</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>WordPress ajax routes are always POST. Any other method will throw an exception.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>As per standard WordPress, you&#39;ll need to take care of passing <code>ajaxurl</code> into the frontend for public ajax endpoints yourself.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>WordPress counterintuitive oddness: public ajax routes will not work at all for logged in users!</p></div><h3 id="rest-routes" tabindex="-1">REST Routes <a class="header-anchor" href="#rest-routes" aria-label="Permalink to &quot;REST Routes&quot;">​</a></h3><p>For REST routes, everything behaves as per the custom routes, except:</p><ul><li>The route parameter represents the namespace string plus the route regex string you would normally pass to <code>register_rest_route</code> in standard WordPress.</li><li>you need to add &quot;rest&quot; as the type parameter</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// routes/routes.php</span></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Forme</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Framework</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Core</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Router</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">Router</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">put</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">namespace/foo/(?P&lt;bar&gt;\\d+)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">NameSpace</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">YourApp</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">RestController</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rest</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><p>The request object will be a PSR-7 compatible request based on the underlying <code>WP_REST_Request</code> object</p><div class="warning custom-block"><p class="custom-block-title">Limitations</p><ul><li>The Router will assume that the first segment of your route parameter path is the namespace. This means it can&#39;t handle anything more complicated e.g. versioning.</li></ul></div><h2 id="authentication-and-middleware" tabindex="-1">Authentication and Middleware <a class="header-anchor" href="#authentication-and-middleware" aria-label="Permalink to &quot;Authentication and Middleware&quot;">​</a></h2><p>In order to protect your endpoints or to perform other route level tasks, you&#39;ll need to use <a href="/documentation/basics/middleware.html">PSR 15 middleware</a>. You can also check Forme&#39;s <a href="/documentation/going-deeper/api-tokens.html">Api Token</a> implementation.</p>`,30),p=[e];function t(r,c,D,F,y,i){return a(),o("div",null,p)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};