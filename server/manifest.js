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
		client: {start:"_app/immutable/entry/start.CsqWJL6K.js",app:"_app/immutable/entry/app.DmsC1Bak.js",imports:["_app/immutable/entry/start.CsqWJL6K.js","_app/immutable/chunks/Bu5Fj58j.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/CZLX4HTG.js","_app/immutable/entry/app.DmsC1Bak.js","_app/immutable/chunks/CB0GAoS5.js","_app/immutable/chunks/DuTLVp-_.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B4cahDDo.js","_app/immutable/chunks/BKAMBxZp.js","_app/immutable/chunks/BTZEZ-Wa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BR7Z8Oo9.js')),
			__memo(() => import('./chunks/1-YvOQYXSO.js')),
			__memo(() => import('./chunks/2-B4rNinUN.js')),
			__memo(() => import('./chunks/3-gPH6ZPyH.js')),
			__memo(() => import('./chunks/4-Baev7RPM.js')),
			__memo(() => import('./chunks/5-D-TPZCZX.js')),
			__memo(() => import('./chunks/6-C28B7GqW.js')),
			__memo(() => import('./chunks/7-DhTKR-Vf.js')),
			__memo(() => import('./chunks/8-BMDf8coc.js')),
			__memo(() => import('./chunks/9-CMiKAcqK.js')),
			__memo(() => import('./chunks/10-CMyWbGTt.js')),
			__memo(() => import('./chunks/11-B-zRLCH3.js')),
			__memo(() => import('./chunks/12-CC6pUGVQ.js'))
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
