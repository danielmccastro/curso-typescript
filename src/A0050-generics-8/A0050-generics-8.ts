// Record
const objeto1: Record<string, string | number> = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
1;
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

const objeto2: PessoaRequired = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto2);

// Partial
type PessoaPartial = Partial<PessoaRequired>;

const objeto3: PessoaPartial = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
};
console.log(objeto3);

// Readonly
type PessoaReadonly = Readonly<PessoaRequired>;

const objeto4: PessoaReadonly = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};
console.log(objeto4);

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'idade'>;

const objeto5: PessoaPick = {
  nome: 'Luiz',
  idade: 30,
};
console.log(objeto5);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TipoExclude = Exclude<ABC, CDE>; // computa todos os tipos que estao em ABC que nao estao em CDE
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type TipoExtract = Extract<ABC, CDE>; // computa todos os tipos que estao em ABC que podem ser atribuidos aos tipos de CDE

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
  sobrenome: string;
};

/* type AccountApi = {
  id: string;
  nome: string;
  idade: number;
}; */

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};
const accountMongo: AccountMongo = {
  _id: 'asd8923uifja0-ahsduaish',
  nome: 'Luiz',
  idade: 30,
  sobrenome: 'Miranda',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// module mode
export default 1;
