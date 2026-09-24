// Typed models for the PrankShow SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Post {
}

export interface PostListMatch {
  page: number

  // Selects a custom action instead of the plain list:
  //   'get'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

