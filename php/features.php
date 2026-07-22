<?php
declare(strict_types=1);

// PrankShow SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class PrankShowFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new PrankShowBaseFeature();
            case "test":
                return new PrankShowTestFeature();
            default:
                return new PrankShowBaseFeature();
        }
    }
}
