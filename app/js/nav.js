require(["config"],function(){
	require(["jquery","template","url","cookie"],function($,template,url){
			var name;
			
			//判断是否为登录状态
			var flag = $.cookie('islogin');
			if(flag=="true")
			$("#exit").css('display','block');
			else
			$("#exit").css('display','none');
			
			//退出按钮点击事件
			$("#exit").on("click",function(){
				$.cookie('islogin','false',{path:'/'});
				$("#exit").css('display','none');
				str = $.cookie('user')+"&cart="+$.cookie('cart');
				//console.log(str);
				$.ajax({
					type:"post",
					url:url+"/php/exit.php",
					async:true,
					data:str,
					success:function (data){
						if(data=="1")
						{
							$.cookie('cart',"null",{path:'/'});
							$.cookie('user',"null",{expires:-1});
							alert("已退出登录");
							window.location.href="/index.html";
							}
					}
				});
			});
			
			//用户中心点击
			$("#clicklogin").on("click",function(){
				if(flag=="true")
				window.location.href = "/html/user/usercenter.html";
				else
				window.location.href = "/html/login.html";
			});
			
			//搜索按钮点击
			$("#search").on("click",function(){
				$(".keyword").css("display","inline-block");
				$(".keyword").on("blur",function(){
					$(".keyword").css("display","none");
				})
			});
			
			//头部菜单点击
			$(".header_bottom").on("click","a",function(){
			//获取当前点击子菜单的id  用id在数据库中获取图片和子菜单具体信息
			//使用ajax局部刷新菜单
				var id = $(this).attr('id');
				name = id;
				console.log(name)
				$(this).parent().addClass("ac").siblings().removeClass("ac");
				$.ajax({
					type:"POST",
					url:url+"/php/menu.php",
					success:function(data){	
						render(data);//页面插入渲染
						secondMenu(name);//二级菜单点击事件
					},
					data:{id:name},
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
			}
			
			//二级菜单点击
			function secondMenu(name){
				$(".level").on("click","span",function(){
					var href = "/html/comlisting/jewl/list1.html?table="+name+"&type="+$(this).html();
					window.location.href = href;
					console.log(href);
				})
			}
		
	});
})
