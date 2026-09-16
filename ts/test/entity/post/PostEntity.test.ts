

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PrankShowSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PostEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when PRANK_SHOW_TEST_LIVE=TRUE.
  afterEach(liveDelay('PRANK_SHOW_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PrankShowSDK.test()
    const ent = testsdk.Post()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.PRANK_SHOW_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'post.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"content","req":false,"short":"Content or description of the prank","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"date","req":false,"short":"Publication date of the prank","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the prank post","type":"`$STRING`","index$":2},{"active":true,"name":"title","req":false,"short":"Title of the prank","type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"url","req":false,"short":"URL to the full prank post","type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"post","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /posts/get","json":"{\"operationId\":\"getPrankList\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":true,\"schema\":{\"default\":1,\"example\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"posts\":{\"items\":{\"properties\":{\"content\":{\"description\":\"Content or description of the prank\",\"type\":\"string\"},\"date\":{\"description\":\"Publication date of the prank\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the prank post\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the prank\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the full prank post\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_pages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"},\"total_posts\":{\"description\":\"Total number of prank posts\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with prank post list\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid page parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid page parameter\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Page not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Page not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/posts/get","segments":[{"lit":"posts"},{"lit":"get"}],"select":{"$action":"get","exist":["page"]},"transform":{"req":"`reqdata`","res":"`body.posts`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"post","name__orig":"post","Name":"Post","name_":"post","name-":"post","NAME":"POST","index$":0}, {"active":true,"entity":"post","key$":"BasicPostFlow","kind":"basic","name":"BasicPostFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"post_ref01"}}],"index$":0}]}, 'Post')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let post_ref01_data = Object.values(setup.data.existing.post)[0] as any

    // LIST
    const post_ref01_ent = client.Post()
    const post_ref01_match: any = {}

    const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/post/PostTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PrankShowSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['post01','post02','post03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'PRANK_SHOW_TEST_POST_ENTID': idmap,
    'PRANK_SHOW_TEST_LIVE': 'FALSE',
    'PRANK_SHOW_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['PRANK_SHOW_TEST_POST_ENTID']

  const live = 'TRUE' === env.PRANK_SHOW_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['PRANK_SHOW_TEST_POST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PrankShowSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.PRANK_SHOW_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
