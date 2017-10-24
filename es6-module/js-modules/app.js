import { union } from 'ramda';
import soma, { sub } from './utils';

console.log(union([1, 1, 1, 2, 3, 4], [1, 2, 3, 4, 6, 7, 8]));
console.log(soma(5, 5));
console.log(sub(5, 10));