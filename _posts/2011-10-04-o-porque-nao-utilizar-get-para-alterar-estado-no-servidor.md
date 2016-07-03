---
layout: post
title: O porquê não utilizar GET para alterar estado no servidor
tags: [web, webperf, HTTP]
categories: [posts]
image:
  feature: service.jpg
redirect_from: /2011/10/o-porque-nao-utilizar-get-para-alterar-estado-no-servidor/
---
<p>Olá pessoal,</p>
<p>É muito comum (ainda) desenvolvedores Web utilizarem os verbos Http Get e Post de maneira meio que &#8220;indiscriminada&#8221; para acessarem e/ou buscarem recursos no servidor Web, e digo isso independentemente da tecnologia de servidor que esta sendo utilizada (PHP, ASP.NET, JSF, Rails, Django e etc).</p>
<p>A ideia desse post é simplesmente alertar os desenvolvedores de alguns &#8220;perigos&#8221; da utilização errada dos verbos para fazer &#8220;ações&#8221; no servidor.</p>
<p>Em geral devemos pensar nos dois verbos literalmente como nós os lemos, ou seja, GET (SOMENTE para pegar recursos, ok?) e POST (Para postar algo, levar algo ao servidor e provavelmente mudar o estado de algo).</p>
<p>Existem vários motivos de não utilizarmos GET para fazer alterações de estado no servidor, alguns:</p>
<ul>
<li>As requisições podem ser cacheadas</li>
<li>Podem ficar no histórico do navegador</li>
<li>Podem ser favoritadas</li>
<li>São repetíveis naturalmente (Vários F5 tranquilamente sem alerta do browser)</li>
</ul>
<p>Portanto muito cuidado quando for alterar estado no servidor (adicionar/atualizar/deletar) via GET, pode ser um tanto quanto &#8220;perigoso&#8221; em alguns casos.</p>
<p><strong>OK então vou sempre utilizar POST para fazer alteração de estado!</strong></p>
<p>Perfeito, mas nesse caso se não fizermos &#8220;nada&#8221; na resposta dessa requisição teremos um problema chato.</p>
<p>Quem nunca depois de um POST de formulário tentou recarregar a página e PAM! Sim! Alerta do browser dizendo que vai reenviar tudo para o server (outro POST pra ser mais exato, podendo repetir por exemplo a inserção de algo no banco), é eu sei, você assim como eu já passou por isso.</p>
<p><strong>Como resolver?</strong></p>
<p>Até que é fácil, nesse caso devemos utilizar o padrão <a title="Post/Redirect/Get" href="http://en.wikipedia.org/wiki/Post/Redirect/Get" target="_blank">Post/Redirect/Get</a> (sim é considerado um padrão), dessa forma evitamos esse comportamento chato que sempre acontece, no ASP.NET MVC é bem tranquilo de implementar inclusive.</p>
<p>Bom fica a dica, espero que vocês parem de utilizar GET pra fazer alteração de estado no server =)</p>