# PrankShow SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module PrankShowFeatures
  def self.make_feature(name)
    case name
    when "base"
      PrankShowBaseFeature.new
    when "ratelimit"
      PrankShowRatelimitFeature.new
    when "retry"
      PrankShowRetryFeature.new
    when "test"
      PrankShowTestFeature.new
    when "timeout"
      PrankShowTimeoutFeature.new
    else
      PrankShowBaseFeature.new
    end
  end
end
