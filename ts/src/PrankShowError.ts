
import { Context } from './Context'


class PrankShowError extends Error {

  isPrankShowError = true

  sdk = 'PrankShow'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  PrankShowError
}

