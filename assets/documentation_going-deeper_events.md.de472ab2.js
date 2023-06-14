import{_ as e,o,c as a,V as t}from"./chunks/framework.364d6ed5.js";const g=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/going-deeper/events.md","filePath":"documentation/going-deeper/events.md","lastUpdated":1686727864000}'),s={name:"documentation/going-deeper/events.md"},n=t('<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>Sometimes you want to store events and other ad hoc data to refer to later and drive application behaviour, or to store logging information.</p><p>Forme includes a basic solution for this.</p><h2 id="the-event-model" tabindex="-1">The Event Model <a class="header-anchor" href="#the-event-model" aria-label="Permalink to &quot;The Event Model&quot;">​</a></h2><p>An event has he following data structure:</p><ul><li>Type - a snake case string representing the type of event, for example <code>log</code> or <code>user_action</code></li><li>Payload - a json object containing the event payload, for example the log report, or details of the user action that occurred</li><li>Created at - the time the event happened</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Event</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">log</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">payload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foobar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">something happened</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]]);</span></span></code></pre></div><p>It should in theory be immutable - that is once it&#39;s been created, it should never be modified or deleted.</p><h2 id="application-logging" tabindex="-1">Application Logging <a class="header-anchor" href="#application-logging" aria-label="Permalink to &quot;Application Logging&quot;">​</a></h2><p>By default, Forme stores its own <a href="/documentation/development-workflow/debugging.html#monolog">logs</a> as Events when <code>WP_ENV</code> is set to <code>production</code>.</p>',10),l=[n];function p(r,c,i,d,h,D){return o(),a("div",null,l)}const F=e(s,[["render",p]]);export{g as __pageData,F as default};