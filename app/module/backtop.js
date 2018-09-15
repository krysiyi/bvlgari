define(function(){
	function BackTop(){};
	BackTop.prototype.init = function(){
		$(document.body).append($('<p id="back-top"><a href="#top"></a></p>'));
		this.display();
	};

	BackTop.prototype.display = function(){
		var flag = false;
		$(window).scroll(function(){
			if($(document).scrollTop()>152){
				if(!flag)
				{
				flag=true;
				$("#back-top").fadeIn(500,function(){flag=false;});}
			}else{
				if(!flag){
				flag=true;
				$("#back-top").fadeOut(500,function(){flag=false;});
				}
			}
		});
		$('#back-top').on("click",function(){
			flag=true;
			$('body,html').animate({scrollTop:0},800,function(){
				$("#back-top").fadeOut(500,function(){flag=false;});
			})
		})
	}
	return new BackTop();
})