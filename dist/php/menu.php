<?php
header('Access-Control-Allow-Origin:*');
$id = $_POST['id'];
$jewelry= '[{"title":"珠宝","list":["戒指","项链","手镯","耳环","袖扣"]},{"title":"产品系列","list":["B.ZERO1","DIVAS DREAM","SEPRENTI","BVLGARI BVLGARI","MVSA","MONETE","PARENTESI","SAVE THE SHILDREN"],"imgUrl":"/images/indexImg/menu.jpg"}]';
$watch= '[{"title":"女士","list":["SEPRENTI","LVCEA","BVLGARI BVLGARI","B.ZERO1","DIVAS DREAM","高级珠宝腕表"],"imgUrl":"/images/indexImg/menu2.jpg"},{"title":"男士","list":["OCTO","BVLGARI BVLGARI","DIAGONO","HAUTE HORLOGRIE"],"imgUrl":"/images/indexImg/menu_3.jpg"}]';
$perfume= '[{"title":"女性","list":["GOLDEA","OMNIA COLLECTION","SPLENDIDA BVLGARI"]},{"title":"男性","list":["AQVA POUR HOMME","BLV","BVLGARI MAN","POUR HOMME"]},{"title":"中性香水","list":["EAUX PARFUMEES"]},{"title":"HIGH PERFUMERY","list":["LE GEMME"],"imgUrl":"/images/indexImg/menu4.jpg"}]';
switch ($id)
{
case "jewel":
  echo $jewelry;
  break; 
case "watch":
  echo $watch;
  break;
case "perfume":
  echo $perfume;
  break;    
}

?>