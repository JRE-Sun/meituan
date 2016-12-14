$(function () {
    var choose_username = false;
    var choose_password1 = false;
    var choose_password2 = false;

    $("#send").click(function () {

        if (choose_username && choose_password1 && choose_password2) {
            var cont = $("input").serialize();

            $.ajax({
                url: 'php/register_send.php',
                type: 'post',
                dataType: 'text',
                data: cont,
                success: function (data) {

                    if (data == 1) {
                        if ($.cookie("user") != null) {
                            $.cookie("user", null, { path: '/' });
                        }

                        // 设置cookie
                        $.cookie('user', $("#content .sheet .account").val(), { expires: null, path: '/' });

                        // alert($.cookie("user"));

                        window.open('index.html', '_self');

                    }
                    else {
                        alert('注册失败,请检查信息是否填写正确!');
                    }


                },
                error: function (e) {
                    alert(e);
                }
            });
        }
        else {
            alert('注册失败,请检查信息是否填写正确!');
        }

    });


    $("#content .zh .account").blur(function () {

        var cont = $("input").serialize();

        $.ajax({
            url: 'php/register_username.php',
            type: 'post',
            dataType: 'text',
            data: cont,
            success: function (data) {
                if (data == 1) {
                    $("#content .zh p").css("color", "black");
                    $("#content .zh p").text("正确 !");
                    choose_username = true;
                } else {
                    $("#content .zh p").text("用户已存在或填写错误 !");
                    $("#content .zh p").css("color", "red");
                    choose_username = false;
                }

            },
            error: function (e) {
                alert(e);
            }
        });




    });

    var q = 0;

    $("#content .mm #password1").blur(function () {
        var m = $(this).val().length;
        q = m;
        if (m > 5) {
            $("#content .mm p").css("color", "black");
            $("#content .mm p").text("密码格式正确");
            choose_password1 = true;
        } else {
            $("#content .mm p").text("密码小于6位数");
            $("#content .mm p").css("color", "red");
            choose_password1 = false;
        }
    });

    $("#content .mm #password1").focus(function () {
        $("#content .mm p").text("请输入密码位数大于5");
    });


    $("#content .mm_qr #password2").blur(function () {
        // alert("ss");
        var n = $(this).val();
        var s = $("#content .mm #password1").val();

        if (n != "") {
            if (n == s && q > 5) {
                $("#content .mm_qr p").css("color", "black");
                $("#content .mm_qr p").text("密码正确");
                choose_password2 = true;
            } else {

                $("#content .mm_qr p").text("密码不正确");
                $("#content .mm_qr p").css("color", "red");
                choose_password2 = false;
            }
        }

    });


});