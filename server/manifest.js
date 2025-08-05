const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["LOGO.jpeg","apple-touch-icon-180x180.png","favicon.ico","manifest.json","maskable-icon-512x512.png","pwa-192x192.png","pwa-512x512.png","pwa-64x64.png","service-worker.js"]),
	mimeTypes: {".jpeg":"image/jpeg",".png":"image/png",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.CTDDOm1I.js",app:"_app/immutable/entry/app.EMBM6N6J.js",imports:["_app/immutable/entry/start.CTDDOm1I.js","_app/immutable/chunks/CMM3Q6sT.js","_app/immutable/chunks/DL7c-2PW.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DkxlJsYr.js","_app/immutable/entry/app.EMBM6N6J.js","_app/immutable/chunks/hMZFjhjB.js","_app/immutable/chunks/C3vF11sT.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DL7c-2PW.js","_app/immutable/chunks/DO9TSQkw.js","_app/immutable/chunks/WF52vTBT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DbGZ5_7R.js')),
			__memo(() => import('./chunks/1-1ZHQRePu.js')),
			__memo(() => import('./chunks/2-CjDLiWid.js')),
			__memo(() => import('./chunks/3-DaW5mKb-.js')),
			__memo(() => import('./chunks/4-Baev7RPM.js')),
			__memo(() => import('./chunks/5-Dqju9ca4.js')),
			__memo(() => import('./chunks/6-b6QcbD1j.js')),
			__memo(() => import('./chunks/7-DeUSrOvY.js')),
			__memo(() => import('./chunks/8-BgXqrbsu.js')),
			__memo(() => import('./chunks/9-B7hXCUXX.js')),
			__memo(() => import('./chunks/10-CzqqlNCt.js')),
			__memo(() => import('./chunks/11-Bten29nV.js')),
			__memo(() => import('./chunks/12-Cx_2xSgJ.js'))
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
				endpoint: __memo(() => import('./chunks/_server.ts-C766LTFD.js'))
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
