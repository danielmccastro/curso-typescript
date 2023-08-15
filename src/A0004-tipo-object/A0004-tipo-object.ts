// modelo js
const objetoA = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Nova chave'; nao pode ser feito

// maneira nao recomendada de fazer
const objetoA2: Record<string, unknown> = {
  chaveA2: 'Valor A2',
  chaveB2: 'Valor B2',
};

objetoA2.chaveA2 = 'Outro valor';
objetoA2.chaveC2 = 'Nova chave';

// maneira sugerida
const objetoA3: {
  chaveA3: string;
  chaveB3: string;
  chaveC3?: string;
} = {
  chaveA3: 'Valor A3',
  chaveB3: 'Valor B3',
};

objetoA3.chaveA3 = 'Outro valor';
objetoA3.chaveC3 = 'Nova chave';

// quando nao souber a chave que sera criada, usar o index signature

const objetoA4: {
  chaveA4: string;
  chaveB4: string;
  [key: string]: unknown; // index signature
} = {
  chaveA4: 'Valor A4',
  chaveB4: 'Valor B4',
};

objetoA4.chaveA4 = 'Outro valor';
objetoA4.chaveC4 = 'Nova chave';

console.log(objetoA4);

// readonly chaveA: string; - nao permite alteracao no valor da chave
