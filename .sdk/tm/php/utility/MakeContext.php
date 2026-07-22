<?php
declare(strict_types=1);

// PrankShow SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class PrankShowMakeContext
{
    public static function call(array $ctxmap, ?PrankShowContext $basectx): PrankShowContext
    {
        return new PrankShowContext($ctxmap, $basectx);
    }
}
