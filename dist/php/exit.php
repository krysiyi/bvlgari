<?php
header('Access-Control-Allow-Origin:*');
$loginId = $_POST['loginId'];
$method = $_POST['method'];
$cart = $_POST['cart'];


mysql_connect("localhost","root","");
mysql_select_db("bvlgari");
mysql_query("set names 'utf8'");

$sql = "UPDATE user SET cart='$cart' WHERE $method='$loginId'";
$result = mysql_query($sql);

echo $result;

mysql_close();

?>