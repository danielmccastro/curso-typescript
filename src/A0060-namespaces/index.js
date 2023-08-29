/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var MeuNamespace;
(function (MeuNamespace) {
  MeuNamespace.nomeDoNamespace = 'Luiz';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  var pessoa = new PessoaDoNamespace('Luiz');
  console.log(pessoa);
  var OutroNamespace;
  (function (OutroNamespace) {
    OutroNamespace.nomeDoNamespace = 'Nome no outro namespace';
  })(
    (OutroNamespace =
      MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {})),
  );
})(MeuNamespace || (MeuNamespace = {}));
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
// entrar dentro do diretorio do arquivo / comando para compilar -> npx tsc index.ts --outfile index.js
