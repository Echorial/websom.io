const { Server } = require("../websom/native/javascript/websom");

let server = new Server({
	dev: true,
	config: "./config",
	dist: "./dist",
	assets: "./website",
	buckets: "./buckets",
	theme: "material",
	headless: false
});

server.startDevelopmentServer().then(() => {
	
});