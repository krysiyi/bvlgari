require(["config"],function(){
	require(["jquery","header","footer"],function($,header,footer){
		header.init();
		footer.init();
	});
})