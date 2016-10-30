// @flow

/* eslint-disable no-console */

// console.log('Hello world')
// const Color = require('color');
// const redHex = Color({r: 255, g: 0, b: 0}).hexString();
// console.log(redHex)
// const str = 'ES6';
// console.log(`Hello ${str}`);

// const Dog = require('./dog');
import Dog from '../shared/dog';

const toby = new Dog('Toby');

console.log(toby.bark());
