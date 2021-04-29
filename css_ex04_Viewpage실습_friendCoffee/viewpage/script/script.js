$(function(){
    $("button#calcBtn").click(function(){
        var salePrice = 16000;
        var grinding = parseInt($("#grinding").val());
        var cnt = parseInt($("#cnt").val());

        var res = salePrice*cnt + grinding;
        $("#totalPrice").text(res);
    });
});
