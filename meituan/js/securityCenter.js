$(function () {
    //顶部导航特效开始
    //收藏美团特效
    $("#top_navigation .top_navigation_content #id_a1").hover(function () {
        $(this).css("background", "url(images/icon2.png) no-repeat 0 6px");
    }, function () {
        $(this).css("background", "url(images/icon1.png) no-repeat 0 6px");
    });

    //手机美团特效
    $("#top_navigation .top_navigation_content #id_a5").hover(function () {
        $(this).addClass("a6");
        $(this).removeClass("a5");
        $("#top_navigation .top_navigation_content .a7").css("display", "block");
        $("#top_navigation .top_navigation_content .a8").css("display", "block");
    }, function () {
        $(this).removeClass("a6");
        $(this).addClass("a5");
        $("#top_navigation .top_navigation_content .a7").css("display", "none");
        $("#top_navigation .top_navigation_content .a8").css("display", "none");
    });


    //我的美团开始
    $("#top_navigation .top_navigation_content #id_a2_a4_a5_a12").hover(function () {
        $(this).addClass("a6");
        $(this).removeClass("a5");
        $("#top_navigation .top_navigation_content #div_a2_a4_a5_a12").css("display", "block");
    }, function () {
        $(this).removeClass("a6");
        $(this).addClass("a5");
        $("#div_a2_a4_a5_a12").css("display", "none");
    });


    $("#top_navigation .top_navigation_content #div_a2_a4_a5_a12").hover(function () {
        $("#top_navigation .top_navigation_content #id_a2_a4_a5_a12").addClass("a6");
        $("#top_navigation .top_navigation_content #id_a2_a4_a5_a12").removeClass("a5");
        $(this).css("display", "block");
    }, function () {
        $("#top_navigation .top_navigation_content #id_a2_a4_a5_a12").removeClass("a6");
        $("#top_navigation .top_navigation_content #id_a2_a4_a5_a12").addClass("a5");
        $(this).css("display", "none");
    });


    $("#div_a2_a4_a5_a12 > li").hover(function () {
        $(this).css("background", "#F9F9F9");
    }, function () {
        $(this).css("background", "#FFFFFF");
    });
    // 我的美团结束

    //顶部导航特效结束

    // 顶部图片关闭按钮特效
    $("#top_navigation .div1 .a15 img").hover(function () {
        $(this).addClass("img1");
    }, function () {
        $(this).removeClass("img1");
    });

    $("#top_navigation .div1 .a15 img").click(function () {
        $("#top_navigation .div1").css("display", "none");
    });
    // 顶部图片关闭按钮结束

    // 每个网页都公用的头header特效开始

    // 顶部切换城市按钮特效
    $("#header .header_changecity").hover(function () {
        $(this).css("color", "#2BB8AA");
    }, function () {
        $(this).css("color", "#999999");
    });
    // 顶部切换城市按钮结束


    // 搜索按钮特效
    $("#header .header_search .header_search_button").hover(function () {
        $(this).animate({ backgroundColor: '#00C3B0' }, 150);
    }, function () {
        $(this).animate({ backgroundColor: '#2BB8AA' }, 150);
    });
    // 搜索按钮特效结束


    // 全部分类特效

    $("#header .header_navigation ul li.first").hover(function () {
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向上1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "block");
    }, function () {
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向下1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "none");
    });

    // 全部分类特效结束


    // 全部分类的menu特效结束

    $("#header .header_hiddenMenu .header_hiddenMenu_ul li").hover(function () {
        //  $(this).animate({background:'red'})
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向上1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "block");
        $(this).css("background", "#FFFFFF");
        $(this).css("border-right", "1px solid #FFFFFF");
        $("#header .header_hiddenMenu").css("border-left", "1px solid #BDBDC7");
        $("#header .header_hiddenMenu").css("border-bottom", "1px solid #BDBDC7");

        $("#header .header_hiddenMenu_hiddendiv").css("display", "block");
    }, function () {
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向下1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "none");
        $(this).css("backgroundColor", "#FAFAFA");
        $(this).css("border-right", "1px solid #EEEEEE");
        $("#header .header_hiddenMenu").css("border-left", "1px solid #EEEEEE");
        $("#header .header_hiddenMenu").css("border-bottom", "1px solid #EEEEEE");

        $("#header .header_hiddenMenu_hiddendiv").css("display", "none");
    });

    // 全部分类的menu特效结束


    // 全部分类的menu右侧的隐藏div特效
    $("#header .header_hiddenMenu_hiddendiv").hover(function () {
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向上1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "block");
        $("#header .header_hiddenMenu").css("border-left", "1px solid #BDBDC7");
        $("#header .header_hiddenMenu").css("border-bottom", "1px solid #BDBDC7");

        $(this).css("display", "block");
    }, function () {
        $("#header .header_navigation ul li.first .header_navigation_arrow").css("background", "url(images/向下1.png) no-repeat 0 ");
        $("#header .header_hiddenMenu").css("display", "none");
        $("#header .header_hiddenMenu").css("border-left", "1px solid #EEEEEE");
        $("#header .header_hiddenMenu").css("border-bottom", "1px solid #EEEEEE");
        $(this).css("display", "none");
    });
    // 全部分类的menu右侧的隐藏div特效结束


    // 导航鼠标移动特效开始
    $("#header .header_navigation ul li a").hover(function () {
        //  $(this).animate({background:'red'})
        // $(this).css("background", "#00C3B0");
        $(this).animate({ backgroundColor: '#00C3B0' }, 150)
    }, function () {
        // $(this).css("backgroundColor", "#2BB8AA");
        $(this).animate({ backgroundColor: '#2BB8AA' }, 150)
    });
    // 导航鼠标移动特效结束

    // 每个网页都公用的头header特效结束

    //content，左侧div特效开始

    if ($("title").html() == '安全设置') {
        var lia = $("#center .left_div .ul4").children("li:eq(4)");

        // alert(l1a.children("a:eq(0)"));
        lia.css("background", "#2BB8AA");
        lia.children("a:eq(0)").css("color", "#FFF");
        //         $(this).css("background", "#2BB8AA");
        //         $(this).children("a:eq(0)").css("color", "#FFF");
    }


    $("#center .left_div ul li").hover(function () {
        $(this).css("color", "#2BB8AA");
    }, function () {
        if ($("#center .left_div ul li").css('background') == '#2BB8AA') {
            alert('s');
        }
        $(this).css("color", '#666');
    });

    $("#center .left_div ul li").click(function () {
        $("#center .left_div ul li").css("background", "#F9F9F9");
        $("#center .left_div ul li a").css("color", "#666");
        $(this).css("background", "#2BB8AA");
        $(this).children("a:eq(0)").css("color", "#FFF");

    });
    //content，左侧div特效结束

    // 其他网页跳转到本页面特效,登录按钮特效
    if ($.cookie("user") != null) {
        $("#btn_land").html("尊敬的 " + $.cookie("user"));
        $("#btn_land_out").css("display", "inline-block");
        $("#btn_register").css("display", "none");
        $("#center .right_div .center_content .span2").html($.cookie("user"));
        $("#center .right_div .center_content .username_modify_div .username_modify_div_username_old .username_modify_div_username_old_input").val($.cookie("user"));
        $("#center .right_div .center_content .password_modify_div .password_modify_div_username").val($.cookie("user"));
        // alert($("#center .right_div .center_content .password_modify_div .password_modify_div_username").val());
    }




    //顶部退出按钮特效

    $("#btn_land_out").click(function () {

        $(this).css("display", "none");

        if ($.cookie("user") != null) {
            $.cookie("user", null, { expires: -1, path: '/' });
            $("#btn_land").html("登陆");
            $("#btn_register").css("display", "block");
        }

        window.open("land.html", "_self");
    });


    //顶部退出按钮颜色特效
    $("#btn_land_out").hover(function () {
        $(this).css("color", "#2FB9AB");
    }, function () {
        $(this).css("color", "#666666");
    });


    // 登陆，用户名点击特效开始
    $("#btn_land").click(function () {
        if ($("#btn_land").html() == '登陆') {
            window.open('land.html', '_self');
        }
        else {
            window.open('person.html', '_self');
        }
    });
    // 登陆，用户名点击特效结束

    // 修改账号按钮点击出现弹窗开始
    $("#center .right_div .center_content .username .username_modify").click(function () {
        $("#center .right_div .center_content .username_modify_div .username_modify_div_username_new .username_modify_div_username_new_input").val("");
        $("#center .right_div .center_content .window").css("display", "block");
        $("#center .right_div .center_content .username_modify_div").css("display", "block");
    });
    // 修改账号按钮点击出现弹窗结束

    // 修改账号按钮点击后出现的窗口"确定按钮"特效开始
    $("#center .right_div .center_content .username_modify_div .btn1").click(function () {
        var cont = $("input").serialize();
        $.ajax(
            {
                url: 'php/securityCenter_changeUsername.php',
                type: 'post',
                dataType: 'text',
                data: cont,
                success: function (data) {
                    if (data == 1) {
                        // $("#land_alert h4").html("密码修改成功！");
                        // $("#land_alert").fadeIn(500);
                        
                        // 删除原来的cookie，设置新的cookie
                        $.cookie("user", null, { expires: -1, path: '/' });

                        $.cookie('user', $("#center .right_div .center_content .username_modify_div .username_modify_div_username_new .username_modify_div_username_new_input").val(), { expires: null, path: '/' });

                        window.open('index.html', '_self');

                    }

                    else {
                        // $("#land_alert").fadeIn(500);

                        // alert("e");
                        $("#land_alert h4").html("账户名修改失败，用户名已被注册或填写错误！");
                        $("#land_alert").fadeIn(500);
                    }


                },
                error: function (e) {
                    alert('没有执行success函数');
                }
            }
        );



        $("#center .right_div .center_content .window").css("display", "none");
        $("#center .right_div .center_content .username_modify_div").css("display", "none");
    });
