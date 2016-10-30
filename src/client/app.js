// This import adds functionality for things like Promises in ES6
// I should only import it if I plan on using that functionality, it's large
// import 'babel-polyfill';

import Dog from '../shared/dog';

const browserToby = new Dog('Browser Toby');

document.querySelector('.app').innerText = browserToby.bark();
