<?php
declare(strict_types=1);

// PrankShow SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

PrankShowUtility::setRegistrar(function (PrankShowUtility $u): void {
    $u->clean = [PrankShowClean::class, 'call'];
    $u->done = [PrankShowDone::class, 'call'];
    $u->make_error = [PrankShowMakeError::class, 'call'];
    $u->feature_add = [PrankShowFeatureAdd::class, 'call'];
    $u->feature_hook = [PrankShowFeatureHook::class, 'call'];
    $u->feature_init = [PrankShowFeatureInit::class, 'call'];
    $u->fetcher = [PrankShowFetcher::class, 'call'];
    $u->make_fetch_def = [PrankShowMakeFetchDef::class, 'call'];
    $u->make_context = [PrankShowMakeContext::class, 'call'];
    $u->make_options = [PrankShowMakeOptions::class, 'call'];
    $u->make_request = [PrankShowMakeRequest::class, 'call'];
    $u->make_response = [PrankShowMakeResponse::class, 'call'];
    $u->make_result = [PrankShowMakeResult::class, 'call'];
    $u->make_point = [PrankShowMakePoint::class, 'call'];
    $u->make_spec = [PrankShowMakeSpec::class, 'call'];
    $u->make_url = [PrankShowMakeUrl::class, 'call'];
    $u->param = [PrankShowParam::class, 'call'];
    $u->prepare_auth = [PrankShowPrepareAuth::class, 'call'];
    $u->prepare_body = [PrankShowPrepareBody::class, 'call'];
    $u->prepare_headers = [PrankShowPrepareHeaders::class, 'call'];
    $u->prepare_method = [PrankShowPrepareMethod::class, 'call'];
    $u->prepare_params = [PrankShowPrepareParams::class, 'call'];
    $u->prepare_path = [PrankShowPreparePath::class, 'call'];
    $u->prepare_query = [PrankShowPrepareQuery::class, 'call'];
    $u->result_basic = [PrankShowResultBasic::class, 'call'];
    $u->result_body = [PrankShowResultBody::class, 'call'];
    $u->result_headers = [PrankShowResultHeaders::class, 'call'];
    $u->transform_request = [PrankShowTransformRequest::class, 'call'];
    $u->transform_response = [PrankShowTransformResponse::class, 'call'];
});
