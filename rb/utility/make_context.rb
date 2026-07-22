# PrankShow SDK utility: make_context
require_relative '../core/context'
module PrankShowUtilities
  MakeContext = ->(ctxmap, basectx) {
    PrankShowContext.new(ctxmap, basectx)
  }
end
