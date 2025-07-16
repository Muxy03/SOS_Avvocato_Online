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
		client: {start:"_app/immutable/entry/start.RRxxya8i.js",app:"_app/immutable/entry/app.DFWc7NfV.js",imports:["_app/immutable/entry/start.RRxxya8i.js","_app/immutable/chunks/BfPHPvIE.js","_app/immutable/chunks/CNG3oRGq.js","_app/immutable/chunks/D8NVwxKO.js","_app/immutable/chunks/0FQpgSq5.js","_app/immutable/entry/app.DFWc7NfV.js","_app/immutable/chunks/D8NVwxKO.js","_app/immutable/chunks/CNG3oRGq.js","_app/immutable/chunks/0FQpgSq5.js","_app/immutable/chunks/NZTpNUN0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-BNknh1V7.js')),
			__memo(() => import('./chunks/1-DuCUwjw3.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
