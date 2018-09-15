require(["config"],function(){
	require(["jquery","header","footer","backtop","template","url","cartcookie"],function($,header,footer,backtop,template,url,cartcookie){
		header.init();
		footer.init();
		backtop.init();
		
		$(function(){
			var href = window.location.search.split("&");
			var table = href[0].split("=")[1];
			var type = decodeURIComponent(href[1].split("=")[1]);
			var index=0;
			$("title").html(type);
			$("#type").html(type);
			$("#table").html(table);
			$.ajax({
					type:"POST",
					url:url+"/php/list.php",
					success:function(data){	
						//console.log(data);
						$(".banner_img img").attr("src",data[0].bannerurl);
						$(".descrip p").html(data[0].about);
					},
					data:{type:type,banner:true},
					async:true,
					dataType:"json"
				});
			//console.log(table,type)
			post();
			
			function post(){
				index++;
				$.ajax({
					type:"POST",
					url:url+"/php/list.php",
					success:function(data){	
						render(data);//页面插入渲染
						$('.listtype').html(table);
					},
					data:{
						table:table,
						type:type,
						index:index
						},
					async:true,
					dataType:"json"
				});
			}
			
			function render(data){
				var html = template("productlist",{data: data});
				$(".product_list").html(html);
				//console.log(data);
			}
			
			$(".see_more").on("click",function(){
				post();
				//console.log(1234)
			})
			//点击商品跳转到商品详情界面 url携带参数
			$(".product_list").on("click","a",function(){
				/*$(".content").load("/html/comlisting/jewl/details.html");*/
				var id = $(this).attr("id");
				console.log(id);
				window.location.href="/html/comlisting/jewl/details.html?id="+id+"&table="+table;
			})
			
			//添加购物车  在cookie增加商品、商品数量操作
			$(".product_list").on("click","#addcart",function(){
				var name = $(this).siblings().children("a").attr("id");
				console.log(name,table);
				cartcookie.init(table,name,1);

			})

		});
	});
})
