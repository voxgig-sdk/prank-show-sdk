# frozen_string_literal: true

# Typed models for the PrankShow SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
#
# @!attribute [rw] content
#   @return [String, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
Post = Struct.new(
  :content,
  :date,
  :id,
  :title,
  :url,
  keyword_init: true
)

# Request payload for Post#list.
#
# @!attribute [rw] page
#   @return [Integer]
PostListMatch = Struct.new(
  :page,
  keyword_init: true
)

