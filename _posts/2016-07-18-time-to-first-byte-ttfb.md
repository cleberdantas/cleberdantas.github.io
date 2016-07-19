---
layout: post
title: Time To First Byte (TTFB)
tags: [wpo, ttfb, http, performance, perfmatters, flush]
categories: [posts]
image:
  feature: service.jpg
---

Já se perguntou o que quer dizer aquele **Wating TTFB** nas suas requisições lá no Chrome Dev Tools? Vou explicar o que é isso neste post.

<div style="width:320px;margin:auto">
<img src="/images/posts/ttfb.png" alt="Wating TTFB" />
</div>

**Time To First Byte** é o tempo decorrido do momento em que um usuário faz uma requisição até o momento em que o primeiro byte da resposta chega até o navegador. Simples, certo? Nem tanto.

Primeiro é importante dizer que quando se trata de web performance uma única métrica normalmente não é o bastante pra medir a performance de uma página/site. Você não deve olhar somente para o TTFB, mas também não deve simplesmente ignora-lo como sugere esse post da CloudFlare (<a href="https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/" target="_blank">Stop worrying about Time To First Byte (TTFB)</a>).

O TTFB nos dá um número interessante e que tem impacto direto no tempo de carregamento e renderização da página, quanto maior o TTFB mais tempo vai demorar para começar a renderização da página, afinal quanto mais demorar pra chegar qualquer informação ao cliente mais tempo o navegador vai esperar para poder fazer o parse e assim começar seu trabalho. **Não é possível renderizar algo que ainda nem sabemos o que é**.

Algumas coisas podem influenciar o TTFB (deixa-lo maior ou menor), exemplos:

- Tempo de resposta do servidor
- Distância entre o cliente e o servidor

O tempo de resposta do servidor é um fator extremamente importante, segundo o Google deveríamos manter esse valor em até **200 ms**, quanto mais baixo melhor.

Quando estamos falando de conteúdos dinâmicos, onde no servidor precisamos rodar regras de negócios, consultar bases de dados e etc, facilmente podemos passar desses 200 ms, é importante aqui também ter uma estratégia de cache, afinal como já diz o ditado:

> Não existe código mais rapido do que aquele não executado.

Se o seu problema está no tempo de resposta do servidor você deveria estar feliz, pelo menos você pode fazer alguma coisa em relação a isso. Otimizar queries, tunning de configs de servidor, usar cache etc etc.

Seu objetivo aqui é tentar devolver algo ao cliente em até 200 ms.

Mesmo que você não tenha TODA a resposta nesse tempo você pode sim mandar o cabeçalho da página (com o head já informando qual css você precisa por exemplo) para o cliente (flush estou falando de você cara), certo? Eu aposto que sim.

Se você usa Node olha isso aqui -> <a href="https://medium.com/@mikehall314/improving-perceived-performance-with-talisman-for-node-js-d400f3328627#.r0c58dbau" target="_blank">Improving Perceived Performance with Talisman for Node.js</a>

Agora a velocidade da luz é realmente uma pedra no sapato.

Ainda não dá pra ser mais rápido que ela, mas tem uma galera inteligente por aí. 

Eles sabem que não dá pra "quebrar" a velocidade da luz, mas dá sim pra encurtar as distâncias, nesse caso deixando a informação mais proxima do cliente. Como? Ora, distribuindo a mesma informação em diversos lugares e direcionado os usuários para as copias mais proximas deles. Oi, CDN Provider!

## Conclusão
Faça o seu melhor no server side, se possível use alguma técnica de "flush early" para despachar o começo da página para o usuário  (assim o browser já vai trabalhando na renderização ) e se for necessário no seu caso use uma CDN e "quebre as leis da física" (não é claro sem desembolsar uma graninha para isso).

Qualquer coisa -> @cleberdantas no Twitter



