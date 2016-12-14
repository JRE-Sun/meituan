<?php
header('Content-Type:text/html; charset=utf-8');

define('DB_USER','root');
define('DB_PASSWORD','root');
define('DB_HOST','localhost');
define('DB_NAME','meituan');
// 连接数据库开始
$conn = @mysql_connect(DB_HOST,DB_USER,DB_PASSWORD) or
die('数据库连接失败！错误信息：'.mysql_error());

@mysql_select_db(DB_NAME) or die('数据库找不到！错误信息：'.mysql_error());
@mysql_query('SET NAMES UTF8') or die('字符集设置错误');

// 连接数据库结束
$id = $_POST['id'];
	     $a=false;
// 执行删除语句开始
	    $query = "delete  FROM shoporder where id = '{$id}'";
         $result = @mysql_query($query) or die('删除错误：'.mysql_error());	
// 执行删除语句结束
	// 关闭与数据库的连接开始    
	    mysql_free_result($result);
	    mysql_close($conn);
	// 关闭与数据库的连接结束
         $a=true;
	    
	    echo $a;
	     
?>
