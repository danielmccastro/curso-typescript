// encadeamento opcional
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento);
console.log(documento.data?.toDateString());

// operador de coalescencia nula - checa se o valor que esta recebendo no lado esquerdo do operador eh um nao valor (null ou undefiend)
type Documento2 = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento2: Documento2 = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento2);
console.log(documento2.data?.toDateString() ?? 'Ixi, nao existe data...');
console.log(undefined ?? 'Ixi, nao existe data...');
console.log(null ?? 'Ixi, nao existe data...');
console.log(false ?? 'Ixi, nao existe data...');
console.log(0 ?? 'Ixi, nao existe data...');
console.log('' ?? 'Ixi, nao existe data...');
