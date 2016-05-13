require(process.env.UPPERCASE_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'DUI_SHOWCASE',
		title : 'DUI SHOWCASE',
		isDevMode : true,
		webServerPort : 8514
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
