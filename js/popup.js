$(".part2_popclose").click(function() {
    $('.part2_pop').fadeOut(100);
});
$(".part2_popclose").click(function() {
    $('.menu_data-pop').css("opacity", 1);
});
$(".to_H_introduction").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".to_H_introduction").click(function() {
    $('.menu_data-pop').css("opacity", 0);
});
$(".to_H_introduction").click(function() {
    $('.part2_pop').fadeIn(200);
});
$(".to_H_introduction").click(function() {
    $('#B_pop').fadeOut(0);
});
$(".to_H_introduction").click(function() {
    $('#G_pop').fadeOut(0);
});
$(".to_B_introduction").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".to_B_introduction").click(function() {
    $('.menu_data-pop').css("opacity", 0);
});
$(".to_B_introduction").click(function() {
    $('.part2_pop').fadeIn(200);
});
$(".to_B_introduction").click(function() {
    $('#H_pop').fadeOut(0);
});
$(".to_B_introduction").click(function() {
    $('#G_pop').fadeOut(0);
});
$(".to_G_introduction").click(function() {
    $("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".to_G_introduction").click(function() {
    $('.menu_data-pop').css("opacity", 0);
});
$(".to_G_introduction").click(function() {
    $('.part2_pop').fadeIn(200);
});
$(".to_G_introduction").click(function() {
    $('#B_pop').fadeOut(0);
});
$(".to_G_introduction").click(function() {
    $('#H_pop').fadeOut(0);
});
$(".close").click(function() {
    $('.shot_click').fadeOut(100);
});
$(".L_shot1").click(function() {
    $('.shot_click').fadeIn(100);
    $('.L_shot_click1').fadeIn(100);
    $('.L_shot_click2').fadeOut(100);
    $('.L_shot_click3').fadeOut(100);
    $('.R_shot_click2').fadeOut(100);
    $('.R_shot_click1').fadeOut(100);
    $('.R_shot_click3').fadeOut(100);
});
$(".L_shot2").click(function() {
    $('.shot_click').fadeIn(100);
    $('.L_shot_click2').fadeIn(100);
    $('.L_shot_click1').fadeOut(100);
    $('.L_shot_click3').fadeOut(100);
    $('.R_shot_click2').fadeOut(100);
    $('.R_shot_click1').fadeOut(100);
    $('.R_shot_click3').fadeOut(100);
});
$(".L_shot3").click(function() {
    $('.shot_click').fadeIn(100);
    $('.L_shot_click3').fadeIn(100);
    $('.L_shot_click2').fadeOut(100);
    $('.L_shot_click1').fadeOut(100);
    $('.R_shot_click2').fadeOut(100);
    $('.R_shot_click1').fadeOut(100);
    $('.R_shot_click3').fadeOut(100);
});
$(".R_shot1").click(function() {
    $('.shot_click').fadeIn(100);
    $('.R_shot_click1').fadeIn(100);
    $('.R_shot_click2').fadeOut(100);
    $('.R_shot_click3').fadeOut(100);
    $('.L_shot_click1').fadeOut(100);
    $('.L_shot_click3').fadeOut(100);
    $('.L_shot_click2').fadeOut(100);
});
$(".R_shot2").click(function() {
    $('.shot_click').fadeIn(100);
    $('.R_shot_click2').fadeIn(100);
    $('.R_shot_click1').fadeOut(100);
    $('.R_shot_click3').fadeOut(100);
    $('.L_shot_click1').fadeOut(100);
    $('.L_shot_click3').fadeOut(100);
    $('.L_shot_click2').fadeOut(100);
});
$(".R_shot3").click(function() {
    $('.shot_click').fadeIn(100);
    $('.R_shot_click3').fadeIn(100);
    $('.R_shot_click2').fadeOut(100);
    $('.R_shot_click1').fadeOut(100);
    $('.L_shot_click1').fadeOut(100);
    $('.L_shot_click3').fadeOut(100);
    $('.L_shot_click2').fadeOut(100);
});