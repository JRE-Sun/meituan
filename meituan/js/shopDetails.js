$(function () {

    // 接收传来的id值，显示不同的数据 开始
    //url 就是传过来的id值
    var src = window.location.href;
    var I = src.substr(src.indexOf("?id=") + 4).length;
    var T = src.indexOf("?id=");
    //alert(src); 
    if (0 >= T) return "";
    if (I == src.length) return -1;
    var url = src.substr(src.indexOf("?id=") + 4);
    // alert(url);
    // 接收传来的id值，显示不同的数据 结束

    var title;
    var price;

    $.ajax({
        url: 'php/shopdetails.php',
        type: 'post',
        dataType: 'json',
        data: {
            id: url
        },
        success: function (data) {
            // alert(data.title);
            // alert(data.description);
            // alert(data.img1);
            // alert(data.price);
            // alert(data.delprice);
            // alert(data.sold);
            // alert(data.score);
            // alert(data.evaluate);
            // alert(data.wrapper);
            // alert(data.img2);
            // alert(data.img3);

            title = data.title;
            price = data.price;

            $("title").html(data.title);
            $("#content .ct_title h1").html(data.title);
            $("#content .ct_description").html(data.description);

            var path1 = "images/shop" + url + "/" + data.img1 + ".jpg";
            var path2 = "images/shop" + url + "/" + data.img2 + ".jpg";
            var path3 = "images/shop" + url + "/" + data.img3 + ".jpg";



            $("#img1").attr('src', path1);
            $("#img1_1").attr('src', path1);
            $("#img2").attr('src', path2);
            $("#img3").attr('src', path3);


            if (data.img4 != null) {
                var path4 = "images/shop" + url + "/" + data.img4 + ".jpg";
                $("#img4").attr('src', path4);
            }
            if (data.img5 != null) {
                var path5 = "images/shop" + url + "/" + data.img5 + ".jpg";
                $("#img5").attr('src', path5);
            }
            if (data.img6 != null) {
                var path6 = "images/shop" + url + "/" + data.img6 + ".jpg";
                $("#img6").attr('src', path6);
            }



            $("#content .ct_digest .deal_price strong").html(data.price);
            $("#content #mydel").html(data.delprice);
            $("#content #sold").html(data.sold);
            $("#content #score").html(data.score);
            $("#content #evaluate").html(data.evaluate);
            $("#content .ct_digest .component_text .text_wrapper .wrapper").html(data.wrapper);
            $("#detail .recommended").html(data.title);


            // $("title").html(data.img2);
            // $("title").html(data.img3);


        },
        error: function (e) {
            alert('没有执行success函数');
        }
    });





    $("#content .ct_digest .component_purchase .chart_buy").click(function () {
        var url = "submitorder.html?title=" + title+"&price="+price;
        window.open(url);
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

    //套餐边框变色效果开始
    $("#content .packages_item").hover(function () {
        $(this).css("border", "2px solid #2BB8AA");
        $(this).css("margin", "1px");
    }, function () {
        $(this).css("border", "1px solid #DDDDDD");
        $(this).css("margin", "2px")
    });
    //套餐边框变色效果结束
    //订单数量设置开始
    $("#content .a_add").click(function () {
        var j = $(".quantity").attr("value");
        var i = parseInt(j);
        i += 1;
        $(".quantity").attr("value", i);
    });
    $("#content .a_reduce").click(function () {
        var j = $(".quantity").attr("value");
        var i = parseInt(j);
        if (i - 1 < 1) {
            i = 1;
        } else {
            i = i - 1;
        }
        $(".quantity").attr("value", i);
    });
    //订单数量设置结束
    //立即抢购、加入购物车、收藏和分析等特效开始
    $("#content .component_purchase .chart_buy").hover(function () {
        $(this).css("background", "url(images/放上抢购.png) no-repeat");
    }, function () {
        $(this).css("background", "url(images/立即抢购.png) no-repeat");
    });
    $("#content .component_purchase .chart_share").hover(function () {
        $(this).css("color", "#2BB8AA");
    }, function () {
        $(this).css("color", "#666");
    });

    //    点击分享到弹出的qq、微博等特效开始
    var m = 0;
    $("#content .component_purchase .chart_share").click(function () {
        if (m == 0) {
            m = 1;
            $("#content .component_purchase .share_dialog").css("display", "block");
        } else {
            m = 0;
            $("#content .component_purchase .share_dialog").css("display", "none");
        }

    });
    //    点击分享到弹出的qq、微博等特效结束
    //点击加入购物车弹出窗口特效开始
    $("#content .component_purchase .chart_add").click(function () {
        $("#pop_section").css("display", "block");
    });
    //点击加入购物车弹出窗口特效结束
    //    弹出加入购物车成功窗口特效开始
    $("#pop_section .operate").hover(function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#008177,#2db3a6)")
    }, function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#2db3a6,#008177)")
    });

    $("#pop_section .operate").click(function () {
        $("#pop_section").css("display", "none")
    });

    $("#pop_section .result_chart").hover(function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#ff8901,#f76120)")
    }, function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#f76120,#ff8901)")
    });
    //    弹出加入购物车成功窗口特效结束

    
    //立即抢购、加入购物车、收藏和分析等特效结束
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