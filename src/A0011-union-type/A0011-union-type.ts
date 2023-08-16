// uma variavel, um parametro ou um retorno de funcao pode ter mais de um tipo |
// string | number | boolean

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

function addOrConcat(a: number | string, b: number | string) {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
