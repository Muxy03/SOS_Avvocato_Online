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
		client: {start:"_app/immutable/entry/start.DXpgLHk1.js",app:"_app/immutable/entry/app.CToKyRgm.js",imports:["_app/immutable/entry/start.DXpgLHk1.js","_app/immutable/chunks/BqnRJcZ7.js","_app/immutable/chunks/BkzrqWM-.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DGqZX-Fr.js","_app/immutable/entry/app.CToKyRgm.js","_app/immutable/chunks/D50pdiVl.js","_app/immutable/chunks/BExVpiIy.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BkzrqWM-.js","_app/immutable/chunks/CIBJ9sE4.js","_app/immutable/chunks/CarLpTOU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BGmLKzhy.js')),
			__memo(() => import('./chunks/1-Blq-TQaI.js')),
			__memo(() => import('./chunks/2-Cw3G9JdP.js')),
			__memo(() => import('./chunks/3-DzT5bVmQ.js')),
			__memo(() => import('./chunks/4-Baev7RPM.js')),
			__memo(() => import('./chunks/5-DJ52Nd0z.js')),
			__memo(() => import('./chunks/6-B96oVf07.js')),
			__memo(() => import('./chunks/7-CfsnykmW.js')),
			__memo(() => import('./chunks/8-DjYjjd5B.js')),
			__memo(() => import('./chunks/9-BIWM1_gU.js')),
			__memo(() => import('./chunks/10-LfC0jHOm.js')),
			__memo(() => import('./chunks/11-BnxQVoZY.js')),
			__memo(() => import('./chunks/12-D5fzvjAl.js'))
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
