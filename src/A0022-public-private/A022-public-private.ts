export class Empresa {
  public readonly nome: string; // public acessivel dentro da classe, fora da classe e em todas as subclasses dessa classe (por herenca)
  private readonly colaboradores: Colaborador[] = []; // private so eh acessivel dentro da classe em que foi criado - excelente para encapsulamento - para tornar acessivel fora da classe, eh necessario criar metodos publicos
  protected readonly cnpj: string;
  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }
  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// classe tb funciona como tipo em TS - aqui eh necessario falar se eh public
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Luiz', 'Otavio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('Joao', 'Vieira');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
console.log(empresa1.nome);
empresa1.mostrarColaboradores();
