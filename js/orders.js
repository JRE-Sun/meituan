$(function () {

    $.ajax({
        url: 'php/orders.php',
        type: 'post',
        dataType: 'json',
        data:
        {
            username: $.cookie("user")
        },
        success: function (data) {
            // alert(data.length);

            // data
            //alert(data.length);

            //alert(data[1].price);
            for (var i = 0; i < data.length; i++) {
                // alert(data[i].id);
                // alert(data[i].title);
                // alert(data[i].price);
                // alert(data[i].place);
                //  alert(data[i].img);

                if (data[i].place == 1) {

                    var html = $(
                        "<div class=" + "\"order_title\"" + ">订单编号：" +
                        "<a target=\"" + "_blank\"" + ">" + data[i].id + "</a>" +
                        "<a class=\"" + "order_del order_cancel\"" + ">删除</a>" +
                        "</div>" +

                        "<div class=\"" + "order_row\">" +
                        "<div class=\"order_cell order_row1\">" +
                        "<a class=\"img_w\">" +
                        "<img src=\"images/" + data[i].img + ".jpg\">" +
                        "</a>" +
                        "<div class=\"info_detail\">" +
                        "<a class=\"deal_title\">" + data[i].title + "</a>" +
                        "<p>有效期至：2016-11-19</p>" +
                        "<a href=\"javascript::\" class=\"biz\">商家信息</a>" +
                        "</div>" +
                        "</div>" +
                        "<div class=\"order_cell head_quantity cell\">1</div>" +
                        "<div class=\"order_cell head_money cell\">¥" + data[i].price + "</div>" +

                        "<div class=\"order_cell head_status cell\">" +
                        "<p>未付款</p>" +
                        "<a href=\"javascript::\">订单详情</a>" +
                        "</div>" +
                        "<div class=\"order_cell head_op\">" +
                        "<a class=\"btn_min\">评价</a>" +
                        "</div>" +
                        "</div>");

                    $("#center .right_div .noPayment").append(html);



                } else {
                    // alert(data[i].id);
                    var html = $(
                        "<div class=" + "\"order_title\"" + ">订单编号：" +
                        "<a target=\"" + "_blank\"" + ">" + data[i].id + "</a>" +
                        "<a class=\"" + "order_del order_cancel href=\"javascript::" + ">删除</a>" +
                        "</div>" +

                        "<div class=\"" + "order_row\">" +
                        "<div class=\"order_cell order_row1\">" +
                        "<a class=\"img_w\">" +
                        "<img src=\"images/" + data[i].img + ".jpg\">" +
                        "</a>" +
                        "<div class=\"info_detail\">" +
                        "<a class=\"deal_title\">" + data[i].title + "</a>" +
                        "<p>有效期至：2016-11-19</p>" +
                        "<a href=\"javascript::\" class=\"biz\">商家信息</a>" +
                        "</div>" +
                        "</div>" +
                        "<div class=\"order_cell head_quantity cell\">1</div>" +
                        "<div class=\"order_cell head_money cell\">¥" + data[i].price + "</div>" +

                        "<div class=\"order_cell head_status cell\">" +
                        "<p>已使用</p>" +
                        "<a href=\"javascript::\">订单详情</a>" +
                        "</div>" +
                        "<div class=\"order_cell head_op\">" +
                        "<a class=\"btn_min\">评价</a>" +
                        "</div>" +
                        "</div>");

                    $("#center .right_div .alreadyPayment").append(html);


                    //  $("#center .right_div .alreadyPayment .order_title").children("a:eq(0)").html(data[i].id);
                }



            };


        },
        error: function (e) {
            alert("sss");
        }
    });


    // 删除订单特效开始
  $("body").delegate("#center .right_div .order_title .order_cancel ","click",function(){
		// alert("dd");
        var number = $(this).parent().children("a:eq(0)").html();
        // alert(number);
         $.ajax(
            {
                url: 'php/orders_delate.php',
                type: 'post',
                dataType: 'text',
                data: {
                    id:number
                },
                success: function (data) {

                  window.open("orders.html","_self");
         

                },
                error: function (e) {
                    alert('没有执行success函数');
                }
            }
        );
	});

    // 删除订单特效结束

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


    if ($("title").html() == '安全设置  | 美团网湘潭站') {

        var lia = $("#center .left_div .ul1").children("li:eq(0)");
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

    //右侧div部分开始
    $("#center .right_div .order_title .order_cancel").hover(function () {
        $(this).css("color", "#2bb8aa");
        $(this).css("background", "url(images/删除.png) no-repeat 0 2px");
    }, function () {
        $(this).css("color", "#999999");
        $(this).css("background", "url(images/删除.png) no-repeat 0 -11px")
    });
    $("#center .right_div .order_row .deal_title").hover(function () {
        $(this).css("color", "#2bb8aa");
    }, function () {
        $(this).css("color", "#666666");
    });
    //右侧div部分结束
});