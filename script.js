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
$("a.scrollto").click(function () {
    let elementClick = $(this).attr("href")
    let destination = $(elementClick).offset().top - 110;
    $("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
    }, 1100);
    return false;
});
var check = true;
$("#menuOpen").click(function () {
    console.log("LLL");
    $(".bottomHeader, .containerHeadButton, header h1").slideToggle();
    $(".menu").slideToggle();
    if (check) {
        $(".burgerMenuDeckstop img").attr("src", "/floristry/pictures/closeMenuDeck.svg");
        check = !check;
    } else {
        $(".burgerMenuDeckstop img").attr("src", "/floristry/pictures/burgerMenuDeckstop.svg");
        check = !check;
    }
});

function order() {
    $(".darkwindow").css("display", "block");
    $("html").css("overflow", "hidden");
    $(".darkwindow").css("top", window.pageYOffset + "px");

}

function closeOrder() {
    $(".containerOfP").css("display", "block");
    $(".orderInput").css("display", "flex");
    $(".waitCall").css("display", "none");
    $(".darkwindow").css("display", "none");
    $("html").css("overflow", "visible");
    let a = $(".text");
    a[0].value = "";
    a = $(".tel");
    a[0].value = "";
}

function wait() {
    $(".containerOfP, .orderInput").slideUp();
    setTimeout(function () {
        $(".waitCall").slideToggle();
    }, 100);
}