/**
 * Created by jrexi on 2016/9/26.
 */
$(function () {
    // 接收传来的title和price值，显示不同的数据 开始
    //url 就是传过来的title和price值

    var src = window.location.href;

    src = decodeURIComponent(src);
    var I = src.substr(src.indexOf("?") + 7).length;
    var T = src.indexOf("?");
    //alert(src);
    if (0 >= T) return "";
    if (I == src.length) return -1;
    var url = src.substr(src.indexOf("?") + 7);//url为?title=【13店通用】鹭岛面包坊&price=17.9


    var arr = url.split("&");

    var title = arr[0];//分离出title，剩下的都是 “变量=数据” 格式
    $("#shop_title").html(title);

    var price = arr[1].substr(6, arr[1].length);//从price=17.9这里面截取出17.9，从第6个数字

    $("#total1").html(price);
    $("#total2").html(price);
    $("#total3").html(price);

    // 接收上个html界面传来的值，显示不同的数据 结束


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
    //订单数量设置开始
    $("#content .a_add").click(function () {
        var j = $(".quantity").attr("value");
        var i = parseInt(j);
        i += 1;

        $(".quantity").attr("value", i);
        var m = $("#content #total1").text();
        $("#content #total2").text((i * m).toFixed(2));
        $("#content #total3").text((i * m).toFixed(2));

    })
    $("#content .a_reduce").click(function () {
        var j = $(".quantity").attr("value");
        var i = parseInt(j);
        if (i - 1 < 1) {
            i = 1;
        } else {
            i = i - 1;
        }
        $(".quantity").attr("value", i);
        var m = $("#content #total1").text();
        $("#content #total2").text((i * m).toFixed(2));
        $("#content #total3").text((i * m).toFixed(2));
    })
    //订单数量设置结束
    //提交按钮开始
    // $(".form_submit").click(function () {
    //     $(".login_section").css("display",'block');
    //     $(".login_section").animate({opacity:'1'},1000);
    // });
    //    提交按钮结束
    //    窗口部分特效开始
    $(".login_section .head .close").hover(function () {
        $(this).css("background", "url(images/关闭按钮4.png) no-repeat");
    }, function () {
        $(this).css("background", "url(images/关闭按钮3.png) no-repeat");
    });
    $(".login_section .head .close").click(function () {
        $(".login_section").css("opacity", "0");
    })
    //    窗口部分特效结束

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



    // 提交按钮特效
    $(".form_submit .btn_submit").click(function () {
        //alert("请您");
        // 实现 点击提交订单，只有登陆才能下订单
        if ($.cookie("user") != null) {
            var commodityPrice = $("#total3").html();
            // alert(commodityPrice);
            var url = "payment.html?title=" + title + "&price=" + commodityPrice;

            $.ajax({
                url: 'php/submitorder.php',
                type: 'post',
                dataType: 'text',
                data: 
                {
                    title:title,
                    price:commodityPrice,
                    username:$.cookie("user")
                },
                success: function (data) {
                 
                    if (data == 1) {
                         
                        window.open(url, "_self");
                    } else {
                        alert("sssssssss");
                    }

                },
                error: function (e) {
                    alert(e);
                }
            });


        }
        else {
            alert("请您登陆后提交订单!");
        }

    });
});
