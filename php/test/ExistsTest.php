<?php
declare(strict_types=1);

// PrankShow SDK exists test

require_once __DIR__ . '/../prankshow_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = PrankShowSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
