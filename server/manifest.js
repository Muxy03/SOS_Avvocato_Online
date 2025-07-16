const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Cq6Jqr3N.js",app:"_app/immutable/entry/app.BqgzY9eb.js",imports:["_app/immutable/entry/start.Cq6Jqr3N.js","_app/immutable/chunks/C1_reZ7Y.js","_app/immutable/chunks/DbM7_-HL.js","_app/immutable/chunks/Dkbj-q8P.js","_app/immutable/chunks/cOdPvYl_.js","_app/immutable/chunks/7qoDhBEs.js","_app/immutable/entry/app.BqgzY9eb.js","_app/immutable/chunks/Dkbj-q8P.js","_app/immutable/chunks/cOdPvYl_.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/DbM7_-HL.js","_app/immutable/chunks/7qoDhBEs.js","_app/immutable/chunks/BDGSsmot.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BE370ZUV.js')),
			__memo(() => import('./chunks/1-DOUeDsKO.js')),
			__memo(() => import('./chunks/2-BtMSDTkK.js')),
			__memo(() => import('./chunks/3-Bq_NtTZK.js')),
			__memo(() => import('./chunks/4-CZ--wGAS.js'))
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
				id: "/about/[id]",
				pattern: /^\/about\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
