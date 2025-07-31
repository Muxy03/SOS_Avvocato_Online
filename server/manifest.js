const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon-180x180.png","favicon.ico","logo.svg","manifest.json","maskable-icon-512x512.png","pwa-192x192.png","pwa-512x512.png","pwa-64x64.png","service-worker.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.DKKmeGgX.js",app:"_app/immutable/entry/app.DLW1areY.js",imports:["_app/immutable/entry/start.DKKmeGgX.js","_app/immutable/chunks/CgQPfSTX.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.DLW1areY.js","_app/immutable/chunks/813Ht5r7.js","_app/immutable/chunks/CUznojAc.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DbbzO-B6.js","_app/immutable/chunks/DadSIK-R.js","_app/immutable/chunks/aivD5g2S.js","_app/immutable/chunks/BIFpNwZY.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-JBFs0KwG.js')),
			__memo(() => import('./chunks/1-B8oMpSDc.js')),
			__memo(() => import('./chunks/2-BRMNNzsC.js')),
			__memo(() => import('./chunks/3-w0NQ-B2q.js')),
			__memo(() => import('./chunks/4-Baev7RPM.js')),
			__memo(() => import('./chunks/5-evFV9KGF.js')),
			__memo(() => import('./chunks/6-CVA_8uAL.js')),
			__memo(() => import('./chunks/7-DKWIemU6.js')),
			__memo(() => import('./chunks/8-DHJQgwhG.js')),
			__memo(() => import('./chunks/9-CUqxqH7F.js')),
			__memo(() => import('./chunks/10-CV71YH-b.js')),
			__memo(() => import('./chunks/11-B-X3rrL8.js')),
			__memo(() => import('./chunks/12-CqBhDLj3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/about/[id]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/emails",
				pattern: /^\/api\/emails\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BtAPRY9W.js'))
			},
			{
				id: "/api/session",
				pattern: /^\/api\/session\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BMQqWKYT.js'))
			},
			{
				id: "/(app)/call",
				pattern: /^\/call\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/consultation/[id]",
				pattern: /^\/consultation\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/write",
				pattern: /^\/write\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
