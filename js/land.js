/**
 * Created by jresu on 2016/10/12.
 */
$(function () {
    $("#center #center_right_Accountnumber .input1").click(function () {
        $(this).value = " ";
    })

	$("#center_right_land").click(function () {

		var cont = $("input").serialize();

		$.ajax({
			// 向路径为php/land.php的后台服务器通信
			url: 'php/land.php',
			type: 'post',
			dataType: 'text',
			data: cont,
			success: function (data) {
				if (data == 1) {

					if ($.cookie("user") != null) {
						$.cookie("user", null, { expires: -1, path: '/' });
					}

					if ($("#checkbox1").is(":checked") == true) {
						// 设置cookie
						$.cookie('user', $("#center_right #center_right_Accountnumber .input1").val(), { expires: 7, path: '/' });
						// 存储一个带7天期限的 cookie 
						// alert($.cookie("user"));
					}
					else {
						// 设置cookie
						$.cookie('user', $("#center_right #center_right_Accountnumber .input1").val(), { expires: null, path: '/' });

						// alert($.cookie("user"));
					}


					window.open('index.html', '_self');

				}
				else {
					$("#land_alert").fadeIn(500);
				}


			},
			error: function (e) {
				alert('没有执行success函数');
			}
		});



	});


	// $("#center_right_land").click(function () {
	// 	// $("#land_alert").css("display","block");
	// 	$("#land_alert").fadeIn(1000);
	// 	// $("#land_alert").css("display","block");

	// });


	$(" .land_ok").click(function () {
		$("#land_alert").fadeOut(500);
		// $("#land_alert").css("opacity","0");

		// $("#land_alert").animate({opacity:"0"},5000);
	});

});