const prompt = require("prompt-sync")();

function validaNumero(num) {
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

function somar(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

function subtrair(n1, n2) {
  console.log(`${n1} - ${n2} = ${n1 - n2}`);
}

function multiplicar(n1, n2) {
  console.log(`${n1} * ${n2} = ${n1 * n2}`);
}

function dividir(n1, n2) {
  if (n2 == 0) {
    console.log("Não foi possível realizar a divisão, pois o divisor é 0.");
    return;
  }
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

function porcentagem(n1) {
  console.log(`${n1} % de ${n2} = ${(n1 / 100) * n2}`);
}

function continuar() {
  while (true) {
    let resp = prompt("Deseja continuar? [sim/nao] ").trim().toLowerCase();
    if (resp == "n" || resp == "nao" || resp == "não") {
      console.log("Até mais!");
      return false;
    } else if (resp == "s" || resp == "sim") {
      return true;
    } else {
      console.log("Opção inválida. Digite sim ou não");
    }
  }
}

module.exports = {
  validaNumero,
  somar,
  subtrair,
  multiplicar,
  dividir,
  porcentagem,
  continuar,
};
