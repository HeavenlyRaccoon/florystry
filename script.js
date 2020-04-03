'use strict'
console.log("LOL2");
$(".facebookIcon").hover(function () {
    console.log("LOL");
    $(this).attr("src", "/floristry/pictures/facebookIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/facebookIcon.svg");
});
$(".instagramIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/instagramIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/instagramIcon.svg");
});
$(".whatsappIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/whatsupIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/whatsupIcon.svg");
});
$(".vkIcon").hover(function () {
    $(this).attr("src", "/floristry/pictures/vkIconNeg.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/vkIcon.svg");
});
$(".headerMouse").hover(function () {
    $(this).attr("src", "/floristry/pictures/headerMouse2.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/headerMouse.svg");
});
$(".whatchCatalog").hover(function () {
    $(this).attr("src", "/floristry/pictures/whatchCatalog2.svg");
}, function () {
    $(this).attr("src", "/floristry/pictures/whatchCatalog.svg");
});
