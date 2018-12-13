var a_tm = 0;
setInterval(function() {
    if (a_tm % 60 == 0) {
        $.post("/exam_xuexi_online.php", { cmd: "xuexi_online" }, function(n) {
            n = JSON.parse(n);
            $(".block-login .explanation li:first").html(
                "<a class='changePassword loginCommonBtn'>最近一次发送请求:" +
                    n.shichang +
                    "</a>"
            );
            if (-1 != n.shichang.indexOf("时")) alert("挂完了");
        });
    } else {
        $(".block-login .explanation li:eq(1)").html(
            "<a class='changePassword loginCommonBtn'>挂题库时长:" +
                a_tm +
                "</a>"
        );
        a_tm++;
    }
}, 1000);
