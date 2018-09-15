<?php
header('Access-Control-Allow-Origin:*');
$loginId = $_POST['loginId'];
$phone = $_POST['phone'];
$password = $_POST['password'];

mysql_connect("localhost","root","");
mysql_select_db("bvlgari");
mysql_query("set names 'utf8'");

$sql = "INSERT INTO user(loginId,phone,password) VALUES('$loginId',$phone,'$password')";
$result = mysql_query($sql);
if($result){
	echo '{"code":1}';
}else
echo '{"code":2}';

mysql_close();
?>