// "array" com tipos especificos e tamanho fixo

const dadosCliente1: [number, string] = [1, 'Luiz'];
console.log(dadosCliente1);
dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';
console.log(dadosCliente1);

const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
console.log(dadosCliente2);

const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
console.log(dadosCliente3);

const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];
console.log(dadosCliente4);

/* usar readonly para a tupla ou array ser imutavel para evitar que sejam utilizados os metodos pop e push
ex array
const array1: readonly string[] = ['Luiz', 'Otavio']
const array2: ReadonlyArray<string> = ['Luiz, 'Otavio]
*/
