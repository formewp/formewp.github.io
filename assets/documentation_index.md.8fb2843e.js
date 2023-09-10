import{_ as e,o,c as t,V as r}from"./chunks/framework.364d6ed5.js";const g=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"documentation/index.md","filePath":"documentation/index.md","lastUpdated":1694341907000}'),a={name:"documentation/index.md"},n=r('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Forme is an MVC application framework designed to bridge the gap between WordPress and modern development practices. With Forme, you can craft themes and plugins for WordPress using a modern, expressive PHP syntax.</p><h2 id="why-forme" tabindex="-1">Why Forme? <a class="header-anchor" href="#why-forme" aria-label="Permalink to &quot;Why Forme?&quot;">​</a></h2><p>We&#39;ve got a lot of love for WordPress - it&#39;s got comprehensive docs, it powers half the internet, and many web developers earn their PHP chops working with it. Clients love it - its ubiquity and familiarity makes it the defacto CMS of choice for a vast amount of projects, from mom and pop outfits right up to enterprise level.</p><p>However, a lot of WordPress code is stuck in a bygone era of clunky workflows, bad procedural patterns, weird antiquated syntax, and a tendency towards unmaintainable and untestable spaghetti awfulness. And don&#39;t even get us started on the loop, which is just... wrong. 🤢</p><p>If you&#39;ve done any amount of work in modern PHP frameworks such as Laravel or Symfony, you will want to bring similar patterns and best practises to bear on new or legacy WordPress projects, but it isn&#39;t really designed to support those out of the box.</p><p>Forme aims to solve these pain points.</p><p>There are a bunch of really cool Open Source projects already operating in this space, including <a href="https://lumberjack.rareloop.com/" target="_blank" rel="noreferrer">LumberJack</a>, <a href="https://timber.github.io/docs/" target="_blank" rel="noreferrer">Timber</a>, <a href="https://framework.themosis.com/" target="_blank" rel="noreferrer">Themosis</a> and the <a href="https://roots.io/" target="_blank" rel="noreferrer">Roots</a> ecosystem. We&#39;ve taken inspiration and ideas from all of these, but built Forme to follow our own specific and opinionated workflow.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li><strong>MVC Pattern:</strong> Keep your code organized and maintainable with a typical Model-View-Controller (MVC) pattern</li><li><strong>Eloquent ORM and Phinx DB Migrations:</strong> Interact with the database using Laravel&#39;s Eloquent ORM and manage database migrations with Phinx.</li><li><strong>League Plates 4 views:</strong> View templating engine. (Plates 3, Blade, or Twig are also supported.)</li><li><strong>DI Container:</strong> Dependency Injection (DI) container to manage dependencies and promote modular, testable code.</li><li><strong>Flexible routing system:</strong> Define custom routes and handle HTTP requests using Forme&#39;s flexible routing system.</li><li><strong>YAML config for WordPress hooks:</strong> Configure WordPress hooks using YAML files, providing a more structured and readable approach.</li><li><strong>Registry pattern:</strong> Use the registry pattern to group together WordPress hook calls.</li><li><strong>Theme &amp; Plugin boilerplates:</strong> Get started quickly with Forme&#39;s theme and plugin boilerplates.</li><li><strong>PSR-4 and Composer:</strong> Follow PSR-4 autoloading standards and manage dependencies with Composer.</li><li><strong>Dotenv:</strong> Use environment variables with Dotenv for convenient configuration management.</li><li><strong>PSR-7 Requests and Responses:</strong> Work with PSR-7 compliant request and response objects for standardising HTTP communication.</li><li><strong>PSR-15 Middleware:</strong> Implement middleware components to handle cross-cutting concerns and modify requests and responses.</li><li><strong>Debugging Tools:</strong> Forme provides debugging tools to assist with troubleshooting and development.</li><li><strong>Code Generation CLI:</strong> Use Forme&#39;s command-line interface (CLI) to scaffold code and automate repetitive tasks.</li><li><strong>Test Setup:</strong> Forme supports unit, integration, and end-to-end testing to ensure the quality of your application.</li></ul><h2 id="what-forme-is-not-a-good-fit-for" tabindex="-1">What Forme is <em>not</em> a good fit for <a class="header-anchor" href="#what-forme-is-not-a-good-fit-for" aria-label="Permalink to &quot;What Forme is _not_ a good fit for&quot;">​</a></h2><p>Since Forme relies on Composer/PSR-4 and a custom server setup, publishing plugins or themes to the WordPress store is not currently practical. Better to stick with distributing them via Packagist for the time being. We are working on a solution though, so watch this space!</p><h2 id="who-made-this" tabindex="-1">Who made this? <a class="header-anchor" href="#who-made-this" aria-label="Permalink to &quot;Who made this?&quot;">​</a></h2><p>Forme is built and maintained by <a href="https://code.moussaclarke.co.uk" target="_blank" rel="noreferrer">Moussa Clarke</a>, senior developer over at <a href="https://www.sanderswebworks.co.uk" target="_blank" rel="noreferrer">Sanders Web Works</a> in Wiltshire.</p><p>We&#39;re a friendly multi-disciplinary team specialising in building bespoke digital solutions for a range of small and medium size business clients, as well as local government and third sector companies. Aside from WordPress, we&#39;re dab hands with Laravel, Vue, Symfony and much more besides, and can also handle visual design and copywriting briefs inhouse. We move fast and fix things.</p><p>If you&#39;ve got a project that you think we could help you with, please <a href="mailto:team@sanderswebworks.co.uk" target="_blank" rel="noreferrer">get in touch</a>!</p><h2 id="any-future-plans" tabindex="-1">Any future plans? <a class="header-anchor" href="#any-future-plans" aria-label="Permalink to &quot;Any future plans?&quot;">​</a></h2><p>Yes! The following features are currently on our roadmap:</p><ol><li>Package Forme plugins and themes for the WordPress directory using <a href="https://github.com/humbug/php-scoper" target="_blank" rel="noreferrer">PHP Scoper</a></li><li>Better test coverage for the framework and codegen codebases</li></ol>',19),s=[n];function i(l,d,h,u,c,p){return o(),t("div",null,s)}const f=e(a,[["render",i]]);export{g as __pageData,f as default};