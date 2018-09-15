<?php
header('Access-Control-Allow-Origin:*');
$name = $_POST['name'];
$table = $_POST['table'];

mysql_connect("localhost","root","");
mysql_select_db("bvlgari");
mysql_query("set names 'utf8'");

$sql = "SELECT * FROM $table WHERE name='$name'";
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