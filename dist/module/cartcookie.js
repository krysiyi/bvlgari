"use strict";define(function(){function t(){}return t.prototype.init=function(t,i,n){for(var e=$.cookie("cart"),a="null"==e||null==e?[]:JSON.parse(e),o=0;o<a.length;o++)if(a[o].name==i)return a[o].num+=n,$.cookie("cart",JSON.stringify(a),{path:"/"}),void console.log($.cookie("cart"));$.ajax({type:"POST",url:"http://localhost/gulp-project-bvlgari/dist/php/details.php",async:!0,data:{name:i,table:t},success:function(t){var e={name:i,num:n,series:t[0].series,about:t[0].about,price:t[0].price,imgurl:t[0].imgurl};a.push(e),$.cookie("cart",JSON.stringify(a),{path:"/"})},dataType:"json"})},new t});