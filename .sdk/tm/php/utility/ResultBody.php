<?php
declare(strict_types=1);

// PrankShow SDK utility: result_body

class PrankShowResultBody
{
    public static function call(PrankShowContext $ctx): ?PrankShowResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
