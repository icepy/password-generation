const generate = require('../lib/index').default;

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

const j = generate(10, {
  uppers: 0,
  lowers: 0,
  nums: 0
});

console.log('长度是10并且无大小写字母和数字', j);
// const i = generate(10, {
//   uppers: 0,
//   specials: 0,
//   nums: 0
// });

// console.log('长度是10的全小写字母',i);

// const j = generate(10, {
//   lowers: 0,
//   specials: 0,
//   nums: 0
// });

// console.log('长度是10的全大写字母',j);

// const k = generate(10, {
//   lowers: 0,
//   uppers: 0,
//   nums: 0
// });

// console.log('长度是10的全特殊字符',k);
