export declare const specials = "?:;'$*=+,!.`~\"%^/#@|&";
export declare const charsLowerCase = "abcdefghijklmnopqrstuvwxyz";
export declare const charsUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export declare const charsNumber = "1234567890";
/**
* Shuffle array values using Fisher-Yates algorithm
*
* @param {Array} array Source array
*
* @returns {Array} Shuffled array
*/
export declare const shuffle: (array: any[]) => any[];
export declare const upperChar: () => string;
export declare const lowerChar: () => string;
export declare const anyChar: () => string;
export declare const special: () => string;
export declare const charFrom: (chars: string) => string;
export declare const random: (max: number, min?: number) => number;
