"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('PostEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when PRANK_SHOW_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('PRANK_SHOW_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.PrankShowSDK.test();
        const ent = testsdk.Post();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.PRANK_SHOW_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'post.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "content", "req": false, "short": "Content or description of the prank", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "date", "req": false, "short": "Publication date of the prank", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the prank post", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "title", "req": false, "short": "Title of the prank", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "uri", "name": "url", "req": false, "short": "URL to the full prank post", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "post", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /posts/get", "json": "{\"operationId\":\"getPrankList\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":true,\"schema\":{\"default\":1,\"example\":1,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"page\":{\"description\":\"Current page number\",\"type\":\"integer\"},\"posts\":{\"items\":{\"properties\":{\"content\":{\"description\":\"Content or description of the prank\",\"type\":\"string\"},\"date\":{\"description\":\"Publication date of the prank\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the prank post\",\"type\":\"string\"},\"title\":{\"description\":\"Title of the prank\",\"type\":\"string\"},\"url\":{\"description\":\"URL to the full prank post\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_pages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"},\"total_posts\":{\"description\":\"Total number of prank posts\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Successful response with prank post list\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid page parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid page parameter\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Page not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Page not found\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/posts/get", "segments": [{ "lit": "posts" }, { "lit": "get" }], "select": { "$action": "get", "exist": ["page"] }, "transform": { "req": "`reqdata`", "res": "`body.posts`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "post", "name__orig": "post", "Name": "Post", "name_": "post", "name-": "post", "NAME": "POST", "index$": 0 }, { "active": true, "entity": "post", "key$": "BasicPostFlow", "kind": "basic", "name": "BasicPostFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "post_ref01" } }], "index$": 0 }] }, 'Post');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let post_ref01_data = Object.values(setup.data.existing.post)[0];
        // LIST
        const post_ref01_ent = client.Post();
        const post_ref01_match = {};
        const post_ref01_list = (await post_ref01_ent.list(post_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/post/PostTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.PrankShowSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['post01', 'post02', 'post03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'PRANK_SHOW_TEST_POST_ENTID': idmap,
        'PRANK_SHOW_TEST_LIVE': 'FALSE',
        'PRANK_SHOW_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['PRANK_SHOW_TEST_POST_ENTID'];
    const live = 'TRUE' === env.PRANK_SHOW_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['PRANK_SHOW_TEST_POST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.PrankShowSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=PostEntity.test.js.map