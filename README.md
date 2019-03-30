# password-generation

![img](https://img.shields.io/github/license/icepy/password-generation.svg) ![img](https://img.shields.io/github/last-commit/icepy/password-generation/master.svg)

Password generation and complexity checking without headache

## Usage

```bash
$ yarn add password-generation --save
```

### Generate password

```js

import generation from "password-generation";

generate(); // Generate password with default options ({specials: 1, nums: 2, uppers: 2, lowers: 3})
generate(10); // Generate password with length 10 characters
generate([8, 12]); // Generate password with length 8 to 12 characters
generate(10, { specials: 3 }); // Generate password with 3 special characters and 10 characters long
generate([8, 12], { specials: 3, nums: 2, uppers: 3, lowers: 2 }); // Full example
```

Example:

```js
const generate = require('./lib/index').default;

const a = generate();

console.log(a);

const b = generate(4);

console.log('长度是4的默认生成密码', b);

const c = generate(10, {
  specials: 0
});

console.log('长度是10并且无特殊字符', c);

const d = generate(10, {
  nums: 0,
});

console.log('长度是10并且无数字', d);

const e = generate(10, {
  uppers: 0
});

console.log('长度是10并且无大写字母', e);


const f = generate(10, {
  lowers: 0
});

console.log('长度是10并且无小写字母', f);

const g = generate(10, {
  uppers: 0,
  lowers: 0
});

console.log('长度是10并且无大小写字母', g);

const h = generate(10, {
  uppers: 0,
  lowers: 0,
  specials: 0
});

console.log('长度是10并且无大小写字母和特殊字符', h);
```

```bash
$ node test/test.js
```
