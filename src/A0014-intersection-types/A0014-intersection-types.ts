// & (and) interseccao entre dois conjuntos

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Luiz',
  sobrenome: 'Otavio',
};

console.log(pessoa);

export { pessoa };

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;
