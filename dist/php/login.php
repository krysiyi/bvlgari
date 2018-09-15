<?php
header('Access-Control-Allow-Origin:*');
$loginId = $_POST['loginId'];
$password = $_POST['password'];
$method = $_POST['method'];


mysql_connect("localhost","root","");
mysql_select_db("bvlgari");
mysql_query("set names 'utf8'");

$sql = "SELECT * FROM user WHERE $method='$loginId'";
$result = mysql_query($sql);
$arr = array();

while($arr1 = mysql_fetch_assoc($result)){
	$arr[]=$arr1;
}


/*if($arr[password]==$password);

else*/
echo json_encode($arr);


mysql_close();

?>