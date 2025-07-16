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
		client: {start:"_app/immutable/entry/start.BS5xYUbo.js",app:"_app/immutable/entry/app.CnHxFo-H.js",imports:["_app/immutable/entry/start.BS5xYUbo.js","_app/immutable/chunks/BJjOKRoR.js","_app/immutable/chunks/CNG3oRGq.js","_app/immutable/chunks/D8NVwxKO.js","_app/immutable/chunks/0FQpgSq5.js","_app/immutable/entry/app.CnHxFo-H.js","_app/immutable/chunks/D8NVwxKO.js","_app/immutable/chunks/CNG3oRGq.js","_app/immutable/chunks/0FQpgSq5.js","_app/immutable/chunks/NZTpNUN0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BWxuvsUo.js')),
			__memo(() => import('./chunks/1-C3C5pAS3.js')),
			__memo(() => import('./chunks/2-CEGutC8k.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
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
