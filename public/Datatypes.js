// Numbers
typeof 37 === 'number'; typeof 3.14 === 'number'; typeof(42) === 'number';
typeof Math.LN2 === 'number'; typeof Infinity === 'number'; typeof NaN === 'number';
typeof Number('1') === 'number'; typeof Number('shoe') === 'number';
typeof 42n === 'bigint';

// Strings
typeof '' === 'string'; typeof 'bla' === 'string'; typeof `template literal` === 'string';
typeof '1' === 'string'; // note that a number within a string is still typeof string
typeof (typeof 1) === 'string'; // typeof always returns a string
typeof String(1) === 'string'; // String converts anything into a string, safer than toString

// Booleans
typeof true === 'boolean';
typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === 'symbol'; typeof Symbol('foo') === 'symbol'; typeof Symbol.iterator === 'symbol';

// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

// Objects
typeof {a: 1} === 'object'; typeof null === 'object';
// use Array.isArray or Object.prototype.toString.call to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object'; typeof new Date() === 'object'; typeof /regex/ === 'object'; 

// Functions
typeof function() {} === 'function'; typeof class C {} === 'function'; typeof Math.sin === 'function';

// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object';
typeof new Number(1) === 'object';
typeof new String('abc') === 'object';

