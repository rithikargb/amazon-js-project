/*
automated testing
testing framework : ext library that helps write tests easier
    create test suite/ create tests/ display results
*/

import {formatCurrency} from '../../scripts/utils/money';

console.log('test suite: formatCurrency'); 

console.log('converts cents into $'); //group related test cases together

if (formatCurrency(2095) === '20.95') console.log('passed'); //basic test case
else console.log('failed');

console.log('rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') console.log('passed'); //edge
else console.log('failed');

console.log('works with 0');

if (formatCurrency(0) === '0.00') console.log('passed'); //edge
else console.log('failed');
