---
layout: post
title: DOMContentLoaded vs load
tags: [front-end, webdev]
categories: [posts]
image:
  feature: texture-feature-05.jpg
redirect_from: /2011/11/domcontentloaded-vs-load/
---
<p>Olá pessoal,</p>
<p>Resolvi escrever este pequeno post para explicar a diferença entre dois (famosos) eventos que são disparados quando uma página é carregada, são eles:</p>
<ul>
<li><strong>DOMContentLoaded;</strong></li>
<li><strong>load</strong></li>
</ul>
<p>Estes eventos são muito importantes e devemos saber a real diferença entre eles, assim usaremos cada um deles de maneira apropriada</p>
<h2>DOMContentLoaded</h2>
<p>Também conhecido em JQuery como: $(document).ready</p>
<p>Este evento é disparado quando o documento HTML é carregado e parseado (analisado), neste momento o DOM (<a title="Document Object Model" href="http://www.w3.org/TR/DOM-Level-2-Core/introduction.html" target="_blank">Document Object Model</a>) é construído e esta pronto para ser acessado.</p>
<p>Não há a necessidade de esperarmos todo o resto da página ser carregado para acessarmos a estrutura de objetos e fazermos manipulações .</p>
<h2>Load</h2>
<p>Também conhecido em JQuery como: $(window).load</p>
<p>Este evento por sua vez é disparado quando TODOS os componentes da página são carregados: Imagens, CSSs, JavaScripts, Frames, Flashs e etc.</p>
<p>Devemos usar este evento somente quando quisermos fazer algo depois do carregamento COMPLETO da tal página.</p>
<h2>Exemplo de DOMContentLoaded vs load</h2>
<p><img class="aligncenter size-full wp-image-158" title="DOM_LOAD" src="/images/posts/DOM_LOAD.jpg" alt="" width="584" height="393" /><br />
Tirei a imagem acima do FireBug uma extensão do Firefox.</p>
<p>Perceba duas linhas verticais uma azul e outra vermelha, que representam os eventos DOMContentLoaded e load respectivamente. No tooltip ainda conseguimos ver a quantidade de tempo que se passou até que esses eventos fossem disparados, interessante não?</p>
<p>Quanto mais perto uma linha da outra mais rápido sua página esta sendo carregada!</p>
<h2>Componentes de terceiros – CUIDADO!</h2>
<p>Sim! Botões do Facebook, coisas do Twitter e etc, tudo que for de terceiro que estiver “pindurado” em sua página vai interferir ou postergar o evento load de sua página, portanto cuidado!</p>
<p>O ideal nesses casos é carregar tais componentes de modo assíncrono, mas isso é assunto para um próximo post.</p>
<p>Espero ter contribuído de alguma forma</p>
<p>Abraços!</p>