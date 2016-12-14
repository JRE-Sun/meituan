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


    // 其他网页跳转到本页面特效,登录按钮特效
    if ($.cookie("user") != null) {
        $("#btn_land").html("尊敬的 " + $.cookie("user"));
        $("#btn_land_out").css("display", "inline-block");
        $("#btn_register").css("display", "none");
    }




    //顶部退出按钮特效

    $("#btn_land_out").click(function () {

        $(this).css("display", "none");

        if ($.cookie("user") != null) {
            $.cookie("user", null, { expires: -1, path: '/' });
            $("#btn_land").html("登陆");
            $("#btn_register").css("display", "block");
            window.open('index.html', '_self');
        }
    });

    //退出按钮的颜色特效

    $("#btn_land_out").hover(function () {
        $(this).css("color", "#2FB9AB");
    }, function () {
        $(this).css("color", "#666666");
    });


    // 登陆，用户名点击特效
    $("#btn_land").click(function () {
        if ($("#btn_land").html() == '登陆') {
            window.open('land.html', '_self');
        }
        else {
            window.open('person.html', '_self');
        }
    });



});