// 修改账号按钮点击后出现的窗口"确定按钮"特效结束


// 修改账号按钮点击后出现的窗口"取消按钮"特效开始
    $("#center .right_div .center_content .username_modify_div .btn2").click(function () {

        $("#center .right_div .center_content .window").css("display", "none");
        $("#center .right_div .center_content .username_modify_div").css("display", "none");
    });
// 修改账号按钮点击后出现的窗口"取消按钮"特效结束




    // 修改 密码 按钮点击出现弹窗开始
    $("#center .right_div .center_content .password .psssword_modify").click(function () {
        $("#center .right_div .center_content .password_modify_div .password_modify_div_password_old .password_modify_div_password_old_input").val("");
        $("#center .right_div .center_content .password_modify_div .password_modify_div_password_new .password_modify_div_password_new_input").val("");

        $("#center .right_div .center_content .window").css("display", "block");
        $("#center .right_div .center_content .password_modify_div").css("display", "block");
    });
    // 修改 密码 按钮点击出现弹窗结束


// 修改 密码 按钮点击后出现的窗口"确定按钮"特效开始
    $("#center .right_div .center_content .password_modify_div .btn3").click(function () {
        var cont = $("input").serialize();
        $.ajax(
            {
                url: 'php/securityCenter_changePassword.php',
                type: 'post',
                dataType: 'text',
                data: cont,
                success: function (data) {
                    if (data == 1) {
                        $("#land_alert h4").html("密码修改成功！");
                        $("#land_alert").fadeIn(500);

                    }

                    else {
                        // $("#land_alert").fadeIn(500);
                        $("#land_alert h4").html("修改失败，请检查密码是否填写正确！");
                        $("#land_alert").fadeIn(500);
                        // alert("e");
                    }


                },
                error: function (e) {
                    alert('没有执行success函数');
                }
            }
        );



        $("#center .right_div .center_content .window").css("display", "none");
        $("#center .right_div .center_content .password_modify_div").css("display", "none");
    });

// 修改 密码 按钮点击后出现的窗口"确定按钮"特效结束


// 修改 密码 按钮点击后出现的窗口"取消按钮"特效开始
    $("#center .right_div .center_content .password_modify_div .btn4").click(function () {

        $("#center .right_div .center_content .window").css("display", "none");
        $("#center .right_div .center_content .password_modify_div").css("display", "none");
    });
// 修改 密码 按钮点击后出现的窗口"取消按钮"特效结束

//修改账号 密码，正确，错误出现的弹窗
    $(" .land_ok").click(function () {
        $("#land_alert").fadeOut(500);
        // $("#land_alert").css("opacity","0");

        // $("#land_alert").animate({opacity:"0"},5000);
    });





});