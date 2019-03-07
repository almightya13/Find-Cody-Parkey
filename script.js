$(".final-clue").hide();

$(".danger").hide();

$(".cody").click(function() {
    $(".kicker").toggle();
});
$(".kicker").click(function() {
    $(".offense").show();
});
$(".last-down").click(function() {
    $(".getting-ready").fadeIn();
    $(".final-clue").show();
});
$(".final-clue").click(function() {
    $(".missed-kick").show();
    $(".danger").show();
});
$(".danger").click(function() {
    $(".locker-room").show();

});
