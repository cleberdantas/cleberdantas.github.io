---
layout: post
title: Anatomia de uma requisição HTTP
tags: [front-end, http, wpo]
categories: [posts]
image:
  feature: service.jpg
redirect_from: /2011/12/anatomia-de-uma-requisicao-http/
---
<p>Precisamos conhecer exatamente como as coisas acontecem por debaixo dos panos, só assim conseguiremos otimizar nossas páginas e deixar nossos usuários felizes.</p>
<p>Muitos fatores podem afetar a performance de uma página, largura de banda, distância entre o cliente e o servidor, tamanho e quantidade de elementos em uma página, como esses elementos são carregados e etc.</p>
<p>Devemos começar por algum lugar a procura por gargalos, existem muitas ferramentas que podem nos ajudar com isso. O que todas elas possuem em comum é o que chamamos de <strong>Waterfall chart, </strong>um gráfico em cascata que mostra como os elementos da página estão sendo carregados.</p>
<div id="attachment_229" class="wp-caption aligncenter" style="width: 631px"><img class="size-full wp-image-229     " title="Figura 1: Aba Net do FireBug" src="/images/posts/figura1.png" alt="" width="621" height="125" /><p class="wp-caption-text">Figura 1: Aba Net do FireBug</p></div>
<div id="attachment_230" class="wp-caption aligncenter" style="width: 570px"><img class="size-full wp-image-230  " title="Figura 2: Waterfall View da ferramenta WebPageTest.org" src="/images/posts/figura2.png" alt="" width="560" height="146" /><p class="wp-caption-text">Figura 2: Waterfall View da ferramenta WebPageTest.org</p></div>
<p>As duas figuras acima mostram o Waterfall view da página inicial do site do Google.</p>
<p>Cada linha da cascata representa um componente de página sendo baixado para o browser do usuário.</p>
<p>Perceba que primeiramente o HTML é baixado e depois todos os componentes associados a ele (Imagens, arquivos CSS, arquivos JS e etc).</p>
<p>No caso da visualização do WebPageTest.org cada componente (linha) tem uma barra com pedaços coloridos que representam diferentes atividades para aquela requisição HTTP, vejamos:</p>
<div id="attachment_231" class="wp-caption aligncenter" style="width: 437px"><img class="size-full wp-image-231" title="Figura 3: Requisição HTTP" src="/images/posts/figura3.png" alt="" width="427" height="20" /><p class="wp-caption-text">Figura 3: Requisição HTTP</p></div>
<div id="attachment_232" class="wp-caption aligncenter" style="width: 546px"><img class="size-full wp-image-232  " title="Figura 4: Legenda" src="/images/posts/figura4.png" alt="" width="536" height="21" /><p class="wp-caption-text">Figura 4: Legenda</p></div>
<h2>DNS Lookup</h2>
<p>DNS (Domain Name System) Lookup é o processo de resolução de nome (de domínio) em IP, ou seja, é achar através de uma url como <a href="http://www.google.com.br/">http://www.google.com.br</a> o IP associado a mesma, que é o que o browser precisa para fazer a conexão com o servidor remoto.</p>
<p>Um ponto importantissímo é que um DNS Lookup irá acontecer para cada domínio diferente que sua página possa ter associado a ela, por exemplo: <a href="http://images.seusite.com.br/">http://images.seusite.com.br</a> , <a href="http://static1.seusite.com.br/">http://static1.seusite.com.br</a> . Cada um desses subdomínios gerará um novo DNS Lookup já que diferentes subdomínios podem estar associados a difentes IP’s.</p>
<h2>Initial Connection</h2>
<p>Todos as requisições HTTP que um browser faz para o servidor são trafegadas através de conexões TCP (Transmission Control Protocol), portanto toda requisição precisa de uma conexão TCP ativa para que se possa baixar os componentes da página.</p>
<p>Para se estabelecer uma conexão TCP um <em>three-way handshake</em> é feito entre o cliente e o servidor através de metadados                enviados nos pacotes. Os pacotes do handshake são muito pequenos e depois de enviados e reconhecidos pelas duas pontas a conexão é estabelecida e a transferência do arquivo pode ser iniciada.</p>
<div id="attachment_233" class="wp-caption aligncenter" style="width: 587px"><img class="size-full wp-image-233 " title="Figura 5: Handshake" src="/images/posts/figura5.png" alt="" width="577" height="180" /><p class="wp-caption-text">Figura 5: Handshake</p></div>
<ol>
<li>Browser envia um pacote com o metadado SYN (Sequence Number) para o servidor</li>
<li>Servidor responde com ACK (Acknowledged) e um outro SYN</li>
<li>Browser finaliza o cumprimente (handshake) com mais um ACK</li>
<li>Conexão estabelecida!</li>
</ol>
<h3>Keep-Alive Header</h3>
<p>Um novo header foi introduzido no HTTP 1.1 com o intuito de reaproveitar conexões TCP para difentes requisições. Quando utilizamos o header <strong>Connection: keep-alive </strong>uma conexão TCP aberta e que nao tenha dado timeout ainda será reaproveitada para trafegar outras requisições HTTP, evitando assim o overhead de se estabelecer conexões TCP (handshake).</p>
<div id="attachment_234" class="wp-caption aligncenter" style="width: 532px"><img class="size-full wp-image-234  " title="Figura 6: Visualização de conexões" src="/images/posts/figura6.png" alt="" width="522" height="144" /><p class="wp-caption-text">Figura 6: Visualização de conexões</p></div>
<p>Perceba que em uma mesma linha diferentes tipos de componentes são trafegados em momentos diferentes, uma mesma conexão TCP é reaproveitada.</p>
<h2>Time to First Byte</h2>
<p>Time to First Byte também conhecido como TTFB é o tempo que o browser espera para receber o primeiro byte de informação da requisição, em páginas dinâmicas podemos considerar esse tempo a demora do processamento server side por exemplo. Se o TTFB de uma request esta muito alto, investigue pois pode ser um ponto importante para otimizações (índice de bancos de dados, melhorias de algoritmos na aplicação e etc).</p>
<h2>Content Download</h2>
<p>Depois de receber o primeiro byte, o “resto” em azul é o tempo de download do componente em sí.</p>
<p>Perceba na figura 3 que só de bater o olho percebemos que mais da metade do tempo gasto nessa requisição foi gasto com REDE!, DNS Lookup, estabelecimento de conexão TCP e TTFB (resumidamente consideramos esse tempo como simplesmente LATÊNCIA).</p>
<h2>Conclusão</h2>
<p>Digo novamente, nós desenvolvedores web precisamos conhecer muito tudo isso, esse tipo de conhecimento esta escondido e poucas pessoas tem ou tentam aprender, mas com certeza saber isso e muito mais faz de você um melhor desenvolvedor.</p>
<p>Abraços</p>