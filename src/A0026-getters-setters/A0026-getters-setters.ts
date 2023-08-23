// MANEIRA 'ANTIGA' DE FAZER GET E SET

/* export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}
  getNome(): string {
    return this.nome;
  }
  getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  setCpf(valor: string): void {
    this.cpf = valor;
  }
}

const pessoa = new Pessoa('Luiz', 'Otavio', 30, '000.000.000-00');
pessoa.setCpf('123.456.789-00');
console.log(pessoa.getCpf()); */

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }
  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }
}

const pessoa = new Pessoa('Luiz', 'Otavio', 30, '000.000.000-00');
// console.log(pessoa);
pessoa.cpf = '123.456.789-00';
console.log(pessoa.cpf);
