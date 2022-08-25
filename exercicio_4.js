/*
4 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais 
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. 
Escreva uma função JS que recebe o número de horas trabalhadas em um mês, o salário por hora e 
escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido
trabalhadas (considere que o mês possua 4 semanas exatas).
*/
 // no mês o funcionario deve trabalhar 160 horas.

let horasTrabalhadas = 160;
let salarioAtual = 1.200;
let valorHora = 0.133;
let salarioNovo = salarioAtual + (valorHora* 1.50) ;

if (horasTrabalhadas > 160){
    console.log (`Seu salário atualizado é: ${salarioNovo}`)
} else{
    console.log (`Não há horas extras a serem recebidas`)
}
