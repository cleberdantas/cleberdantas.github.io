---
layout: post
title: Debugando Rotas no ASP.NET MVC
tags: [asp.net]
categories: [posts]
image:
  feature: texture-feature-05.jpg
---
<p>Quem trabalha com ASP.NET MVC sabe o quanto as rotas são importantes para o correto funcionamento das aplicações, as rotas tem um papel fundamental e são delas que o Framework extrai informações para construção de Controllers e para o acionamento de Actions.</p>
<p>Mas e quando temos problemas com as rotas? O sistema deveria estar caindo em uma rota e não na outra, como verificar isso? Na verdade é meio complicado mesmo uma vez que as rotas são todas configuradas na inicialização da aplicação (AKA Application_Start do nosso querido Global.asax).</p>
<p>Pensando nessa dificuldade de cada dia o <a title="Phil Haack's Blog" href="http://haacked.com/" target="_blank">Phil Haack</a> criou um package chamado RouteDebugger que tem o objetivo de nos ajudar a caçar possíveis problemas em nossas rotas.</p>
<p><strong>Mão na massa!</strong></p>
<p>Criei um projeto chamado MvcRouteDebugger no meu Visual Studio 2010</p>
<div><img class="size-medium wp-image-93 alignleft" title="CriandoProjeto" src="/images/posts/CriandoProjeto-300x150.jpg" alt="" width="300" height="150" /></div>
<p>Com o projeto recém criado abra o Package Manager Console e instale o pacote como abaixo:</p>
<p>PM &gt; Install-Package routedebugger</p>
<div><img class="alignleft size-medium wp-image-94" title="InstalandoOpacote" src="/images/posts/InstalandoOpacote-300x112.jpg" alt="" width="300" height="112" /></div>
<p>A instalação adiciona uma referência da Dll RouteDebugger ao projeto e uma entrada no Web.Config</p>
<div><img class="alignleft size-medium wp-image-95" title="ModificacoesNoProjeto" src="/images/posts/ModificacoesNoProjeto-300x183.jpg" alt="" width="300" height="183" /></div>
<p>A entrada no Web.Config é que define se o debug esta valendo ou não, então é aqui que você pode ativar ou desativar o RouteDebugger em sua aplicação:</p>
<p>&lt;add key=&#8221;RouteDebugger:Enabled&#8221; value=&#8221;true&#8221; /&gt;</p>
<p>Por padrão vem ativo (true).</p>
<p><strong>Executando a aplicação</strong></p>
<div><img class="alignleft size-medium wp-image-96" title="Resultado" src="/images/posts/Resultado-300x183.jpg" alt="" width="300" height="183" /></div>
<p>Com a aplicação rodando podemos ver que quando a aplicação esta com o RouteDebugger ativo são adicionadas várias informações sobre roteamento no fim das nossas páginas, dessa forma conseguiremos de uma forma melhor analisar possíveis problemas com nossas rotas.</p>
<p>Espero que tenham gostado da dica.</p>
<p>Abraços.</p>