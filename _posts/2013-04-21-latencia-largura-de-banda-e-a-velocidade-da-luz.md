---
layout: post
title: Latência, largura de banda e a velocidade da luz
tags: [wpo, webperf]
categories: [posts]
image:
  feature: service.jpg
redirect_from: /2013/04/latencia-largura-de-banda-e-a-velocidade-da-luz/
---
<p>Será que se aumentarmos a banda da nossa internet de 5Mbps para 10Mbps teremos o dobro de velocidade na navegação de páginas na Web?</p>
<p>Comecei esse post com uma pergunta de propósito e espero que você possa responder essa questão ao final da leitura.</p>
<p>Hoje enfrentamos um grande problema em todos os sistemas de rede que basicamente é a velocidade de uma informação sair de um ponto e chegar a outro, esse tempo de viagem da tal informação entre dois pontos é o que chamamos de <strong>latência</strong>.</p>
<p>O tempo de latência normalmente é medido em <em>ms</em> (milissegundos) para a maioria dos sistemas/situações, como não estamos habituados a pensar em milissegundos veja abaixo uma tabela de percepção dos usuários em relação a algumas &#8220;esperas&#8221;:</p>
<table class="delay" width="100%" border="1">
<tbody>
<tr>
<td class="header">Delay</td>
<td class="header">User Reaction</td>
</tr>
<tr>
<td class="green">0 &#8211; 100ms</td>
<td>Instant</td>
</tr>
<tr>
<td>100 &#8211; 300ms</td>
<td>Small perceptible delay</td>
</tr>
<tr>
<td>300 &#8211; 1000ms</td>
<td>Machine is working</td>
</tr>
<tr>
<td class="red">1s+</td>
<td>Mental context switch</td>
</tr>
<tr>
<td class="red">10s+</td>
<td>I&#8217;ll come back later&#8230;</td>
</tr>
</tbody>
</table>
<p>Claramente se quisermos ter a atenção total de nossos usuários teremos que manter a velocidade de resposta de nossas aplicações em até <strong>300ms</strong> (complicadíssimo!).</p>
<p>Ok, já sabemos o que é latência, mas outro conceito importante de aprendermos é o <strong>RTT</strong> (round trip time) que basicamente é o tempo de ida e volta de um sinal/informação entre dois pontos (latência de um meio de transmissão vezes 2).</p>
<p>O grande problema com a latência na realidade é que hoje já estamos transmitindo os dados/sinais/informações de maneira <strong>muito </strong>rápida e estamos amarrados a um limite de velocidade também conhecido como <strong>velocidade da luz.</strong></p>
<p>A <a title="velocidade da luz" href="http://pt.wikipedia.org/wiki/Velocidade_da_luz" target="_blank">velocidade da luz</a> por definição é igual a 299 792 458 metros por segundo ou mais ou menos 300 000 quilomêtros por segundo (bastante não?), só que (sempre tem um but) essa velocidade toda só é atingida no <a title="vácuo" href="http://pt.wikipedia.org/wiki/V%C3%A1cuo" target="_blank">vácuo</a>.</p>
<p>Bom como o vácuo perfeito não é possível na natureza e o não perfeito hoje não é utilizado em grande escala (somente alguns centros de pesquisa possuem câmaras de vácuo) teremos que utilizar outro meio para a transmissão da luz certo? Sim perfeito!</p>
<p>Que a <a title="fibra óptica" href="http://pt.wikipedia.org/wiki/Fibra_%C3%B3ptica" target="_blank">fibra óptica</a> é realidade não temos duvida =D e é nela que basicamente transmitimos a luz/sinais/informações entre os continentes hoje em dia (normalmente debaixo dos oceanos).</p>
<p>A fibra é um meio muito competente para a transmissão da luz, mas é um meio de transmissão e não a ausência dele (vácuo). Todo <strong>meio </strong>de transmissão possui um <a title="índice de refração" href="http://pt.wikipedia.org/wiki/%C3%8Dndice_de_refra%C3%A7%C3%A3o" target="_blank">índice de refração</a> associado ao mesmo e no caso da fibra esse valor é de ~1.5.</p>
<p>Veja abaixo algumas distâncias e tempos de latência entre algumas cidades famosas do nosso querido planeta terra:</p>
<table style="width: 100%; border-collapse: collapse;">
<colgroup>
<col class="col_1" />
<col class="col_2" />
<col class="col_3" />
<col class="col_4" />
<col class="col_5" /> </colgroup>
<thead>
<tr>
<td style="border-bottom: 0.5pt solid;">Rota</td>
<td style="border-bottom: 0.5pt solid;">Distância</td>
<td style="border-bottom: 0.5pt solid;">Tempo &#8211; Luz no vácuo</td>
<td style="border-bottom: 0.5pt solid;">Tempo &#8211; Luz na fibra</td>
<td style="border-bottom: 0.5pt solid;">Round Trip Time (RTT) na fibra</td>
</tr>
</thead>
<tbody>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_san">New York to San Francisco</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id1">4,148 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id1">14 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id2"><span class="strong"><strong>21 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id3">42 ms</p>
</td>
</tr>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_lon">New York to London</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id2">5,585 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id4">19 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id5"><span class="strong"><strong>28 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id6">56 ms</p>
</td>
</tr>
<tr>
<td style="border-bottom: 0.5pt solid;">
<p id="new_york_to_syd">New York to Sydney</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="km_id3">15,993 km</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id7">53 ms</p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id8"><span class="strong"><strong>80 ms</strong></span></p>
</td>
<td style="border-bottom: 0.5pt solid;">
<p id="ms_id9">160 ms</p>
</td>
</tr>
</tbody>
</table>
<p>O desafio hoje é tentar reduzir cada vez mais o índice de refração dos meios de transmissão e chegar cada vez mais perto do &#8220;limite&#8221; da velocidade da luz (complicadíssimo de novo!).</p>
<p>Perceba que uma resolução de DNS (que acontece em todas as páginas web do mundo) requer um RTT, estabelecer uma conexão TCP (que é por onde uma requisição HTTP é trafegada, leia: <a title="Anatomia de uma requisição HTTP" href="http://www.cleberdantas.com/2011/12/anatomia-de-uma-requisicao-http/" target="_blank">Anatomia de uma requisição HTTP</a>) requer outro RTT, mas sabemos que acontece mais de uma resolução DNS por página e também que são estabelecidas mais de uma conexão TCP para trafegar as diversas requisições HTTP de uma página.</p>
<p>Mesmo sabendo disso ainda queremos ter aplicações rodando abaixo de 300ms (Are you fucking kidding me?).</p>
<p>Ok, sabemos que da para reaproveitar conexões TCP (keep-alive), usar <a title="CND" href="http://www.cleberdantas.com/2011/11/content-delivery-network-cdn-voce-ainda-vai-usar-uma/" target="_blank">CDN</a> e trazer para mais perto dos usuários nossos assets, assim diminuindo o percurso o que diminui a latência.</p>
<p>Agora você pode estar pensando que foi justamente por isso que você contratou aquela internet super veloz de 10/20Mbps do seu fornecedor de internet, para poder navegar muito mais rápido na Web certo? Errado!</p>
<p>Veja bem a largura de banda (bandwidth) se compararmos com um cano de água quer dizer simplesmente que quanto mais largo o cano mais água eu posso colocar dentro dele, mas se o cano estiver vazio demorará um tempo para o conteúdo do cano ir de um lado ao outro, entende?</p>
<p>Ai você deve estar se perguntando, pois é eu comprei mais banda para ter um cano mais largo e portanto transferir mais dados de um lado a outro, se eu tivesse uma banda menor (um cano mais fino) certamente demoraria mais para todos os dados viajar de um canto a outro. Perfeito! Você tem razão.</p>
<p>Mas perceba que a minha pergunta no começo do post foi se aumentar a banda quer dizer aumentar a velocidade de <strong>navegação na web.</strong> Eu não me referi por exemplo em assistir um vídeo, música, streaming e outras coisas porque para esse tipo de atividade uma banda maior faz TOTAL diferença, quanto mais melhor.</p>
<p>E por quê? Por quê para ver vídeo a banda faz diferença e para navegar na Web nem tanto?</p>
<p>Bom a resposta é na verdade simples, ouvir uma música ou ver um vídeo significa dizer que estamos utilizando o protocolo TCP (transporte) para fazer algo que ele foi desenhado para.</p>
<p>O protocolo TCP foi desenhado para transmitir dados em <em>long lived connections </em>(conexões duradouras) e também para <em>bulk data transfer</em> (grandes quantidades de dados).</p>
<p>Navegar na Web é justamente o oposto, utilizamos conexões curtas e que trafegam poucas quantidades de dados.</p>
<p>O Google fez dois experimentos visando ver a diferença de se aumentar a largura de banda e também de diminuir a latência e ver o que acontece com a navegação na Web (não vídeos, músicas e etc), veja o que acontece quando aumentamos a largura de banda ou então diminuimos a latência:</p>
<p><img alt="Page Load Time vs. Bandwidth and Latency" src="/images/posts/bandwidth-vs-latency.png" /></p>
<p>Quando fixamos a latência e aumentamos Mbps, depois de 5Mbps a diferença até 10Mbps é de apenas 15% (ajuda, mas nem tanto), primeiro gráfico.</p>
<p>Por outro lado quando fixamos a banda (nesse caso em 5Mbps) e vamos diminuindo de 20ms em 20ms (segundo gráfico) o ganho se mostra linear! Quanto menos latência maior é a velocidade de carregamento de nossas páginas! (sweet!)</p>
<p>O estudo do Google pode ser visto aqui: https://docs.google.com/a/chromium.org/viewer?a=v&amp;pid=sites&amp;srcid=Y2hyb21pdW0ub3JnfGRldnxneDoxMzcyOWI1N2I4YzI3NzE2</p>
<p>Ou seja, se seu objetivo é apenas aumentar a velocidade de navegação nas páginas Web aumentar a banda (para mais de 5Mbps) não vai te ajudar muito, mas se você conseguir derrubar as leis da física e fazer algo que ultrapasse a velocidade da luz ou diminua o índice de refração dos meios de transmissão será algo muito melhor =D.</p>
<p><strong>Oh wait!</strong></p>
<p>Você esta em uma rede WIFI? 3G? Bom ai o negócio é ainda pior, mas isso é assunto para outro post</p>
<p><strong>Good news </strong></p>
<p>HTTP 2.0 esta sendo desenvolvido e ele esta sendo baseado no protocolo <a title="SPDY" href="http://pt.wikipedia.org/wiki/SPDY" target="_blank">SPDY</a> que entre outras coisas faz um uso MUITOO melhor das conexões TCP (teremos melhoria de performance só de migrar \o/), mas ainda estamos numa fase inicial do projeto, vamos aguardar.</p>
<p><strong>Conclusão</strong></p>
<p>Navegar na Web é &#8220;latency bound&#8221;, aumentar a banda depois de um certo nível não faz sentido.</p>
<p>Diminuir a latência é muito difícil (leis da física caem sobre nossas cabeças)</p>
<p>HTTP 2.0 nos ajudará bastante</p>
<p>PS: Se gostou do post compartilhe com seus amigos, principalmente se forem Devs Web</p>
<p>Obrigado e vamos falar mais nos comentários?</p>
<p>Abs</p>