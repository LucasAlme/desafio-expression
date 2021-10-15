
var readlineSync = require('readline-sync');

var exp = readlineSync.question('Digite sua expressão: ');

//Algoritmo simples de expressão númerica em JS
//O algoritmo calcula expressões númericas sem parênteses(), e não calcula números ao quadrado, ao cubo...
//Ele funciona em 2 loopings com verificações, uma para definir os arrays de numerais e qual operação será feita.
//E a outra é um looping para calcular, com ordem de esquerda para direita, definindo quais operações sao feita com switch.

function expression(item) {
    var chars = item.split("");
    var index = 0;
    var numerais = []
    var operacao = [];

    numerais[index] = "";
    for (var i = 0; i < chars.length; i++) {
        if (isNaN(parseInt(chars[i])) && chars[i] !== ".") {
            operacao[index] = chars[i];
            index++;
            numerais[index] = "";
        } else {
            numerais[index] += chars[i];
        }
    }
    item = parseFloat(numerais[0]);
    for (var x = 0; x < operacao.length; x++) {
        var num = parseFloat(numerais[x + 1]);
        switch (operacao[x]) {
            case "+":
                item = item + num;
                break;
            case "-":
                item = item - num;
                break;
            case "*":
                item = item * num;
                break;
            case "/":
                item = item / num;
                break;
        }
    }
    return console.log(item);
}

expression(exp)
