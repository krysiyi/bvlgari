require(["config"],function(){
	require(["jquery","header","footer","backtop","url","cookie"],function($,header,footer,backtop,url){
		header.init();
		footer.init();
		backtop.init();	
		//console.log($("#btn"))
		$("#btn").on("click",function(e){
			if(e.preventDefault) e.preventDefault();
			else return false;
			var loginId = $("#loginId").val(),
				password = $("#password").val();
			var reg=/^\d{11}$/;
			var method=reg.test(loginId)?"phone":"loginId";
			var str="loginId="+loginId+"&method="+method;
			$.ajax({
				type:"POST",
				url:url+"/php/login.php",
				async:true,
				data:str,
				success:function(data){
					if(password===data[0].password)
					{
						$.cookie('islogin','true',{path:'/'});
						$.cookie('user',str,{path:'/'});
						$.cookie('cart',data[0].cart,{path:'/'})
						console.log($.cookie('cart'));
						window.location.href = "/index.html";
					}
					else
					alert("用户名或密码输入错误")
				},
				dataType:"json"
			});
		})
	});
})