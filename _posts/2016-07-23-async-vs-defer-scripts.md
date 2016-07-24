---
layout: post
title: async vs defer scripts
tags: [wpo, async, defer, performance, perfmatters, scripts]
categories: [posts]
image:
  feature: service.jpg
---

Quando o `HTML` chega ao navegador o processo de *parse* desse `HTML` é iniciado. 

O resultado desse parser é o que chamamos de **DOM** (Document Object Model).

O **DOM** + o **CSSOM** (CSS Object Model) nos permite criar a chamada **Render Tree** e com ela pronta podemos começar a colocar pixels na tela ("podemos" == o browser pode).

Ok, mas e o **async** e o **defer**? Obrigado por perguntar.

O ponto é o seguinte, sem o DOM não dá pra renderizar nada na tela do usuário, pois ele é um pré-requisito para termos a Render Tree, ou seja, queremos o DOM pronto o quanto antes!

Quando colocamos uma tag `script` no head do `HTML` no modo "tradicional", ou seja, sem especificar o atributo `async` ou `defer` o browser vai suspender o parse do HTML até que esse script seja **baixado** e **executado**, somente depois disso o browser volta de onde parou e continua com o parse do HTML. Sacou?

A tag `script` no head sem `async` ou `defer` bloqueia a renderização da página. 

Por isso que se diz ser uma boa prática colocar os scripts lá embaixo antes do `</body>`, pois assim praticamente todo o parse do HTML já foi concluído.

Ok, mas e o **async** e o **defer**? Verdade, já ia me esquecendo...

Os atributos `async` e `defer` permitem que o browser faça o download dos scripts sem que o parse do HTML seja interrompido, mas eles diferem entre si no que diz respeito a execução desses scripts.

## async

`<script async src="a.js"></script>` <br>
`<script async src="b.js"></script>`

Quando uma tag script possuí o atributo `async` o download desse script é iniciado sem que o parse seja interrompido e uma vez que o download termine o script é executado. O `async` não garante a execução em ordem dos scripts, ou seja, se eu tenho 2 scripts no head do meu documento sendo o primeiro de 10MB (oh shit) e o segundo de 2MB (oh shit), é muito provavel que o segundo seja baixado primeiro e neste caso a execução desse script acontecerá antes da execução do primeiro script que por ter 10MB ainda deve estar sendo baixado.

## defer

`<script defer src="a.js"></script>` <br>
`<script defer src="b.js"></script>`

Agora quando uma tag script possuí o atributo `defer` o download desse script é iniciado sem que o parse seja interrompido (igual ao `async`), porém a execução desse script **não** ocorre logo após o termino do download. A execução vai acontecer quando o parse do HTML terminar. Também diferente do `async` o `defer` irá respeitar a ordem de execução, baseado na posição em que o script foi inserido na página.

## Ambos?

`<script async defer src="a.js"></script>`

Você ainda pode colocar os dois atributos se quiser, neste caso se o browser suporta os dois o `async` tem preferência.



## Conclusão
Uma imagem vale mais que mil palavras:

<div style="width:100%;margin:auto">
<img src="/images/posts/async-defer.jpg" alt="async e defer" />
</div>

Qualquer coisa -> @cleberdantas no Twitter



