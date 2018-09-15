define(function(){
	//console.log($);
	function Test(){};
	Test.prototype.init = function(){
	console.log("hhhhh");
	}
	
	return new Test();
})