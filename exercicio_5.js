/*
5 - Faça uma função JS para receber um número que é um código de usuário. Caso este código seja diferente 
de um código armazenado internamente no código JS (igual a 1234) deve ser apresentada
a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor 
que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha
incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

let codigoUsuario = 1234;
let senhaUsuario = 9909;

if (codigoUsuario != 1234){
    console.log("Usuário inválido");
} else if(senhaUsuario != 9999) {
        console.log("Senha incorreta");
} else {
    console.log ("Acesso permitido");
}