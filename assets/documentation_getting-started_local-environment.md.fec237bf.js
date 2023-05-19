import{_ as e,o as a,c as o,V as t}from"./chunks/framework.364d6ed5.js";const g=JSON.parse('{"title":"Local environment","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/getting-started/local-environment.md","filePath":"documentation/getting-started/local-environment.md","lastUpdated":1684512137000}'),n={name:"documentation/getting-started/local-environment.md"},s=t(`<h1 id="local-environment" tabindex="-1">Local environment <a class="header-anchor" href="#local-environment" aria-label="Permalink to &quot;Local environment&quot;">​</a></h1><p>Forme should play nicely with local PHP development environments like <a href="https://laravel.com/docs/9.x/valet" target="_blank" rel="noreferrer">Valet</a>, <a href="https://www.mamp.info/en/mac/" target="_blank" rel="noreferrer">Mamp</a>, <a href="https://localwp.com/" target="_blank" rel="noreferrer">Local</a>, or your own installation.</p><p>The Forme codegen also provides <a href="/documentation/getting-started/docker.html">ketch</a>, a selection of useful cli commands to spin up a simple zero config docker environment.</p><p>You could also run your local dev in a Vagrant virtual machine - we won&#39;t be covering that use case for now, but you should be able to get a steer from the local setup and remote deployment instructions.</p><div class="tip custom-block"><p class="custom-block-title">tldr;</p><p>You need:</p><ul><li>bash (or zsh/fish etc but see below)</li><li>git 2.x</li><li>php 8.1 or higher</li><li>composer 2.x</li><li>node 18.x lts/hydrogen plus associated npm version</li><li>mysql 5.7+ (unless you&#39;re using docker/ketch)</li><li>a local web server (unless you&#39;re using docker/ketch)</li><li>forme codegen</li><li>wget, curl, wp cli, git cliff, psysh, phpstan</li></ul><p>You probably want:</p><ul><li>a system package manager like Homebrew</li></ul></div><h2 id="bash" tabindex="-1">Bash <a class="header-anchor" href="#bash" aria-label="Permalink to &quot;Bash&quot;">​</a></h2><p>Many of the commands in these docs assume a working <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">bash</a> shell.</p><p>Newer versions of OS X have <code>zsh</code> as default rather than <code>bash</code>. They should be mostly compatible but there are a few differences, and we haven&#39;t tested our shell scripts with <code>zsh</code>. Even where OS X does have <code>bash</code>, it&#39;s often an old version which might be missing a few features.</p><p>You can easily install the latest version with Homebrew:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bash</span></span>
<span class="line"><span style="color:#FFCB6B;">micro</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/shells</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># Or edit with your favourite terminal editor</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># add to last line</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/local/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/bin/bash</span><span style="color:#A6ACCD;"> $USER </span><span style="color:#676E95;font-style:italic;"># this will set for the current user.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Quit terminal and restart</span></span>
<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--version</span></span></code></pre></div><h2 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;Git&quot;">​</a></h2><p>You should be running version 2.x of git. You most likely have this already if you do any development.</p><h2 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-label="Permalink to &quot;PHP&quot;">​</a></h2><p>You should be running PHP 8.1 or higher on both server and command line. You should have php already if you&#39;ve got a local development environment, but you need to make sure the right version is available in your terminal.</p><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h2><p>You&#39;ll need the latest version of composer 2.x available globally on the command line.</p><p><a href="https://getcomposer.org/" target="_blank" rel="noreferrer">Composer</a> is the defacto package manager for php libraries.</p><h2 id="node" tabindex="-1">Node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;Node&quot;">​</a></h2><p>You should also have <strong>node</strong> and <strong>npm</strong> available globally to use the code generation tool, preferably lts version 18.x aka hydrogen (others might work too, but we&#39;ve never tested anything below 12/erbium). If you use <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a> (which you should!) just do something like:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">nvm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lts/hydrogen</span></span></code></pre></div><h2 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h2><p>Setting up MySQL is out of scope for these docs, but you should have that as part of whatever local development environment system you use.</p><h2 id="a-local-web-server" tabindex="-1">A Local Web Server <a class="header-anchor" href="#a-local-web-server" aria-label="Permalink to &quot;A Local Web Server&quot;">​</a></h2><p>Setting up your local web server is out of scope for these docs, but similarly to MySQL, Apache and/or Nginx should form part of whatever local development environment system you are using. You might also have HTTPs configured via DNSMasq or Acrylic.</p><h2 id="forme-codegen" tabindex="-1">Forme Codegen <a class="header-anchor" href="#forme-codegen" aria-label="Permalink to &quot;Forme Codegen&quot;">​</a></h2><p>Read more about that <a href="/documentation/getting-started/installing-codegen.html">here</a>!</p><h2 id="other-development-packages" tabindex="-1">Other development packages <a class="header-anchor" href="#other-development-packages" aria-label="Permalink to &quot;Other development packages&quot;">​</a></h2><p>We also recommend getting the following installed globally on your machine if they aren&#39;t already, since various codegen cli commands, as well as examples in these docs rely on them.</p><ul><li><a href="https://www.gnu.org/software/wget/" target="_blank" rel="noreferrer">wget</a></li><li><a href="https://curl.se/" target="_blank" rel="noreferrer">curl</a></li><li><a href="https://wp-cli.org/" target="_blank" rel="noreferrer">wp cli</a></li><li><a href="https://github.com/orhun/git-cliff" target="_blank" rel="noreferrer">git cliff</a></li><li><a href="https://psysh.org/" target="_blank" rel="noreferrer">psysh</a></li></ul><h2 id="what-about-windows" tabindex="-1">What about Windows? <a class="header-anchor" href="#what-about-windows" aria-label="Permalink to &quot;What about Windows?&quot;">​</a></h2><p>Windows isn&#39;t really fully supported or tested unfortunately. You should have relatively few problems running existing Forme projects in whatever web server environment you use, but things like Forme Codegen might not work quite as expected depending on your precise setup, and there might be other bugs.</p><p>Having said that, the issues we&#39;ve seen tend to be mostly bash and file system related. We <em>have</em> previously got things up and running on Windows 10 using packages like <a href="https://cmder.net/" target="_blank" rel="noreferrer">Cmder</a>, <a href="https://github.com/coreybutler/nvm-windows" target="_blank" rel="noreferrer">nvm-windows</a> and <a href="https://github.com/cretueusebiu/valet-windows" target="_blank" rel="noreferrer">valet-windows</a>. This was with an earlier, alpha version of Forme.</p><p>Your best bet is probably going to be to get everything working within a WSL2 Ubuntu instance. For example, we have got things running smoothly with Ubuntu 18.04 in WSL2 using Forme&#39;s <a href="/documentation/getting-started/docker.html">ketch</a> docker setup. Essentially you just install and run everything from within the WSL2 instance, and proceed exactly as you would do on a Ubuntu machine. You can run Docker Desktop on your host machine, or install docker within the WSL2 instance.</p><p>Your first step would be getting the above prerequisites in place either natively or within WSL depending on which route you choose. We&#39;ve been using the <a href="https://chocolatey.org/" target="_blank" rel="noreferrer">Chocolatey</a> package manager for native Windows dependencies, and obviously the built in <code>apt-get</code> within Ubuntu WSL.</p><p>To get docker installed, you should take a look at the <a href="https://docs.docker.com/" target="_blank" rel="noreferrer">documentation</a> as well as Digital Ocean&#39;s Ubuntu tutorials for <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04" target="_blank" rel="noreferrer">docker</a> and <a href="https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04" target="_blank" rel="noreferrer">docker-compose</a>.</p><p>Good luck!</p>`,36),r=[s];function l(i,h,c,p,d,u){return a(),o("div",null,r)}const b=e(n,[["render",l]]);export{g as __pageData,b as default};
