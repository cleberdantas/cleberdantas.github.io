---
layout: post
title: HTTP Caching e a sopa de letrinhas
tags: [wpo, caching, http, performance, perfmatters]
categories: [posts]
image:
  feature: texture-feature-05.jpg
---

Este post é um oferecimento de: **Ociosidade antes do último episódio da sexta temporada de Game of Thrones**.

Se quando estamos falando sobre cache HTTP as palavras-chave `no-cache`, `no-store`, `ETag`, `max-age`, `public`, `private`, `If-None-Match`... fazem total sentido pra você, então eu te libero a fazer alguma coisa mais útil do que continuar lendo esse texto, agora se essas palavras fazem pouco ou nenhum sentido eu sugiro que você continue lendo. **Vem comigo!** (TODO: Inserir gif do Goulart de Andrade chamando a galera pra ir com ele)

## TL;DR
Sem **too long didn't read** hoje ¯\_(ツ)_/¯

## Quem é quem
Antes de começarmos vamos definir 3 jogadores importantes para a nossa conversa, são eles:

* Servidor
* Proxies intermediários
* Cliente

Para o nosso contexto **servidor** é onde o website que contém os arquivos que vamos ou não definir regras de cache está hospedado. **Cliente** é simplesmente o browser do usuário acessando esse website e finalmente **proxies intermediários** são quaisquer proxies que estejam entre o cliente e o servidor e que possam cachear respostas deste servidor.

## Como funciona
O servidor pode dizer ao cliente quando e por quanto tempo uma resposta pode ser mantida em cache, dessa maneira o cliente não precisa fazer uma nova requisição para o servidor enquanto esse conteúdo esteja fresco, ou seja, ainda válido. Quando esse conteúdo local expira o cliente pode fazer uma requisição para validar se este conteúdo ainda pode ser utilizado ou se o servidor tem uma nova cópia do mesmo.

Isso é feito através de **headers HTTP**. Existem websites que têm meta tags como `pragma` com objetivo de configurar cache, mas esse método não é lá muito eficiente, por exemplo os proxies intermediários não costumam olhar dentro do HTML buscando por isso. Alguns browsers suportam, mas definitivamente você deve sempre fazer via **headers HTTP** é um jeito mais eficiente e confiável.

## Expire vs cache-control
`Expire` e `cache-control` são dois headers HTTP utilizados para dizer aos clientes como as respostas devem ser cacheadas. O `Expire` é o irmão mais velho do `cache-control` e foi definido lá na spec do **HTTP 1.0**, já o irmão mais novo foi definido na spec do **HTTP 1.1**. Em uma resposta onde os dois estejam presentes o `cache-control` terá precedência. Sendo bem sincero, acho muito dificil hoje em dia ainda encontrar sites que sejam entregues via HTTP 1.0, e todos os browsers modernos suportam o `cache-control`, sendo assim esse cara é o bastante pra gente.


## max-age
```
Cache-Control: max-age=86400
```

No `max-age` é onde definimos o número em **segundos** em que uma resposta pode se manter no cache do cliente e quaisquer proxies intermediários. No exemplo acima uma resposta com esse header configurado será considerada "fresca" por um dia (60 * 60 * 24) a partir da data que o conteúdo foi baixado pelo browser. Durante esse período de um dia o browser não precisa verificar nada com o servidor, simplesmente retorna ao usuário essa versão em cache.

## public vs private
```
Cache-Control: private, max-age=600
```

Acho que nunca vi uma resposta marcada como `public`, somente de configurar o `max-age` isso já é o suficiente para dizer que a coisa é "pública", por outro lado quando não queremos a coisa "pública" aí sim marcamos como `private`, veja nosso exemplo acima. Isso basicamente quer dizer que estamos autorizando clientes/browsers a manter essa cópia por 10 minutos (10 * 60), mas estamos proibindo quaisquer proxies intermediários de fazerem o mesmo (se eles respeitarem a regra é claro :D), inclusive CDNs (se você estiver usando uma CDN para por exemplo fazer entrega de arquivos estáticos não marque esses arquivos como `private`!!!).

