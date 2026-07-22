-- PrankShow SDK error

local PrankShowError = {}
PrankShowError.__index = PrankShowError


function PrankShowError.new(code, msg, ctx)
  local self = setmetatable({}, PrankShowError)
  self.is_sdk_error = true
  self.sdk = "PrankShow"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function PrankShowError:error()
  return self.msg
end


function PrankShowError:__tostring()
  return self.msg
end


return PrankShowError
