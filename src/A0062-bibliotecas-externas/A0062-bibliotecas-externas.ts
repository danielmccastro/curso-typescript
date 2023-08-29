/* exemplo de instalacao de lib
npm i validator
npm i @types/validator -D */

import validator from 'validator';
import _ from 'lodash';

console.log(validator.isEmail('luiz@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5]));
