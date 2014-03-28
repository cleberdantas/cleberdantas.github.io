---
layout: post
title: "Underscore.js - a lightweight and very helpful javascript library"
---

Underscore.js is a lightweight and very helpful javascript library, with only 5KB (minified and gzipped) it gives us about 80 functions to work with data structures and collections.

If you are a ASP.NET Developer you will realize that it is very similar with "LinqToSQL" but of course for javascript =D . (Which is amazing)

Today I'll show you 25 functions of 80, I splitted the code samples in this way: Collections, Arrays, Objects and Utilities, like Underscore.js web site.

See below:

## Collections

{% highlight javascript %}
//Algumas funcões para trabalhar com coleções
 
//Os exemplos funcionarão se o underscore.js estiver presente na página =D
 
//Configurado duas listas para os exemplos
var numeros = [4, 1, 7, 2, 10];
var pessoas = [{Nome: 'Cleber', Idade: 26}, {Nome: 'Alex', Idade: 16}, {Nome: 'Augusto', Idade: 30}];
 
//MAX - Retorna o valor máximo - Tipo no SQL
var maiorNumero = _.max(numeros);
console.log(maiorNumero);
//>> 10
 
//MIN - Retorna o valor mínimo - Tipo no SQL
var menorNumero = _.min(numeros);
console.log(menorNumero);
//>> 1
 
//MAX - Retorna o valor máximo - Tipo no SQL
var pessoaMaisVelha = _.max(pessoas, function(pessoa){ return pessoa.Idade; });
console.log(pessoaMaisVelha);
//>> Object {Nome: "Augusto", Idade: 30} 
 
//SIZE - Retorna o número de valores da lista
var count = _.size(pessoas);
console.log(count);
//>> 3
 
//SHUFLLE - Retorna uma nova lista com os valores embaralhados
var numerosEmbaralhados = _.shuffle(numeros);
console.log(numerosEmbaralhados);
//>> [7, 4, 1, 10, 2] -- Uma lista embaralhada, pode não ser exatamente assim, hehe :D
 
//WHERE - Procura n itens em uma lista dado os critérios
var eu = _.where(pessoas, {Nome: 'Cleber'});
console.log(eu);
//>> [Object] -- Cleber
 
//FIND - Retorna o primeiro elemento da lista que atende ao critério
var primeiroMaiorDe18 = _.find(pessoas, function(pessoa){ return pessoa.Idade > 18; });
console.log(primeiroMaiorDe18);
//>> Object {Nome: "Cleber", Idade: 26}
 
//FILTER - Retorno todos os elementos da lista que atendem ao critério
var todosMaioresDe18 = _.filter(pessoas, function(pessoa){ return pessoa.Idade > 18; });;
console.log(todosMaioresDe18);
//>> [Object, Object] -- Cleber e Augusto
 
//PLUCK - Extrai somente a idade da lista pessoas
var nomes = _.pluck(pessoas, 'Idade');
console.log(nomes);
//>> [26, 16, 30]
 
//MAP - Cria uma nova lista baseada na primeira com as alterações que o callback impõe
var novaLista = _.map(numeros, function(num){ return num * 2});
console.log(novaLista);
//>> [8, 2, 14, 4, 20]
{% endhighlight %}

<div><script type="text/javascript" src="https://gist.github.com/cleberdantas/6205479.js"></script></div>

## Arrays

<div><script type="text/javascript" src="https://gist.github.com/cleberdantas/6205595.js"></script></div>

## Objects

<div><script type="text/javascript" src="https://gist.github.com/cleberdantas/6205636.js"></script></div>

## Utilities

<div><script type="text/javascript" src="https://gist.github.com/cleberdantas/6205806.js"></script></div>
