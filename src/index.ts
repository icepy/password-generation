import { charsLowerCase, charsUpperCase, random, special, shuffle, upperChar, lowerChar, anyChar } from "./utils";

export interface IDefaultsConfig {
  length: number[];
  specials: number;
  nums: number;
  uppers: number;
  lowers: number;
}

const defaultsConfig = {
  length: [7, 10],
  specials: 1,
  nums: 2,
  uppers: 2,
  lowers: 3
};

const splitChars = (str: string) => {
  let chars = str.split('');
  let total = chars.length;
  let uppers = 0;
  let lowers = 0;
  let nums = 0;
  let specials = 0;
  let sym;

  /* jshint -W084 */
  while(sym = chars.pop()) {
  /* jshint +W084 */
    if (charsLowerCase.indexOf(sym) > -1) { lowers++; }
    else if (charsUpperCase.indexOf(sym) > -1) { uppers++; }
    else if (!isNaN(Number(sym))) { nums++; }
    else specials++;
  }

  return {
    uppers,
    lowers,
    nums,
    specials,
    total
  };
}

const bonusScore = (chars: any) => {
  let bonus = 0;
  if (chars.lowers   > 0) bonus += 2;
  if (chars.nums     > 0) bonus += 2;
  if (chars.uppers   > 0) bonus += 3;
  if (chars.specials > 0) bonus += 5;
  bonus += (chars.specials > 3 ? 3 : chars.specials);
  bonus += (chars.nums     > 2 ? 2 : chars.nums);
  bonus += (chars.uppers   > 2 ? 2 : chars.uppers);
  return bonus;
}

const score = (password: string) => {
  const chars = splitChars(password);
  const bonus = bonusScore(chars);
  return chars.total + bonus;
}

export const rank = (password: string) => {
  const _score = score(password);
  if (_score <= 11) return 0;
  else if (_score < 15) return 1;
  else if (_score < 19) return 2;
  else if (_score < 23) return 3;
  else if (_score < 28) return 4;
  else return 5;
}

const getOptionNum = (target: number | undefined, defaults: number | undefined, rest: any) => {
  if (typeof(defaults) == 'undefined') defaults = 0;
  let val = (typeof(target) == 'undefined') ? defaults : target;

  if (val > rest) val = rest;

  return val;
}

const getRest = (rest: any, quant: any) => {
  const val = rest - quant;
  return (val < 0) ? 0 : val;
}

export default function generate(length: number | number[], options?: IDefaultsConfig){
  let tmp = [];
  let nums;
  let specials;
  let uppers;
  let lowers;

  // Default values for arguments
  if (typeof(length) == 'undefined') length = defaultsConfig.length;
  if (length instanceof Array) length = random(length[1], length[0]);

  const op = options || {
    specials,
    nums,
    uppers,
    lowers
  };

  // Assign quantity of different types
  specials = getOptionNum(op.specials, defaultsConfig.specials, length);
  length = getRest(length, specials);

  nums = getOptionNum(op.nums, defaultsConfig.nums, length);
  length = getRest(length, nums);

  uppers = getOptionNum(op.uppers, defaultsConfig.uppers, length);
  length = getRest(length, uppers);

  lowers = getOptionNum(op.lowers, defaultsConfig.lowers, length);
  length = getRest(length, lowers);

  let key = "";
  if (uppers !== 0) {
    key = "uppers";
  }

  if (lowers !== 0) {
    key = "lowers";
  }

  if (specials !== 0) {
    key = "specials";
  }

  // Make an array of symbols
  while(specials--) tmp.push(special());
  while(nums--)     tmp.push(random(9).toString());
  while(uppers--)   tmp.push(upperChar());
  while(lowers--)   tmp.push(lowerChar());
  while(length--)   tmp.push(anyChar(key));

  // Shuffle the array and make a string
  return shuffle(tmp).join('');
}