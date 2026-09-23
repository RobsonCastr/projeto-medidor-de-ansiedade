

const batimentosAcelerados = 1
const dificuldadeDormir = 1
const faltaDeFoco = 1
const sensacaoTensao = 1
const irritabilidade = 1
const pensamentosAcelerados = 1

let totalSintomas = 0

if (batimentosAcelerados) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

if (dificuldadeDormir) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

if (faltaDeFoco) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

if (sensacaoTensao) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

if (irritabilidade) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

if (pensamentosAcelerados) {
  totalSintomas = totalSintomas + 1
} else {
  totalSintomas = totalSintomas
}

let nivelAnsiedade = ""
let orientacao = ""

if (totalSintomas) {
  if (totalSintomas <= 2) {
    nivelAnsiedade = "Leve"
    orientacao = "Sua ansiedade está sob controle. Continue mantendo hábitos saudáveis."
  } else {
    if (totalSintomas <= 4) {
      nivelAnsiedade = "Moderado"
      orientacao = "Sua ansiedade está moderada. Faça pausas e pratique técnicas de respiração."
    } else {
      nivelAnsiedade = "Elevado";
      orientacao = "Atenção: nível elevado de sintomas. Considere desacelerar e buscar apoio."
    }
  }
} else {
  nivelAnsiedade = "Nenhum sintoma"
  orientacao = "Você não indicou nenhum sintoma. Excelente!"
}

console.log("=== AVALIAÇÃO DE ANSIEDADE ===")
console.log("Total de sintomas marcados:")
console.log(totalSintomas)

console.log("Nível registrado:")
console.log(nivelAnsiedade)

console.log("Orientação:")
console.log(orientacao)