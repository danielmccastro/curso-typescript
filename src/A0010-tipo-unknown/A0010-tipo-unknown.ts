let x: any;
x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

console.log(x + y);

let z: unknown;
z = '10';
const w = 800;
console.log(z + w); // ele sugere um checagem, exibe um aviso
if (typeof z === 'number') console.log(z + w); // nao executa o console.log
