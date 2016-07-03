---
layout: post
title: Above-the-Fold CSS
tags: [front-end, wpo]
categories: [posts]
image:
  feature: service.jpg
redirect_from: /2015/01/above-the-fold-css/
---
<p>Como CSS <strong>é</strong> render blocking quanto menos bytes precisarmos para baixa-lo melhor.</p>
<p>Idealmente deveríamos tentar ter tudo o que é necessário para a primeira renderização em até ~14KB, que é quanto mais ou menos se pode transferir em uma única conexão TCP diretamente sem precisar de um ACK do client, ou seja em apenas uma conexão estabelecida com o server e depois de alguns poucos pacotes recebidos já teremos tudo necessário para botar pixels na tela.</p>
<p>Uma primeira coisa que podemos fazer para melhorar é remover estilos não utilizados, por exemplo com a ferramenta UnCSS do Addy Osmani. (<a href="https://github.com/addyosmani/grunt-uncss" target="_blank">https://github.com/addyosmani/grunt-uncss</a>)</p>
<p>Podemos ir além e tentar identificar somente estilos necessários para a renderização do ATF (above-the-fold), que basicamente é a primeira visão que temos dá página, ou seja, o que vemos antes de fazer qualquer scroll (a rolagem zero).</p>
<p>Podemos fazer isso com um script que pode ser usado via bookmarklet ou via snippet no Chrome, é um experimento do Paul Kinlan que funciona muito bem. (veja na prática aqui -&gt; <a href="http://addyosmani.com/blog/detecting-critical-above-the-fold-css-with-paul-kinlan-video/" target="_blank">http://addyosmani.com/blog/detecting-critical-above-the-fold-css-with-paul-kinlan-video/</a>)</p>
<p>Depois de identificado os estilos necessários para o ATF podemos deixar esses estilos inline no HTML via tag <code>style</code> , <strong>sim inline</strong>. Isso inclusive é uma recomendação do Google e alguns grandes sites como o próprio Google, Bing e Facebook já o fazem a tempos. (Veja mais aqui -> <a href="http://www.phpied.com/css-and-the-critical-path/" target="_blank">http://www.phpied.com/css-and-the-critical-path/</a>)</p>
<p>Removendo estilos desnecessários e colocando estilos para ATF inline, temos então que idealmente carregar o restante dos nossos CSSs o mais tarde possível e idealmente de maneira assíncrona. Podemos fazer isso por exemplo com a função loadCSS do Scott Jehl. (<a href="https://github.com/filamentgroup/loadCSS" target="_blank">https://github.com/filamentgroup/loadCSS</a>).</p>
<p>Fazendo as coisas acima já teremos uma grande melhora na performance das nossas páginas, mas ainda podemos ir além&#8230;</p>
<p>Um próximo passo provável é tentar automatizar o processo acima, pois é bem trabalhoso fazer tudo isso na “mão”.</p>
<p>A boa notícia é que o Addy Osmani criou uma ferramenta que nos ajuda a fazer exatamente isso, se chama Critical (<a href="https://github.com/addyosmani/critical" target="_blank">https://github.com/addyosmani/critical</a>) e usa o headless browser PhantomJS para carregar páginas e extrair o above-the-fold CSS e recoloca-lo de modo inline nas páginas, é possível usar via task Grunt/Gulp e também via Command Line.</p>
<p>Legal né? Eu acho ^^</p>