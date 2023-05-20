import{_ as s,o as a,c as e,V as l}from"./chunks/framework.364d6ed5.js";const u=JSON.parse('{"title":"Quick Start","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/getting-started/quick-start.md","filePath":"documentation/getting-started/quick-start.md","lastUpdated":1684571345000}'),t={name:"documentation/getting-started/quick-start.md"},o=l(`<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-label="Permalink to &quot;Quick Start&quot;">​</a></h1><p>Know what you&#39;re doing and using a Unix-like system? Make sure you have all the prerequisites in place, then follow the base install instructions below, and create your plugin or theme.</p><p>If you need more detailed instructions or if you&#39;re using Windows, we have in-depth explanations on setting up your <a href="/documentation/getting-started/local-environment.html">local environment</a>, <a href="/documentation/getting-started/local-wordpress.html">base WordPress installation</a> and <a href="/documentation/getting-started/new-project.html">plugins/themes</a>.</p><h2 id="base-install-with-valet" tabindex="-1">Base Install With Valet <a class="header-anchor" href="#base-install-with-valet" aria-label="Permalink to &quot;Base Install With Valet&quot;">​</a></h2><h3 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li>macOs/Linux</li><li><a href="https://laravel.com/docs/9.x/valet" target="_blank" rel="noreferrer">Valet</a></li><li>PHP &gt;= 8.1 (CLI and server)</li><li><a href="https://wp-cli.org/" target="_blank" rel="noreferrer">WP CLI</a></li><li>Node.js 18.x lts/hydrogen</li><li>cURL/Wget</li><li>Composer ^2</li><li>Bash</li><li><a href="https://github.com/formewp/forme-codegen" target="_blank" rel="noreferrer">Forme Codegen ^2.1</a></li></ul><h3 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h3><ol><li><p>Set up a new MySQL database and make a note of the credentials</p></li><li><p>Change to your sites directory. For example:</p></li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/sites</span></span></code></pre></div><ol start="3"><li>Install and configure a new WordPress site directory (you&#39;ll be prompeted for the database credentials):</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><ol start="4"><li>Change into this new site directory:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><ol start="5"><li>Add the Valet driver if you haven&#39;t already:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">utils/FormeServerValetDriver.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.config/valet/Drivers/FormeServerValetDriver.php</span></span></code></pre></div><ol start="6"><li>Enable HTTPS:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">valet</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">secure</span></span></code></pre></div><ol start="7"><li>Visit the site e.g. <code>https://hello-world.test</code> in your browser and set up the admin user</li></ol><h2 id="base-install-with-docker" tabindex="-1">Base Install With Docker <a class="header-anchor" href="#base-install-with-docker" aria-label="Permalink to &quot;Base Install With Docker&quot;">​</a></h2><h3 id="prerequisites-1" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites-1" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li>macOS/Linux</li><li>Docker &amp; docker-compose - you can get both of these by installing <a href="https://www.docker.com/products/docker-desktop" target="_blank" rel="noreferrer">Docker Desktop</a></li><li>PHP &gt;= 8.1 (CLI)</li><li><a href="https://wp-cli.org/" target="_blank" rel="noreferrer">WP CLI</a></li><li>Node.js 18.x lts/hydrogen</li><li>cURL/Wget</li><li>Composer ^2</li><li>Bash</li><li><a href="https://github.com/formewp/forme-codegen" target="_blank" rel="noreferrer">Forme Codegen ^2.1</a></li></ul><h3 id="steps-1" tabindex="-1">Steps <a class="header-anchor" href="#steps-1" aria-label="Permalink to &quot;Steps&quot;">​</a></h3><ol><li>Change to your sites directory. For example:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/sites</span></span></code></pre></div><ol start="2"><li>Install and configure a new WordPress site directory:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><ol start="3"><li>Change into this new site directory:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><ol start="4"><li>Initialise Docker configuration:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ketch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span></code></pre></div><ol start="5"><li>Launch Docker:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ketch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span></span></code></pre></div><ol start="7"><li>Visit the site at <code>http://localhost</code> in your browser and set up the admin user</li></ol><h2 id="new-plugin-theme" tabindex="-1">New Plugin / Theme <a class="header-anchor" href="#new-plugin-theme" aria-label="Permalink to &quot;New Plugin / Theme&quot;">​</a></h2><h3 id="prerequisites-2" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites-2" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h3><ul><li>macOS/Linux</li><li>PHP &gt;= 8.1 (CLI)</li><li><a href="https://github.com/formewp/forme-codegen" target="_blank" rel="noreferrer">Forme Codegen ^2.1</a></li><li>Node 18.x lts/hydrogen</li><li>Git</li><li>Composer ^2</li><li>Bash</li><li><a href="https://github.com/orhun/git-cliff" target="_blank" rel="noreferrer">Git Cliff</a> (optional)</li></ul><h3 id="steps-2" tabindex="-1">Steps <a class="header-anchor" href="#steps-2" aria-label="Permalink to &quot;Steps&quot;">​</a></h3><ol><li>Change to your repos directory. For example:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/repos</span><span style="color:#89DDFF;">\`</span></span></code></pre></div><ol start="2"><li>Create a new plugin or theme:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># plugin</span></span>
<span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">plugin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># theme</span></span>
<span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">theme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hello-world</span></span></code></pre></div><ol start="3"><li>Change to the base WordPress installation directory:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/sites/hello-world</span></span></code></pre></div><ol start="4"><li>Symlink the repo directory into your base WordPress site installation or link it to your Docker:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># base installation e.g. valet</span></span>
<span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">base</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">link</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/repos/hello-world-plugin/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># docker</span></span>
<span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ketch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">link</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/repos/hello-world-theme/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># you might also need to restart container if it&#39;s running</span></span>
<span class="line"><span style="color:#FFCB6B;">forme</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ketch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span></span></code></pre></div><ol start="5"><li>Update PHP dependencies:</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span></code></pre></div>`,47),n=[o];function r(i,p,c,h,d,C){return a(),e("div",null,n)}const g=s(t,[["render",r]]);export{u as __pageData,g as default};
