const prompt = require('prompt-sync')();
const modulo = require("./modulo.js");

let n1, n2, operacao;

while(true){
    n1 = prompt("Digite o primeiro número: ").trim();
    console.log("Digite a operação que deseja realizar:\n[+] [-] [*] [/] [%]\nSua resposta: ")
    operacao = prompt().trim();
    if(operacao != '%'){
        n2 = prompt("Digite o segundo número: ").trim();
    } else{
        n2 = 1;
    }
    let validacao = modulo.validaNumero(n1) && modulo.validaNumero(n2);
    if(validacao){
        n1 = Number(n1);
        n2 = Number(n2);
        switch(operacao){
            case '+':
                modulo.somar(n1, n2);
                break;
            case '-':
                modulo.subtrair(n1, n2);
                break;
            case '*':
                modulo.multiplicar(n1, n2);
                break;
            case '/':
                modulo.dividir(n1, n2);
                break;
            case '%':
                modulo.porcentagem(n1);
                break;
            default:
                console.log("Opção inválida. Não foi possível realizar a operação.");
        }
    } else{
        console.log("Foi digitado um caractere que não é um número quando foi pedido para digitar um número.");
    }
    if(!modulo.continuar()){
        break;
    }
}