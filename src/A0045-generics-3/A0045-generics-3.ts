interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(aluno1);

const aluno2: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};
console.log(aluno2);

const aluno3: PessoaProtocolo = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(aluno3);

// type e interface funcionam da mesma forma com generics
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno4: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(aluno4);
