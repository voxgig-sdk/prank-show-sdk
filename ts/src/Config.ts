
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
      }
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
          "name": "url",
          "short": "URL to the full prank post",
          "type": "`$STRING`"
        }
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
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/posts/get",
              "parts": [
                "posts",
                "get"
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
              }
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
  config
}

