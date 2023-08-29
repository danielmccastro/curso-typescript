/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace MeuNamespace {
  export const nomeDoNamespace = 'Luiz';
  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }
  const pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);
  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Nome no outro namespace';
  }
}
