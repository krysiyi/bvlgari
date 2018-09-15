require(["config"],function(){
	require(["jquery","header","footer","backtop","url"],function($,header,footer,backtop,url){
		header.init();
		footer.init();
		backtop.init();
		var all=[false,false,false];
		
		$(".register").eq(2).on("keyup",function(){
			var reg1= /^.{8,}$/;
			var reg2 = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{8,}$/;
			var result= [reg1.test($(this).val()),reg2.test($(this).val())];
			if(!result[0])
				$(".alt").eq(2).addClass("ac");
			else{
				$(".alt").eq(2).removeClass("ac");
				if(!result[1])
				$(".alt").eq(3).addClass("ac");
				else
				$(".alt").eq(3).removeClass("ac");
			}
			all[0]= result[0]&&result[1];
		});
		
		$(".register").eq(0).on("keyup",function(){
			var reg =/^\w+@[a-z0-9]+\.[a-z]+$/i;
			var result = reg.test($(this).val());
			if(!result)
			$(".alt").eq(0).addClass("ac");
			else
			$(".alt").eq(0).removeClass("ac");
			all[1]= result;
		});
		
		$(".register").eq(1).on("keyup",function(){
			var reg =/^1\d{10}$/;
			var result = reg.test($(this).val());
			if(!result)
			$(".alt").eq(1).addClass("ac");
			else
			$(".alt").eq(1).removeClass("ac");
			all[2]= result;
		});
		
		$("#btn").on("click",function(e){
			if(e.preventDefault) e.preventDefault();
			else return false;
			if(all.every(function(value){return value;}))
			{
				var loginId = $("#loginId").val(),
					phone = $("#phone").val(),
					password = $("#password").val();
				var str="loginId="+loginId+"&phone="+phone+"&password="+password;
				$.ajax({
					type:"POST",
					url:url+"/php/register.php",
					async:true,
					data:str,
					success:function(data){
						if(data.code==1){
							alert("注册成功！")
							window.location.href="/html/login.html"}
						else alert("注册失败！")
						console.log(data);
					},
					dataType:"json"
				});
			}
			
		})
		
		
	});
});