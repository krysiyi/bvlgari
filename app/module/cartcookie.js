define(function(){
	function CartCookie(){};
	CartCookie.prototype.init = function(table,name,num){
		var cart = $.cookie('cart');
				//var cart = JSON.parse(cart);
	  	var arr = (cart=="null"||cart==undefined)?[]:JSON.parse(cart);

		for (var i=0;i<arr.length;i++) {
			if(arr[i].name==name){
				arr[i].num+=num; 
				$.cookie("cart",JSON.stringify(arr),{path:'/'});
				console.log($.cookie("cart"));
				return;
			}
		}
		$.ajax({
			type:"POST",
			url:"http://localhost/gulp-project-bvlgari/dist/php/details.php",
			async:true,
			data:{name:name,table:table},
			success:function(data){
				var obj={
				name:name,
				num:num,
				series:data[0].series,
				about:data[0].about,
				price:data[0].price,
				imgurl:data[0].imgurl
				}
				arr.push(obj);
				$.cookie("cart",JSON.stringify(arr),{path:'/'});
			},
			dataType:"json"
		});
		
	}
	return new CartCookie();
})
