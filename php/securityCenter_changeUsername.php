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



    $old_username = $_POST['old_username'];
    $new_username = $_POST['new_username'];
    $a=true;
    
    if ($new_username==null)
     {
     	$a=false;
     }else{

        $query = "SELECT * FROM user where name = '{$new_username}'";
	    $result = @mysql_query($query) or die('查找错误！'.mysql_error());
	    $test= @mysql_result($result,0);
    	
    	if ($test==false){
    		$a=true;
    	}else {
    		$a=false;
    	}

        if($a==true){
            $query = "UPDATE user SET name='{$new_username}' where name = '{$old_username}'";
            @mysql_query($query) or die('修改出错!'.mysql_error());
            // $test= @mysql_result($result,0);
            
            // if ($test==false){
            // 	$a=false;
            // }
            // else {
            // 	$a=true;
            // }
            
            // mysql_free_result($result);
        }

        
     }
    
    
     mysql_close($conn);
    	
    echo $a;
    
    
    
    
?>
