---
layout: post
title: Cuidado com os Cookies, use cookie-free domains
tags: [front-end, webdev]
categories: [posts]
image:
  feature: service.jpg
redirect_from: /2011/11/cuidado-com-os-cookies-cookie-free-domains/
---
<p>Post rápido prometo. Piadinhas de cookie a parte a coisa é bem séria.</p>
<p>É muito comum nós Web Developers guardarmos informações em cookie(s) no(s) browser(s) do(s) usuário(s), certo? Sim certo!</p>
<p>As vezes até “sem querer” fazemos isso (até sem saber), por exemplo, vários frameworks web (inclusive o <a title="ASP.NET" href="http://www.cleberdantas.com/categoria/aspnet/" target="_blank">ASP.NET</a>) armazena no cookie informações para fazer a autenticação dos usuários na aplicação.</p>
<h2>Ok, mas e daí!?</h2>
<p>Bom, e daí que não é através de mágica que nós conseguimos acessar lá no SERVER os dados do cookie que fica no BROWSER do usuário.</p>
<p>A toda request feita para o servidor pelo browser o cookie do usuário (sem piadinhas aqui ok?) vai junto, é trafegado na request. Sério? Sim, sério.</p>
<p>A grande questão aqui é que o cookie é baseado em subdomínio, ou seja, se eu gero um cookie qualquer para <a href="http://www.meusite.com.br/">www.meusite.com.br</a>, toda request feita para o “www” levará o cookie junto (sem piadas novamente), inclusive requisições para imagens, arquivos css e javascript e tudo que estiver apontando para o subdomínio “www”.</p>
<p>Agora cá pra gente, por que raios a gente precisa trafegar os cookies para imagens e arquivos estáticos em geral? Não precisamos! Não serve pra nada, nem pra gente e nem para o servidor, é um grande desperdício!</p>
<h2>O que eu faço então?</h2>
<p>Use <em>cookie-free domains</em>, se nós criarmos um novo subdomínio, por exemplo, static.meusite.com.br e fizermos com que todos os arquivos estáticos apontem para este subdomínio bingo! Os cookies não serão trafegados porque eles foram gerados para o “www” e não para o “static”, dessa forma conseguimos economizar alguns Kilobytes no final do mês no tráfego geral do site, chique não?</p>
<p>Qualquer dúvida ou sugestão, deixe-me saber nos comentários</p>
<p>Abraços</p>