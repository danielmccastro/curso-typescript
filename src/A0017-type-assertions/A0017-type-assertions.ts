// condicional (RECOMENDADO)
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// non-null assertion (!) (NAO RECOMENDADO)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// type assertion (RECOMENDADO)
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement (RECOMENDADO)
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// type assertion com subtipo - situacao improvavel (NAO RECOMENDADO)
const body4 = document.querySelector('body') as unknown as number;
console.log(body4);
