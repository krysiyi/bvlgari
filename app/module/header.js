define(/*["/libs/template-web.js","/module/url.js"],*/function(/*template,url*/){
	function Header(){};
	Header.prototype.init = function(){
		$("header").load("/html/header.html",function(){
			/*var name;
			var flag = $.cookie('islogin');
			if(flag=="true")
			$("#exit").css('display','block');
			else
			$("#exit").css('display','none');
			
			$("#exit").on("click",function(){
				$.cookie('islogin','false');
				$("#exit").css('display','none');
			});
			$("#search").on("click",function(){
				
			});
			$(".header_bottom").on("click","a",function(){
			//获取当前点击子菜单的id  用id在数据库中获取图片和子菜单具体信息
			//使用ajax局部刷新菜单
				var id = $(this).attr('id');
				name = id;
				$(this).parent().addClass("ac").siblings().removeClass("ac");
				$.ajax({
					type:"POST",
					url:url+"/php/menu.php",
					success:function(data){	
						render(data);//页面插入渲染
					},
					async:true,
					dataType:"json"
				})	
			});
		
			function render(data){
				var html = template("navlist",{data: data});
				$("."+name).html(html);
				$(".figure").parent().addClass("pluged");
				$("header").on("mouseleave",function(){
					$("."+name).parent().removeClass("ac");
				});
			}*/
			
			
			
			
			
			
			
		})
	}
	return new Header();
})