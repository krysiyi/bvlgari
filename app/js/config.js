require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"test":"module/test",
		"header":"module/header",
		"footer":"module/footer",
		"backtop":"module/backtop",
		"md5":"libs/md5",
		"template": "libs/template-web",
		"url":"module/url",
		"cookie":"libs/jquery.cookie",
		"magnifier":"module/magnifier",
		"cartcookie":"module/cartcookie"
	},
	shim:{
		header:{
			deps:["jquery","cookie"]
		},
		footer:{
			deps:["jquery"]
		},
		backtop:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		},
		magnifier:{
			deps:["jquery"]
		},
		cartcookie:{
			deps:["cookie","jquery"]
		}
	}
})