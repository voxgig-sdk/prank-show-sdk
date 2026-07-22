<?php
declare(strict_types=1);

// PrankShow SDK utility: result_headers

class PrankShowResultHeaders
{
    public static function call(PrankShowContext $ctx): ?PrankShowResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
