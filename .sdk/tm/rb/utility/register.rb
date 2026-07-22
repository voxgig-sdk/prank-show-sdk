# PrankShow SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

PrankShowUtility.registrar = ->(u) {
  u.clean = PrankShowUtilities::Clean
  u.done = PrankShowUtilities::Done
  u.make_error = PrankShowUtilities::MakeError
  u.feature_add = PrankShowUtilities::FeatureAdd
  u.feature_hook = PrankShowUtilities::FeatureHook
  u.feature_init = PrankShowUtilities::FeatureInit
  u.fetcher = PrankShowUtilities::Fetcher
  u.make_fetch_def = PrankShowUtilities::MakeFetchDef
  u.make_context = PrankShowUtilities::MakeContext
  u.make_options = PrankShowUtilities::MakeOptions
  u.make_request = PrankShowUtilities::MakeRequest
  u.make_response = PrankShowUtilities::MakeResponse
  u.make_result = PrankShowUtilities::MakeResult
  u.make_point = PrankShowUtilities::MakePoint
  u.make_spec = PrankShowUtilities::MakeSpec
  u.make_url = PrankShowUtilities::MakeUrl
  u.param = PrankShowUtilities::Param
  u.prepare_auth = PrankShowUtilities::PrepareAuth
  u.prepare_body = PrankShowUtilities::PrepareBody
  u.prepare_headers = PrankShowUtilities::PrepareHeaders
  u.prepare_method = PrankShowUtilities::PrepareMethod
  u.prepare_params = PrankShowUtilities::PrepareParams
  u.prepare_path = PrankShowUtilities::PreparePath
  u.prepare_query = PrankShowUtilities::PrepareQuery
  u.result_basic = PrankShowUtilities::ResultBasic
  u.result_body = PrankShowUtilities::ResultBody
  u.result_headers = PrankShowUtilities::ResultHeaders
  u.transform_request = PrankShowUtilities::TransformRequest
  u.transform_response = PrankShowUtilities::TransformResponse
}
