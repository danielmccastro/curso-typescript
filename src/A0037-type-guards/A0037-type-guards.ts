function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  else return `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

type NovaPessoa = { tipo: 'pessoa'; nome: string };
type NovoAnimal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = NovaPessoa | NovoAnimal;

class Aluno implements NovaPessoa {
  // eslint-disable-next-line @typescript-eslint/prefer-as-const
  tipo: 'pessoa' = 'pessoa';
  constructor(public nome: string) {}
}

function mostraNome(obj: PessoaOuAnimal): void {
  // if ('nome' in obj) console.log(obj.nome);
  // if (obj instanceof Aluno) console.log(obj.nome);
  switch (obj.tipo) {
    case 'pessoa':
      console.log(obj.nome);
      return;
    case 'animal':
      console.log(`Isso e um animal de cor ${obj.cor}`);
      return;
  }
}

mostraNome(new Aluno('Joao'));
mostraNome({ tipo: 'animal', cor: 'Rosa' });
