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


$id = $_POST['id'];
	     $a=false;
$arr=false;


		// $query = "SELECT * FROM shop where id = '{$id}'";
	    // $result = @mysql_query($query) or die('查询语句出错：'.mysql_error());
	    
	    // while (!!$row = mysql_fetch_array($result)) {
	    	
	    // 		$json_arr = array("id"=>$row['id'],"title"=>$row['title']);
	    // 		$json_obj = json_encode($json_arr);
	    // 		echo $json_obj;
	    
	    // }

	    $query = "SELECT * FROM shop where id = '{$id}'";
	    $result = @mysql_query($query) or die('查找错误！'.mysql_error());
		while (!!$row = mysql_fetch_array($result)) {
					$json_arr = array("title"=>$row['title'],"description"=>$row['description'],"img1"=>$row['img1'],"price"=>$row['price'],"delprice"=>$row['delprice'],"sold"=>$row['sold'],"score"=>$row['score'],"evaluate"=>$row['evaluate'],"wrapper"=>$row['wrapper'],"img2"=>$row['img2'],"img3"=>$row['img3'],"img4"=>$row['img4'],"img5"=>$row['img5'],"img6"=>$row['img6']);
					$arr = json_encode($json_arr);
					echo $arr;
				
	    	}
		 
	    // $test= @mysql_result($result,0);
    	
    	// if ($test==false){
    	// 	$a=false;
    	// }
    	// else {
    	// 	$a=true;
			
    	// }

        // if($a==true)
        // {
         
        // }
	    
		  
	    mysql_free_result($result);
	    
	    mysql_close($conn);
	    

        //  echo $id;
	     
?>

