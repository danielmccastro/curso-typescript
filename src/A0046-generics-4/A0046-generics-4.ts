type ObterChavesFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChavesFn = (objeto, chave) => objeto[chave];

const animal = { cor: 'Rosa', vacinas: ['Vacina 1', 'Vacina 2'], idade: 10 };

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));
