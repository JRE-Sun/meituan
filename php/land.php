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


$username = $_POST['username'];
$password = $_POST['password'];
	     $a=false;

	    $query = "SELECT * FROM user where name = '{$username}'";
	    $result = @mysql_query($query) or die('查找错误！'.mysql_error());
	    while (!!$row = mysql_fetch_array($result)) {
	    	if ($row['password']==$password)
	    	{
	    		$a=true;
	    	}
	    }
	    
	    mysql_free_result($result);
	    
	    mysql_close($conn);
	    
	    echo $a;
	     
?>

