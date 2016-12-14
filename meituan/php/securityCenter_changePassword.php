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


    $username = $_POST['password_modify_div_user'];
    $old_password = $_POST['old_password'];
    $new_password = $_POST['new_password'];
    $a=true;
    $b=false;
    
    if ($old_password==null || $new_password==null)
     {
     	$a=false;
         
     }
     else
     {
        // 检查密码是否匹配
        $query = "SELECT * FROM user where name = '{$username}'";
	    $result = @mysql_query($query) or die('查找错误！'.mysql_error());
	    while (!!$row = mysql_fetch_array($result)) {
	    	if ($row['password']==$old_password)
	    	{
	    		$b=true;
	    	}
	    }

        if($b==true ){
            // 密码匹配成功后，执行更新密码
            $query = "UPDATE user SET password='{$new_password}' where name = '{$username}'";
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
    	
    echo $b;
    
    
    
    
?>
