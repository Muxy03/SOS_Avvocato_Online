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
		client: {start:"_app/immutable/entry/start.CfuuxA8c.js",app:"_app/immutable/entry/app.BK9yb5qO.js",imports:["_app/immutable/entry/start.CfuuxA8c.js","_app/immutable/chunks/Bgbd2wj0.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.BK9yb5qO.js","_app/immutable/chunks/nGUMutCJ.js","_app/immutable/chunks/BeycMaZk.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CStty2jV.js","_app/immutable/chunks/CltT4Sjb.js","_app/immutable/chunks/C9kSmRma.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BBpPL2_y.js')),
			__memo(() => import('./chunks/1-9WRxdHUM.js')),
			__memo(() => import('./chunks/2-Fi2Selr4.js')),
			__memo(() => import('./chunks/3-PFow6Sg3.js')),
			__memo(() => import('./chunks/4-C8xDh9hv.js')),
			__memo(() => import('./chunks/5-Bn8OHcBC.js')),
			__memo(() => import('./chunks/6-CdTNVZvu.js')),
			__memo(() => import('./chunks/7-BufVZSss.js')),
			__memo(() => import('./chunks/8-_vUi6nn_.js')),
			__memo(() => import('./chunks/9-BBmgVYYs.js')),
			__memo(() => import('./chunks/10-D3kiE2Fi.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(app)/about/[id]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
				endpoint: __memo(() => import('./chunks/_server.ts-BBWxwE4b.js'))
			},
			{
				id: "/(app)/call",
				pattern: /^\/call\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/consultation/[id]",
				pattern: /^\/consultation\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/write",
				pattern: /^\/write\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
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
