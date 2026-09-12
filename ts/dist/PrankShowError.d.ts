import { Context } from './Context';
declare class PrankShowError extends Error {
    isPrankShowError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { PrankShowError };
