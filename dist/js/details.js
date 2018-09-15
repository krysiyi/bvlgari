require(["config"],function(){
	require(["jquery","header","footer","backtop","url","template","cartcookie"],function($,header,footer,backtop,url,template,cartcookie){
		header.init();
		footer.init();
		backtop.init();
		//获取url传送的商品id值  在数据库中查找相关数据进行渲染
		var href = window.location.search,
			href = href.slice(1,href.length),
			name = href.split("&")[0].split("=")[1],
			table = href.split("&")[1].split("=")[1];
			console.log(name,table);
		
		$.ajax({
			type:"POST",
			url:url+"/php/details.php",
			async:true,
			data:{name:name,table:table},
			success:function(data){
				var html = template("productdetails",{data: data});
				$(".product_on").html(html);
				//放大镜查看商品
				var box = document.getElementById("box"),
					bigbox = document.getElementById("big_box"),
					bigimg = document.getElementById("big_img");
					
				box.onmousemove = function(e){
						e = e||window.event;
						bigbox.style.display="block";
						var left = e.clientX - box.offsetLeft - bigbox.offsetWidth/2;
						var top  = e.clientY - box.offsetTop - bigbox.offsetHeight/2;
						if(top<0||top>500||left<0||left>350) bigbox.style.display="none";
						bigbox.style.left = left+"px";
						bigbox.style.top  = top-152+"px";
						bigimg.style.left = -2*left- bigbox.offsetWidth/2+"px";
						bigimg.style.top = -2*top - bigbox.offsetHeight/2+152*2+"px";  
				}
			},
			dataType:"json"
		});
		//添加购物车按钮 提取商品编号 添加购物车
		$(".product_on").on("click","button",function(){
			var name = $(this).attr("id");
			var num = parseInt($(this).siblings("select").val());
			cartcookie.init(table,name,num);
			console.log(name,table,num)
		})
		//放大镜
		$(".edito ul li a").on("click",function(){
			$(this).parent().addClass("ac").siblings().removeClass("ac");
			var index = $(this).parent().index();
			$(".edito div p").eq(index).addClass("ac").siblings().removeClass("ac");
		})
	});
});
