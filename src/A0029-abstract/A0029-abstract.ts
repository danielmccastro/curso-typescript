// todas as classes que estenderem aquela classe abstrata, serao do mesmo tipo que a classe abstrata e serve para garantir que todas as classes que estenderem a classe que seja abstrata, tenham um determinado metodo ou atributo.

export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(`${this.nome} esta atacando...`);
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida ${this.emoji}`);
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log(`${this.emoji} Guerreira: 'Ao ataque!!!!!'`);
  }
}
export class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log(`${this.emoji} Monstro: 'Aweeeweooo'`);
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
monstro.atacar(guerreira);