## no-cache vs no-store
```
Cache-Control: no-cache
```
ou
```
Cache-Control: no-store
```
Bem, como você deve imaginar quando marcamos uma resposta como `no-cache` isso quer dizer **é claro** que não estamos permitindo que essa resposta seja cacheada, certo? **E R R A D O**! Na verdade isso é exatamente o que o `no-store` faz.

`no-store` diz ao cliente e aos proxies intermediários que essa resposta não deve ser cacheada de jeito nenhum!

Agora o `no-cache` diz o seguinte: "Olha só amigos, vocês podem me cachear, mas sempre antes de utilizar a versão que vocês têm localmente consultem o servidor, sempre!". Ou seja, você pode e deve manter a cópia em cache, mas sempre terá que **validar** com o servidor se você pode ou não utilizar essa versão local cacheada. O que nos leva a falar de **validação**...

## Validação
```
ETag: ff123gg
Cache-Control: private, max-age=600
```
Na situação que temos acima estamos dizendo ao cliente que ele pode manter uma cópia dessa resposta em seu cache por 10 minutos, so far so good. Quando essa resposta expirar o cliente poderia fazer uma nova requisição full para esse recurso e baixar de novo o arquivo, massss isso não seria muito eficiente, caso o conteúdo no servidor não tenha sido alterado desde então não seria muito melhor fazer uma chamada mais "barata" só checando com o servidor se esse recurso mudou ou não? E caso não tenha mudado continuar usando a versão local? Bem, de fato seria bem melhor! E é o que faremos agora, checar como servidor, em outras palavras tentar revalidar nossa cópia local.


```
If-None-Match: ff123gg
```

Bem, o cliente irá fazer uma request passando o header `If-None-Match` com o valor que recebeu inicialmente no header `ETag` da resposta, alías ainda não expliquei o `ETag`, mas basicamente é (não necessariamente) um hash do arquivo gerado pelo servidor. Quando mandamos isso através do `If-None-Match` o servidor consegue nos dizer baseado nesse valor se o arquivo mudou ou não, se o servidor verifica que a versão que ele tem lá é igual a que estamos passando via esse header, ou seja, a que ainda mantemos no cache local, ele simplesmente vai nos retornar um `status HTTP` de número 304, que significa **Not Modified**. Desse modo o servidor não esta nos retornando a versão full do arquivo somente um "alerta" de que nada mudou e portanto podemos continuar usando nossa versão local. Nesse resposta o servidor poderia inclusive (caso queira e é normal) nos indicar por mais quanto tempo podemos considerar o arquivo local "fresco", poderia ser por mais 10 minutos por exemplo, por que não?

Caso o conteúdo tenha mudado no servidor a resposta seria um `status HTTP` de número 200, com a resposta completa.

Essa duplinha `ETag`/`If-None-Match` é bacanuda, mas ainda existe outra duplinha que é `Last-Modified`/`If-Modified-Since`.

Caso a requisição não venha com um `ETag`, mas sim com um `Last-Modified` que terá a data da última modificação (jura?), ainda assim poderemos revalidar com o servidor, dessa vez não como `If-None-Match`, mas sim como `If-Modified-Since` passando a data que recebemos na resposta inicial de `Last-Modified`.

Caso a resposta venha com `ETag` E `Last-Modified` pelo que andei lendo por aí o `Last-Modified` será ignorado e a validação será feita via `ETag`/`If-None-Match`.

## Conclusão
Cansei de escrever, mas no resumo esses header são chatos pra caramba =). Não acredite em tudo que eu escrevi aqui eu posso estar errado em alguma coisa, mas pode usar esse texto como uma boa base.

Qualquer coisa -> @cleberdantas no Twitter

