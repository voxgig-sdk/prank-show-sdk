"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrankShowError = void 0;
class PrankShowError extends Error {
    isPrankShowError = true;
    sdk = 'PrankShow';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.PrankShowError = PrankShowError;
//# sourceMappingURL=PrankShowError.js.map