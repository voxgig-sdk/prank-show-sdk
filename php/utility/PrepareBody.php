<?php
declare(strict_types=1);

// PrankShow SDK utility: prepare_body

class PrankShowPrepareBody
{
    public static function call(PrankShowContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
