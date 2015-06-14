---
layout: post
title: Http Modules e Http Handlers
tags: [Core, MVC, Web Forms]
categories: [posts]
image:
  feature: texture-feature-05.jpg
---
<p>Resolvi escrever este post para explicar o que são os tão conhecidos porém as vezes não entendidos <strong>Http Modules</strong> e <strong>Http Handlers</strong>, estes dois players na infraestrutura do ASP.NET fazem basicamente tudo acontecer.</p>
<p>Todo o funcionamento do ASP.NET é baseado nestes dois conceitos que aprenderemos a partir de agora.</p>
<h2>ASP.NET Pipeline</h2>
<p>Todas as requisições feitas para uma aplicação ASP.NET são tratadas através de um <strong>pipeline</strong>, este pipeline possui uma série de eventos de entrada que leva a tal requisição a um manipulador, este manipulador é o que chamamos de <strong>Http Handler </strong>(os Http Handlers também são conhecidos como Endpoints &#8211; você já entenderá o porque). Depois da requisição ser tratada por um Http Handler ela será liberada ao solicitante e dessa vez passará pelos eventos de saída do pipeline.</p>
<div id="attachment_119" class="wp-caption alignnone" style="width: 410px"><img class="size-medium wp-image-119 " title="pipelineASPNET" src="/images/posts/pipelineASPNET-300x164.gif" alt="ASP.NET Pipeline" width="400" height="264" /><p class="wp-caption-text">ASP.NET Pipeline</p></div>
<p>Perceba que na imagem o processo lembra muito um túnel (pipeline) onde a requisição passa por eventos de entrada, é tratada por um http handler e depois passa por eventos de saída até ser liberada ao solicitante da requisição.</p>
<p>É importante lembrar que todas as requisições passam por este eventos do pipeline (definidos por <a title="HttpApplication" href="http://msdn.microsoft.com/en-us/library/system.web.httpapplication_events(v=VS.71).aspx" target="_blank">HttpApplication</a>) .</p>
<h2>Http Handlers</h2>
<p>Os Http Handlers são de fato os componentes que fazem &#8220;a coisa acontecer&#8221;, são eles que processam as requisições (ProcessRequest definido por <a title="IHttpHandler" href="http://msdn.microsoft.com/en-us/library/7ezc17x8.aspx" target="_blank">IHttpHandler</a>). No Web Forms por exemplo o HttpHandler que processa as requisições é o <a title="PageHandlerFactory" href="http://msdn.microsoft.com/en-us/library/system.web.ui.pagehandlerfactory.aspx" target="_blank">PageHandlerFactory</a> que implementa a interface IHttpHandler, já no MVC esse papel é feito pelos handlers <a title="mvchandler" href="http://msdn.microsoft.com/pt-br/library/system.web.mvc.mvchandler.aspx" target="_blank">MvcHandler</a> e <a title="mvchttphandler" href="http://msdn.microsoft.com/pt-br/library/system.web.mvc.mvchttphandler.aspx" target="_blank">MvcHttpHandler</a> (dependendo da situação).</p>
<p>É comum nós termos que criar nossos próprios Http Handlers em algumas situacões como por exemplo um handler de imagens que possui os binários no banco de dados e ainda talvez tenham que variar os tamanhos dessas imagens. Outro exemplo seria criar um handler para prover informações em formato RSS ou CSV.</p>
<p>Implementar um handler não é uma tarefa muito difícil só é preciso implementar a interface IHttpHandler (Basta dar uma googlada para ver 1 bilhão de exemplos =D).</p>
<h2>Http Modules</h2>
<p>Diferente dos Http Handlers que atuam como endpoints para as requisições os Http Modules atuam nos mais variados eventos do pipeline do ASP.NET, na verdade um Http Module (quando escrito) se inscreve em um ou mais eventos do pipeline onde pode fazer diferentes coisas (olhar imagem do pipeline acima e link do HttpApplication), dessa forma dizemos que os Modules atuam como &#8220;filtros&#8221; em todo esse processo (tanto nos eventos de entrada como nos eventos de saída do pipeline).</p>
<p>Você pode querer criar um Http Module para por exemplo minimificar arquivos estáticos, colocar alguns headers http customizados na resposta da requisição ou ainda tratar questões de segurança e logging que são tarefas que normalmente um Http Module resolve muito bem.</p>
<p>Assim como os Handlers os Modules não são coisas de outro mundo para serem implementados e você pode achar milhares de exemplos facilmente no Google.</p>
<h3>Resumindo</h3>
<p>Os Http Handles e os Http Modules são parte fundamental do ASP.NET entendê-los faz de você um melhor desenvolvedor sem dúvidas, e acredite quando der zica saber bem como funciona o framework com o qual você trabalha faz toda a diferença.</p>
<p>Espero que este post tenha ajudado de alguma forma&#8230;</p>
<p>Qualquer dúvida, crítica ou sugestão por favor vamos bater um papo nos comentários.</p>
<p>Abraços!</p>