<?php
header('Access-Control-Allow-Origin:*');
$table = $_POST['table'];
$type = $_POST['type'];
$index = $_POST['index'];

mysql_connect("localhost","root","");
mysql_select_db("bvlgari");
mysql_query("set names 'utf8'");

$sql = "SELECT * FROM $table WHERE type='$type' LIMIT 0,".$index*4;
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