<?php
declare(strict_types=1);

// PrankShow SDK configuration

class PrankShowConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "PrankShow",
                "slug" => "prank-show",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://prank.show/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "post" => [],
                ],
            ],
            "entity" => [
        'post' => [
          'fields' => [
            [
              'name' => 'content',
              'short' => 'Content or description of the prank',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'date',
              'short' => 'Publication date of the prank',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the prank post',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the prank',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL to the full prank post',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'post',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/posts/get',
                  'parts' => [
                    'posts',
                    'get',
                  ],
                  'select' => [
                    '$action' => 'get',
                    'exist' => [
                      'page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.posts`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return PrankShowFeatures::make_feature($name);
    }
}
