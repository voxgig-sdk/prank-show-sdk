
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'PrankShow',
        slug: "prank-show",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://prank.show/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      post: {
      },

    }
  }


  entity = {
    "post": {
      "fields": [
        {
          "name": "content",
          "short": "Content or description of the prank",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "date",
          "short": "Publication date of the prank",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the prank post",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "short": "Title of the prank",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "url",
          "short": "URL to the full prank post",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/posts/get",
              "segments": [
                {
                  "lit": "posts"
                },
                {
                  "lit": "get"
                }
              ],
              "select": {
                "$action": "get",
                "exist": [
                  "page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.posts`"
              },
              "parts": [
                "posts",
                "get"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

