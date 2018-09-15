define(function(){
	function Footer(){};
	Footer.prototype.init = function(){
		$("footer").load("/html/footer.html");
	}
	return new Footer();
})