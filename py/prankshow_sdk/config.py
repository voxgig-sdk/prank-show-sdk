# PrankShow SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "PrankShow",
            "slug": "prank-show",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://prank.show/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "post": {},
            },
        },
        "entity": {
      "post": {
        "fields": [
          {
            "name": "content",
            "short": "Content or description of the prank",
            "type": "`$STRING`",
          },
          {
            "name": "date",
            "short": "Publication date of the prank",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the prank post",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "short": "Title of the prank",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "URL to the full prank post",
            "type": "`$STRING`",
          },
        ],
        "name": "post",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/posts/get",
                "parts": [
                  "posts",
                  "get",
                ],
                "select": {
                  "$action": "get",
                  "exist": [
                    "page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.posts`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
