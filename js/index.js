$(function () {


    $(".B_Demo").PicCarousel({
			"width":689,		//总的宽
			"height":340,		
			"posterWidth":420,	//商品的宽
			"posterHeight":300,
			"scale":0.9,		
			"speed":500,	
			"autoPlay":true,	
			"delay":2000,	
			"verticalAlign":"top"	
			});

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


    // 网页主体内容content
    // 网页主体内容content左侧的menu

    $("#content .content_left_menu .content_left_menu_left_ul li").hover(function () {
        //  $(this).animate({background:'red'})
        $(this).css("background", "#FFFFFF");
        $(this).css("border-right", "1px solid #FFFFFF");
        $("#content .content_left_menu").css("border-left", "1px solid #BDBDC7");
        $("#content .content_left_menu").css("border-bottom", "1px solid #BDBDC7");

        $("#content .content_left_menu_hiddendiv").css("display", "block");
    }, function () {
        $(this).css("backgroundColor", "#FAFAFA");
        $(this).css("border-right", "1px solid #EEEEEE");
        $("#content .content_left_menu").css("border-left", "1px solid #EEEEEE");
        $("#content .content_left_menu").css("border-bottom", "1px solid #EEEEEE");

        $("#content .content_left_menu_hiddendiv").css("display", "none");
    });

    // 网页主体内容content左侧的menu结束


    // 图片滚动特效


    $("#content .content_right .content_right_shopchange .content_right_shopchange_previous").hover(function () {
        //  $(this).animate({background:'red'})
        $(this).css("background", "url(images/上一页2.png) no-repeat");
    }, function () {
        $(this).css("background", "url(images/上一页1.png) no-repeat");
    });


    $("#content .content_right .content_right_shopchange .content_right_shopchange_next").hover(function () {
        //  $(this).animate({background:'red'})
        $(this).css("background", "url(images/下一页2.png) no-repeat");
    }, function () {
        $(this).css("background", "url(images/下一页1.png) no-repeat");
    });



    $("#content .content_right .content_right_shopchange .content_right_shopchange_previous").click(function () {
        //  $(this).animate({background:'red'})
        // $(this).css("background", "#00C3B0");
        var a = $("#content .content_right .content_right_shopchange .content_right_shopchange_ul").position().left;
        a = a - 712;
        $("#content .content_right .content_right_shopchange .content_right_shopchange_ul").animate({ left: a }, 450);
    });

    $("#content .content_right .content_right_shopchange .content_right_shopchange_next").click(function () {
        //  $(this).animate({background:'red'})
        // $(this).css("background", "#00C3B0");
        var a = $("#content .content_right .content_right_shopchange .content_right_shopchange_ul").position().left;
        a = a + 712;
        $("#content .content_right .content_right_shopchange .content_right_shopchange_ul").animate({ left: a }, 450);
    });

    // 网页主体内容content结束



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
        }
    });

    // 退出按钮的颜色特效

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