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

## Arrays

{% highlight javascript %}
//Algumas funcões para trabalhar com Arrays
 
//Os exemplos funcionarão se o underscore.js estiver presente na página =D
 
//Configurado uma lista de números para os exemplos
var numeros = [4, 1, 7, 2, 10, 2];
 
//Range - Cria uma lista numérica 
var range = _.range(10); //índice começando em zero
console.log(range);
//>> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 
//Range - Cria uma lista numérica 
var range = _.range(1, 11); //índice começando em 1
console.log(range);
//>> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
//INDEXOF - Retorna indíce de determinado número no array
var indice = _.indexOf(numeros, 2);
console.log(indice);
//>> 3
 
//LASTINDEXOF - Retorna o último indíce de determinado número no array
var indice = _.lastIndexOf(numeros, 2);
console.log(indice);
//>> 5
 
//DIFFERENCE - Retorna valores do primeiro array que não estao presentes no outro array
var diferenca = _.difference(numeros, [2, 7, 15, 3]);
console.log(diferenca);
//>> [4, 1, 10]
 
//INTERSECTION - Retorna valores que faz intersecção em todos os arrays
var interseccao = _.intersection(numeros, [2, 7, 15, 3]);
console.log(interseccao);
//>> [7, 2]
 
//UNION - Retorna uma lista de valores únicos presentes em todos os arrays
var union = _.union(numeros, [2, 7, 14, 3]);
console.log(union);
//>> [4, 1, 7, 2, 10, 14, 3]
 
//FIRST - Retorna o primeiro valor de um array
var primeiro = _.first(numeros); //sem parâmetro
console.log(primeiro);
//>> 4
 
//FIRST - Retorna os 3 primeiros valores de um array
var primeiros = _.first(numeros, 3); //com parâmetro
console.log(primeiros);
//>> [4, 1, 7]
 
//LAST - Retorna o último valor de um array
var ultimo = _.last(numeros); //sem parâmetro
console.log(ultimo);
//>> 2
 
//LAST - Retorna os 2 ultimos valores de um array
var ultimos = _.last(numeros, 2); //com parâmetro
console.log(ultimos);
//>> [10, 2]
{% endhighlight %}

## Objects

{% highlight javascript %}
//Algumas funcões para trabalhar com objetos
 
//Os exemplos funcionarão se o underscore.js estiver presente na página =D
 
//Configurado um objeto pessoa para os exemplos
var pessoas = {Nome: 'Cleber', Idade: 26}
 
//KEYS - Retorna só as keys de um objeto
var keys = _.keys(pessoas); 
console.log(keys);
//>> ["Nome", "Idade"]
 
//VALUES - Retorna só os values de um objeto
var values = _.values(pessoas); 
console.log(values);
//>> ["Cleber", 26]
 
//PICK - Retorna um novo objeto somente com os campos definidos
var objSomenteComNome = _.pick(pessoas, 'Nome');
console.log(objSomenteComNome);
//>> Object {Nome: "Cleber"}
 
//OMIT - Inverso do PICK - Retorna um novo objeto removendo os campos definidos
var objSemNome = _.omit(pessoas, 'Nome');
console.log(objSemNome);
//>> Object {Idade: 26}
{% endhighlight %}

## Utilities

{% highlight javascript %}
//Algumas funcões utilitarias
 
//Os exemplos funcionarão se o underscore.js estiver presente na página =D
 
//TIMES - Executa n vezes o que estiver contido no bloco de callback
_.times(2, function(n){
    console.log(n + ' bla bla'); // indice começa em zero
}); 
//>> 0 bla bla
//>> 1 bla bla
 
//RANDOM - Retorna um número aleatório dentro do range passado, incluindo os números passados.
var random = _.random(1, 100)
console.log(random);
//>> qualquer número entre 1 e 100
 
//ESCAPE - Faz enconding da string passada
var sentenca = _.escape("Web, etc & tal");
console.log(sentenca);
//>> Web, etc &amp; tal
 
//UNESCAPE - Desfaz o enconding da string passada
var sentenca = _.unescape("Web, etc &amp; tal");
console.log(sentenca);
//>> Web, etc & tal
{% endhighlight %}



