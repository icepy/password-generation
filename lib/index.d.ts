export interface IDefaultsConfig {
    length: number[];
    specials: number;
    nums: number;
    uppers: number;
    lowers: number;
}
export declare const rank: (password: string) => 1 | 0 | 2 | 3 | 5 | 4;
export default function generate(length: number | number[], options?: IDefaultsConfig): string;
