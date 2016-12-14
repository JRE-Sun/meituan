<?php
header('Content-Type:text/html; charset=utf-8');

define('DB_USER','root');
define('DB_PASSWORD','root');
define('DB_HOST','localhost');
define('DB_NAME','meituan');
 
$conn = @mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or
die('数据库连接失败！错误信息：'.mysql_error());

 
@mysql_select_db(DB_NAME) or die('数据库找不到！错误信息：'.mysql_error());
@mysql_query('SET NAMES UTF8') or die('字符集设置错误');


    $title = $_POST['title'];
    $price = $_POST['price'];
    $username = $_POST['username'];
    $id=0;
	$oldprice=0;
	$oldtitle=0;
	$img=0;
    $a=false;
    
    
    	$query = "SELECT * FROM user where name = '{$username}'";
    	$result = @mysql_query($query) or die('查找错误！'.mysql_error());
    	while (!!$row = mysql_fetch_array($result)) {
	    	$id=$row['id'];
	    }


		$query = "SELECT * FROM shop where title = '{$title}'";
    	$result = @mysql_query($query) or die('查找错误！'.mysql_error());
    	while (!!$row = mysql_fetch_array($result)) {
	    	$img=$row['img1'];
	    }



		$query = "SELECT * FROM shoporder where userid = '{$id}' and title = '{$title}' and place='1'  ";
    	$result = @mysql_query($query) or die('查找错误！'.mysql_error());
		while (!!$row = mysql_fetch_array($result)) {
	    	$oldprice=$row['price'];
	    }
		$test= @mysql_result($result,0);
    	
    	if ($test!=false){

			$price = $price + $oldprice;
    		 $query = "UPDATE shoporder SET price='{$price}' where userid = '{$id}' and title = '{$title}' and place='1' ";
    		@mysql_query($query) or die('修改出错!'.mysql_error());

    		
    		 
    	}
    	else {
			$query = "INSERT INTO shoporder (title,price,place,userid,img) VALUE('{$title}','{$price}','1','{$id}','{$img}')";
    		@mysql_query($query) or die('添加数据出错：'.mysql_error());
    	}
    
    	
    		
    		 
    		mysql_free_result($result);
    		
    		mysql_close($conn);
    		$a=true;
    		echo $a;
    
    
?>
