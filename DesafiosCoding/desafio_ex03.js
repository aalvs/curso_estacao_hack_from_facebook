/* 
Exercício: Maior que o número

Programe uma função maiorQueNum que busca em um dado array apenas os números maiores do que 
o número fornecido no segundo parâmetro da função e retorne um novo array apenas com esses números.

Exemplo:

numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
num = 5

maiorQueNum(numeros, num); // retorna [10, 7, 128, 42, 300]

*/

function maiorQueNum(array, num){

 var menoresNum = []

 for(var i =0; i < array.length; i ++) {

   if(array[i]>num) {

     menoresNum.push(array[i])

   }

 }

    return menoresNum

}