/**
 * Created by jresu on 2016/10/14.
 */
$(function () {

    // 接收上个html界面传来的值，显示不同的数据 开始
    //url 就是传过来的id值

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
    // alert(title);
    $("#content .order_name").html(title);

    var price = arr[1].substr(6, arr[1].length);//从price=17.9这里面截取出17.9，从第6个数字

    $("#content .payable .pay_price").html(price);
    $("#content #payoff .payment_amount span").html(price);



    // 接收上个html界面传来的值，显示不同的数据 结束


    // 选择支付方式部分开始
    $("#content .payment_type .payment_tap1").click(function () {

        $(this).addClass("tap2");
        $(this).removeClass("payment_tap1");

        $("#a2").removeClass("tap2");
        $("#a2").addClass("tap1");
        $("#content #list1").css("display", "block");
        $("#content #list2").css("display", "none");
    });

    $("#content .payment_type .payment_tap2").click(function () {

        $(this).removeClass("payment_tap2");
        $(this).addClass("tap2");

        $("#a1").removeClass("payment_tap1");
        $("#a1").removeClass("tap2");
        $("#a1").addClass("tap1");

        $("#content #list2").css("display", "block");
        $("#content #list1").css("display", "none");
    });
    //选择支付方式部分结束

    //意见反馈与帮助部分开始
    $("#content .payment_tips .payment_droopdown").hover(function () {
        $(this).css("color", "#2bb8aa");
    }, function () {
        $(this).css("color", "#666666");
    });
    $("#content .payment_tips .tips_back").hover(function () {
        $(this).css("color", "#2bb8aa");
        $(this).css("background-image", "url(images/向下绿.png)");
        $("#content .payment_collapse").css("display", "block");

    }, function () {
        $(this).css("color", "#666666");
        $(this).css("background-image", "url(images/向下.png)");
        $("#content .payment_collapse").css("display", "none");
    });
    $("#content .payment_collapse").hover(function () {
        $(this).css("display", "block");
    }, function () {
        $(this).css("display", "none");
    });

    //意见反馈与帮助部分结束
    //    点击付款按钮开始
    $("#content #payoff .btn").hover(function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#29b0a2,#2fc9b9)");
    }, function () {
        $(this).css("background-image", "-webkit-linear-gradient(top,#2fc9b9,#29b0a2)");
    });
    //    点击付款按钮结束



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


    $("#content #payoff .payment_submit .btn").click(function(){
         //alert("请您");
        // 实现 点击提交订单，只有登陆才能下订单
        if ($.cookie("user") != null) {
            var commodityPrice = $("#total3").html();
            // alert(commodityPrice);
            var url = "orders.html?title=" + title + "&price=" + price;

            $.ajax({
                url: 'php/payment.php',
                type: 'post',
                dataType: 'text',
                data: 
                {
                    title:title,
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