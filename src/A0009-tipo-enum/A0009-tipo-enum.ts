// estrutura de dados nao ordenada utilizada quando mais de uma opcao pra alguma, geralmente quando a gente quer enumerar alguma coisa

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

enum Cores2 {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
  ROXO = 'ROXO',
}

console.log(Cores2);
console.log(Cores2.VERMELHO);
console.log(Cores2[0]); //undefined
console.log(Cores2.ROXO);

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// ele une os dois enum
console.log(Cores);
