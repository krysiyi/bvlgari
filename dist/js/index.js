//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","backtop","template","cookie"],function($,header,footer,backtop,template){
		header.init();
		footer.init();
		backtop.init();
		/*var data=[{"title":"珠宝","list":["戒指","戒指","戒指"],"img":"images/indexImg/menu.jpg"},{"title":"系列","list":["戒指","戒指","戒指"],"img":"images/indexImg/menu.jpg"}]
		var html = template("kry",{data:data});
			$("#test").html(html);
			console.log(html);
			console.log(data);*/
	});
})
