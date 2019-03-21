export const specials = "?:;\'$*\=+,!.`~\"%^/#@|&";
export const charsLowerCase = "abcdefghijklmnopqrstuvwxyz";
export const charsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const charsNumber = "1234567890";

 /**
 * Shuffle array values using Fisher-Yates algorithm
 *
 * @param {Array} array Source array
 *
 * @returns {Array} Shuffled array
 */

export const shuffle = (array: any[]) => {
  let i = array.length;

  while (i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export const upperChar = () => {
  return charFrom(charsUpperCase);
}

export const lowerChar = () => {
  return charFrom(charsLowerCase);
}

export const anyChar = () => {
  return charFrom(`${charsLowerCase}${charsUpperCase}`);
}

export const special = () => {
  return charFrom(specials);
}

export const charFrom = (chars: string): string => {
  return chars.charAt(random(chars.length - 1));
}

export const random = (max: number, min = 0): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}