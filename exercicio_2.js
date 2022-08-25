// 2 - O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor 
// e dos impostos (aplicados ao custo de fábrica). 
// Supondo que o percentual do distribuidor seja de 15% e os impostos de 30%, escrever uma função JS 
// para que receba o custo de fábrica de um carro,
// calcular e retornar o custo final ao consumidor.

let custoFabrica = 15000;
let valorTotal = (custoFabrica * 1.30 * 1.15);
 console.log(`O custo para o consumidor será: ${valorTotal}`);
