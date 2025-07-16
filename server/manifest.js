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
		client: {start:"_app/immutable/entry/start.C8RSx3BO.js",app:"_app/immutable/entry/app.CkGmuuht.js",imports:["_app/immutable/entry/start.C8RSx3BO.js","_app/immutable/chunks/BajPXQzm.js","_app/immutable/chunks/DRY0BXC3.js","_app/immutable/chunks/D7Q30rfQ.js","_app/immutable/chunks/Cvo7YCmY.js","_app/immutable/chunks/CvUM0VS7.js","_app/immutable/entry/app.CkGmuuht.js","_app/immutable/chunks/D7Q30rfQ.js","_app/immutable/chunks/Cvo7YCmY.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/DRY0BXC3.js","_app/immutable/chunks/CvUM0VS7.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-nOc8ERVA.js')),
			__memo(() => import('./chunks/1-qGYMns2N.js')),
			__memo(() => import('./chunks/2-B4moYtxW.js')),
			__memo(() => import('./chunks/3-h-c8n7w8.js'))
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
