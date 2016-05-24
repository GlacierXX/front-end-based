/**
 * Created by Glacier on 16/4/14.
 */
$(function () {
    setInterval(function () {
        var _first = $(".bg li:first").hasClass("left");
        if (_first) {
            $(".bg li").removeClass("left-m").addClass("right-m");
            $(".bg li:last-child").attr("class", "").addClass("right");
            $(".bg li:first-child").removeClass("left");
        } else {
            $(".bg li").removeClass("right-m").addClass("left-m");
            $(".bg li:first-child").attr("class", "").addClass("left");
            $(".bg li:last-child").removeClass("right");
        }
    }, 3000);
});