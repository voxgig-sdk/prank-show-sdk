# PrankShow SDK exists test

require "minitest/autorun"
require_relative "../PrankShow_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = PrankShowSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
