// metodo estatico eh um metodo que pode ser acessado sem instanciar a classe

export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static falaOi(): void {
    console.log('Oi');
  }
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Luiz', 'Otavio', 30, '000.000.000-00');
console.log(pessoa1);

Pessoa.falaOi();

const pessoa2 = Pessoa.criaPessoa('Maria', 'Miranda');
console.log(pessoa2);

pessoa1.metodoNormal();
pessoa2.metodoNormal();
console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
