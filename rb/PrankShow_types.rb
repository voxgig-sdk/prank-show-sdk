# frozen_string_literal: true

# Typed models for the PrankShow SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
class Post
end

# Request payload for Post#list.
#
# @!attribute [rw] page
#   @return [Integer]
PostListMatch = Struct.new(
  :page,
  keyword_init: true
)

