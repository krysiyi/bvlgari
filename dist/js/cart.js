require(["config"],function(){
	require(["jquery","header","footer","url","cartcookie","template","backtop","cookie"],function($,header,footer,url,cartcookie,template,backtop){
		header.init();
		footer.init();
		backtop.init();
		
		
		//获取购物车数据 渲染到购物车界面
		var price,num,all,
			cart = JSON.parse($.cookie("cart"));
			if(cart=="null"||cart==undefined||cart.length==0){
				$(".content").load("/html/user/empty.html");
			}
			else{
			$(".content").load("/html/user/mycart.html",function(){
					var html = template("cartlist",{data:cart});
					$("#mycart").html(html);
					//减少购物车商品数量  -1时
					$(".down").on("click",function(){
						var index = $(this).parent().parent().parent().index();
						price = cart[index].price;
						num = cart[index].num;
						if(num<=1) num=1;
						else
						cart[index].num = --num;
						all = price*num;
						$(this).siblings(".num").html(num);
						$(this).parent().siblings().children(".all").html('￥'+all);
						pay();
						$.cookie("cart",JSON.stringify(cart),{path:"/"});
						/*cartcookie.init(name,num);*/
					})
					//增加购物车商品数量 +1时
					$(".up").on("click",function(){
						var index = $(this).parent().parent().parent().index();
						price = cart[index].price;
						num = cart[index].num;
						cart[index].num = ++num;
						all = price*num;
						$(this).siblings(".num").html(num);
						$(this).parent().siblings().children(".all").html('￥'+all);
						pay();
						$.cookie("cart",JSON.stringify(cart),{path:"/"});
					})
					//删除商品
					$(".del").on("click",function(){
						$(this).parent().parent().parent().parent().remove();
						var index = $(this).parent().parent().parent().index();
						cart.splice(index,1);
						pay();
						$.cookie("cart",JSON.stringify(cart),{path:"/"});
						if($.cookie('cart')=="[]")
						$(".content").load("/html/user/empty.html");
					})
					//计算总金额
					function pay(){
						var money=0;
						$(".all").each(function(){
							var price = $(this).html();
							price = parseInt(price.slice(1,price.length));
							money+=price;
						});
						$(".pay").html('￥'+ money);
						$(".allpay").html('￥'+ money);
					}
					pay();
				});
			}
			
		//继续购物跳转按钮
		$(".content").on("click",".shopping",function(){
			window.location.href="/index.html";
		})	
	});
})