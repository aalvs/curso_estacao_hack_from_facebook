/*
Exercício: Break e Continue - Números Pares

Precisamos imprimir somente os números pares de 0 à 20. 
Mas temos alguns requisitos, você precisa utilizar, o loop for, o comando continue e o numero deve ser o contador do loop! 
Vamos lá?
*/

var listaDeNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]

for (var i = 0; i < listaDeNumeros.length; i++) {

  if(listaDeNumeros[i] == '2', '4', '6', '8', '10', '12', '14', '16', '18', '20') {

    continue

  }
    console.log(listaDeNumeros[i])
}