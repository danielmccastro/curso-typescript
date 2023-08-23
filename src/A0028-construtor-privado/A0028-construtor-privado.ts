// situacao onde eh instanciada a classe duas vezes, sao dois objetos diferentes. Para uma coneccao em um banco de dados nao faria sentido

export class Database {
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const db1 = new Database('localhost', 'root', '123456');
db1.connect();

const db2 = new Database('localhost', 'root', '123456');
db2.connect();

console.log(db1 === db2);

// padrao de projeto SINGLETON (GoF) - quando tentar instanciar um classe, obtem a classe que ja foi instanciada anteriormente por algum usuario do projeto ou a gente obtem a nova instancia, caso ainda nao tenha sido criada. resumidamente, so tem como ter uma instancia dessa classe.

export class Database2 {
  private static database: Database2;
  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}
  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  static getDatabase(host: string, user: string, password: string): Database2 {
    if (Database2.database) {
      console.log('Retornando instancia ja criada.');
      return Database2.database;
    }
    console.log('Criando nova instancia.');
    Database2.database = new Database2(host, user, password);
    return Database2.database;
  }
}

const db3 = Database2.getDatabase('localhost', 'root', '123456');
db3.connect();

const db4 = Database2.getDatabase('localhost', 'root', '123456');
db4.connect();

console.log(db3 === db4);

// factory method (GoF) - quando um metodo de um classe cria um novo objeto
