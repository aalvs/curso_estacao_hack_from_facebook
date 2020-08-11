/*
Exercício: Funções Nativas - Gerar Dezenas

Uma fábrica de biscoitos da sorte precisa de um sistema. 
O sistema deve gerar seis dezenas aleatórias para serem impressas. 
Sabe como é: Palpites para seus clientes jogarem na mega sena! 
O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro. 
Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.
*/

var numero = [];

function gerarDezenas() {
	
	for(i=1;i<60;i++) {
		
	numero.push(Math.round((Math.random() * 60) + 1)); 	

	}
}

gerarDezenas( );
