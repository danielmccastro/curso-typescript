// a funcao ou metodo nunca retorna nada. ex: um loop infinito ou erros

function criarErro(): never {
  throw new Error('Erro qualquer');
}

criarErro();
