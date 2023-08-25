// Declaration merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: string[]; // readonly acessivel, para impedir modificacoes: readonly string[]
}

interface Pessoa {
  idade?: number; // atributo opcional
}

const outraPessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  enderecos: ['Av. Brasil'],
};

outraPessoa.enderecos.push('Av. Argentina');
console.log(outraPessoa);
