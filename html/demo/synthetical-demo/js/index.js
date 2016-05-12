/**
 * Created by Glacier on 16/4/14.
 */
$(function () {
    var _s = sliderStart();
    $(".sliderControl i").hover(
        function () {
            clearInterval(_s);
            var _index = $(this).index();
            $(".slider li").removeClass("curr").eq(_index).addClass("curr");
            $(".sliderControl i").removeClass("curr").eq(_index).addClass("curr");
        },
        function () {
            _s = sliderStart();
        }
    );

    var totalP = $(".recommendList ul").length;
    var commW = $(".recommendContainer").width();
    var totalW = totalP * commW;
    var currP = 1;
    $(".recommendList").css("width", totalW + "px");
    $(".pre").on("click", function () {
        if (currP > 1) {
            $(".recommendList").css("left", commW * (currP - 2) + "px");
            currP --;
        }
    });
    $(".next").on("click", function () {
        if (currP < totalP) {
            $(".recommendList").css("left", -commW * currP + "px");
            currP ++;
        }
    });
});
function sliderStart () {
    var _total = $(".slider li").length;
    return setInterval(function () {
        var _index = $(".slider li.curr").index();
        if (_index < _total - 1) {
            _index ++;
        } else {
            _index = 0;
        }
        $(".slider li").removeClass("curr").eq(_index).addClass("curr");
        $(".sliderControl i").removeClass("curr").eq(_index).addClass("curr");
    }, 5000);
}