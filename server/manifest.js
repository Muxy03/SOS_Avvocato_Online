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
		client: {start:"_app/immutable/entry/start.DaB9WANa.js",app:"_app/immutable/entry/app.Nm-DTBgP.js",imports:["_app/immutable/entry/start.DaB9WANa.js","_app/immutable/chunks/Uv1fuDKi.js","_app/immutable/chunks/CWvKEnHi.js","_app/immutable/chunks/BY4OqWhN.js","_app/immutable/chunks/DcIMCrAR.js","_app/immutable/entry/app.Nm-DTBgP.js","_app/immutable/chunks/BY4OqWhN.js","_app/immutable/chunks/CWvKEnHi.js","_app/immutable/chunks/DcIMCrAR.js","_app/immutable/chunks/NZTpNUN0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-vwZCd7j1.js')),
			__memo(() => import('./chunks/1-CIyuqLHg.js'))
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
