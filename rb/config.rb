# PrankShow SDK configuration

module PrankShowConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "PrankShow",
        "slug" => "prank-show",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://prank.show/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "post" => {},
        },
      },
      "entity" => {
        "post" => {
          "fields" => [
            {
              "name" => "content",
              "short" => "Content or description of the prank",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "date",
              "short" => "Publication date of the prank",
              "type" => "`$STRING`",
            },
            {
              "name" => "id",
              "short" => "Unique identifier for the prank post",
              "type" => "`$STRING`",
            },
            {
              "name" => "title",
              "short" => "Title of the prank",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "url",
              "short" => "URL to the full prank post",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "post",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/posts/get",
                  "segments" => [
                    {
                      "lit" => "posts",
                    },
                    {
                      "lit" => "get",
                    },
                  ],
                  "select" => {
                    "$action" => "get",
                    "exist" => [
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.posts`",
                  },
                  "parts" => [
                    "posts",
                    "get",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    PrankShowFeatures.make_feature(name)
  end
end
