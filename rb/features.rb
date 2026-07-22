# PrankShow SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module PrankShowFeatures
  def self.make_feature(name)
    case name
    when "base"
      PrankShowBaseFeature.new
    when "test"
      PrankShowTestFeature.new
    else
      PrankShowBaseFeature.new
    end
  end
end
